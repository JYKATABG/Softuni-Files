function hotelRoom(input) {

    let month = input[0];
    let overNight = Number(input[1]);

    let apartmentPrice = 0;
    let studioPrice = 0;

    if (month === "May" || month === "October") {

        apartmentPrice = 65;
        studioPrice = 50;

        if (overNight > 14) {
            studioPrice = studioPrice * 0.70;
            apartmentPrice = apartmentPrice * 0.90;
        } else if (overNight > 7) {
            studioPrice = studioPrice * 0.95;
        }

    } else if (month === "June" || month === "September") {

        apartmentPrice = 68.70;
        studioPrice = 75.20;
        if (overNight > 14) {
            studioPrice = studioPrice * 0.80;
            apartmentPrice = apartmentPrice * 0.90;
        }

    } else if (month === "July" || month === "August") {
        apartmentPrice = 77;
        studioPrice = 76;
        if (overNight > 14) {
            apartmentPrice = apartmentPrice * 0.90;
        }
    }

    //if (overNight > 14) {
    //apartmentPrice = apartmentPrice * 0.90;
    //}

    console.log(`Apartment: ${(apartmentPrice * overNight).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPrice * overNight).toFixed(2)} lv.`);
}

hotelRoom(["June",
    "14"])

