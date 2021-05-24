// search movie input
var searchMovieEl = document.getElementById('movie');

// find results
var movieTitleEl = document.getElementById('title');
var movieGenreEl = document.getElementById('genre');
var moviePlotEl = document.getElementById('plot');
var movieRatingEl = document.getElementById('ratings')

function apiMovie() {
    
    // variable for movie search
    var userSearch= searchMovieEl.value;
    console.log(userSearch);
    
    // fetch API
    $.getJSON('https://www.omdbapi.com/?t=' + userSearch + '&apikey=7a94102a')
    .then(function(response){
        console.log(response);
    
    })
}