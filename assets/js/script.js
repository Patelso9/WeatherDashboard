// search movie input
var searchLocEl = document.getElementById('location-input');

// find results
var movieCurrentEl = document.getElementById('current-weather');


function apiCurrentWeather() {
    
    // variable for movie search
    var userSearch= searchLocEl.value;
    console.log(userSearch);
    
    // fetch API
    $.getJSON('api.openweathermap.org/data/2.5/weather?q=' + userSearch + '&&appid=065c88a61393c9d19ed23b6fbcfd7819')
    .then(function(response){
        console.log(response);

        var movieTitle= document.createElement('p')
        movieTitle.textContent=response.Title
        movieTitleEl.appendChild(movieTitle)
    
    });
}

apiCurrentWeather();

// document.getElementById('location-button').addEventListener('click', apiCurrentWeather);