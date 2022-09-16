function printEveryNthElementFromAnArray(input) {

    let result = [];
    let num = 1;

    input.forEach(command => {
        command === "add" ? result.push(num) : result.pop();
        num++;
    });
    return input.length === 0 ? "Empty" : result.join("\n");
}
let solve = printEveryNthElementFromAnArray(['add',
    'add',
    'remove',
    'add',
    'add']);
console.log(solve);