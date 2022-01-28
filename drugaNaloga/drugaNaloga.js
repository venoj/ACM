const izpisUjemajocihBesed = (seznamBesed, vzorec) => {
    const regularExpression = new RegExp(vzorec.split('*').join('.')) // vzorec pretvorimo v regular expression (razredi s to funkcijo so vgrajeni v vecini programskih jezikov brez dodatnih knjiznic)
    seznamBesed.forEach(beseda => (regularExpression.test(beseda)) ? console.log(beseda) : null) // vsako besedo preverimo ce se sklada z regular expressionom, ce se jo izpisemo
}

izpisUjemajocihBesed(['miza', 'zima', 'riba', 'mirta', 'mica', 'ica', 'prva'], 'm**a')

/* B del naloge:

Najprej bi iz seznama besed odstranili besede nepravilnih dolzin, nato pa bi jih glede na vzorce uredili po abecednem redu.

*/