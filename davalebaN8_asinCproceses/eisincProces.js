window.addEventListener("DOMContentLoaded", () => {
    let divboxmarger = document.querySelectorAll(".divboxmarger")
    divboxmarger.forEach(divboxmarger => {
        divboxmarger.style.display = "none"
    });
    let submit = document.getElementById("submit")
    submit.addEventListener("click", sumbitFincshen)

    firstfunCshenH1()

    firstfunCshenH2()
    let bouns = document.getElementById("bouns")
    bouns.style.fontSize = "200%"
    let pteg1 = document.getElementById("pteg1")
    pteg1.style.width = "40%"

});

function sumbitFincshen() {
    let divboxmarger = document.querySelectorAll(".divboxmarger")
    divboxmarger.forEach(divboxmarger => {
        if (divboxmarger.style.display === "block") {
            divboxmarger.style.display = "none";

        } else {
            divboxmarger.style.display = "block"
        }
    });

};
//aq gavakete ise rom rodesac 2 jer davachert jer
//gamoachens xolo shemdeg ki damalavs radgan click maqvs
//gamoyenebuli sumbitFincshen() funqciam icoda rom
//click vgulisxmobdi da mag Shemtxvevashi moxdebba mxold
//msgavsi ram ufro martivad shemedzlo rom 2 sumbmit mqonoda

let pteg2 = document.getElementById("pteg2");
pteg2.style.width = "28%";
pteg2.addEventListener("mouseenter", () => {
    pteg2.style.textAlign = "center"
    pteg2.style.color = "white"
    pteg2.style.textShadow = "2px 2px 4px red"
    pteg2.style.boxShadow = "2px 2px 5px red"





});


pteg2.addEventListener("mouseout", () => {
    pteg2.style.textAlign = "center"
    pteg2.style.color = ""
    pteg2.style.textShadow = ""
    pteg2.style.boxShadow = ""

});

function firstfunCshenH1() {
    let firstH1 = document.getElementById("h1")
    firstH1.style.color = "blue"

}
function firstfunCshenH2() {
    let firtsh2 = document.getElementById("h2")
    firtsh2.addEventListener("mouseenter", () => {
        setTimeout(() => {
            firtsh2.style.textAlign = "center";
            firtsh2.style.transition = "text-align 0.5s ease";
        }, 100);
    });
    firtsh2.addEventListener("mouseout", () => {
        firtsh2.style.textAlign = "";

    });

    firtsh2.style.backgroundColor = "blue";
    firtsh2.style.color = "white";
}

