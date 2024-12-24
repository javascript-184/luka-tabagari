// function NubberCvd(){
//     let numver=2
//     let jami=numver*numver
//     console.log(`that is eqcfReShen ${jami}`)  
// }
// NubberCvd()
//ამ შემთვევაში გვაქვს რიცხვის კვადრატი რადგან ეს ნიშნავს რომ როდესაც რიცხვი
//თავის თავზე  გამრავლებით მოგვცემს რაიმე რიცხვს მაგ: let numver=5 ამ შემთვევაში 5 ის კვადრატია 25
//რადფაბ 5 გამრავლებული 5 ზე არის 25
// მე 2 დავალება
//  პირველი მეთოდი
// function CelsiosorF(){
//     let celSius=2
//     let Formula=(celSius* 9/5) + 32
//     console.log(Formula)
// }
// CelsiosorF()

// მე-2 მეთოდი
// function CelsiosorF(){
//     let celSius=Number(promt("gtxovt Sheoyvanet ricxvi"))
//     if(isNaN(celSius)){
//         console.log("sheoyvanet ricxvi raTa gadakonvertorddes")
//     }else{
//         console.log(`${celSius * 9/5 + 32} konvertacia warmatebit dasrulda`)


//     }
// }
// CelsiosorF()

//aqamde!!!
//წლები ნაკიანი და არა ნაკიანი
// let yaRs=prompt("gtxpvT Sheiyvanot wlebi")
// console.log(Number(yaRs))
// if(isNaN(yaRs)){
//     console.log("plis enter Number")

// }else{
//     console.log("oKeY")
// }
// function BigYars(valueE){   
//  if(valueE%4===0&&valueE%400===0||valueE%100){
//     console.log(`it is NakiaNii   ${valueE}`)

//  }else{
//     console.log(`it is not NakiaNi ${valueE}`)

//  }
// }

// BigYars(yaRs)

//აქამდეე

// bolo davaleba

function maTResulT() {
    let frisTQue = prompt("Please enter the first number:");
    let oNliSIMbols = prompt("Please enter an operator: *, /, +, -");
    let SecoNdFun = prompt("Please enter the second number:");
    frisTQue = Number(frisTQue);
    SecoNdFun = Number(SecoNdFun);

    if(isNaN(frisTQue)||isNaN(SecoNdFun)){
        alert("plis enter NUMBERS!:")
    }
    let returni
    if(oNliSIMbols==="*"){
        returni=frisTQue*SecoNdFun
        alert(`${returni} accepted:`)
    }else if(oNliSIMbols==="/"){
        returni=frisTQue/SecoNdFun
        alert(`${returni} accepted:`)
    }
    else if(oNliSIMbols==="+"){
        returni=frisTQue+SecoNdFun
        alert(`${returni} accepted:`)
    }
    else if(oNliSIMbols==="-"){
        returni=frisTQue-SecoNdFun
        alert(`${returni} accepted:`)
    }else{
        alert("None of the above actions are described!")
    }
}
maTResulT()













// function calculator() {
//     let num1 = ("Enter tour namber")
//     if (isNaN(num1) === true) {
//         console.log("gtxovt sheouyvanpt ricxvi")
//     } else {
//         let activ = "sjeiyvane aqtivi"
//         let num2 = "sheiyvane meore ricxvi"
//         if (isNaN(num2)) {
//             console.log("gtxovt sheouyvanpt ricxvi")
//         } else {
//             num1 = Number(num1);
//             num2 = Number(num2);
//         }
//         if (activ === "+") {
//             console.log(num1 + num2)
//         }
//         else if (activ === "-") {
//             console.log(num1-num2)

//         }else if (activ === "*") {
//             console.log(num1*num2)

//         }
//         else if (activ === "/") {
//             console.log(num1/num2)

//         }
//         else{
//             console.log("sheiyvane nishnebi")
//         }


//     }
// }