let {assert} = require("chai");
let {lookupChar} = require("../charLookup");

/*
o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
o	If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index". 
o	If both parameters have correct types and values - return the character at the specified index in the string.

*/

describe("Test lookupChar with incorrect type",() => {
    it("return undefined if the first parameter is not a string",() => {
        assert.equal(lookupChar(5,5),undefined);
    });

    it("return undefined if the second parameter is not a number",() => {
        assert.equal(lookupChar("Text","text"),undefined);
    })

    it("return undefined if the second parameter is decimal number",() => {
        assert.equal(lookupChar("Text",0.95),undefined);
    });

    it("return undefined if the first parameter is an array",() => {
        assert.equal(lookupChar([],3),undefined);
    });
});

describe("Test lookupChar with correct type but the value of the index is incorrect",() => {

    it("return Incorrect index if the index is incorrect",() => {
        assert.equal(lookupChar("Text",15),"Incorrect index");
    });

    it("return Incorrect index if the index is equal to the word",() => {
        assert.equal(lookupChar("Text",4),"Incorrect index");
    });

    it("return Incorrect index if the index is a negative number",() => {
        assert.equal(lookupChar("Text",-1),"Incorrect index");
    })
});

describe("Test lookupChar with correct types and values",() => {
    
    it("return result T with zero index",() => {
        assert.equal(lookupChar("Text",0),"T");
    });

    it("return result t with final index",() => {
        assert.equal(lookupChar("Text",3),"t");
    });
});