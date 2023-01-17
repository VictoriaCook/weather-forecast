const getBtn = document.getElementById("getCity");
var cityName = "Melbourne"
const APIKEY = "825021d5522a53177b5a5f2b72cf874e"

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

// API call URL: api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function getCoordinates() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q${cityName}&appid=${APIKEY}`
    let result = fetch(apiUrl)
    .then ((result) => {
        console.log(result);
        return result.json();
    })
    .then ((data) => {
        console.log(data);
        return data;
    })
    

}


// async function getCoordinates() {
//     let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q${cityName}&appid=${APIKEY}`
//     let result = await fetch(apiUrl)
//     console.log(result);
// }

// Could've created the divs with a for loop to create and populate
// for (let i = 0; i < 4; i++) {
//     createButton = document.createElement('button');
//     createButton.id = 'buttonId'+i;
//     createButton.classList.add('mc-buttons');
//     createButton.addEventListener('click', showQuestions); 
//     quiz.appendChild(createButton);
// }