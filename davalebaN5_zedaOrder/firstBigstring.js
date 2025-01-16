// let firstString = prompt("Enter string:")
// function bigString() {
//     let big = firstString.charAt(0).toUpperCase()
//     let con = big + firstString.substring(1)
//     alert(con)
// }

// bigString()

let fuv=prompt("")
function vvb(){
    for( const char of fuv){
        if(fuv.length<=10){
            let base=fuv.charAt(0).toUpperCase()
             let gbl=base+fuv.substring(1)
             alert(gbl)
        }else{
            alert("metia")
        }
    }
}
vvb()
//განმარტება for ციკლში  char  პირდაპირ იფ ში არ დავაყენე რადგან ის გადავიდოდა და რასაც fuv ში შევიყვანიდ იმას 
//გამოიტანდა როგროც 1 ელემენტს ანუ ეს არის გამტარი ფუნქციი fuv ის მნიშვნელობებს იღებს შესაბამისად თითოეულ ელემენტს 
//გაივლის და ყვეალს აღიქვამს ცალ-ცალკე 1 ად და ჩვენ  ამ შემთხვევაში ეს არ გვინდა ჩვენ ამ შეთხვევაში კონკრეტული
//რიცხვი გვინდ არის შედეგადასც რაიე ოპერაცია შესრულდება ეს if ში გავაკეთე რადგან ესე უფრო არქმადი
//ყოფილიყო მის გარეთაც შეიძლებოდა მაგრა ესე უფრო თვასაჩინოა თუ სიმართლე შესრულდება::
