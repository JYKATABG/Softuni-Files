//Type 1
function editElement(ref,match,replacer) {
    let text = ref.textContent;
    if(text.includes(match)) {
        let edited = text.replace(match,replacer);
        ref.textContent = edited;
    }
}

//Type 2
// function editElement(ref,match,replacer) {
//     let text = ref.textContent;
//     let matched = new RegExp(match,'g');
//     let edited = text.replace(matched,replacer);
//     ref.textContent = edited;
// }