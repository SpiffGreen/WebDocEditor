import { setFonts, setFontSizes } from "./js/utils.js";

window.addEventListener("DOMContentLoaded", async () => {
  // Important vars
  const doc = document.getElementsByClassName("web-document")[0];
  const bBtn = document.getElementById("bold");
  const iBtn = document.getElementById("italic");
  const uBtn = document.getElementById("underline");
  const bgPicker = document.getElementById("bgPicker");
  const bgOption = document.getElementById("bgOption");
  const justifyBtn = document.getElementById("justify");
  const alignRightBtn = document.getElementById("align-right");
  const alignLeftBtn = document.getElementById("align-left");
  const alignCenterBtn = document.getElementById("align-center");

  // Other elements
  const caret1 = document.querySelectorAll("button.caret")[0];
  const caret2 = document.querySelectorAll("button.caret")[1];
  const fontBox = document.querySelector("ul.fonts");
  const sizeBox = document.querySelector("ul.fontSizes");
  let caret1Count = false;
  let caret2Count = false;
  caret1.addEventListener("click", e => {
    if(caret1Count) {
      e.target.style.transform = "scaleY(1)";
      caret1Count = false;
      fontBox.style.height = "0px";
    } else {
      e.target.style.transform = "scaleY(-1)";
      caret1Count = true;
      fontBox.style.height = "300px";
    }
  });

  caret2.addEventListener("click", e => {
    if(caret2Count) {
      e.target.style.transform = "scaleY(1)";
      caret2Count = false;
      sizeBox.style.height = "0px";
    } else {
      e.target.style.transform = "scaleY(-1)";
      caret2Count = true;
      sizeBox.style.height = "300px";
    }
  })
  
  // Focus the element
  doc.focus();

  justifyBtn.addEventListener("click", () => {
    document.execCommand("justifyFull", false, "");
    doc.focus();
  });

  alignRightBtn.addEventListener("click", () => {
    document.execCommand("justifyRight", false, "");
    doc.focus();
  });

  alignLeftBtn.addEventListener("click", () => {
    document.execCommand("justifyLeft", false, "");
    doc.focus();
  });

  alignCenterBtn.addEventListener("click", () => {
    document.execCommand("justifyCenter", false, "");
    doc.focus();
  });

  bBtn.addEventListener("click", () => {
    document.execCommand("bold", false);
    doc.focus();
  });

  iBtn.addEventListener("click", () => {
    document.execCommand("italic", false);
    doc.focus();
  });

  uBtn.addEventListener("click", () => {
    document.execCommand("underline", false);
    doc.focus();
  });

  const colorPicker = document.getElementById("colorPicker");
  const colorDisplay = document.getElementById("colorOption");
  colorPicker.addEventListener("change", (e) => {
    colorDisplay.style.backgroundColor = e.target.value;
    document.execCommand("foreColor", false, e.target.value);
    doc.focus();
  });

  bgPicker.addEventListener("change", (e) => {
    bgOption.style.backgroundColor = e.target.value;
    document.execCommand("hiliteColor", false, e.target.value);
    doc.focus();
  });

  // Get and set the web safe fonts
  setFonts();
  setFontSizes();

  // Set row-col numbers while typing
  $(".web-document").keydown(() => {
    let pos = $(".web-document").caret() + 1;
    let text = doc.innerText.slice(0, pos);
    let arr = text.split("\n");
    let row = arr.length - 1;
    let col = arr[arr.length - 1].length + 1;
    // console.log("Row: " + row + ", Col: " + col);
    $("#loc").html(() => `row: ${row}, col: ${col}`);
  });

  // Set the top and left position of the dropdown lists
  $(".fontSizes").css("top", ($("#sizeOptions").position().top + 25) + "px");
  $(".fontSizes").css("left", ($("#sizeOptions").position().left + 5) + "px");
  $(".fonts").css("top", ($("#fontOptions").position().top + 25) + "px");
  $(".fonts").css("left", ($("#fontOptions").position().left + 5) + "px");
});