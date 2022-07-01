function test(cityInfo) {

    let person = {
        name:"Petko",
        age: 34,
    }

    person.age = null;
    console.log(person["age"]);

}
test({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
