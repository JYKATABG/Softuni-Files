function makeADictionary(arr) {

    let dictonary = {}

    for(let el of arr) {
        let parsedText = JSON.parse(el)
        dictonary = Object.assign(dictonary,parsedText)
    }
    
    let sorted = Object.keys(dictonary)
    sorted.sort((a,b) => {
        a.localeCompare(b)
    });
    
    for(let obj of sorted) {
        let values = dictonary[obj]
        console.log(`Term: ${obj} => Definition: ${values}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])