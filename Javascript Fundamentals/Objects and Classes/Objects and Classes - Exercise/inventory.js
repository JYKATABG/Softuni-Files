function inventory(arr) {

    //Love to code :]

    let heros = []

    for (let hero of arr) {
        let [name, level, items] = hero.split(' / ')

        let heroStorage = {
            name: name,
            level: level,
            items: items
        }
        heros.push(heroStorage);
    }

    let sortedByLevel = heros.sort((a, b) => {
        return a.level - b.level
    });

    for (let el of sortedByLevel) {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }
}
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ])