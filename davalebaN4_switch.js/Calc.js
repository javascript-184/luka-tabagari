
let calc = prompt("Please Enter Number!");
calc = Number(calc);

function factorialCalculator(number) {
  let result = 1;
  for (let x = 1; x <= number; x++) {
    result *= x; // გამრავლება x-სთან
  }
  alert(`Factorial  ${number} is ${result}`);
}

factorialCalculator(calc);

// for(let x=0; x<=9; x=x+1){


