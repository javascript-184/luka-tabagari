window.addEventListener("DOMContentLoaded",()=>{
    let changeColorBtn=document.querySelector(".changeColorBtn")
    changeColorBtn.addEventListener("click",cheColorBtnfuncshn)
   

});
const colors=["black","green","red","purple","blue","yellow","orenge"];
let colorIndex = 0;


function cheColorBtnfuncshn(){
    let text=document.getElementById("text")
    text.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    
}
