class List {
    constructor(array = []) {
        this.array = array.sort((a, b) => a - b);
        this.size = this.array.length;
    }


    add(element) {
        this.array.sort((a, b) => a - b);
        this.array.push(element);

        this.size++;
        return
    }

    remove(index) {
        if (index < 0 || index >= this.array.length) {
            throw new Error("Index is not valid")
        } else {
            this.array.splice(index, 1);
            this.size--;
            return
        }
    }

    get(index) {
        if (index < 0 || index >= this.array.length) {
            throw new Error("Index is not valid")
        } else {
            return this.array[index]
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size)
