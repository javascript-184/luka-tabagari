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
//ამ შემთხვევავში ლოკალსტრიჯით ამოვიღე თითეული ის პარამეტრი რომელიც ამოვიღე api-დან და ჩავამაგრე ლოკალსთორიჯიშ
// localStorage.setItem("lastCity", Windinput);
// localStorage.setItem("lastLatitude", latitude);
// localStorage.setItem("lastLongitude", longitude);
// localStorage.setItem("lastWindspeed", windspeed);
// localStorage.setItem("lastTemperature", weather);

//ამ შემთხვევეაში მონაცმებს რომლებსაც ვითღებ ვაბრუნებ თავის პირველ მდგო ბა]მარეობაში მასივს json.parse-თი
//და ამ მონაცემებს ვამატებ push ით ბოლოში ანუ ეს პარამეტრები დავამატე ვასივიში ობიექტი რადგან {-ეს გამოვიყენე
//შემდეგ აქ გასაღები მნიშვნელობის ფორმატში ვაბრუნებ ამ ყველაფერს 
//date: new Date().toLocaleString()--ამით ვიღებთ ზოგადი დროის Data-ს მონაცემებს და ამაში ვამატებთ ამით
//არაფერი არ იქნება იმის გარდა რომ ეს იბრალოდ მოგვცემს ზუსტ თარიღს და დროს თუ როდის შეიცვალა localstorage-ში
//რაიმე ტიპის ინფორმაცია
//// localStorage.setItem("Windinput",JSON.stringify(loCalstrages))-ხოლო ამით კი უკვე მასივად
//გადაკონვერტირებულად მონაცემებს ვაბრუნებთ ისევ სტრიგად რათა აღქმა მოხდეს წინააღმდეგ შემთხვევეაში ლოკალ-სტროიჯი 
//ვერ მიითრებს როგორც მასივს: 


// let loCalstrages=JSON.parse(localStorage.getItem("Windinput") || "[]")
// loCalstrages.push({
//   citi:Windinput,
//   lat:latitude,
//   long:longitude,
//   winnspeed:windspeed,
//   weather:weather,
//   date: new Date().toLocaleString()

// });
// localStorage.setItem("Windinput",JSON.stringify(loCalstrages))

// 🔹 toLocaleString() არის JavaScript-ის მეთოდი, რომელსაც ვიყენებთ იმისთვის,
//  რომ რიცხვები ან თარიღები გადავაქციოთ ტექსტად, კონკრეტული ენისა და რეგიონული ფორმატის მიხედვით (locale).

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


// // // ამის ქვემოთ არის კოდი თუ როგორ შეიძლება  წამოვიღოთ მთელი აპი ანროდესაც შევიყვანთ რაიმე ქალაქს მას მოყვება არა
// // // კონკრეტუკი გრძედი და განედ არამედ მთელი ინფორმაცია რომელიც იმ api-ში არის რომლებიც გადმოვიტანე აქ
// // //const location = data.results[0]; ამით ვეუბნები რომ resulte-ში რაც იქნება ყველაფერი პირველი გამოვიდეს ანუ ყველაფერი
// // //0-ინდექსზე მდგარი ანუ რომელიც უფრო ახლოს იქნება იმ კონკრეტულ ქალაქთან თუ ქვეყანასთან ისენი ამოვიდეს
// // // სწორედ მაგიტომაც არის 0 ინდექსი გამოყენებული რადგან ყველაზე ახლოს მდგარი ინდექსი ინფორმაცია წამოიღოს
// // // results.innerHTML = ` ამ ნაწილს რაც შეეხება აქ ვქმნი ul li  სისტემას არარორდირებულ სიას რადგან რაც გამოვა უფრო
// // //ლამაზი და  სინქრონულად იყოს თორე ჩევეულებრივ P ტეგშიდაც შეიძლებოდა მირებული შედეგის გამოსვლა

// const clerButton = document
//   .getElementById("clerButton")
//   .addEventListener("click", todoBtn);
// function todoBtn() {
//   const usrInp = document.getElementById("usrInp").value.trim();
//   const results = document.getElementById("results");

//   fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${usrInp}`)
//     .then((res) => res.json())
//     .then((data) => {
//       if (!data.results || data.results.length === 0) {
//         alert("მონაცემები ვერ მოიძებნა");
//         return;
//       }
//       const location = data.results[0];
//       results.innerHTML = `
//       <ol>
//       <li style="color:black"><strong>აიდი</strong> ${location.id}</li>
//       <li style="color:orange"><strong>ქალაქი</strong> ${location.name}</li>
//       <li style="color:blue"><strong>გრძედი</strong> ${location.latitude}</li>
//       <li style="color:Purple"><strong>განედი</strong> ${location.longitude}</li>
//       <li style="color:gray"><strong>ამაღლება</strong> ${location.elevation}</li>
//       <li style="color:Violet"><strong>ფუნქცია_კოდი</strong> ${location.feature_code}</li>
//       <li style="color:brown"><strong>ქვეყნის კოდი</strong> ${location.country_code}</li>
//       <li style="color:Pink"><strong>დროის სარტყელი</strong> ${location.timezone}</li>
//       <li style="color:yellow"><strong>მოსახლეობა</strong> ${location.population}</li>
//       <li style="color:white; text-shadow:2px 2px red;"><strong>ქვეყნის_იდენტიფიკატორი</strong> ${location.country_id}</li>
//       <li style="color:green"><strong>ქვეყანა</strong> ${location.country}</li>
//       </ol>
//       `;
//       let saved = JSON.parse(localStorage.getItem("neWboY")) || [];

//       const alreadyExists = saved.some((item) => item.id === location.id);
//       //ამით კონკრეტული id მოწმდება ამ api-ში და არა არის ეს ზოგადი მცნება ეს არის კონკრეტული id
//     //   ეს ამოწმებს, არსებობს თუ არა უკვე მასივში saved ისეთი ობიექტი, რომლის id ზუსტად ემთხვევა location.id-ს.
//     // რადგან ერათიდა იგივე 2 id ის მქონე ქვეყანა ვერ იქნება
//     // რატომ id?
//     // ერთი და იგივე ქალაქი ყოველთვის ექნება ერთსა და იმავე id-ს.
//     // id არის უნიკალური იდენტიფიკატორი API-ში.
//     // ამიტომაც შეგიძლია დაეყრდნო მხოლოდ id-ს და დარწმუნდე, რომ არ მოხდება დუბლირება.
//     //ანუ id არის ყველაზე სანდო რადგა 2 ერთნაირი id არ იქნება
//     // რადგან ერთი და იგივე id-ის მქონე ქვეყანა არ შეიძლება ორჯერ არსებობდეს, ამიტომ საკმარისია id-ით შევამოწმოთ!




       
//       if (!alreadyExists) {
//         saved.push(location); 
//         localStorage.setItem("neWboY", JSON.stringify(saved));
//       } 
//       //ამ შემთხვეევაში კი ვეუბნებით თუ არ არის alreadyExists ანუ არ შეიცავ ი მოქმედებას რსაც alreadyExists აერის ასახული მაშ
//       //მოხდეს saved.push(location); ანუ ამატება ამაში როგროც მასივი ასევე ლოკალსთორიჯიში მოოხდეს setItem-ით დამატება
//       //სტრინგად saved-ის რაც ნიშნავს რომ newboy-ში რაც იქნება ყვეალფერი უნდა გახდეს მასივი ანუ neWboY ამის მნიშვნელობა
//       //რადგან neWboY არის გასაღები.

//       // //   localStorage.clear(location)
//     })

//     .catch((err) => {
//       results.innerHTML = "<p>დაფიქსირდა შეცდომა</p>";
//       console.error(err);
//     });
// }

// todoBtn();
