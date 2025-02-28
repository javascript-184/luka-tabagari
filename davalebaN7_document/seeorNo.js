window.addEventListener("DOMContentLoaded",()=>{
  let tohide=document.getElementById("tohide")
  let display=document.getElementById("display")

  
  tohide.addEventListener("click",tohideFuncshen);
  display.addEventListener("click",displeyFuncshen);
});


function tohideFuncshen(){
    let its =document.getElementById("its")
    its.style.display="none"
    let its2=document.getElementById("its2");   
    its2.style.display="none";
    let body=document.querySelector("body");
    body.style.backgroundColor="white";
    let imagesMargerdiv = document.querySelectorAll(".imagesMargerdiv");
    imagesMargerdiv.forEach(imagesMargerdiv=>{
    imagesMargerdiv.style.display="none";
         
    });
    let tohide=document.getElementById("tohide");
    tohide.style.backgroundColor="red";

    let display=document.getElementById("display");
    display.style.backgroundColor="red";

    let buuTornDIv = document.querySelector(".buuTornDIv"); // ერთი ელემენტის არჩევა
    buuTornDIv.style.margin = "30%";
}
function displeyFuncshen(){
    let its =document.getElementById("its")
    its.style.display="block"

    let its2=document.getElementById("its2")    
    its2.style.display="block"
 
    let imagesMargerdiv = document.querySelectorAll(".imagesMargerdiv");
    imagesMargerdiv.forEach(imagesMargerdiv=>{
    imagesMargerdiv.style.display="block"

    })
    let body=document.querySelector("body")
    body.style.backgroundColor="blue"

    let tohide=document.getElementById("tohide")
    tohide.style.backgroundColor="green"
    let display=document.getElementById("display")
    display.style.backgroundColor="green"


    let buuTornDIv = document.querySelector(".buuTornDIv"); // ერთი ელემენტის არჩევა
    buuTornDIv.style.margin = "0%";
}

