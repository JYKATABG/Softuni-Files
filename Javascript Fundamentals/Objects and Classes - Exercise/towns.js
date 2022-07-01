function towns(input) {

    let cityInfo = {}

    for(let city of input) {

        let cityElement = city.split(" | ")
        let town = cityElement[0]
        let cityLatitude = Number(cityElement[1])
        let cityLongitude = Number(cityElement[2])

        cityInfo.town = town;
        cityInfo.latitude = cityLatitude.toFixed(2);
        cityInfo.longitude = cityLongitude.toFixed(2);

        console.log(cityInfo);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])