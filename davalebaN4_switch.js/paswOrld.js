



let pasWorld = prompt("pleas enter pasWorld!")
if (!isNaN(pasWorld)) {
    alert("Only numbers are not accepted!")
}
function pasworlDhard() {
    pasWorld = Number(pasWorld.length)
    if (pasWorld < 3) {
        alert(`${pasWorld} this pasworld is Esy \n olis entras A stronger password`)
    } else if (pasWorld <= 7) {
        alert(`${pasWorld} this paSorld is Esy!`)
    } else if (pasWorld === 8) {
        alert(`${pasWorld} It is acceptable`)
    } else if (pasWorld < 17) {
        alert(`${pasWorld} it's strong pasworld!`)

    }



}
pasworlDhard()

