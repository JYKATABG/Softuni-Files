function Person(firstName, lastName) {
    return {
        firstName,
        lastName,

        get fullName() {
            return `${this.firstName} ${this.lastName}`
        },

        set fullName(value) {
            let splited = value.split(" ");
            if (splited.length !== 2) {
                throw new Error("Not enought characters")
            }

            this.firstName = splited[0];
            this.lastName = splited[1];
        }
    }
}
let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  

