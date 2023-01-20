(function arrayExtension() {
    let myArr = [1,2,3];

    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {
        return this.slice(n)
    };

    Array.prototype.take = function(n) {
        return this.slice(0,n)
    }

    Array.prototype.sum = function() {
        return this.reduce((previousValue,currentValue) => previousValue + currentValue);
    }

    Array.prototype.average = function() {
        return this.sum() / this.length 
    }

    console.log(myArr.sum());

})();
arrayExtension()