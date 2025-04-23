document.getElementById("cityBtn").addEventListener("click", () => {
  const cityInput = document.getElementById("cityInput").value.trim();
  const resulTT = document.getElementById("resulTT");

  if (!cityInput) {
    resulTT.innerHTML = `<p style="color:red;">Please enter a city name.</p>`;
    return;
  }
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.results || data.results.length === 0) {
        resulTT.innerHTML = `<p style="color:red;">City not found.</p>`;
        return;
      }

      const latitude = data.results[0].latitude;
      const longitude = data.results[0].longitude;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then((response) => response.json())
        .then((weather) => {
          resulTT.innerHTML = `
                      <p>Temperature in ${cityInput} is: ${weather.current_weather.temperature}°C</p>
                  `;
        })
        .catch((error) => {
          resulTT.innerHTML = `<p style="color:red;">Error fetching weather: ${error}</p>`;
        });
    })
    .catch((error) => {
      resulTT.innerHTML = `<p style="color:red;">Error fetching city data: ${error}</p>`;
    });
});
function GetwaTherFUnvShen(){
  document.getElementById("cityBtn").addEventListener("click",()=>{

  })
  const cityInput = document.getElementById("cityInput").value.trim();
  const resulTT = document.getElementById("resulTT")
}
document.getElementById("button").addEventListener("click", resolveWeatherInfo);
function resolveWeatherInfo() {
  let longitude = document.getElementById("longitude").value;
  let latitude = document.getElementById("latitude").value;

  let result = document.getElementById("result");
  if (!longitude || !latitude) {
    result.innerHTML = `<p style="color:red;">Fill in both fields!</p>`;
    return;
  }
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((weatherInfo) => {
      result.innerHTML = `
          <p> Temerature at the longitute of ${longitude} and at the latitute of ${latitude} is: ${weatherInfo.current_weather.temperature} </p>

        `;
    });
}

// fetch(" fetch(`https://geocoding-api.open-meteo.com/v1/search?name=Tbilisi`)")
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })
