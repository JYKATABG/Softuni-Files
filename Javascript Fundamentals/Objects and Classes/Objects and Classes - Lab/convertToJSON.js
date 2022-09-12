function convertToJSON(name,lastName,hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    }

    let transformedPerson = JSON.stringify(person)
    console.log(transformedPerson);

}
convertToJSON('George', 'Jones', 'Brown')