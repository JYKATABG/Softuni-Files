function min(a,b) {
    if(a < b) {
        return a;
    } else {
        return b;
    }
}

function max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function distance(a, b) {
    return max(a, b) * min(a, b);
}

let result = distance(13,11)
console.log(result);