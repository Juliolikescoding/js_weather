// define vars
var ROOT_URL = 'http://api.openweathermap.org/data/2.5/weather?zip='
var API_KEY = 'b576731816aeb0e680476dadcd9f35ab'

var title = document.querySelector(`.cityTitle`)
var zip = document.querySelector(`.zip`)
var weather = document.querySelector(`.weather`)
var icon = document.querySelector(`.icon`)
var temp = document.querySelector(`.temp`)
var humid = document.querySelector(`.humid`)
var deg = document.querySelector(`.deg`)




// difine functions
function getWeather(zipCode){
    console.log(zipCode)

}






// call function and/or addeventlisteners
zip.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        getWeather(zip.value)
    }
})