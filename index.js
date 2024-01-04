const apiKey="1744b0a9cf4aa0685573a34086abf6c0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }

    else{
    document.querySelector(".error").style.display="none";
    var data=await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/cloudy.png";
    }
     else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/sun.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main =="Mist"){
        weatherIcon.src = "images/smoke.png";
    }
    document.querySelector(".weather").style.display = "block";
    }
}