function solve(input, index) {

    for (let i = 0; i < index; i++) {
        let finalElement = input.pop();
        let rotateArray = input.unshift(finalElement);
    }
    console.log(input.join(" "));
}