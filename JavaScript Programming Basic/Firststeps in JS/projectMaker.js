function projectMaker(input) {
    let projects = Number(input[0])
    let name = input[1]
    let hours = projects * 3
    console.log(`The architect ${name} will need ${hours} hours to complete ${projects} project/s.`)
}

projectMaker([4, "George"])