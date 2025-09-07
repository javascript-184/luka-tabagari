let marger = document.querySelector(".marger");
let options = marger.querySelectorAll(".option");
const results = document.getElementById("results");

const correctAnswer = 4;
options.forEach((options) => {
  options.addEventListener("click", clickfuncShen);
});

function clickfuncShen(event) {
  const clickedOption = event.currentTarget;
  const dataElement = clickedOption.querySelector(".datacals");
  const answer = Number(dataElement.getAttribute("value"));
  document.querySelectorAll(".option").forEach(opt => {
    opt.style.backgroundColor = "rgb(235, 241, 241)";
  });

  if (answer === correctAnswer) {
    clickedOption.style.backgroundColor = "green";
    results.textContent = "სწორია ✅";
    results.style.color = "white";
    results.style.textShadow = "2px 2px 3px red";
    results.style.fontSize = "23px";
  } 
  else {
    clickedOption.style.backgroundColor = "red";
    results.textContent = `არასწორია ❌ სწორი პასუხი იყო: ${correctAnswer}`;
    results.style.color = "red";
    results.style.fontSize = "18px";


      document.querySelectorAll(".option").forEach(opt => {
      const correctData = opt.querySelector(".datacals");
      const val = Number(correctData.getAttribute("value"));
      if (val === correctAnswer) {
        opt.style.backgroundColor = "green";
      }
    });
  }
}

// // ვიღებთ კითხვას
// const questionText = document.querySelector(".kitxvan1").textContent;

// // ვპოულობთ მათემატიკურ ნაწილს ტექსტიდან (რეჯექსის გარეშე)
// let expression = "";
// const allowed = ["+", "-", "*", "/", " "];

// for (let i = 0; i < questionText.length; i++) {
//   const char = questionText[i];
//   if (!isNaN(char) || allowed.includes(char)) {
//     expression += char;
//   }
// }

// // გამოთვლა
// const correctAnswer = eval(expression.trim());

// // ვიღებთ ყველა პასუხს
// const options = document.querySelectorAll(".option");
// const resultsDiv = document.getElementById("results");

// // თითოეულზე ვამატებთ click ფუნქციას
// options.forEach(option => {
//   option.addEventListener("click", () => {
//     // reset ფერები
//     options.forEach(opt => {
//       opt.style.backgroundColor = "rgb(235, 241, 241)";
//     });

//     // ვიღებთ პასუხს value ატრიბუტიდან
//     const dataElement = option.querySelector(".datacals");
//     const answer = Number(dataElement.getAttribute("value"));

//     // ვადარებთ სწორ პასუხს
//     if (answer === correctAnswer) {
//       option.style.backgroundColor = "green";
//       resultsDiv.textContent = "სწორია ✅";
//       resultsDiv.style.color = "green";
//     } else {
//       option.style.backgroundColor = "red";
//       resultsDiv.textContent = `არასწორია ❌ სწორი პასუხი იყო: ${correctAnswer}`;
//       resultsDiv.style.color = "red";
//     }

//     resultsDiv.style.marginTop = "20px";
//     resultsDiv.style.fontSize = "20px";
//   });
// });
