// predpostavljam da ne bo nikoli ne prvi tovornjak moral ostati na parkiriscu manj casa kot tovornjaki pred njim, saj so parkirani v koloni

const dolzinaParkirisca = (seznamTovornjakov) => { // seznam tovornjakov je seznam objektov, ki imajo lastnosti dolzina, prihod (kdaj pridejo), parkiranZa (kolko casa bodo ostali na parkiriscu) in ce so parkirani (na zacetku ni noben). tovornjaki so zapisani v taksnem vrstnem redu kot prihajajo na parkirisce
    let minDolzinaParkirisca = 0;
    let trenutnaZasedenost = 0;

    for (let i = 0; i < seznamTovornjakov.length; i++) { // pregledamo vse tovornjake v seznamu
        dolzina = seznamTovornjakov[i].dolzina;
        prihod = seznamTovornjakov[i].prihod;
        
        let parkiraniTovornjaki = seznamTovornjakov.filter(tovornjak => tovornjak.parkiran) // ustvarimo seznam s trenutno parkiranimi tovornjaki
        for (let j = 0; j < parkiraniTovornjaki.length; j++) {
            dolzina2 = parkiraniTovornjaki[j].dolzina;
            prihod2 = parkiraniTovornjaki[j].prihod;
            parkiranZa2 = parkiraniTovornjaki[j].parkiranZa;
    
            if (prihod2 + parkiranZa2 <= prihod) { // ce je prihod novega tovornjaka vecji od casa, ki bi ga parkiran tovornjak porabil na parkiriscu, ga "odstranimo" iz parkirisca
                trenutnaZasedenost -= dolzina2;
                minDolzinaParkirisca -= dolzina2;
                let iParkiranegaTovornjaka = seznamTovornjakov.indexOf(parkiraniTovornjaki[j])
                seznamTovornjakov[iParkiranegaTovornjaka].parkiran = false;
            }
        }

        if (dolzina > minDolzinaParkirisca  - trenutnaZasedenost) { // pregledamo, ce je na parkiriscu dovolj prostora za nov tovornjak, ce ni povecamo prostor
            minDolzinaParkirisca = dolzina + trenutnaZasedenost;
        }
        trenutnaZasedenost += dolzina;
        seznamTovornjakov[i].parkiran = true // dolocimo da je tovornjak parkiran
    }
    return minDolzinaParkirisca
}

console.log(dolzinaParkirisca([
    {
        dolzina: 10,
        prihod: 100,
        parkiranZa: 1000,
        parkiran: false
    },
    {
        dolzina: 15,
        prihod: 1099,
        parkiranZa: 1000,
        parkiran: false
    },
    {
        dolzina: 25,
        prihod: 2099,
        parkiranZa: 100,
        parkiran: false
    },
    {
        dolzina: 5,
        prihod: 2000,
        parkiranZa: 199,
        parkiran: false
    },
    {
        dolzina: 30,
        prihod: 2199,
        parkiranZa: 1000,
        parkiran: false
    },
]))