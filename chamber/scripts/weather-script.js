const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Montevideo&units=imperial&appid=c92da9c225d37c00cbc016f0f33a7e7e';
const windspeed = document.querySelector('.windspeed');


async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  
  apiFetch();

  function displayResults(weatherData){
    
    const desc = weatherData.weather[0].description.toUpperCase();
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    currentTemp.innerHTML = ((`${weatherData.main.temp}` -32) /1.8).toFixed(0);
    windspeed.innerHTML = `${weatherData.wind.speed}`;
    temperature = currentTemp
    document.querySelector('.windchill').textContent = windChill(weatherData.main.temp, weatherData.wind.speed);
    
    
    

  captionDesc.innerHTML = `<h2>${desc}</h2>`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);


  function windChill(temperature, windspeed) {
    if (temperature <=50 && windspeed >= 3){
        console.log(temperature)
        let windchill = 35.74 + 0.6215 * temperature - 35.75 * (Math.pow(windspeed, 0.16)) + 0.4275 * temperature * (Math.pow(windspeed, 0.16));
        return windchill.toFixed(1) + "°" + "F";
    } else{
        return windchill = "N/A"
    }
    
}

  
  }


  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=-34.8335&lon=-56.1674&appid=c92da9c225d37c00cbc016f0f33a7e7e`)
  .then(response => response.json())
  .then(data => {
    let forecast = data.list.filter(item => item.dt_txt.includes("12:00:00"))
    let nextThreeDays = forecast.slice(0, 3)
    
    console.log(data)
    
    nextThreeDays.forEach(day => {
      let date = new Date(day.dt * 1000).toLocaleDateString()
      let temperature =(`${day.main.temp}` / 10).toFixed(0);
      let description = day.weather[0].description.toUpperCase();
      let forecastIcon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`;
      let place = day.name
      console.log(`${date}: ${temperature}  ${forecastIcon}   ${description} ${place}`)

      


      let forecast = document.querySelector(".forecasting")
      let fores = document.createElement("div");
      let dateForecast = document.createElement("p");
      let icons = document.createElement("img");
      let temper = document.createElement("p")
      let descr = document.createElement("p");

      
      icons.setAttribute('src', forecastIcon);
      icons.setAttribute('loading', 'lazy');
      dateForecast.textContent = date;
      temper.textContent = temperature + "°C"
      descr.textContent = description

      
      fores.appendChild(icons)
      fores.appendChild(dateForecast)      
      fores.appendChild(temper)
      fores.appendChild(descr)     
      

      forecast.appendChild(fores)

    })
  })

 