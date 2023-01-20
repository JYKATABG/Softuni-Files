let { assert } = require("chai");
let { sumOfNumbers, sum } = require("../sumOfNumbers");

describe("Testing sumOfNumbers input", () => {
    it("should return sum of an array with numbers", () => {
        assert.equal(sum([1, 2, 3, 4]), 10);
    });
});