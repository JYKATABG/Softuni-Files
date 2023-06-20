var num = 5;
var word = "Petka";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var user = new UserAccount("Petko", 17);
console.log("Hello guys, my name is ".concat(user.name, " and i am ").concat(user.age, " years old :)"));
var sum = 0;
function getLength(arr) {
    arr.forEach(function (x) {
        sum += x;
    });
    return sum;
}
console.log(getLength([3, 4, 5]));
