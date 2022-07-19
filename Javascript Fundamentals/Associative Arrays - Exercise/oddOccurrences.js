function oddOccurrences(data) {

    let result = new Set();

    for(let line of data) {
        let [cmd,carNum] = line.split(", ");
        switch(cmd) {
            case "IN":
                result.add(carNum)
                break;
            case "OUT":
                result.delete(carNum)
                break;
        }
    }

    if(result.size === 0) {
        console.log('Parking Lot is Empty');
    }

    let sorted = Array.from(result.entries()).sort()


    for(let [key,value] of sorted) {
        console.log(key);
    }

}
oddOccurrences(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);