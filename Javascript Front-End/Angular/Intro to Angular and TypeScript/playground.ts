let num: number = 5;
let word: string = "Petka";

interface User {
  name: string;
  age: number;
}

class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user: User = new UserAccount("Petko", 17);
console.log(
  `Hello guys, my name is ${user.name} and i am ${user.age} years old :)`
);

let sum: number = 0;
function getLength(arr: number[]) {
  arr.forEach((x) => {
    sum += x;
  });
  return sum;
}

function searchName(names) {
  for (let name of names) {
    if (name === "Sasho") {
      names.push("Ivancho");
    }
  }
  return names.join(", ");
}

console.log(searchName(["Pesho", "Sasho", "Boris", 0, 5]));

console.log(getLength([3, 4, 5]));
