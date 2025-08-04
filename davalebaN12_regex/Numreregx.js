let button = document.getElementById("button");
button.addEventListener("click", felshfun);
let textsdiv = document.getElementById("textsdiv");
function felshfun() {
  let input = document.getElementById("input").value.trim();
  if (!/^\d+$/.test(input)) {
    textsdiv.innerHTML = "<p>გთოვთ დაიწყოთ რიცხვებით</p>";
  } else if (!input.startsWith("5")) {
    textsdiv.innerHTML = "<p>დაიწყეთ 5-ით</p>";
  } else if (input.length !== 9) {
    textsdiv.innerHTML = "<p>შეიყვანეთ მაქსიმუმ 9 რიცხვი</p>";
  } else {
    textsdiv.innerHTML = "<p>ნომერი მითღებულია!</p>";
  }
}
