let { expect } = require("chai");
let { carService } = require("./carService");

describe("test", () => {
    describe("isItExpensive", () => {
        it("happy path", () => {
            expect(carService.isItExpensive("Engine")).to.equal("The issue with the car is more severe and it will cost more money");
            expect(carService.isItExpensive("Transmission")).to.equal("The issue with the car is more severe and it will cost more money");
        });
        it("invalid input", () => {
            expect(carService.isItExpensive("test")).to.equal("The overall price will be a bit cheaper");

        });
    });

    describe("discount", () => {
        it("happy path", () => {
            //15% discount
            expect(carService.discount(4, 350)).to.equal(`Discount applied! You saved 52.5$`);
            //15&% edge case 
            expect(carService.discount(7, 350)).to.equal(`Discount applied! You saved 52.5$`);
            //30% discount
            expect(carService.discount(8, 350)).to.equal(`Discount applied! You saved 105$`);

        });

        it("no discount", () => {
            expect(carService.discount(1, 200)).to.equal("You cannot apply a discount");
            expect(carService.discount(2, 200)).to.equal("You cannot apply a discount");
        });

        it("invalid input", () => {
            expect(() => carService.discount("", 200)).to.throw()
            expect(() => carService.discount(5, "")).to.throw()
        });
    });
    describe("partsToBuy", () => {
        it("happy path", () => {
            expect(carService.partsToBuy([
                //one part is available
                { part: "blowoff valve", price: 145 },
                { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145);
            //two parts are available
            expect(carService.partsToBuy([
                { part: "blowoff valve", price: 145 },
                { part: "injectors", price: 230 }], ["blowoff valve", "injectors"])).to.equal(375);
        });

        it("invalid input", () => {
            //first param is not an array
            expect(() => carService.partsToBuy("5",
                [{ part: "blowoff valve", price: 145 }])).to.throw()
            //second param is not an array
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }], "6")).to.throw();
        });

        it("empty array", () => {
            expect(carService.partsToBuy([],
                [{ part: "blowoff valve", price: 145 }])).to.equal(0);
        })
    });
});