const minimalnoSteviloBarv = (seznamStolpnic) => {
    let barve = 0
    let stolpnicaI = 0
    let stolpnicaJ;
    seznamStolpnic.forEach((visina, index) => {
        if (visina > seznamStolpnic[stolpnicaI] && stolpnicaI - index === 1) {
            stolpnicaI = index;
        } else if (visina > seznamStolpnic[stolpnicaI]) {
            stolpnicaJ = index;
            barve += 1
            stolpnicaI = index+1
        }
    })
    return barve
}

console.log(minimalnoSteviloBarv([10, 4, 12, 10, 19, 1, 4, 123, 44, 29, 19, 200]))