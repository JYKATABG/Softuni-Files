function needForSpeedIII(input) {

    let numberOfCars = input.shift();
    let result = new Map();

    for (let line of input) {

        if (line === 'Stop') {
            break;
        }


        if (line.includes('|')) {
            let carInfo = line.split('|');

            let givenVehicle = carInfo[0];
            let distance = Number(carInfo[1]);
            let fuel = Number(carInfo[2]);

            result.set(givenVehicle, []);
            result.get(givenVehicle).push(distance);
            result.get(givenVehicle).push(fuel);

        }

        if (line.includes(' : ')) {
            let carInfo = line.split(' : ');

            if (line.includes('Refuel')) {

                let givenVehicle = carInfo[1];
                let givenFuel = Number(carInfo[2]);

                let tank = result.get(givenVehicle)[1] + givenFuel;

                if (tank > 75) {
                    result.get(givenVehicle)[1] = 75;
                    tank -= 75
                    console.log(`${givenVehicle} refueled with ${givenFuel - tank} liters`);
                } else {
                    result.get(givenVehicle)[1] = tank;
                    console.log(`${givenVehicle} refueled with ${givenFuel} liters`);
                }

            } else if (line.includes('Revert')) {

                let givenVehicle = carInfo[1];
                let kilometers = Number(carInfo[2]);

                result.get(givenVehicle)[0] -= kilometers;

                if (result.get(givenVehicle)[0] < 10000) {
                    result.get(givenVehicle)[0] = 10000;
                } else {
                    console.log(`${givenVehicle} mileage decreased by ${kilometers} kilometers`);
                }
            } else if (line.includes('Drive')) {
                //Drive : {car} : {distance} : {fuel}":
                let givenVehicle = carInfo[1];
                let distance = Number(carInfo[2]);
                let fuel = Number(carInfo[3]);

                if (result.get(givenVehicle)[1] > fuel) {
                    result.get(givenVehicle)[0] += distance;
                    result.get(givenVehicle)[1] -= fuel;
                    console.log(`${givenVehicle} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                } else {
                    console.log("Not enough fuel to make that ride");
                }

                if (result.get(givenVehicle)[0] >= 100000) {
                    result.delete(givenVehicle)
                    console.log(`Time to sell the ${givenVehicle}!`);
                }
            }
        }
    }

    for (let [car, carInfo] of result) {
        console.log(`${car} -> Mileage: ${carInfo[0]} kms, Fuel in the tank: ${carInfo[1]} lt.`);
    }
}
needForSpeedIII([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);