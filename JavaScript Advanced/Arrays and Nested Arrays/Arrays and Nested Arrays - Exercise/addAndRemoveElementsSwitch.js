function addAndRemoveElements(input) {

    let result = [];
    let num = 1;
    for (let command of input) {
        switch (command) {
            case "add":
                result.push(num++)
                break;
            case "remove":
                result.pop(num++);
                break;
        }
    }
    if (result.length === 0) {
        console.log("Empty");
    } else {
        console.log(result.join("\n"));
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']
)