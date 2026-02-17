// let slide = document.getElementsByClassName("slide");
// let index = 0;
// function setintevale(){
//     for(let i=0; i<slide.length; i++){
//         slide[i].style.display = "none";
//     }
//     slide[index].style.display="block"
//    index++
//   if(index>=slide.length){
//     index=0
//   }
// }
// setintevale()
// setInterval(setintevale,3000)

// document.addEventListener("DOMContentLoaded", () => {
//   const slides = document.querySelectorAll(".slide");
//   const slider = document.getElementById("slider");
//   let current = 0;

//   slider.addEventListener("mouseenter", () => {
//     slides[current].classList.remove("active");
//     current = (current + 1) % slides.length;
//     slides[current].classList.add("active");
//   });

// });

// let button=document.getElementById("button")
// let noni=0
//  button.addEventListener("click",(()=>{
//   let slide=document.querySelectorAll(".slide")
//   for (let i = 0; i <slide.length; i++) {
//     slide[i].style.display = "none";

//   }

//   slide[noni].style.display = "block";
//   noni++
//   if (noni >= slide.length) {
//     noni = 0;
//   }
// }))


let slide = document.querySelectorAll(".shesback,.burgerBack");
let index = 0;
function setintevale(){
    for(let i=0; i<slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[index].style.display="block"
   index++
  if(index>=slide.length){
    index=0
  }
}
setintevale()
setInterval(setintevale,3000)

const links = document.querySelectorAll(".alldiv");
links.forEach(link=>{
  setInterval(()=>{
    link.addEventListener("mouseenter",()=>{
      link.style.backgroundColor ="blueviolet"
    });
  },3000)

  link.addEventListener("mouseleave",()=>{
    link.style.backgroundColor=""

  })
})

let input=document.getElementById("input")
input.addEventListener("input",function(){
  let filterValue=input.value.toLowerCase().trim()
  let products=document.querySelectorAll(".divwateches,.divSHorts,.divBurger")
  products.forEach(pro=>{
    let producName=pro.querySelector(".productName").textContent.toLowerCase()
    
    if(producName.includes(filterValue)){
      
      pro.style.display="block"

    }else{
      pro.style.display="none"
    }
  })
})


// shevcvale es progaramam



