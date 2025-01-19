let EmailAdres=prompt("Enter gemeil:!")

function emailEd(mail){  
    let [name,last]=mail.split("@");
    let [firstName,lasTname]=name.split(".")
    let deleteLastname= ".".repeat(lasTname.length)
    
    return `${firstName}${deleteLastname}${last}`;
}
alert(emailEd(EmailAdres))

// კითხვა როგრო გვაკეთო ეს რომ ნებისმიერ ემილზე იმუშაოს




 //განმარტება ფუნქციიას ვაწვდი პარამეტრს რადგან უფრო მოქნილი იყოს შემდეგ როგროც ვიცით splice 
 // იყენებს მასივებს შესაბამსად  ვიყენებ მასივს    let [name,last]=mail.split("@"); ვეუბნები რომ სადაც @-იქნება
 //ის ადგილები გახლიჩოს შედეგად 2 ად ყოფს    ანუ  name === "giorgi.beridze"
 // last === "yahoo.com" შემდეგ ამ ცვლადით ვეუბნები რომ შევიდეს name-ში let [firstName,lasTname]=name.split(".") 
 //ანუ  name==="giorgi.beridze" და აქ სადაც იქნებ .-წერტილი გახლიჩოს ანუ 2 ვყოფ შემდეგ ამ 2-ად გაყოფილს
 //    let deleteLastname= ".".repeat(lasTname.length) ვდებ ცვლადში სადაც .-ვუწერ და repeat ვამრავლებ თავის თავზე
 //რამდენიცაა გვარშ და      return `${firstName}${deleteLastname}${last}`; ვაბრუნებ ამ გაცხრილულ მონაცემებს










