const grabBtn = document.getElementById("getCity");
var cityName = "Melbourne"
const APIKEY = "825021d5522a53177b5a5f2b72cf874e"

grabBtn.addEventListener("click", getCoordinates);

// async function getCoordinates() {
//     let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q${cityName}&appid=${APIKEY}`
//     let result = await fetch(apiUrl)
//     console.log(result);
// }

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

// async await: waiting for fetch to do its thing before we print the result