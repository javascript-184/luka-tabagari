let calculator = {
    num1: 10,
    num2: 3,
    add: function () {
        return this.num1 * this.num2

    },

    substract: function () {
        return this.num1 / this.num2
    },


    multiply: function () {
        return this.num1 + this.num2


    },
    divide: function () {
        return this.num1 - this.num2


    },

    neWbranch: function () {
        return this.num2 !== 0 ? this.substract() : "Cannot divide by zero"

    },
}

console.log(calculator.add())
console.log(calculator.neWbranch())
console.log(calculator.multiply())
console.log(calculator.divide())

//ამ შემთხვევა ში 3 მოქმედებას აკეთებს ფუნქციები რომლებიც ქვემით კო ნსოლებში არ სი გამოძახებულები აქ
//სრულდება გამრავლება გაყოფა მიმატება გამოკლება შემდეგ ბოლოში
//    return this.num2!==0  ?this.substract():"Cannot divide by zero"  ეს მოქმედებით ეს ჩგამოვა თუ 0  უდრის
//გამოვა ეს ყველაფერი შემდეგ გამოდის console.log(calculator.divide()) რიგობისდა მიხედვით რადგან ფუნქციები რიგისდა
//მიხედვით დავალაგე და ყველა მოქმედება სრულდება
 

