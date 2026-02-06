// // @ts-chack
// let button=document.querySelector(".button")
// let input=document.querySelector(".input")

// let step = 0;
// let age, name;

// button.addEventListener("click",()=>{
//     const value=input.value.trim()
//     if(!value) return alert("გთხოვთ ჩაწეროთ ინფორმაცია");
// if(step===0){
//     age= Number(value)
//     input.value=""
//     input.placeholder="რა გქვიათ?"
//     step++;
// }
//     else if (step === 1) {
//     name = value;                 // მეორე კითხვაზე მიღებული პასუხი - სახელი
//     alert(`გამარჯობა, ${name}! თქვენი დაბადების წელი არის ${2025 - age}`);

//     // reset
//     input.value = "";
//     input.placeholder = "რამდენი წლის ხარ?";
//     step = 0;
//   }
// })

// let masiv=[]
// if(Array.isArray(masiv)){
//     alert("es ais masivi")
// }else {
//     alert("es ar rais masiivi")
// }

// გაკ N=2 ის მე 3 დავალება
// let  button=document.querySelector(".button")
// button.addEventListener("click",()=>{
//   let input=document.querySelector(".input").value.trim()

//     let arr = input.split("")
//   let mas = arr[arr.length - 1];
//   alert(mas);

// })
// აქამდე ბოლო მასივის გამტანა მე კიდევ უფრო დავხვეწე

// let object={
//     name:"luka",
//     surmane:"taba",
//     age:"21",
//     hobies:{
//         footbol:"yess",
//         basketbol:"yess",
//         boxsing:"yess",
//         mma:"yees",
//         shoting:"NO",
//     },
//     items:{
//         bols:"yes",
//         leptop:"yes",
//         kettlft:"yes",
//         snoubord:"Noo",
//         basket_bol:"Noo"
//     }

// }
// object.hobies.basketbol="No l dont like"
// object.age="33"
// Object.assign(object.items,{short:"l havn't",Tshirt:"NO l haven't"})

// object.hobies=Object.assign(
// {karate:"l don't know",tailandBox:"l don't know"},
//   object.hobies
// );
// object.name="kakakakakakak"
// delete object.name
// object = { name: "Lukka", ...object };
// object.axaldamaTebuliITEMS = object.items; // ვქმნით ახალს ძველი მნიშვნელობით
// delete object.items;
//  console.log(object)

// const button = document.querySelector(".button");
// button.addEventListener("click", fleshFUnc);

// function fleshFUnc() {
//   let input = document.querySelector(".input").value.trim();
//   Number(input);
//   let result = document.querySelector(".result");
//   if (isNaN(input)) {
//     result.innerHTML = "შეიყვანოთ რიცხვი!";
//   }
//   else if((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0){
//         result.innerHTML = `${input} ეს ნაკიანია!`;
//         result.style.color = "red";
//   }
//   else {
//     result.innerHTML = `${input} ეს არ არის ნაკიანი! `;
//     result.style.color = "green";

//   }
// }

// თუ (4-ზე იყოფა და 100-ზე არა) → ნაკიანია
// ან თუ (400-ზე იყოფა) → მაინც ნაკიანია
// სხვა ყველა შემთხვევაში → არ არის ნაკიანი

// let Number1 = Number(prompt("შეიყვანეთ პირველი რიცხვები!"));
// let simboLs = prompt("შეიყვანეთ სიმბოლოები! + - * /");
// let Number2 = Number(prompt("შეიყვანეთ მეორე რიცხვები!"));
// if (isNaN(Number1) || isNaN(Number2)) {
//   alert("შეიყვანეთ მხოლოდ რიცხვი!");
// }  else if (simboLs === "+") {
//   alert(Number1 + Number2);
// } else if (simboLs === "-") {
//   alert(Number1 - Number2);
// } else if (simboLs === "*") {
//   alert(Number1 * Number2);
// } else if (simboLs === "/") {
//   alert(Number1 / Number2);
// }else{
//     alert("მიუღებელია!")
// }

// class Shape{
//   constructor(name){
//     this.name=name
//   }
//   area(){
//     return "Area calculation not implemented for generic shape.";
//   }
// }
// const mySHap= new Shape("shape")
// class Circle extends Shape{
//   constructor(name,radius){
//     super(name)
//     this.radius=radius
//   }
// area(){
//   return Math.PI *this.radius*this.radius
// }
// }
// const NameSHape= new Circle("Circle",5)

// class Rectangle extends Shape{
//   constructor(name, width, height){
//     super(name)
//     this.width=width
//     this.height=height
//   }
//   area(){
//      return this.width*this.height
//   }
// }
// const WidthHeigth=new Rectangle("Rectangle",100,50)

// class Triangle extends Shape{
//   constructor(name,base,height){
//     super(name)
//     this.base=base
//     this.height=height
//   }
//   area(){
//     return this.base*this.height/2
//   }
// }
// const Trigel=new Triangle("Triggel" ,12,3)

// console.log(NameSHape.area())
// console.log(WidthHeigth.area())
// console.log(Trigel.area())
// console.log(mySHap.area())

// document.addEventListener("DOMContentLoaded",()=>{
//   let button=document.querySelector(".button")
//   let imgliv=document.getElementById("imgliv")
//   let counter=true

//   button.addEventListener("click",()=>{
//     if(counter){
//     imgliv.style.width="300px"
//     imgliv.style.height="200px"
//     }
//     else{
//           imgliv.style.width="700px"
//           imgliv.style.height="500px"
//     }
//        counter=!counter

//   })
// })

// ღლაკებზე მანიპულაცია{
// document.addEventListener("DOMContentLoaded", () => {
//   let button3 = document.getElementById("button3");
//   let pn3 = document.getElementById("pn3");
//   let cons = true;
//   button3.addEventListener("click", () => {
//     if (cons) {
//       pn3.style.color = "red";
//       pn3.style.backgroundColor = "rebeccapurple";
//       pn3.style.fontSize = "30px";
//     } else {
//       pn3.style.color = "";
//       pn3.style.backgroundColor = "";
//       pn3.style.fontSize = "";
//     }
//     cons = !cons;
//   });
//   let button2 = document.getElementById("button2");
//   let pn2 = document.getElementById("pn2");
//   let cons2 = 0;

//   button2.addEventListener("click", () => {
//     if (cons2 === 0) {
//       pn2.style.color = "green";
//       pn2.style.fontSize = "30px";
//       pn2.style.backgroundColor = "rgb(47, 255, 168)";
//       cons2 = 1;
//     } else {
//       pn2.style.color = "";
//       pn2.style.fontSize = "";
//       pn2.style.backgroundColor = "";
//       cons2 = 0;
//     }
//   });

//   let button1 = document.getElementById("button1");
//   let pn1 = document.getElementById("pn1");
//   let cons3 = true;
//   button1.addEventListener("click", () => {
//     if (cons3) {
//       pn1.style.color = "greenyellow";
//       pn1.style.backgroundColor = "green";
//       pn1.style.fontSize = "30px";
//     } else {
//       pn1.style.color = "";
//       pn1.style.backgroundColor = "";
//       pn1.style.fontSize = "";
//     }
//     cons3 = !cons3;
//   });
// });

// }

// let button1=document.getElementById("button1")
// let inputveL=document.getElementById("input")

// button1.addEventListener("click",()=>{
//   let value=inputveL.value.trim()

//   if(value === "luka"){
//     inputveL.style.backgroundColor="green"
//   }else{
//         inputveL.style.backgroundColor="red"

//   }

// })
// {
//   კოდი თუ როგორ უნდა მოხდეს მანიპულაცია სხვადასხვა კლასზე თუ აიდზე როდეს გვაქვს რამოდენმე კლასი ერთ კლაცზე
//   აქ შემოვლა ხდეაბა ციკლით
// let special = document.getElementById("special");
// special.style.backgroundColor = "yellow";
// special.style.display = "inline";
// let stop = document.querySelectorAll(".stop");
// let alert = document.querySelectorAll(".alert");
// for (let i = 0; i < alert.length; i++) {
//   alert[i].style.color = "grey";
//   alert[i].style.fontSize = "11px";
//   alert[i].style.border = "solid 1px";

//   if (alert[i].classList.contains("stop")) {
//     alert[i].style.color = "red";
//   }
//   if(alert[i].classList.contains("go")){
//        alert[i].style.backgroundColor = "green";
//         alert[i].style.color = "white";

//   }
// }

// }
// const latitute = 41.72; // Tbilisi მაგალითად
// const longitute = 44.78;
// fetch(
// `https://api.coinbase.com/v2/currencies`
// )
//   .then((res) => res.json())
//   .then((data) => {

//     data.data.forEach(element => {
//       element.id="Ne"
//       element.name="biutiful"
//       element.min_size="mariami"

//     });

//     console.log(data)
//   })
//   .catch((err) => {
//     result.innerHTML = "Error loading data ❌";
//     console.error(err);
//   });






// fetch(`https://api.coinlore.net/api/tickers/`)
// .then(res=>res.json())
// .then(data=>{
// data.data[0].mma="boxSing"
// let firstdata=data.data[0]
//  const keys = Object.keys(firstdata);
//  const values=Object.values(firstdata)
//  let result=document.getElementById("result")

// for(let key of keys){
//     if(key.length > 3){
//         result.innerHTML+=`<span style="color:red">${key}</span><br>`
       
//     }else{
//     console.log("er")
 
//     }
// }

 


//     console.log(data.data[0])

// })

console.log("lika")


