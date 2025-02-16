window.addEventListener("DOMContentLoaded",()=>{
    let submitBtn=document.getElementById("submitBtn")
    submitBtn.addEventListener("click",submitBtnFuncshen)
})
let clickCount = 0;

function submitBtnFuncshen() {
    let img1 = document.getElementById("img1");
    let img2=document.getElementById("img2")
    clickCount++
  if (clickCount<5){
    if (img1.style.width === "10%") {
        img1.style.width = "50%";
    } else if (img1.style.width === "50%") {
        img1.style.width = "80%";
    } else if (img1.style.width === "70%") {
        img1.style.width = "75%";
    } else if (img1.style.width === "80%") {
        img1.style.width = "85%";
    }
     else {
        img1.style.width = "10%";
        
    }

}
else{
    img1.style.display = "none";
    img2.style.display = "block";
} 
}


 