const { expect } = require('chai');
const { isSymmetric } = require('../checkForSymmetry');

describe('isSymmetric', () => {
    it('Should return false if the input is not an array', () => {
        let input = "Not array";

        let result = isSymmetric(input);

        expect(result).to.be.false;
    });

    it('should return true if the input array is symmetric', () => {
        let input = [1,2,3,3,2,1];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    })

    it('should return false if the input array is not symmetric', () => {
        let input = [1,2,3,1,3,2];

        let result = isSymmetric(input);

        expect(result).to.be.false;
    })
})