function sortAnArrayBy2Criteria(arr) {

    let criteria = arr.sort((a,b) => {
        return a.length - b.length || a.localeCompare
    });

    criteria.forEach(element => {
        console.log(element);
    });

} 
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])