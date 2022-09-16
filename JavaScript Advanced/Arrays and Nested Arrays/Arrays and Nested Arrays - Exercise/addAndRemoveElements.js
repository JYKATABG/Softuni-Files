function addAndRemoveElements(input) {

    let result = [];
    let num = 1;

    input.forEach(command => {
        command === "add" ? result.push(num) : result.pop()
        num++;
    });
    return result.length === 0 ? "Empty" : result.join("\n");
}
let elements = addAndRemoveElements(['remove',
    'remove',
    'remove'])
console.log(elements);