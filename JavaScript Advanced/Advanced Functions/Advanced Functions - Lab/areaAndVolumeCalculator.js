function solve(input, area, vol) {
    input = JSON.parse(input);

    let result = [];

    for (let content of input) {
        let calculatedArea = area.call(content)
        let calculatedVolume = vol.call(content)

        result.push({
            area: calculatedArea,
            vol: calculatedVolume
        });
    }


    return result;
}

let area = function area() {
    return Math.abs(this.x * this.y);
};


let vol = function vol() {
    return Math.abs(this.x * this.y * this.z);
};


let result = solve(`[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`,
    area,
    vol,)

console.log(JSON.stringify(result));