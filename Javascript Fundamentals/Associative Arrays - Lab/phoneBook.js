function phoneBook(input) {

    let phoneBookObj = {}

    for(let element of input ) {
        
        let [name,phone] = element.split(" ")
        phoneBookObj[name] = phone;
    }

    for(let el in phoneBookObj) {
        console.log(`${el} -> ${phoneBookObj[el]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])