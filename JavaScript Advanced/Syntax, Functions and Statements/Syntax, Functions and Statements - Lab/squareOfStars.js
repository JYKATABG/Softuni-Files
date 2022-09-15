function squareOfStars(num) {

    for (let i = 0; i < num; i++) {
        let buff = '* '.repeat(num);
        console.log(buff);
    }
}
squareOfStars(5)