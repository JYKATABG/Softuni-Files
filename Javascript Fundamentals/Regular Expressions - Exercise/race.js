function race(input) {

    let participants = input.shift().split(' ');
    let newMap = new Map()

    participants.forEach(person => {
        newMap.set(person, 0)
    })

    let letterPattern = /[A-Za-z]+/g
    let digitPattern = /\d/g

    for (let i = 0; i < input.length; i++) {

        let currentLine = input[i]

        if (currentLine === 'end of race') {
            break;
        }

        let name = currentLine.match(letterPattern).join('');
        let distance = (currentLine.match(digitPattern)).reduce((a, b) => {
            return Number(a) + Number(b)
        },0);

        if (newMap.has(name)) {

            let prevDistance = newMap.get(name)

            prevDistance += distance;

            newMap.set(name, prevDistance)

        }
    }

    let sortedArray = Array.from(newMap).sort((a, b) => {
        return b[1] - a[1];
    })

    console.log(`1st place: ${sortedArray[0][0]}`);
    console.log(`2nd place: ${sortedArray[1][0]}`);
    console.log(`3rd place: ${sortedArray[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);