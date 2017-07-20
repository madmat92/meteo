console.log('meteo loaded');

const key = "9f88a2b6ae107ae2edcc31a1e2b57a15";
const city = "6451981"
const url = "http://api.openweathermap.org/data/2.5/weather?appid=" + key + "&id=" + city + "&lang=fr&units=metric";
const ul = document.getElementById('meteo');

console.log(url);


function createElement(el) {
    return document.createElement(el);
}


fetch(url)
    .then(function(data) {
        return data.json();
    })
    .then(function(resp) {
        let cityName = "Ville : " + resp.name;
        let weather = "Météo : " + resp.weather[0].description;
        let clouds = "Nuages : " + resp.clouds.all + "%";
        let temp = "Température : " + resp.main.temp + " C";
        let humid = "Humidité : " + resp.main.humidity + "%";
        let els = [];
        els.push(cityName,weather,clouds,temp,humid)
        
        for(let i = 0; i< els.length; i++) {
            let d = createElement("li");
            d.innerHTML = els[i];
            ul.appendChild(d);
        }
    })
    .catch(function(error) {
        console.log(error);
    })


// html5 geolocation

var x = document.getElementById("geo");

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(show);

    }else {
        console.log('non');
    }
}

function show(pos) {
    console.log(pos);
}


getLocation();