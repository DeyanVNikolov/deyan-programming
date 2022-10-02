function TennisRanklist(input) {
    let tournaments = Number(input[0])
    let startingPoints = Number(input[1])

    let i = 2
    let points = 0
    let wins = 0
    let loses = 0
    for (i; i <= tournaments + 1; i++) {
        let result = input[i]
        if (result == "W") {
            points += 2000
            wins++
        }
        if (result == "F") {
            points += 1200
            loses++
        }
        if (result == "SF") {
            points += 720
            loses++
        }
    }
    let averagePoints = Math.floor(points / tournaments)
    let percentWins = (wins / tournaments * 100).toFixed(2)
    let totalPoints = startingPoints + points
    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${averagePoints}`)
    console.log(`${percentWins}%`)

}

TennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])