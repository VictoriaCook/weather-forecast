// Set up variables for API calls

const getBtn = document.getElementById("getCity");
var cityName = "Melbourne"
const APIKEY = "825021d5522a53177b5a5f2b72cf874e"
const getSearchBar = document.getElementById("searchBar");
var latitude;
var longitude;
let weather;

// Get current weather div ids to populate with weather data

const getCurrentContainer = document.getElementById("currentContainer");
const getCityDisplay = document.getElementById("cityDisplay");
const getCurrentWeatherImg = document.getElementById("currentWeatherImg");
const getTempDisplay = document.getElementById("tempDisplay");
const getWindDisplay = document.getElementById("windDisplay");
const getHumidityDisplay = document.getElementById("humidityDisplay");

// Get day 1 forecast ids to populate with weather data

const  getDay1Container= document.getElementById("day1");
const  get1Date = document.getElementById("1date");
const  get1WeatherImg = document.getElementById("1weatherImg");
const  get1TempDisplay = document.getElementById("1tempDisplay");
const  get1WindDisplay = document.getElementById("1windDisplay");
const  get1HumidityDisplay = document.getElementById("1humidityDisplay");

// Get day 2 forecast ids to populate with weather data

const  getDay2Container= document.getElementById("day2");
const  get2Date = document.getElementById("2date");
const  get2WeatherImg = document.getElementById("2weatherImg");
const  get2TempDisplay = document.getElementById("2tempDisplay");
const  get2WindDisplay = document.getElementById("2windDisplay");
const  get2HumidityDisplay = document.getElementById("2humidityDisplay");

// Get day 3 forecast ids to populate with weather data

const  getDay3Container= document.getElementById("day3");
const  get3Date = document.getElementById("3date");
const  get3WeatherImg = document.getElementById("3weatherImg");
const  get3TempDisplay = document.getElementById("3tempDisplay");
const  get3WindDisplay = document.getElementById("3windDisplay");
const  get3HumidityDisplay = document.getElementById("3humidityDisplay");

// Get day 4 forecast ids to populate with weather data

const  getDay4Container= document.getElementById("day4");
const  get4Date = document.getElementById("4date");
const  get4WeatherImg = document.getElementById("4weatherImg");
const  get4TempDisplay = document.getElementById("4tempDisplay");
const  get4WindDisplay = document.getElementById("4windDisplay");
const  get4HumidityDisplay = document.getElementById("4humidityDisplay");

// Get day 5 forecast ids to populate with weather data

const  getDay5Container= document.getElementById("day5");
const  get5Date = document.getElementById("5date");
const  get5WeatherImg = document.getElementById("5weatherImg");
const  get5TempDisplay = document.getElementById("5tempDisplay");
const  get5WindDisplay = document.getElementById("5windDisplay");
const  get5HumidityDisplay = document.getElementById("5humidityDisplay");

// Add event listener to search button

getBtn.addEventListener("click", getCoordinates);

// Coordinates API call URL: http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid={API key}

// API call URL: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function getCoordinates() {
    cityName = getSearchBar.value;
    localStorage.setItem("city", cityName);
    let apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKEY}`
    let result = fetch(apiUrl)
    .then ((result) => {
        return result.json();
    })
    .then ((data) => {
        console.log(data);
        latitude = data[0].lat;
        longitude = data[0].lon;    
        return data;
    })
    .then ((data) => {
        getWeather()
    })


}

async function getWeather() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`
    let result = await fetch(apiUrl)
    let data = await result.json();
    // .then ((result) => {
    //     return result.json();
    // })
    // .then ((data) => {
    //     console.log(data); 
    //     return data;
    // })
    console.log(data);
    displayCurrentWeather(data);
}

function displayCurrentWeather(data) {
    let cityTitle = data.city.name;
    weather = data.list[1];
    let todaysDate = weather.dt_txt;
    getCityDisplay.innerText = `${cityTitle} today (${todaysDate})`;
    getTempDisplay.innerText = `Temp: ${weather.main.temp} degrees`;
    getCurrentWeatherImg.innerHTML = weather.weather[0].icon;
    getWindDisplay.innerHTML = `Wind: ${weather.wind.speed} kph`;
    getHumidityDisplay.innerHTML = `Humidity: ${weather.main.humidity}%`;
    display5DayForecast(data);
}

function display5DayForecast(data) {
    // Display day 1 data
    
    let cityTitle = data.city.name;
    let weather1 = data.list[9];
    let newDate1 = weather1.dt_txt;
    get1Date.innerText = `${newDate1}`;
    get1TempDisplay.innerText = `Temp: ${weather1.main.temp} degrees`;
    get1WeatherImg.innerHTML = weather1.weather[0].icon;
    get1WindDisplay.innerHTML = `Wind: ${weather1.wind.speed} kph`;
    get1HumidityDisplay.innerHTML = `Humidity: ${weather1.main.humidity}%`;

    // Display day 2 data
    let weather2 = data.list[17];
    let newDate2 = weather2.dt_txt;
    get2Date.innerText = `${newDate2}`;
    get2TempDisplay.innerText = `Temp: ${weather2.main.temp} degrees`;
    get2WeatherImg.innerHTML = weather2.weather[0].icon;
    get2WindDisplay.innerHTML = `Wind: ${weather2.wind.speed} kph`;
    get2HumidityDisplay.innerHTML = `Humidity: ${weather2.main.humidity}%`;

    // Display day 3 data
    let weather3 = data.list[25];
    let newDate3 = weather3.dt_txt;
    get3Date.innerText = `${newDate3}`;
    get3TempDisplay.innerText = `Temp: ${weather3.main.temp} degrees`;
    get3WeatherImg.innerHTML = weather3.weather[0].icon;
    get3WindDisplay.innerHTML = `Wind: ${weather3.wind.speed} kph`;
    get3HumidityDisplay.innerHTML = `Humidity: ${weather3.main.humidity}%`;

    // Display day 4 data
    let weather4 = data.list[33];
    let newDate4 = weather4.dt_txt;
    get4Date.innerText = `${newDate4}`;
    get4TempDisplay.innerText = `Temp: ${weather4.main.temp} degrees`;
    get4WeatherImg.innerHTML = weather4.weather[0].icon;
    get4WindDisplay.innerHTML = `Wind: ${weather4.wind.speed} kph`;
    get4HumidityDisplay.innerHTML = `Humidity: ${weather4.main.humidity}%`;

    // Display day 5 data
    let weather5 = data.list[39];
    let newDate5 = weather5.dt_txt;
    get5Date.innerText = `${newDate5}`;
    get5TempDisplay.innerText = `Temp: ${weather5.main.temp} degrees`;
    get5WeatherImg.innerHTML = weather5.weather[0].icon;
    get5WindDisplay.innerHTML = `Wind: ${weather5.wind.speed} kph`;
    get5HumidityDisplay.innerHTML = `Humidity: ${weather5.main.humidity}%`;
}


// today's date at 12pm = data.list[2]
// = data.list[2].main
// 0-5 is today's date
// increments of 8


// Could've created the divs with a for loop to create and populate
// for (let i = 0; i < 4; i++) {
//     createButton = document.createElement('button');
//     createButton.id = 'buttonId'+i;
//     createButton.classList.add('mc-buttons');
//     createButton.addEventListener('click', showQuestions); 
//     quiz.appendChild(createButton);
// }