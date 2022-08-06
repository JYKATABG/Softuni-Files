function plantDiscovery(input) {

    let n = Number(input.shift());
    let plants = {}

    for (let i = 0; i < n; i++) {

        let [plant, rarity] = input.shift().split('<->')
        rarity = Number(rarity);

        plants[plant] = {
            rarity,
            ratings: [],
        };
    }

    function rate(plants, plant, rating) {
        if (plants.hasOwnProperty(plant)) {
            plants[plant].ratings.push(rating)
        } else {
            console.log('error');
        }
    }

    function update(plants, plant, newRarity) {
        if (plants.hasOwnProperty(plant)) {
            plants[plant].rarity = newRarity
        } else {
            console.log('error');
        }
    }

    function reset(plants, plant) {
        if (plants.hasOwnProperty(plant)) {
            plants[plant].ratings = []
        } else {
            console.log('error');
        }
    }

    for (let el of input) {
        let [command, plant, rating] = el.replace(': ', ' - ').split(' - ')
        switch (command) {
            case "Rate":
                rating = Number(rating);
                rate(plants, plant, rating)
                break;

            case "Update":
                let newRarity = Number(rating);
                update(plants, plant, newRarity)
                break;

            case "Reset":
                reset(plants, plant)
                break;
        }
    }
    console.log('Plants for the exhibition:');

    Object.entries(plants).forEach(([plant, obj]) => {
        let avg = 0;

        if (obj.ratings.length > 0) {
            let sum = obj.ratings.reduce((a, b) => a + b);
            avg = sum / obj.ratings.length
        }

        console.log(`- ${plant}; Rarity: ${obj.rarity}; Rating: ${avg.toFixed(2)}`);
    });
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);