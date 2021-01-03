"use strict"
//Objektas Skaiciuotuvas su isvedimu su console.log su paimtomis reiksmemis is HTML

const sk1 = document.getElementById("pirmas");
const sk2 = document.getElementById("antras");
const mygtukas=document.getElementById("mygtukas");
const lentele=document.getElementById("lentele");

class Skaiciavimas {
    constructor (vardas) {
        this.vardas=vardas;
    }
    sudeti(sk1, sk2){
        console.log("Sudetis:"+(parseInt(sk1.value) + parseInt(sk2.value)));
        const plus = (parseInt(sk1.value) + parseInt(sk2.value));
        const field = document.createElement("tr");
        field.innerHTML=`Sudėtis: ${plus}`;
        lentele.appendChild(field);
    }
    atimti (sk1, sk2){
        console.log("Atimtis:"+(parseInt(sk1.value) - parseInt(sk2.value)));
        const minus = (parseInt(sk1.value) - parseInt(sk2.value));
        const field = document.createElement("tr");
        field.innerHTML=`Atimtis: ${minus}`;
        lentele.appendChild(field);
    }
    dalinti (sk1, sk2) {
        console.log("Dalyba:"+(parseInt(sk1.value)/parseInt(sk2.value)));
        const multi = (parseInt(sk1.value) * parseInt(sk2.value));
        const field = document.createElement("tr");
        field.innerHTML=`Daugyba: ${multi}`;
        lentele.appendChild(field);
    }
    dauginti (sk1, sk2){
        console.log("Daugyba:"+(parseInt(sk1.value)*parseInt(sk2.value)));
        const divide = (parseInt(sk1.value) / parseInt(sk2.value));
        const field = document.createElement("tr");
        field.innerHTML=`Dalyba: ${divide}`;
        lentele.appendChild(field);
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
