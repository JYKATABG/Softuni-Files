function test(input) {

    let resultObj = {}

    for(let line of input) {
        let [name,number] = line.split(" ");
        resultObj[name] = number;
    }
    
    for(let [k,v] of Object.entries(resultObj)) {
        console.log(`${k} -> ${v}`);
    }

}
test(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);

