
export const setFonts = () => {
  // Get and set the web safe fonts
  const fontBox = document.querySelector("ul.fonts");
  let safeFonts;
  fetch("/fonts/web-safe-fonts.json")
    .then(res => res.json())
    .then(data => {
      let stack = [];
      for (let x in data) {
        data[x].stack.forEach(i => stack.push(i));
      }
      safeFonts = new Set(stack);
      // console.log(safeFonts);
      safeFonts.forEach(i => {
        fontBox.innerHTML += `
          <li><button style='font-family: ${i} !important' class='font-item'>${i.replace(/"/g, "")}</button></li>
          `;
      })
      const fonts = document.querySelectorAll(".font-item");
      const fontInput = document.querySelector("#fontOptions input");
      const caret = document.querySelector("button.caret");
      // console.log(fontInput)
      fonts.forEach(i => {
        i.addEventListener("click", (e) => {
          console.log(e.target.innerText);
          document.execCommand("fontName", false, e.target.innerText);
          fontInput.value = e.target.innerText;
          fontInput.style.fontFamily = e.target.style["font-family"];
          // fontBox.style.height = "0px";
          caret.click();
        })
      })
    })
    .catch(err => console.log(err));
};

export const setFontSizes = () => {
  const sizes = [11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50];
  const fontSizeBox = document.querySelector(".fontSizes");
  // console.log(fontSizeBox);
  sizes.forEach(i => {
    fontSizeBox.innerHTML += `
      <li><button>${i}</button></li>
    `;
  })
}