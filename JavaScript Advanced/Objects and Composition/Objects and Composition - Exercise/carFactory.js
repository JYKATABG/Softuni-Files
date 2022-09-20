function carFactory(data) {

    let res = {};
    res.model = data.model;

    if (data.power <= 90) {
        res.engine = {
            power: 90,
            volume: 1800
        }
    } else if (data.power <= 120) {
        res.engine = {
            power: 120,
            volume: 2400
        }
    } else if (data.power > 120) {
        res.engine = {
            power: 200,
            volume: 3500
        }
    }

    if (data.carriage === "hatchback") {
        res.carriage = {
            type: "hatchback",
            color: data.color
        }
    } else if (data.carriage === 'coupe') {
        res.carriage = {
            type: "coupe",
            color: data.color
        }
    }

    let size;
    if (data.wheelsize % 2 !== 0) {
        size = data.wheelsize
    } else {
        size = data.wheelsize - 1
    }

    res.wheelsize = [size, size, size, size]

    return res;
}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
)