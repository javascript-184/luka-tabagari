let saysoMething=prompt(" ").trim()
let somthing=saysoMething.length>0
function sayBoy(){
    if(somthing){
         let bob=saysoMething.charAt(0).toUpperCase()
        let bag=bob+saysoMething.substring(1)
         alert(`${saysoMething,bag}  this string is not blank`)
         
    }else{
        let counter = 0; 
            while (saysoMething.length === 0 && counter < 4){ 
            alert("this string is blank"); 
            alert("sheiyvane rame"); counter++;
         }
          
        
    }
}
sayBoy()

//განმარტება აქ მაქვს  ესეთი მეთოდი რომ ჯერ პირველი ასო გამომიტანოს დიდი ხოლე else-ში არის
//ციკლი როდესაც მომხმარებელი არ შეიყანს არაფერს აქ გეშვება ეს ცილი 4 ჯერ რადგან როცა ცარიელია aysoMething.length
//ტოლია===0-ის და ასევე მე 2 პირობაც ავტომატურად  <4 რადგან 0 ნაკლბია 4 ზე შესაბამისად უსასრულოდ გაეშვება
//        let counter = 0;  რადგან მივეცით 0 და saysoMething.length უდრის 0 სანამ პიროას არ დაარღვევს 
//იქამდე დაემატება 1 ით და როდესაც გახდეაბ 5 შეწყდება ვიკლი და მხოლოდ 4 ჯერ გამოიტანს შედეგს
