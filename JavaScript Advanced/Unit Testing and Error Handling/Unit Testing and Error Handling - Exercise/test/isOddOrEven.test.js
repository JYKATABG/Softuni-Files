let {assert} = require('chai');
let { isOddOrEven } = require('../evenOrOdd')

describe("If the passed parameter is not a string return undefined", () => {

    it("should return undefined if the passed parameter is array", () => {
        assert.equal(isOddOrEven([]),undefined);
    });

    it("return undefined if the passed parameter is empty object", () => {
        assert.equal(isOddOrEven({}),undefined);
    });

    it("return undefined if the passed parameter is object", () => {
        assert.equal(isOddOrEven({name:"Petko"}),undefined);
    })

    it("return undefined if the passed parameter is number",() => {
        assert.equal(isOddOrEven(1),undefined);
    });
});

describe("If the parameter is a string return either even or odd based on the length of the string",() => {

    it("return one where we pass a string with even length",() => {
        assert.equal(isOddOrEven("love"),"even")
    });

    it("return one where we pass a string with an odd length",() => {
        assert.equal(isOddOrEven("car"),"odd");
    });
});