let texTbig=["gamarjoba","Sayheloo","hey","HowareY","gaarjobaTqoxogiTaxr","EarisyvealazeDidisiTyvasaQartv"]

function bigString(sTrings){
     let longstring=sTrings[0]
     let shorTstring=sTrings[0]
     sTrings.forEach(element => {
        if(element.length>longstring.length){
           longstring=element
        }
        if(element.length<shorTstring.length){
            shorTstring=element
        }
     });
      
     console.log(`${longstring} ${longstring.length}`); 
     console.log(`${shorTstring} ${shorTstring.length}`);
};
 bigString(texTbig)














// let longest = strings[0];  
//     let shortest = strings[0]; 
// რადგან 2 ივე 0 იდან იწყება ამიტომაც ამოწმებს ერთმანეთს
//  რადგან 2ივე საწყისი 0 ესეიგი 2 ივეს ამოწებს 0 იდან
//0ამდე ანუ ყველაფერს




// let text = ["Helloworld!", "luka", "eseasegamovidasaqme", "esarisyvelazedidisitYva"];

// function lonGstring(strings) {
//     let firstElement = strings[0];  // 0 ინდექსზე პირველი ელემენტი
//     let thirdElement = strings[0];  // 3 ინდექსზე მესამე ელემენტი

//     // შედარება 0 ინდექსისა და 3 ინდექსის ელემენტებს შორის
//     if (firstElement.length > thirdElement.length) {
//         console.log(`${firstElement} is longer than ${thirdElement}`);
//     } else if (firstElement.length < thirdElement.length) {
//         console.log(`${thirdElement} is longer than ${firstElement}`);
//     } else {
//         console.log(`${firstElement} and ${thirdElement} are of equal length`);
//     }
// }

// lonGstring(text);

// მოკლედ აქ გვაქსვ text რომელსაც ფუნქციაში იღებს მნუშცნელობას strings 
// შემდეგ იქმნება ცვლადი რომელიც strings-ფუნქციის ანყ text 0
//  და 3 ინდექსზე მდგარ სუტყვებს იძახებს შემდეგ  length ვაკონვერტირებთ რორგოც 
//  რიცხვებად და ერთმანეთშ ვადარებთ