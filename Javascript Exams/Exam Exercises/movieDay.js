function movieDay(input) {
    let timeForPhotos = Number(input[0])
    let sceneNumber = Number(input[1])
    let sceneDuration = Number(input[2])

    let terrainTraining = timeForPhotos * 0.15
    let TimeForScene = sceneNumber * sceneDuration 
    let totalTime = terrainTraining + TimeForScene

    if(timeForPhotos >= totalTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(timeForPhotos - totalTime)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(totalTime - timeForPhotos)} minutes.`);
    }
}

movieDay(["120",
"10",
"11"])




