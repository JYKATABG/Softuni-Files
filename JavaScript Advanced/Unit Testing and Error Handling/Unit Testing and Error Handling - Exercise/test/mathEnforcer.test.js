let { assert, expect } = require("chai");
let { addFive, subtractTen, sum } = require("../mathEnforcer");



describe("Tests for this task", function () {
    //addFive() tests:
    describe("Check the addFive function input", function () {
        it("with a string - undefined", function () {
            assert.equal(addFive("5"), undefined)
        });

        it("with positive number", function () {
            assert.equal(addFive(5), 10);
        });

        it("with negative number", function () {
            assert.equal(addFive(-5), 0);
        });

        it("with floating number", function () {
            let result = addFive(3.12);
            expect(result).to.be.closeTo(8.12, 0.01)
        });
    });
    //subtractTen() tests:
    describe("Check the subtractTen function input", function () {
        it("with a string - undefined", function () {
            assert.equal(subtractTen("5"), undefined);
        });

        it("with positive number", function () {
            assert.equal(subtractTen(20), 10);
        });

        it("with negative number", function () {
            assert.equal(subtractTen(-20), -30);
        });

        it("with floating number", function () {
            // assert.equal(subtractTen(3.12), -6.88, 0.01);
            let result = subtractTen(3.12);
            expect(result).to.be.closeTo(-6.88, 0.01);
        });
    });
    //sum() tests:
    describe("Check the sum function input", function () {
        it("with a 1st input incorrect - undefined", function () {
            assert.equal(sum(1, "5"), undefined);
        });

        it("with a 2nd input incorrect - undefined", function () {
            assert.equal(sum("1", 5), undefined);
        });

        it("with positive number", function () {
            assert.equal(sum(20, 10), 30);
        });

        it("with negative number", function () {
            assert.equal(sum(-20, -10), -30);
        });

        it("with floating number", function () {
            // assert.equal(sum(3.12, 3.12), 6.24, 0.01);
            let result = sum(3.12, 3.12);
            expect(result).to.be.closeTo(6.24, 0.01)
        });

        it("with floating negative number", function () {
            // assert.equal(sum(-3.12, -3.12), -6.24, 0.01);
            let result = sum(-3.12, -3.12)
            expect(result).to.be.closeTo(-6.24, 0.01)
        });
    });
});