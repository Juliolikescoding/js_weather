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
var convert= document.querySelector(`.convert`)
var fc


var icons ={
    "Clouds": "img/cloudy.png"
}



// difine functions
function iconSelector(weather) {
    
}
function celsToFaren(cel) {
    return Math.round((cel * 9/5) + 32)
}
function farenToCelsius(far){
    return Math.round((far - 32) * (5/9))
}
function kelvinToFaren(kelvin){
    return Math.round(kelvin * 9/5 - 459.67)
}
function getWeather(zipCode) {
    console.log(zipCode)
    $.ajax({
        type: 'GET',
        url: `${ROOT_URL}${zipCode},us&appid=${API_KEY}`,
        dataType: 'json',
        success: function (data) {
            console.log(data)
            title.textContent = data.name
            weather.textContent=data.weather[0].main
            icon.src = iconSelector(data.weather[0].main)
            temp.textContent = kelvinToFaren(data.main.temp)
            humid.textContent = data.main.humidity
            fc = "F"
        },
        error: function (error) {
            console.log("There was an error")
        }
    })
}




getWeather('33172')

// call function and/or addeventlisteners
zip.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        getWeather(zip.value)
    }
})

convert.addEventListener('click', function(e){
    if(fc === "F"){
        temp.textContent = farenToCelsius(temp.textContent)
        deg.innerHTML = " &deg; C"
        convert.textContent = "Convert to F"
        fc = "C"
    } else {
        temp.textContent = celsToFaren(temp.textContent)
        deg.innerHTML = " &deg; F"
        convert.textContent = "Convert to C"
        fc = "F"
    }
})