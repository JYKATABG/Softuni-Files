let { expect } = require("chai");
let { testNumbers } = require("./testNumbers");

describe("test", () => {
    describe("sumNumbers", () => {
        it("happy path", () => {
            expect(testNumbers.sumNumbers(5, 5)).to.equal("10.00");
        });
        it("invalid input", () => {
            //first parameter is string
            expect(testNumbers.sumNumbers("5", 5)).to.equal(undefined)
            //second parameter is string
            expect(testNumbers.sumNumbers(5, "5")).to.equal(undefined)
        });
    });

    describe("numberChecker", () => {
        it("happy path", () => {
            //number is even
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
        });

        it("invalid input", () => {
            expect(() => testNumbers.numberChecker("5")).to.throw;
        });

        it("the number is odd", () => {
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!');
        });
    });

    describe("averageSumArray", () => {
        it("happy path", () => {
            expect(testNumbers.averageSumArray([5, 4])).to.equal(4.5);
        });
    });
});