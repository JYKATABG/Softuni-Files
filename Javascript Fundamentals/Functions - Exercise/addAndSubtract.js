function addAndSubtract(first, second, third) {

    let firstAndSecond = sum(first, second)
    let subtractSum = subtract(firstAndSecond, third)

    console.log(subtractSum);

    function sum(first, second) {
        return first + second
    }

    function subtract(firstAndSecond, third) {
        return firstAndSecond - third;
    }


}
addAndSubtract(1,
    17,
    30
)