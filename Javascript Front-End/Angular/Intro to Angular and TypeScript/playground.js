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
function searchName(names, _a) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (name_1 === "Sasho") {
            names.push("Ivancho");
        }
    }
    return names.join(", ");
}
function welcomeTravelers(name) {
    if (Array.isArray(name)) {
        console.log("Hello, ".concat(name.join(" and ")));
    }
    else {
        console.log("Hello alone traveler");
    }
}
function printCoord(pt) {
    console.log("The coordenate's x is ".concat(pt.x));
    console.log("The coordenate's x is ".concat(pt.y));
}
printCoord({ x: 5, y: 15 });
// welcomeTravelers(["Petko", "Pesho"]);
// console.log(searchName(["Pesho", "Sasho", "Boris"]));
// console.log(getLength([3, 4, 5]));
