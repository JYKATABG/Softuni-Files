function movieRatings(input) {

    index = 0;
    let filmNumber = input[index]
    index++;

    let maxRatingMovie = Number.MIN_SAFE_INTEGER;
    let maxRatingMovieName = "";
    let minRatingMovie = Number.MAX_SAFE_INTEGER;
    let minRatingMovieName = "";
    let sumRating = 0;

    for(let i = 0; i < filmNumber; i++) {
        let filmName = input[index]
        index++;
        
        let rating = Number(input[index])
        index++;


        sumRating += rating;

        if(rating > maxRatingMovie) {
            maxRatingMovie = rating;
            maxRatingMovieName = filmName;
        }

        if(rating < minRatingMovie) {
            minRatingMovie = rating;
            minRatingMovieName = filmName;
        } 
    }
    console.log(`${maxRatingMovieName} is with highest rating: ${maxRatingMovie.toFixed(1)}`);
    console.log(`${minRatingMovieName} is with lowest rating: ${minRatingMovie.toFixed(1)}`);
    console.log(`Average rating: ${(sumRating / filmNumber).toFixed(1)}`);

}
movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])

