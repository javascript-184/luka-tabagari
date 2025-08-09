let button = document.getElementById("button");
button.addEventListener("click", fostafuncshen);
const cities = [
  { code: "0000", name: "Tbilisi", color: "blue", className: "pirveli" },
  { code: "1111", name: "Qutaisi", color: "orange", className: "meroe" },
  { code: "3333", name: "Zestafoni", color: "purple", className: "mesame" },
  { code: "4433", name: "Guria", color: "teal", className: "meotxe" },
];

function fostafuncshen() {
  let textand = document.getElementById("textand");
  let input = document.getElementById("input").value.trim();
  const found = cities.find((cit) => cit.code === input);
    textand.innerHTML = "";
    let p = document.createElement("p")

  if (!/^\d+$/.test(input)) {
 p.textContent = "უნდა შეიცავდეს რიცხვს";
    p.style.color = "red";
  } else if (input.length !== 4) {
    p.textContent = "შეიყვანეთ მხოლოდ 4 რიცხვი";
    p.style.color = "red";
    p.style.textShadow = "2px 2px 3px black";
  } else if (found) {
  p.textContent = found.name;
    p.style.color = found.color;
    p.classList.add(found.className)  } 
    else {
    p.textContent = "მიღებულია";
    p.style.color = "green";
    p.style.textShadow = "2px 3px 2px red";
  }
  p.style.fontWeight = "bold";
  p.style.fontSize = "20px";

  textand.appendChild(p);
}
