let { expect } = require("chai");
let { cinema } = require("./cinema")

describe("test", () => {
    describe("showMovies", () => {
        it("happy path", () => {
            expect(cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])).to.equal("King Kong, The Tomorrow War, Joker")
        });

        it("invalid length", () => {
            expect(cinema.showMovies([])).to.equal("There are currently no movies to show.")
        });
    });

    describe("ticketPrice", () => {
        it("happy path", () => {
            expect(cinema.ticketPrice("Premiere")).to.equal(12.00)
            expect(cinema.ticketPrice("Normal")).to.equal(7.50)
            expect(cinema.ticketPrice("Discount")).to.equal(5.50)
        });

        it("invalid input", () => {
            expect(() => { cinema.ticketPrice("test") }).to.throw();
        });
    });

    describe("swapSeatsInHall", () => {
        it("happy path", () => {
            expect(cinema.swapSeatsInHall(5, 7)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(4, 20)).to.equal("Successful change of seats in the hall.");
        });

        it("numbers do not exits", () => {
            expect(cinema.swapSeatsInHall(5, "")).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall("", 5)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("numbers are not integers", () => {
            expect(cinema.swapSeatsInHall(5.23, 8)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 8.23)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5.23, 8.23)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("number greater than the capacity of the hall - 20", () => {
            expect(cinema.swapSeatsInHall(25, 8)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 34)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(27, 82)).to.equal("Unsuccessful change of seats in the hall.");
        });

        it("number less or equal 0", () => {
            expect(cinema.swapSeatsInHall(0, 8)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(0, 0)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-5, 8)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, -8)).to.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(-2, -5)).to.equal("Unsuccessful change of seats in the hall.");
        });
    });
});