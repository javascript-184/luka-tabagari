let bigfirsTsTring=prompt("Please write something:!")
function bigString(){
    let firsTstring=bigfirsTsTring.charAt(0).toUpperCase()
    let deleTString=firsTstring+bigfirsTsTring.substring(1)
    alert(`${deleTString}  chang first string:! `)
    

}
bigString()
// ესეც ასე აქ გამოვიტყენე cahrt( )რადგან ამომეღო პირველი ასო რომელიც შეიცვლებოდა 0 ინდექსზე იდგა
//შემდეგ ჩავდე სხვა ცვლადში რომლებიც ერთმანეთთან + შევაერთე ანუ მათი მნიშვნელობები ერტიდა იივეა რადგან ისენი
// /და,ოკიდებულია bigfirsTsTring მნიშვნელობაზე შესაბამისად ერთ მნიშვნელობა დ აღიქმება შემდეგ .substring(1) 
//ამოვიღე პიეველი ასო რადგა არ დაებრუნებია მაგ Aa და ამოეღო პირველი და მხოლოდ დიდ ასოდ გადეკეთებია!
// რადგან .substring(1) აქ გამოვიყენე      let deleTString=firsTstring+bigfirsTsTring.substring(1)
//  მე 3 ხაზზე შესაბამისად მე 3 ხაზამდე ის ჩვეულებრივ სიტყვაა რომელსაც ემატება   
//    let firsTstring=bigfirsTsTring.charAt(0).toUpperCase()
//ამ ხაზიდან დამატებული სიტყვას დიდ ასო დაემატება და ჩვეულებრივითაც წამოვა შესაბამისად .substring(1) 
//ეს დამატებული სიტყვა წაშალა. 
    


// let x="hel"
// console.log(x.charAt(0))