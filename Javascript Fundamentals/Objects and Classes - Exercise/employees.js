function employees(input) {

    let myObj = {}

    for(let employe of input) {

        myObj.name = employe;
        myObj.number = employe.length;
        console.log(`Name: ${myObj.name} -- Personal Number: ${myObj.number}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);