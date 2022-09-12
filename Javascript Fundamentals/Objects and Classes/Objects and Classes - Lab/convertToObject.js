function convertToObject(JsonData) {

    let person = JSON.parse(JsonData)
    
    for(let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`);
    }

}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')