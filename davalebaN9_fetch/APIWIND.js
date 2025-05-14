// //განმარტება კოდის ამ შენთხვევში პირდაპირ აქ გავაკეთე click ზე რადგან როდესაც დავაკლიკებ პირდაპირ მაშინ დაიწყოს კოდმა მოქმდება
// //შემდეგ გადმომაქვს მონაცემები და ინპუტის შედეგი ანუ value let Windinput = document.getElementById("Windinput").value.trim();
// //შემდეგ გამომაქვს  let resulTWind = document.getElementById("resulTWind"); შედეგი და ვეუბნები რომ თუ
// //არ იქნება   if (!Windinput) ეს ანუ  ცარიელია გადავა folse ში დაშესარულებს ამას
// // resulTWind.innerHTML = `<p style="color:red">plis enter city name.</p>`;
// //შემდეგ მომაქვს  api და მასში ვდებ Windinput fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${Windinput}
// //რადგან რასაც ინუტში შევიყვან ავტომატურად აისახოს api მონაცემებში

// //ამ შემთხევეაშ ამოვიღე data და მაში არსებული resultes რომელშიდაც ინახება მონაცემები შემდეგ ვეუბნები რომ თუ ცარიელია
// // ან არ არის 0 ზე მეტი გამოუტანოს ეს resulTWind.innerHTML = `<p style="color:red">City not found.</p>`;
// // if (!data.results || data.results.length === 0) {
// //     resulTWind.innerHTML = `<p style="color:red">City not found.</p>`;
// //     return;
// //   }

// //აქ ვეუბნბეი რომ results ში ყველაზე ახლოს მდგომი გრძედი და განედი აოღოს რომელიც ყველაზე ახლოსაა
// // Windinput-ში შეყვანილ მონაცემებთან ანუ რასაც შევიყვანთ მაშში რომელ ქალაქსაც იმისასთან ყველაზე ახლოს მდგარ
// //მონაცემებს ამოიღებს
// // const latitude = data.results[0].latitude;
// // const longitude = data.results[0].longitude;
// //აქ კი ვსვამ ამოღებულ მონაცემებს ანუ რომელბიც ამოვიღე და ავტომაგტურად აისახება api-ში
// // fetch(
// //     `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
// //   )

// //ამ შემთხვეაში  ამოვიღეთ მონაცემები wather-ით და ვეუბნებით რომ შევიდეს api ში  ანუ (wather და მოძებნოს current_weather
// // და მასში მყოფი windspeed და ამოიღოს აქაც იგივე ხდება =const weather=wather.current_weather.temperature

// // then((response) => response.json())
// //         .then((wather) => {
// //           const windspeed = wather.current_weather.windspeed;
// //           const weather=wather.current_weather.temperature

// // ამ შემთხვევაშ  innerHTML ვამატებ P ტეგს რპმელშიდაც ვერთიანებ იმ მონაცემებს რომელბიც ამოვიღე ამ api დან
// // და შემდეგ ვაერთაინებ ეს ყვეალფერი მოცდება თუ ქარის სიჩაქარე ნაკლებია 20 ზე და აასევე აქვს ამას ფოტოც
// //თუ მეტია 20 და ნაკლებია 40 აგასაც ანალოგიურად innerHTML ით ხდეაბ მოქმდება და დამატება და იქქაც შესაბამისი ფოტოა
// //ისევე როგროც თუ 40 ზე მეტია ქარის სიჩქარე მაშინაც მაგას იზამს და ასევე გამოვა ფოტოც რადგან ფოტოებიც დართულიმაქვს
// //უბრალოდ აქ აღარ დავამატე მაგათი კოდი ახსნაში.
// // if (windspeed < 20)
// // resulTWind.innerHTML = `
// //         <p style="color:green">
// //         Wind speed in ${Windinput} (Lat: ${latitude}, Lon: ${longitude}) is:
// //         <strong>${windspeed} km/h  is:${weather}°C</strong>
// //         </p>

document.getElementById("Windbtn").addEventListener("click", () => {
  let Windinput = document.getElementById("Windinput").value.trim();
  let resulTWind = document.getElementById("resulTWind");
  if (!Windinput) {
    resulTWind.innerHTML = `<p style="color:red">plis enter city name.</p>`;
  }
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${Windinput}`)
    .then((responce) => responce.json())
    .then((data) => {
      if (!data.results || data.results.length === 0) {
        resulTWind.innerHTML = `<p style="color:red">City not found.</p>`;
        return;
      }

      const latitude = data.results[0].latitude;
      const longitude = data.results[0].longitude;
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then((response) => response.json())
        .then((wather) => {
          const windspeed = wather.current_weather.windspeed;
          const weather = wather.current_weather.temperature;
          localStorage.setItem("lastCity", Windinput);
          localStorage.setItem("lastLatitude", latitude);
          localStorage.setItem("lastLongitude", longitude);
          localStorage.setItem("lastWindspeed", windspeed);
          localStorage.setItem("lastTemperature", weather);
          let loCalstrages=JSON.parse(localStorage.getItem("Windinput") || "[]")
          loCalstrages.push({
            citi:Windinput,
            lat:latitude,
            long:longitude,
            winnspeed:windspeed,
            weather:weather,
            date: new Date().toLocaleString()

          });
          localStorage.setItem("Windinput",JSON.stringify(loCalstrages))

          if (windspeed < 20) {
            let GetWather = document.getElementById("GetWather");
            GetWather.style.display = "flex";
            resulTWind.innerHTML = `
                    <p style="color:green">
                    Wind speed in ${Windinput} (Lat: ${latitude}, Lon: ${longitude}) is: 
                    <strong>${windspeed} km/h  is:${weather}°C</strong>
                    </p>   
    <div style="
            background-color: green;
            padding: 10px;
            display: inline-block;
            border-radius: 100%;

            box-shadow: 2px 3px 10px red;
            animation-name: bgChange;
            animation-duration: 4s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
          ">      
           <img  src="https://w7.pngwing.com/pngs/676/835/png-transparent-wind-speed-weather-forecasting-wind-text-number-anemometer-thumbnail.png"      
           width="200px"height="150px"style="border-radius: 50%; alt="windspeed">
             </div>

            `;
          } else if (windspeed > 20 && windspeed < 40) {
            let GetWather = document.getElementById("GetWather");
            GetWather.style.display = "flex";
            resulTWind.innerHTML = `
                   <p style="color:green">
                    Wind speed in ${Windinput} (Lat: ${latitude}, Lon: ${longitude}) is: 
                    <strong>${windspeed} km/h</strong>
                    </p>
                   <div style=" 
                    background-color: red;
                    padding: 10px;
                    display: inline-block;
                    border-radius: 100%;
                    box-shadow: 2px 3px 10px red;
                    animation-name: changen2;
                    animation-duration: 4s;
                     animation-iteration-count: infinite;
                     animation-timing-function: ease-in-out;
                   ">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvVDxYxF6V1cHP8tlkfEgeaN21421D7pTethCLY6v--BIroPOX0Zv90CaI4ckvZ-wWD8&usqp=CAU"
                   width="200px"height="150px"style="border-radius: 50%; alt="windspeed">
                  </div>
                
            `;
          } else if (windspeed > 40) {
            let GetWather = document.getElementById("GetWather");
            GetWather.style.display = "flex";
            resulTWind.innerHTML = `
              <p style="color:green">
                    Wind speed in ${Windinput} (Lat: ${latitude}, Lon: ${longitude}) is: 
                    <strong>${windspeed} km/h</strong>
                </p>


                <div style=" 
                background-color: red;
                padding: 10px;
                display: inline-block;
                border-radius: 100%;
                box-shadow: 2px 3px 10px red;
                animation-name: changen3;
                animation-duration: 4s;
                 animation-iteration-count: infinite;
                 animation-timing-function: ease-in-out;
               ">  
                 <img src="https://media.istockphoto.com/id/520048558/vector/black-and-white-cartoon-storm-cloud.jpg?s=612x612&w=0&k=20&c=6pAZ4L-43r-P89-8oatmjzDgvT5ofvTZaIagquBsh8U="  
                 width="200px"height="150px"style="border-radius: 50%; alt="windspeed">
                   
                  </div>
                `;
          }
        })

        .catch((error) => {
          resulTWind.innerHTML = `<p style="color:red">Error fetching weather: ${error}</p>`;
        });
    })

    .catch((error) => {
      resulTWind.innerHTML = `<p style="color:red">Error fetching city data: ${error}</p>`;
    });
});

// // fetch(`https://api.open-meteo.com/v1/forecast?latitude=41.7151&longitude=44.8271&current_weather=true`)
// // .then(res=>res.json())
// // .then(data=>{
// //     console.log(data)
// // })

// let get = document.getElementById("resulTWind");

// // ვიღებთ არსებულ მასივს ლოკალ სთორიჯიდან ან ვქმნით ცარიელს
// let existing = JSON.parse(localStorage.getItem("daimaxsovre") || "[]");

// // ვანიჭებთ ტექსტს და სტილს
// get.style.fontSize = "33px";
// get.innerHTML = `<p>helooaaa</p>`;

// // ვამატებთ ახალ ტექსტს მასივში
// existing.push(get.textContent);

// // ვაკონსერვებთ მასივს ლოკალ სთორიჯში
// localStorage.setItem("daimaxsovre", JSON.stringify(existing));
// localStorage.clear(existing)
