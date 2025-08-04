let button = document.getElementById("button");
button.addEventListener("click", regerfuNc);
let regex = /^[a-zA-Z]+$/;
function regerfuNc() {
  let input = document.getElementById("input").value.trim();

  let inputsText = document.getElementById("inputsText");
  if (regex.test(input)) {
inputsText.innerHTML = '<p style="font-family: ALK Tall Nusxuri;font-size: 30px; font-style:italic; color:white;text-shadow:  2px 2px 3px red;box-shadow:2px 3px 4px green;">მიღებულია!</p>';
  } else {
    inputsText.innerHTML = `<p style="font-family: ALK Rounded Mtav Med; font-size: 30px; font-style:italic; color:orange;text-shadow:  3px 2px 4px red;box-shadow:2px 3px 4px black;">გთხივთ შეიყვანოთ მხოლოდ ასობგერები</p>`;
  }
}
