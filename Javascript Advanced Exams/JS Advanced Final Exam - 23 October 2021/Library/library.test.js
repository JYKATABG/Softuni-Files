let { expect } = require("chai");
let { library } = require("./library");

describe("test", () => {
    describe("calcPriceOfBook", () => {
        it("happy path", () => {
            expect(library.calcPriceOfBook("Strah", 1999)).to.equal(`Price of Strah is 20.00`);
        });

        it("year under 1980", () => {
            expect(library.calcPriceOfBook("Strah", 1979)).to.equal(`Price of Strah is 10.00`);
        });

        it("year under 1980,edge case", () => {
            expect(library.calcPriceOfBook("Strah", 1980)).to.equal(`Price of Strah is 10.00`);
        });

        it("invalid input", () => {
            expect(() => library.calcPriceOfBook("Strah", "1980")).to.throw();
            expect(() => library.calcPriceOfBook(5, 1979)).to.throw();
            expect(() => library.calcPriceOfBook(5, "1979")).to.throw();
        });
    });

    describe("findBook", () => {
        it("happy path", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal("We found the book you want.")
        });

        it("if the array length is zero", () => {
            expect(() => library.findBook([], "Troy")).to.throw()
        });

        it("book not in the array", () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Strah")).to.equal("The book you are looking for is not here!");
        });
    });

    describe("arrangeTheBooks", () => {
        it("happy path", () => {
            expect(library.arrangeTheBooks(15)).to.equal("Great job, the books are arranged.");
        });

        it("happy path,edge case", () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });

        it("invalid input", () => {
            expect(() => library.arrangeTheBooks("5")).to.throw();
            expect(() => library.arrangeTheBooks(5.25)).to.throw();
            expect(() => library.arrangeTheBooks(-5)).to.throw();
        });

        it("more books than space", () => {
            expect(library.arrangeTheBooks(60)).to.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
});