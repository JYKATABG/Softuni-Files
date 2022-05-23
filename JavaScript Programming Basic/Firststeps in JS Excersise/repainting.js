function Repainting(input) {
    let nylon = Number(input[0])
    let paint = Number(input[1])
    let thinner = Number(input[2])
    let hours = Number(input[3])


    let nylonPrice = (nylon + 2) * 1.50
    let paintPrice = ((paint * 0.10)+ paint) * 14.50
    let thinnerPrice = thinner * 5

    
    let totalMaterialsSum = nylonPrice + paintPrice + thinnerPrice + 0.40
    let workersSum = totalMaterialsSum * 0.30 * hours
    let finalSum = totalMaterialsSum + workersSum
    console.log(finalSum)
}

Repainting(["10 ","11 ","4 ","8 "])