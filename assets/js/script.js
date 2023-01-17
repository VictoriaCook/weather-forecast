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

const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");
const  = document.getElementById("");

// Add event listener to search button

getBtn.addEventListener("click", getCoordinates);

// async function getCoordinates() {
//     let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q${cityName}&appid=${APIKEY}`
//     let result = await fetch(apiUrl)
//     console.log(result);
// }

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

// Could've created the divs with a for loop to create and populate
// for (let i = 0; i < 4; i++) {
//     createButton = document.createElement('button');
//     createButton.id = 'buttonId'+i;
//     createButton.classList.add('mc-buttons');
//     createButton.addEventListener('click', showQuestions); 
//     quiz.appendChild(createButton);
// }