function meow() {
    console.log(this.name + " meow");
}

function bark() {
    console.log(this.name + " bark-bark");
}



let cat = {
    name:"Puncho",
    meow:meow
}

let dog = {
    name:"Cesar",
    bark:bark
}

bark.call(dog)
