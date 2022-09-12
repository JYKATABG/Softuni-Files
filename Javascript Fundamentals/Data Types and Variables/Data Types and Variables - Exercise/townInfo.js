function townInfo(town,population,area) {

    let toString = town.toString()
    let toStringpopulation = Number(population)
    let toStringArea = Number(area)

    console.log(`Town ${toString} has population of ${toStringpopulation} and area ${toStringArea} square km.`);

}
townInfo('Sofia',
1286383,
492
)