const fs = require('fs')

const sestevanjeUlomkov = imeDatoteke => {
    let zakopaneTorte = 0;
    let vsebinaDatoteke = fs.readFileSync(imeDatoteke).toString().split('\n') // podatke prebere iz datoteke
    vsebinaDatoteke.splice(1, vsebinaDatoteke.length).forEach(praznovanje => { // z zanko gre skozi praznovanja
        [...praznovanje.matchAll(/S/g)].map(match => match.index).forEach(index => { // za vsak S v besedi preveri njegov indeks, ter na podlagi le tega pristeje nov ulomek k skupni vsoti zakopaneTorte
            console.log(1 / 2 ** (index+1))
            zakopaneTorte += 1 / 2 ** (index+1)
        })
    })
    return Math.round(zakopaneTorte); // zaokrozen rezultat vrne
}

console.log(sestevanjeUlomkov('sestevanjeUlomkov2.txt')) // argument metode je ime datoteke v kateri so podatki shranjeni