function suppliesForSchool(input) {
    let pens = Number(input[0])
    let markers = Number(input[1])
    let preparation = Number(input[2])
    let discound = Number(input[3])

    let pensPrice = pens * 5.80
    let markersPrice = markers * 7.20
    let preparationPrice = preparation * 1.20
    
    let allStuffPrice = pensPrice + markersPrice + preparationPrice
    let discoundPrice = allStuffPrice - (allStuffPrice * 0.25)
    console.log(discoundPrice)
}

suppliesForSchool(["2 ","3 ","4 ","25 "])