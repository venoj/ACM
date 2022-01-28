const najboljsePolje = (mreza) => {
    let najvecjaVsota = 0;
    let koordinateNajboljseCelice = [0, 0];
    mreza.forEach((vrsta, indexVrste) => {
        vrsta.forEach((celica, indexStolpca) => { // za vsako celico zracuna vsoto vrste in stolpca brez svoje vrednosti ter jo primerja z globalno najvecjo vsoto. od celice z najvecjo vsoto si shrani koordinate, ki jih na koncu metode vrne.
            vsotaVrste = vrsta.reduce((delnaVsota, stZetonov) => delnaVsota + stZetonov, 0) - celica
            vsotaStolpca = mreza.reduce((delnaVsota, vrsta) => delnaVsota + vrsta[indexStolpca],0) - celica
            if (vsotaStolpca + vsotaVrste > najvecjaVsota) {
                najvecjaVsota = vsotaStolpca + vsotaVrste;
                koordinateNajboljseCelice = [indexStolpca + 1, indexVrste + 1]
            }
        })
    })
    return koordinateNajboljseCelice // zgornji levi kot mreze je [1, 1], v desno smer se povecuje prvi element tabele [2, 1], za navzdol pa drugi ([1, 2])

}

console.log(najboljsePolje([ // argument metode je dvodimenzionalna tabela. Tvorijojo tabele, ki predstavljajo vrstice, znotraj njih po so vrednosti celic.
    [0, 0, 1, 2, 0],
    [0, 2, 3, 1, 0],
    [0, 0, 2, 1, 2],
    [0, 0, 0, 3, 1],
]));