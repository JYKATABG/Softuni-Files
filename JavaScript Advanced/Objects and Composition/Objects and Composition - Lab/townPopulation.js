function townPopulation(input) {

    let townData = input.map(element => {
        let data = element.split(" <-> ");

        return {
            name: data[0],
            population: Number(data[1])
        }
    });

    let registry = {};

    for (let town of townData) {
        if (registry[town.name] === undefined) {
            registry[town.name] = town.population
        } else {
            registry[town.name] += town.population
        }
    }


    for (let line in registry) {
        console.log(`${line} : ${registry[line]}`);
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)