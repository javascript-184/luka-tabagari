let slide = document.getElementsByClassName("slide");
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
