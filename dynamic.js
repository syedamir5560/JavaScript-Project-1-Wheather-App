let apiKey = "1954c0c51f5b642b68e4b67ef68b69e8";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let searchBox = document.querySelector(".search input")

let searchBtn = document.querySelector(".search button");

let weatherIcon = document.querySelector(".wheather-icon");




async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }
    else {

        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'clouds.png';
        }

        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'clear.png';
        }

        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'drizzle.png';
        }

        else if (data.weather[0].main == 'Humidity') {
            weatherIcon.src = 'humidity.png';
        }


        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'mist.png';
        }


        else if (data.weather[0].main == 'Snow') {
            weatherIcon.src = 'snow.png';
        }


        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'rain.png';
        }


        else if (data.weather[0].main == 'Wind') {
            weatherIcon.src = 'wind.png';
        }

        document.querySelector(".wheather").style.display = 'block';
        document.querySelector(".error").style.display = "none";

    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    wheather.style.display = 'block';
})

checkWeather();





