let { expect } = require("chai")
let { chooseYourCar } = require("./chooseYourCar")

describe("test", () => {
    describe("choosingType", () => {
        it("happy path", () => {
            expect(chooseYourCar.choosingType("Sedan", "White", 2015)).to.equal(`This White Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType("Sedan", "White", 2010)).to.equal(`This White Sedan meets the requirements, that you have.`);
        });

        it("invalid year", () => {
            expect(() => chooseYourCar.choosingType("Sedan", "White", 1899)).to.throw();
            expect(() => chooseYourCar.choosingType("Sedan", "White", 2025)).to.throw();
        });

        it("invalid type", () => {
            expect(() => chooseYourCar.choosingType("test", "White", 2013)).to.throw();
        });

        it("too old car", () => {
            expect(chooseYourCar.choosingType("Sedan", "White", 2007)).to.equal(`This Sedan is too old for you, especially with that White color.`);
        });

        it("too old car,edge case", () => {
            expect(chooseYourCar.choosingType("Sedan", "White", 2007)).to.equal(`This Sedan is too old for you, especially with that White color.`);
        });
    });

    describe("brandName", () => {
        it("happy path", () => {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal("BMW, Peugeot")
        });

        it("invalid input", () => {
            //first element is not an array
            expect(() => chooseYourCar.brandName("", 3)).throw()
            expect(() => chooseYourCar.brandName(1, -3)).throw()
            expect(() => chooseYourCar.brandName({}, -3)).throw()
            //the index is not integer
            expect(() => chooseYourCar.brandName(["BMW", "Toyota"], 2.12)).throw()
            //the index is under 0
            expect(() => chooseYourCar.brandName(["BMW", "Toyota"], -3)).throw()
            //the index is outside the array length
            expect(() => chooseYourCar.brandName(["BMW", "Toyota"], 4)).throw()
        });
    });

    describe("CarFuelConsumption", () => {
        it("happy path", () => {
            expect(chooseYourCar.carFuelConsumption(80, 5)).to.equal(`The car is efficient enough, it burns 6.25 liters/100 km.`)
        });

        it("happy path, edge case", () => {
            expect(chooseYourCar.carFuelConsumption(80, 5.60)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`)
        });

        it("too much fuel", () => {
            expect(chooseYourCar.carFuelConsumption(80, 8)).to.equal(`The car burns too much fuel - 10.00 liters!`)
        });

        it("invalid input", () => {
            //distance is not a number 
            expect(() => chooseYourCar.carFuelConsumption("", 8)).to.throw();
            //fuel is not a number
            expect(() => chooseYourCar.carFuelConsumption(80, "")).to.throw();
            //distance and fuel are equal 0
            expect(() => chooseYourCar.carFuelConsumption(0, 8)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(80, 0)).to.throw();
            //distance and fuel are under 0
            expect(() => chooseYourCar.carFuelConsumption(-5, 8)).to.throw();
            expect(() => chooseYourCar.carFuelConsumption(80, -8)).to.throw();

        });
    });
});