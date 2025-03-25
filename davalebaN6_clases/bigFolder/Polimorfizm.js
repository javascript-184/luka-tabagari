class Shape {
    constructor(name) {
        this.name = name
    }
    area() {
        return "Area calculation not implemented for generic shape."
    }

}

const nameSahpe = new Shape("shape")
nameSahpe.area()
class Circle extends Shape {
    constructor(name, radius) {
        super(name)
        this.radius = radius

    }
    area() {
        return Math.PI * this.radius * this.radius

    }

}
let radius = parseFloat(prompt("შეიყვანეთ რადიუსი?!"));
radius = parseFloat(prompt("შეიყვანეთ რადიუსი?!"));
const circle = new Circle(radius, radius);
alert("რადიუსის ფართობი!" + circle.area());


class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height; //ორჯერ იმიტომ მეორდება this.height=height; რომ Rectangle აღიქვამს თავისებურად
        //ანუ თავისებურად ამრავლებს უმატებს და ასე შემდეგ რადგან ქვემოთაც არ წამოეღო Rectangle
        //height;-თი ამიტომაც მას ცალკე მოაქვს:!
    }
    area() {
        return this.width * this.height;

    }

}
let width = parseFloat(prompt("შეიყვანეთ სიგანე:“"))
let height = parseFloat(prompt("შეიყვანეთ სიმაღლე:!"))     // heightt აღარ არის საჭირო, რადგან height ცვლადი უკვე არის
let Rectanglee = new Rectangle("Rectangle", width, height)
alert("მართკუთხედის ფართობი" + Rectanglee.area())     //  შესაბამისად იგივე მნიშვნელობა ექნება მე მეგონა რომ თუ 2 ერთნაირ
//ცვლადს გამოვიყენებდი Rectangle აქ და Triangle მაშინ მონაცემები
//ერთიდა იგივე ექნებოდა ვგულისხმობ promt ში არსებულ ცვლადს
//height თუმცა ეს მხოლოდ ცვლადია და
// გადაეცემა Triangle და Rectangle კლასებს. განსხვავებულად 
//  რადგან Rectangle ამას თავისის heigh აქვს
//  ხოლო  Triangle ამას თავისი this.height არის ორივეგან და თავიანთ 
//   ამან დამაბნია არადა ცვლადი რა იქნება მნიშვნელობა არ აქვს 
//მთავარია შიგნითა მონაცემები გადავცეთ ზუსტად:!


class Triangle extends Shape {
    constructor(name, height, base) {
        super(name, height)
        this.height = height //this.height=height აქ იმიტომ მოაქვს რომ აქ ვცვლით ანი ეს რომ იყოს ჩვეულებრივი ცვლადი
        this.base = base     //რათქა=მაუნდა მხოლოდ super ით იქნებოდა თუმცა ეს რომ მხოლოდ super-ით იყოს როგროც
        //ზემოთ წამოვიდა ჩათვალე იგივე მონაცემებით წამოვიდოდა სწორედ ამიტომ იწერება კდიევ
        //this.height=height რადგან Triangle არა Rectangle არამდე თავისი მონაცემებიანი height
        //გამოიყენოს ასე რომ ვთქვათ ახალი height რომელიც მხოლოდ  Triangle ზე იქნება მორგებული:!
        //სწორედ ამიტომ არის აქ this.height=height  ესე თავიდან გაკეთებული რადგან ის ზემოთ რაც
        //იყო ისე არ ჩამოვიდეს ეს რომ იყოს ცვლადი რომელიც არ იცვლება  და არ საჭიროებს მაშინ 
        //ჩვეულებრივად წამოვიდოდა მაგრამ რადგან აქ Triangle  height ვზომავთ ამიტომაც არის საჭირო
        //რომ მას თავისი ახალი height ქონდეს:! 

    }
    area() {
        return (this.base * this.height) / 2
    }
}
let base = parseFloat(prompt("შეიყვანე სამკუთხედის ფუძე:"));
height = parseFloat(prompt("შეიყვანე სამკუთხედის სიმაღლე:"));
let trigel = new Triangle("Trigel", base, height)
alert("სამკუთხედის ფართობი: " + trigel.area())// area() იმიტომ წერია რპმ იცოდეს არეას არეში  Trigel ის არეში
//რა მონაცემებიც არის გადაცემული იმისდა მიხედვით გააკეთოს

let shapeName = new Shape("Circle");
alert(shapeName.area())


console.log(2)