function roadRadar(speed, area) {

    switch (area) {
        case "motorway":
            let motorwayLimit = 130;
            let motorwayLimit20 = motorwayLimit + 20;
            let motorwayLimit40 = motorwayLimit + 40;
            let motorwayStatus20 = "speeding"
            let motorwayStatus40 = "excessive speeding";
            let motorwayStatus = "reckless driving"
            if (speed > motorwayLimit) {
                if (speed > motorwayLimit && speed <= motorwayLimit20) {
                    console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - ${motorwayStatus20}`);
                    break;
                } else if (speed > motorwayLimit20 && speed <= motorwayLimit40) {
                    console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - ${motorwayStatus40}`);
                    break;
                } else {
                    console.log(`The speed is ${speed - motorwayLimit} km/h faster than the allowed speed of ${motorwayLimit} - ${motorwayStatus}`);
                    break;
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
            }
            break;

        case "city":
            let cityLimit = 50;
            let cityLimit20 = cityLimit + 20;
            let cityLimit40 = cityLimit + 40;
            let cityStatus20 = "speeding"
            let cityStatus40 = "excessive speeding";
            let cityStatus = "reckless driving"
            if (speed > cityLimit) {
                if (speed > cityLimit && speed <= cityLimit20) {
                    console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - ${cityStatus20}`);
                    break;
                } else if (speed > cityLimit20 && speed <= cityLimit40) {
                    console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - ${cityStatus40}`);
                    break;
                } else {
                    console.log(`The speed is ${speed - cityLimit} km/h faster than the allowed speed of ${cityLimit} - ${cityStatus}`);
                    break;
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
            }
            break;

        case "residential":
            let residentialLimit = 20;
            let residentialLimit20 = residentialLimit + 20;
            let residentialLimit40 = residentialLimit + 40;
            let residentialStatus20 = "speeding"
            let residentialStatus40 = "excessive speeding";
            let residentialStatus = "reckless driving"
            if (speed > residentialLimit) {
                if (speed > residentialLimit && speed <= residentialLimit20) {
                    console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - ${residentialStatus20}`);
                    break;

                } else if (speed > residentialLimit20 && speed <= residentialLimit40) {
                    console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - ${residentialStatus40}`);
                    break;
                } else {
                    console.log(`The speed is ${speed - residentialLimit} km/h faster than the allowed speed of ${residentialLimit} - ${residentialStatus}`);
                    break;
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
            }
            break;

        case "interstate":
            let interstateLimit = 90;
            let interstateLimit20 = interstateLimit + 20;
            let interstateLimit40 = interstateLimit + 40;
            let interstateStatus20 = "speeding"
            let interstateStatus40 = "excessive speeding";
            let interstateStatus = "reckless driving"
            if (speed > interstateLimit) {
                if (speed > interstateLimit && speed <= interstateLimit20) {
                    console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - ${interstateStatus20}`);
                    break;

                } else if (speed > interstateLimit20 && speed <= interstateLimit40) {
                    console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - ${interstateStatus40}`);
                    break;
                } else {
                    console.log(`The speed is ${speed - interstateLimit} km/h faster than the allowed speed of ${interstateLimit} - ${interstateStatus}`);
                    break;
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
            }
            break;
    }
}
roadRadar(200, 'motorway')