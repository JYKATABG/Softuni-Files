function test(data) {

    let normal = [];
    let vip = [];
    let isParty = false;

    for(let line of data) {

        if(line === "PARTY") {
            isParty = true;
            continue;
        }

        let firstCh = line[0]
        if(!isParty) {
            if(isNaN(firstCh)) {
                normal.push(line)
            } else {
                vip.push(line)
            }
        } else {
            if(isNaN(firstCh)) {
                let index = normal.indexOf(line)
                normal.splice(index,1)
            } else {
                let index = vip.indexOf(line)
                vip.splice(index,1)
            }
        }
    }

    let count = normal.length + vip.length
    console.log(count);
    
    for(let code of vip) {
        console.log(code);
    }

    for(let code of normal) {
        console.log(code);
    }

}
test(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);

