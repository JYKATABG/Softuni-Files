function addressBook(input) {

    let result = {}

    for(let el of input) {
        
        let [name,street] = el.split(":")
        result[name] = street; 
    }

    let entries = Object.keys(result)
    let sortedEntries = entries.sort((a,b) => a.localeCompare(b))

    for(let key of sortedEntries) {
        console.log(`${key} -> ${result[key]}`);
    }

}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])