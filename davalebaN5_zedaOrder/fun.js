// ახსნაა აქ გავაკეთე for ით ფუნქციის შიგნით აქ  let result = Math.pow(number, power);   ვეუბნები
//რომ თავისი რიცხვის ხარისხი გამოთვალოს შემდეგ გვაქვს  for (let ii = 0; ii < power; ii++)
//როდესაც რაიმე სჩავწერთ      Number(prompt("Enter the base number:")),  Number(prompt("Enter the exponent:"))
//გადაკონვერტირდება რიცხვებში შემდეგ მიირებს შედეგს და დააპრუნებს power ეს გაეშვება იქამდე სანამ ii++ არ გახდება მისი
//ტოლი დაადაარღვევეს პირობას ამის შემდეგ როდესაც ეს მოხდეაბ   result *= number; ეს შესრულდება  
//  return result; ეს დააბრუნებს მიღებულ შედეგს მას შემდეგ რაც ციკლი გაჩერდეაბ


function fun(number, power) {
    let result = 1;
    for (let ii = 0; ii < power; ii++) { 
        result *= number;
      }
    return result;
}
const funResult = fun(
    Number(prompt("Enter the base number:")),
    Number(prompt("Enter the exponent:"))
);
alert(funResult);


// აქედაან!!
 //აქ მდაქვს 3 მეთოდი რომელზეც დიდი დრო დავხარჯე რადგან 3 გამეკეთებია ამ მეთიდში მთავარი ბრძანებაა Math.pow
//  რადგან სწორედ ეს ბრაძანებააა სპეციალური რომელიც ამრავლებს რიცხვის ხარისხს მაგ თუ 5ხარისხად 3  ეს ნიშნავს რომ
// 5 უნდა გავამრავლოდ 3 ჯერ თავსი ტავზე და მიღებულ შედეეგებზე მაგ: 5*5=25 აქ გამოვიყენეთ პრიველი 2-5-იანი
//შემდეგ გვრჩება ერთი ხუთიანი რადგან ვუთხარით რომ 5 ხარისხად 3 ანუ 5 აირეთაო 3 ჯერთქო 25*3=125
//ეს არის და ეს  Number(prompt("enter first number (number:)!")),     Number(prompt("enter Two number (power:)!"))
//აქ უბრალოდ  მოხდა ის რომ ეს პარამეტრები გადადის უბრალოდ რიცხვებში ხოლო შემდეგ ესე მირებული შედეგები ბრუნდება
// function fun(number,power){
//    let resulTi= Math.pow(number,power)
  
//    return resulTi
// }    
//  const funResult=fun(
//     Number(prompt("enter first number (number:)!")),
//     Number(prompt("enter Two number (power:)!"))

//  )
//  alert(funResult)
// აქამდეე!!!








// function fun( number, power){
//     let Intest1=Number(prompt("first number"));
   
//     return Intest1*number*power
// }  
// const biGresult=fun(
//     Number(prompt("Two number (number!:)")),
//     Number(prompt("Three numbr (power!:)"))
// )
// alert(biGresult)



// აქ რამოდენიმე ,ეთოდია ერთერთი ესეც ფუნქცია სხვა ფუნქციში სადაც ჯერ იქმენება number, power და ემატება  Intest1 
//რომელიც შემდგობ გადადადის სხვა ფუნქციაში და რაადგან აქ მე თავიდან *-გამოვიყებე=ნე ხვდება რომ უნდა გამრავლდეს
// შეასააბამისად ჩამოდის let biGresult=fun(Intest2,Intest3) ამის მეშვეობით რადგან აქ ვეუბენი რომ fun ვიძახებ
// და ვეუბნები რომ ntest2,Intest3 ესენი შემ გადმოგეცითქო რადგან იქ *  მიწერია ეს ნიშნავს რომ ესენი უნდ აგამრავლდნენ
//რადგა fuc დაუკავშირე let biGresult მიდის ამათი შეკრება ასერ რომ ვთქვათ ,-იმიტომ არის გამოყოფილი რომ ზმოთ უკვე
//მივუთითე თუ რა ოპერაცია უნდა გააკეთოს უნდა გამრავლდეს Intest1 ეს ცვლადი იქვე შევქმენი და ჩავამატე ამიტომაც
//// let biGresult=fun(Intest2,Intest3) აღარ ვიმეორებ რადგან უკვე იცის რაც უნდა ქნას!
// function fun( number, power){
//     let Intest1=  Number(prompt("Twu number (number):"))

//      return Intest1* number*power

// }  

// let reSult=()=>{
//     let Intest2=  Number(prompt("Twu number (number):"))
//     let Intest3=Number(prompt("Twu number (power):"))
//     let biGresult=fun(Intest2,Intest3)
//     alert(biGresult)


// }
// reSult()




