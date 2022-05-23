function serialCalculator(input) {
    let name = input[0]
    let seasons = Number(input[1])
    let episodes = Number(input[2])
    let episodeTime = Number(input[3])

    let adTime = episodeTime * 0.20
    let episodeWithAd = episodeTime + adTime
    let bonusTime = seasons * 10
    
    let totalTime = episodeWithAd * episodes * seasons + bonusTime
    console.log(`Total time needed to watch the ${name} series is ${totalTime} minutes.`);
}

serialCalculator(["Game of Thrones", "7", "10", "50"])