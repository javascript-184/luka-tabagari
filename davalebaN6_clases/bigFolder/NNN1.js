
// esechosTingi("megobrebo")
// function esechosTingi(name){
//     console.log( "gaamrjoba"+name)

// }

//ასე იმიტომ ხდება რპმ ჯს ფუნქციას თავიდანვე უკვე იმახვივრებს და აძლევს შესაძლებლობას რომ იმუშაოს
//მის ზემით ეს მოგვაგინებს ა სინქრონიზაციასაც ასევე


class cxovelebi {
    constructor(cxo1, cxo2) {
        this.cxo1 = cxo1
        this.cxo2 = cxo2
    }
    metod1() {
        console.log(`tis is a  ${this.cxo1} this is a ><${this.cxo2}`)
    }
}
const FirstSeqshen = new cxovelebi("dazgli", "kata")
FirstSeqshen.metod1()
class qvewarmaval extends cxovelebi {
    constructor(cxo1, cxo2, cxo3, cxo4, cxo5) {
        super(cxo1, cxo2)
        this.cxo3 = cxo3
        this.cxo4 = cxo4
        this.cxo5 = cxo5

    }
    method2() {
        console.log(FirstSeqshen.cxo1, FirstSeqshen.cxo2,Seconseqshen.cxo3, 
                    Seconseqshen.cxo4, Seconseqshen.cxo5
        )
    }

}
const Seconseqshen = new qvewarmaval("dazgli", "kata", "gveli", "xvliki", "iguana")
Seconseqshen.method2()

class volfs extends qvewarmaval {
    constructor(cxo1, cxo2, cxo3, cxo4, cxo5, cxo6, cxo7, cxo8) {
        super(cxo1, cxo2, cxo3, cxo4, cxo5)
        this.cxo6 = cxo6
        this.cxo7 = cxo7
        this.cxo8 = cxo8
    }
    metod3() {
        console.log(FirstSeqshen.cxo1, FirstSeqshen.cxo2,
            Seconseqshen.cxo3, Seconseqshen.cxo4,
            Seconseqshen.cxo5, volfConst.
            cxo6, volfConst.cxo7, volfConst.cxo8)
    }
}
const volfConst = new volfs("dazgli", "kata", "gveli", "xvliki",
    "iguana", "mgeli", "vefxvi", "lomi");
volfConst.metod3()

class taxi extends volfs {
    #cxo10
    constructor(cxo1, cxo2, cxo3, cxo4, cxo5, cxo6, cxo7, cxo8, cxo9, cxo10) {

        super(cxo1, cxo2, cxo3, cxo4,
            cxo5, cxo6, cxo7, cxo8
        );

        this.cxo9 = cxo9
        this.#cxo10 = cxo10
    }
          geetele(){
            return `${this.#cxo10}`
          }
      
 
    mgel() {
        console.log(
            FirstSeqshen.cxo1, FirstSeqshen.cxo2,
            Seconseqshen.cxo3, Seconseqshen.cxo4,
            Seconseqshen.cxo5, volfConst.cxo6,
            volfConst.cxo7, volfConst.cxo8,
            smol.cxo9,smol.cxo10

        )
    }
}
const smol = new taxi(
    "dazgli", "kata", "gveli", "xvliki", "iguana",
    "mgeli", "vefxvi", "lomi", "gepardi", "mgelDzagla"
);

smol.mgel()
console.log(smol.geetele())