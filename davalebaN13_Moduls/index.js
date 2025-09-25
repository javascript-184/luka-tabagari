document.querySelectorAll(".options").forEach((optionBlock) => {
  const questionBlock = optionBlock.closest(".question-block");
  const correctValue = optionBlock.dataset.correct;
  const resultDisplay = questionBlock.querySelector(".resolte");

  optionBlock.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () => {
      const selected = option.dataset.value;
      optionBlock.querySelectorAll(".option").forEach((opt) => {
        opt.classList.remove("correct", "incorrect");
      });

      if (selected === correctValue) {
        option.classList.add("correct");
        resultDisplay.textContent = "სწორია!🎉";
        resultDisplay.style.color = "green";
        resultDisplay.style.textShadow = "2px 2px 28px rgb(3, 255, 192)";
        resultDisplay.style.fontSize = "30px";
      } else {
        option.classList.add("incorrect");
        resultDisplay.textContent = "არასწორია! ❌";
        resultDisplay.style.color = "red";
        resultDisplay.style.textShadow = "2px 2px 26px rgb(255, 166, 0)";
        resultDisplay.style.fontSize = "30px";
      }
    });
  });
});











// იმპორტირება ფაილის აქედან!!
// import { biGbox, funFuncShen } from "./import.js";
// აქამდეე!!!

