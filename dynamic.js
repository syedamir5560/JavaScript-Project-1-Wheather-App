let apiKey="1954c0c51f5b642b68e4b67ef68b69e8";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

async function checkWeather(){
    const response=await fetch(apiUrl = `&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);


}

checkWeather();
