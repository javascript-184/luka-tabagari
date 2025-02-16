window.addEventListener(`DOMContentLoaded`,()=>{
    let username=document.getElementById("username");
    username.addEventListener("keyup",checkUsername) 

    let submitBtn=document.getElementById("submitBtn");
    submitBtn.addEventListener("click",loginChecker)

    let password=document.getElementById("password")
    password.addEventListener("keyup",checkPassword)
});

function loginChecker(){
    let username=document.getElementById("username")
    let password=document.getElementById("password")
    let res = document.querySelector(".res");
   const currentUsername = "admin123";
    const correctPassword = "admin12";
    
  if(currentUsername===username.value&&correctPassword===password.value ){
     res.innerHTML= `<p style="color: green;">Login Success!</p>`
  }else{
     res.innerHTML=`<p style="color: red;">Login filed!</p>`

  }

}


function stringWithNumber(string) {
    let res = [];
    
    for (let char of string) {
        res.push(Number.isInteger(Number(char)));
    }
    
    return res.some(item => item === true);  
}

function checkUsername(){
    let username=document.getElementById("username")
    let usernameRes=document.getElementById("usernameRes")
     let submitBtn=document.getElementById("submitBtn")
       if(username.value.length<3){
         usernameRes.innerHTML="Opps, username length has to be at least 3 chars long"
         usernameRes.style.color="blue"
         submitBtn.disabled=true

    }else if(username.value.length >3&&!stringWithNumber(username.value)){
           usernameRes.innerText="Opps, username should contain at least one number!"
           usernameRes.style.color="red"
           submitBtn.disabled=true
        
    }else if(username.value.length >10){
        usernameRes.innerHTML=`<p style="color: red;">Username is too long!</p>`
        usernameRes.style.color="red"
        submitBtn.disabled=true
     
       }
    else{
         usernameRes.innerText=""
         submitBtn.disabled=false
    
         }
}   

function checkPassword(){
    let password=document.getElementById("password")
    let passwordRes=document.getElementById("passwordRes")
    let submitBtn=document.getElementById("submitBtn")


    if(password.value.length>=8){
        passwordRes.innerHTML = `<p style="color:red;">Your text is long!</p>`;
        submitBtn.disabled=true

    }else if(password.value.length>4&&!stringWithNumber(password.value)){
       passwordRes.innerText = "Opps, username should contain at least one number!";
       passwordRes.style.color="red";
       submitBtn.disabled=true;
       password.style.backgroundColor="red"
    }
    else{
        passwordRes.innerText=""
        passwordRes.style.color="green"
        submitBtn.disabled=false;
    }
    checkPasswordSecurity()
};

function checkPasswordSecurity(){
    let password=document.getElementById("password")
    let passwordRes=document.getElementById("passwordRes") 
    let submitBtn=document.getElementById("submitBtn")
   
    const siMbols="!@#$%^&*()_=+"
    for (let char of password.value) {
     if (siMbols.includes(char)) {
        submitBtn.disabled = true;
        passwordRes.innerText = "Do not use special symbols like !, @, $, etc.";
         passwordRes.style.color="red"
        return; 
         }
    } 
            

}

// ამის ქვემოთ იგივე კოდია და ზემოთ ჩემებურად გავაკეთე 




// window.addEventListener('DOMContentLoaded', () => {
//     let submitBtn = document.getElementById("submitBtn");
//     let username = document.getElementById("username");
//     let password = document.getElementById("password");


//     submitBtn.addEventListener('click', loginChecker);
//     username.addEventListener('keyup', checkUsername);
//     password.addEventListener('keyup', checkPassword);



//     username.style.backgroundColor = "green"
//     username.style.textShadow = "2px 2px 2px red"
//     username.style.color = "white"




// });
// function loginChecker() {
//     let username = document.getElementById("username");
//     let password = document.getElementById("password");
//     let res = document.querySelector(".res");

//     const correctUsername = "admin123";
//     const correctPassword = "admin12";

//     if (correctUsername === username.value && correctPassword === password.value) {
//         res.innerHTML = `<p style="color: green;">Login Success!</p>`
//     } else {
//         res.innerHTML = `<p style="color: red;">Login Fail!</p>`
//     }
// }


// function stringWithNumber(string) {
//     let res = [];

//     for (let char of string) {
//         res.push(Number.isInteger(Number(char)));
//     }

//     return res.some(item => item === true);
// }

// function checkUsername() {
//     let currentUsername = document.getElementById("username");
//     let usernameRes = document.getElementById("usernameRes");
//     let submitBtn = document.getElementById("submitBtn")

//     if (currentUsername.value.length <= 3) {
//         usernameRes.style.color = "red";
//         usernameRes.innerText = "Opps, username length has to be at least 3 chars long";
//         submitBtn.disabled = true;
//     } else if (currentUsername.value.length > 3 && !stringWithNumber(currentUsername.value))
//        
//        {//მეორე ნაწილი: !stringWithNumber(currentUsername.value) - თუ username
//         //  არ შეიცავს ციფრებს (რადგან stringWithNumber() 
//         // დაბრუნებს false და ! ამას უარყოფს, რათა იყოს true).
//         //შეასბამისად რადგან არ შეიცავს რიცხვს და შეიცავს მხოლდ სტრინგს
//         //გახდება false და შენდგინ Not! ბრძანებით დაბრუნდება ture ზე
//         //  ანუ გახდა ტყუილი და შემდეგ დაბრუნდა ! სიმართლეში რადგან 
//         //სიმართლეშ დაბრუნდა ზუსტდა მაგიტიომ უნდა რიცხვების შეყვანა
//         //ძალიან გავწვალდი სანამ ამას გავიგებდი:
//         usernameRes.style.color = "red";
//         usernameRes.innerText = "Opps, username should contain at least one number!";
//         submitBtn.disabled = true;
//     }
//     else {
//         usernameRes.innerText = ""
//         submitBtn.disabled = false;

//     }
// }

// function checkPassword() {
//     let password = document.getElementById("password")
//     let passwordRes = document.getElementById("passwordRes")
//     let submitBtn = document.getElementById("submitBtn")


//     if (password.value.length > 8) {
//         passwordRes.innerText = "Password should not be longer than 8 characters!"
//         passwordRes.style.display = "inline"
//         password.style.color = "white"
//         password.style.backgroundColor = "red"
//         submitBtn.disabled = true;

//     }

//     else if (password.value.length > 5 && !stringWithNumber(password.value)) {//აქ ვეუბნები რომ  მაქსიმუმ 5 სიმბოლო შეყვანა შეიძლება
//         // გადაცდება მაქამდე რიცხვი უნდა ეწეროს
//         //ანუ 5 სიმბოლო სტრინგი და შემდეგ უნდა მოდიოდეს რიცხვი
//         //არასწორი რადგან აუცილებელია რომ რიცხვი ეწეროს 
//         //თავდანვე უნდა ეწეროს რიცხვი :აქ ავიღე ზემოთა ლოგიკა და ჩავაკოპირე


//         //<რომ დამეწერა ვეტყოდი რომ რაიმე მაინც შეიყვანეთქო რაც არასწორი იქნებოდა

//         passwordRes.innerText = "Opps, username should contain at least one number!";
//         submitBtn.disabled = true;
//     }
//     else {
//         passwordRes.innerText = "";
//         submitBtn.disabled = false;
//         passwordRes.style.backgroundColor = "red"
//         passwordRes.style.color = "white"
//         password.style.backgroundColor = "green"
//         password.style.boxShadow = "2px 2px 4px red"

//         checkPasswordSecurity();

//     }
// }
// function checkPasswordSecurity() {
//     let password = document.getElementById("password");
//     let passwordRes = document.getElementById("passwordRes");
//     let submitBtn = document.getElementById("submitBtn");

//     const stopSymbols = "!@$%^&*()_+=";

//     for (let char of password.value) {
//         if (stopSymbols.includes(char)) {
//             submitBtn.disabled = true;
//             passwordRes.innerText = "Do not use special symbols like !, @, $, etc.";
//             return; // ვაჩერებთ ფუნქციის შესრულებას, რომ აღარ გააგრძელოს ისე არარფერს არ ააბრუნებს უბრალოდ Breke ისავითაა
//         }
//     } 
    
    
// }
   

// // //რადგან checkPasswordSecurity ფუნქცია მეწერა ზემოთაც
// // //pasword ის არის სწორედ ამიტომ იყო გაუგებრობა თუმცა გასწროდა:
// // //რადგან 2 ივენთია keydown ერთი მე 2 ფარავდა და არ გამოვიდა
// // //სწორედ ამოტომაც ფუნქციაcheckPasswordSecurity ჩავსვი ქვემოთ checkPassword -ში
// // //რა შემთხვევაში უნდა ემოქმედა ამას კონკრეტულად რომელ ადგილზე
// // //რადგან იქ იყო ზემოთ ეგონა რომ pasword ზე 2 keydown
// // //უნდა ემოქმედა ერთ დროულად რადგან ეს 2 ფუნქცია 2 ივე რადგან იყო არ მუშაობდა
// // //ამიტომაც ეს უბრალოდ ჩავდე checkPassword-ფუნქციაში რაც იმას ნიშნავს რომ 2 ივეს სხვადასხვა
// // //ფუნქციას შეასრულებენ  თუმცა გაეშვება checkPassword ფუნქცია და მიყვება მას-checkPasswordSecurity
