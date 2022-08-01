function pascalCaseSplitter(input) {

    let index = 1;
    let end = input.length;
    let result = [];
    let cut = 0;

    while (index < end) {
        if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {
            result.push(input.slice(cut, input.length));
            cut = index;
        }
        index++;
    }

    result.push(input.slice(cut, input.length));

    for (let i = 1; i < result.length; i++) {
        result[i - 1] = result[i - 1].replace(result[i], '');
    }
    console.log(result.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')