const { assert } = require('chai');
const { isSymmetric } = require('../checkForSymmetry');

describe('Testing isSymmetric input', () => {
    it('Should return false if the input is a string', () => {
        assert.equal(isSymmetric("asdf"), false);
    });

    it("Should return false if the input in the array is string", () => {
        assert.equal(isSymmetric([1, 2, "1"]), false);
    });

    it('should return true if the input array is 2', () => {
        assert.equal(isSymmetric([1, 2, 1]), true);
    });

    it('should return false if the input array is not symmetric', () => {

        assert.equal(isSymmetric([1, 2, 3]), false);
    });

    it("should return false if the input is number", () => {
        assert.equal(isSymmetric(2), false)
    })

    it("should return true if the array is symmetric", () => {
        assert.equal(isSymmetric([1, 2, 2, 1]), true)
    })
});