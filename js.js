"use strict"
//Objektas Skaiciuotuvas su isvedimu su console.log su paimtomis reiksmemis is HTML

const sk1 = document.getElementById("pirmas");
const sk2 = document.getElementById("antras");
const mygtukas=document.getElementById("mygtukas");

class Skaiciavimas {
    constructor (vardas) {
        this.vardas=vardas;
    }
    sudeti(sk1, sk2){
        console.log("Sudetis:"+(parseInt(sk1.value) + parseInt(sk2.value)));
    }
    atimti (sk1, sk2){
        console.log("Atimtis:"+(parseInt(sk1.value) - parseInt(sk2.value)));
    }
    dalinti (sk1, sk2) {
        console.log("Dalyba:"+(parseInt(sk1.value)/parseInt(sk2.value)));
    }
    dauginti (sk1, sk2){
        console.log("Daugyba:"+(parseInt(sk1.value)*parseInt(sk2.value)));
    }
}

mygtukas.addEventListener("click", skaiciuoti);

function skaiciuoti() {
    let naujas = new Skaiciavimas("Vaidos");
    naujas.sudeti(sk1,sk2);
    naujas.atimti(sk1,sk2);
    naujas.dalinti(sk1,sk2);
    naujas.dauginti(sk1,sk2);
}
