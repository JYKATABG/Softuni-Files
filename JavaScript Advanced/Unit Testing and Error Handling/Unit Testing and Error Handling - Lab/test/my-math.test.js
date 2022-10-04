const { expect } = require('chai')
const { sum, product } = require("../utils/my-math")

describe('sum', () => {
    it('should return correct result with array of numbers', () => {
        
    });

    it('should return NaN if input is not an array', () => {
        let text = 'Invalid array'

        let result = sum(text);

        expect(result).to.be.NaN
    });

    it('should calculate correct result with array of mixed types', () => {
        let array = [true,1,"2"];

        let result = sum(array);

        expect(result).to.be.equal(4)
    });
});