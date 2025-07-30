let button = document.getElementById("button");

button.addEventListener("click", funcshenbig);
function funcshenbig() {
  let inputt = document.getElementById("input");
  let inputvalue = inputt.value.trim();

  let regex = /^(?=[a-zA-Z]{4})(?=.*[A-Z])[a-zA-Z]{4}\d{2,4}[!@#$%^&*][a-zA-Z0-9]+$/

  if(!/^[A-Z]/.test(inputvalue)){
     inputt.value = "";
    inputt.placeholder = "შეიყვანეთ მინიმუმ 4 ასობგერა!"
    inputt.classList.add("placeholder-error")  
  }
  else if (!/[a-z]{3,}/.test(inputvalue)) {
    inputt.value = "";
    inputt.placeholder = "დაიწყეთ დიდი ასოთი!"
    inputt.classList.add("placeholder-error")  
  } 
 else if (!/[!@#$%^&*]/.test(inputvalue)) {
    inputt.value = "";
    inputt.placeholder = "დაიმატეთ სპეციალური სიმბოლო!";
    inputt.classList.add("placeholder-error");
  }

  else if (!/[a-zA-Z0-9]$/.test(inputvalue)) {
    inputt.value = "";
    inputt.placeholder = "დასასრული უნდა შეიცავდეს ასოს ან რიცხვს!";
    inputt.classList.add("placeholder-error");
  } else if (!regex.test(inputvalue)) {
    inputt.value = "";
    inputt.placeholder = "თანმიმდევრობა არასწორია!";
    inputt.classList.add("placeholder-error");
  } else {
    inputt.value = "";
    inputt.placeholder = "✅ ფორმატი სწორია!";
    inputt.classList.remove("placeholder-error");
    inputt.classList.add("plentch");
  }
}












  // let regex = /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/
  // let regex=/^[a-z A-Z 0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ -goood regex mail
