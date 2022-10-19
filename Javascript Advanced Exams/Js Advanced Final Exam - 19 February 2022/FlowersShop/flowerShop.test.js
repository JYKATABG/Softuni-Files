let { expect } = require("chai")
let { flowerShop } = require("./flowerShop");

describe("test", () => {
    describe("calcPriceOfFlowers", () => {
        it("happy path", () => {
            expect(flowerShop.calcPriceOfFlowers("roza", 5, 2)).to.equal(`You need $10.00 to buy roza!`);
        });

        it("invalid input", () => {
            expect(() => flowerShop.calcPriceOfFlowers(5, "5", "2")).to.throw;
            expect(() => flowerShop.calcPriceOfFlowers("Roza", "5", 2)).to.throw;
            expect(() => flowerShop.calcPriceOfFlowers("Roza", 5, "2")).to.throw;
        });
    });

    describe("checkFlowersAvailable", () => {
        it("happy path", () => {
            expect(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"])).to.equal("The Rose are available!");
        });

        it("missing flower in array", () => {
            expect(flowerShop.checkFlowersAvailable("Rose", ["Lily", "Orchid"])).to.equal(`The Rose are sold! You need to purchase more!`);
        });
    });

    describe("sellFlowers", () => {
        it("happy path", () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal("Rose / Orchid");
        })

        it("invalid input", () => {
            expect(() => flowerShop.sellFlowers("1", 0)).to.throw();
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1)).to.throw();
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 5)).to.throw();
        });
    });
});