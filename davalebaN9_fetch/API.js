// აქ მაქვს ის შედეგი რომლითაც შემიძილა მხოლოდ 1 ველიუში  ანუ შევიყვანო ქალაქი და შემდეგ მომცეს მისი latitude და
//longitude მონაცემებიც ასევე ქვემოთ მაქვს ცალ ცალკე ანუ ეს ეხლა გავაერთიანე თუმცა მქონდა ცალ-ცალკე როდესაც ერთ
//api ში ვიღებდი მხოლოდ გრძედს და განედს ხოლო მე 2 ში ვიღებდი რა ქალქქსაც შევიყვანდი მის ტემპერატურას ხოლო ეს 2
//შედეგ აქ არის გაერთიანებული ეხლა ავხსნი აქ რაც გავაკეთე:
// პირველ რიგში გადმოვიტანე  ინპუტები რომლებიც რომლებიც getElementById გადოვაკონვერტირე და addEventListener("click
//ამით ვუთხარუი რომ რასაც აქ დავწერ კლიკზე უნდა იმუშაოს ანუ  როდესაც დავაწვები ("cityBtn") ამას ანუ ღილაკს უნდა
//ამოქმედდეს რაც ამაშია  შეყვენილი   const resulTT = document.getElementById("resulTT"); ამით ვიღებ შედეგს საბოლოს
// const GetWather = document.getElementById("GetWather");
// GetWather.style.color = "red";
// ამით ვეუბნები რომ უბრალოდ როდესაც მოხდება დაკლიკება ეს კონკრეტული წინდადება გახდეს წითელი ფეერის
// if (!cityInput) {
//   resulTT.innerHTML = `<p style="color:red;">Please enter a city name.</p>`;
//   return;
// }
//ამით ვეუბნები რომ როდეაც  cityInput ეს არ იქნება იყოს სიმართლე ანუ თუ cityInput ცარიელია შესაბამისი მოქმედება
//გააკეთოს გააწითლოს თუ ცარიელია გამოდის რომ არის false და გააკეთებს ამას

// fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`)
// .then((response) => response.json())
// .then((data) => {
//   if (!data.results || data.results.length === 0) {
//     resulTT.innerHTML = `<p style="color:red">City not found.</p>`;
//     return;
//   }
//აქ მომაქვს api და ამ api-ში ვდებ cityInput რადგან რასაც ამაში შევიყვან ავტომატურად აისახოს api-ში ასევე
//ვაკონვერტირებ ჯსონ ფორმატში ანუ მონაცემებს ვიღებ ამით რაც შეეხება ამას !data.results || data.results.length === 0
//ვეუბნები თუ ცარიაიელია ანუ თუ არაფერს არ შევიყვანეთ ან უდრის data-მონაცემები რომლებიც ამოვიღეთ Jsnit და results
//რომელიც არის შედეგი ვეუბნებით რომ თუ ეს შედეგი უდრის 0 მაშინ ანუ როდესაც მომხმარებელმა არ შეიყვანა ქალაქი ზუსტი
//ქალაქი რომელიც არ არსებობს და ანდაც არსებობს და ის არ აღემატება 0 მაშინ დააბრუნოს ესresulTT.innerHTML = `<p style="color:red">City not found.</p>`;
// თუ data.results არ არსებობს (ანუ ვერ მოიძებნა საერთოდ)
// ან

// თუ data.results.length არის 0 (ანუ ქალაქის სია ცარიელია),

// მაშინ: მომხმარებელს აჩვენებ შეტყობინებას: "City not found." წითელი ფერით.

// const latitude = data.results[0].latitude;
//  const longitude = data.results[0].longitude;
// ამ შემთხვევააშ ვიღებთ პირველ მონაცემებს როგროც სიგრძის ასევე სიგანის პირველ მონცამებს data ანუ json-იდან ამოღებული
//შედეგი და ასევე result საბოლოო შედეგი რომელიც 0 ანუ პირველ შედეგს იღებს
// data არის ის მონაცემები, რომლებიც წამოიღე API-დან (JSON ფორმატში).
// data.results არის მასივი (array), სადაც შენახულია ქალაქების ინფორმაცია.
// data.results[0] ნიშნავს პირველ შედეგს იმ ქალაქებიდან, რომლებიც დაბრუნდა (index 0 = პირველი ელემენტი მასივში).
// data.results[0].latitude — ეს არის პირველი ქალაქის გრძედი (სადაც მდებარეობს ქალაქი დედამიწაზე).
// data.results[0].longitude — ეს არის პირველი ქალაქის გრძედი (სიგრძე დედამიწაზე).
// ასე ვამბობთ ქართულად:
// პირველივე პოვნილი ქალაქიდან ამოიღე მისი გრძედი (latitude) და გრძედი (longitude).

// fetch(
//   `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
// )
// აქ მომაქვს გრძედის და განედის api და შემდეგ ვსამ აქ ანუ ამ მთავარ api ის ფრჩხილში რადგან გაკეთდეს ზუსტად
// და მიიღოს როგროც მისი ნაწილი

// .then((response) => response.json())
// .then((weather) => {
//   const GetWather = document.getElementById("GetWather");
//   GetWather.innerHTML = `<p style="color:blue">OKey accepted</p>`;
//   GetWather.style.fontFamily = "Sofia, sans-serif";

//   resulTT.innerHTML = `
//               <p style=color:green>
//              Temperature at the longitude of ${longitude}and at the latitude of${latitude} is:${weather.current_weather.temperature}°C</p>
//           `;
// })
// ანუ აქ ვიღებთ ჯერ api ის შემდეგ გამოგვაქვს ლონგი და ლატი გრძედი და განდეს ვირებთ აპი დან და შედეგ  ვსვამთ   resulTT აქ
// fetch(...) რას აკეთებს?
// fetch აგზავნის მოთხოვნას ინტერნეტში (მაგალითად, API-ზე), რომ მოიტანოს ინფორმაცია.
// მაგრამ ინფორმაცია არ მოდის მაშინვე — უნდა დაველოდო, როდის ჩამოიტვირთება.
// ამიტომ fetch არის promises ტიპის — გპირდება: "მოვიტან ინფოს და მერე გააგრძელებ".
// .then(...) რას ნიშნავს?
// then ქართულად ნიშნავს: "შემდეგ".
// ანუ როცა fetch დასრულდება და მოიტანს პასუხს, მერე then შიგნით იწყება მუშაობა.
// JSON მონაცემებიდან იღებ საჭირო რაღაცებს — მაგალითად:
// latitude (გრძედი)
// longitude (განედი)
// temperature (ტემპერატურა)
// და მერე მათ აჩვენებ ეკრანზე.

// .catch((error) => {
//   resulTT.innerHTML = `<p style="color:red;">Error fetching weather: ${error}</p>`;
// });
// })
// .catch((error) => {
// resulTT.innerHTML = `<p style="color:red;">Error fetching city data: ${error}</p>`;
// });
// });
// როგროც ვიცით catch არის როდესაც რაღაცა არ სურლდება ან ერორია ან შეცდომა როგროც ჩევულებრივი then da catch
// აქ არს როდესაც დაოერრდება სწორდ ამას გვიჩვენებს
// catch არის მეთოდი, რომელიც ხელს უწყობს შეცდომების დამუშავებას.

// როცა რაღაც ვერ ხორციელდება (მაგალითად, ინტერნეტთან
// კავშირი არ არის ან API არ მუშაობს), catch ითვალისწინებს შეცდომას და აჩვენებს შესაბამის შეტყობინებას.
// then ჩვენთვის ამართლებს, როცა ყველაფერი კარგად ხდება.
// მაგრამ catch გადამოწმებს, თუ რამე არ არის, გამოაქვს შეცდომა და გვატყობინებს.
// error error error შეიცავს ინფორმაციას იმის შესახებ, რა არ გამოვიდა: შეიძლება ეს იყოს ინტერნეტთან დაკავშირებული პრობლემა
//  ან API-ს შეცდომა.

// შეცდომის მონიშნვა ხდება ეკრანზე, რომ მომხმარებელს გაიგოს, რა მოხდა.

document.getElementById("cityBtn").addEventListener("click", () => {
  const cityInput = document.getElementById("cityInput").value.trim();
  const resulTT = document.getElementById("resulTT");

  const GetWather = document.getElementById("GetWather");
  GetWather.style.color = "red";

  if (!cityInput) {
    resulTT.innerHTML = `<p style="color:red;">Please enter a city name.</p>`;
    return;
  }
  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.results || data.results.length === 0) {
        resulTT.innerHTML = `<p style="color:red">City not found.</p>`;
        return;
      }

      const latitude = data.results[0].latitude;
      const longitude = data.results[0].longitude;

      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      )
        .then((response) => response.json())
        .then((weather) => {
          const GetWather = document.getElementById("GetWather");
          GetWather.innerHTML = `<p style="color:blue">OKey accepted</p>`;
          GetWather.style.fontFamily = "Sofia, sans-serif";

          resulTT.innerHTML = `
                      <p style=color:green>
                     Temperature at the longitude of ${longitude}and at the latitude of${latitude} is:${weather.current_weather.temperature}°C</p>
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

// document.getElementById("cityBtn").addEventListener("click", () => {
//   const cityInput = document.getElementById("cityInput").value.trim();
//   const resulTT = document.getElementById("resulTT");

//   const GetWather = document.getElementById("GetWather");
//   GetWather.style.color = "red";

//   if (!cityInput) {
//     resulTT.innerHTML = `<p style="color:red;">Please enter a city name.</p>`;
//     return;
//   }
//   fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (!data.results || data.results.length === 0) {
//         resulTT.innerHTML = `<p style="color:red">City not found.</p>`;
//         return;
//       }

//       const latitude = data.results[0].latitude;
//       const longitude = data.results[0].longitude;

//       fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       )
//         .then((response) => response.json())
//         .then((weather) => {
//           const GetWather = document.getElementById("GetWather");
//           GetWather.innerHTML = `<p style="color:blue">OKey</p>`;
//           GetWather.style.fontFamily = "Sofia, sans-serif";

//           resulTT.innerHTML = `
//                       <p style=color:green>Temperature in ${longitude} is: ${weather.current_weather.temperature}°C</p>
//                   `;
//         })
//         .catch((error) => {
//           resulTT.innerHTML = `<p style="color:red;">Error fetching weather: ${error}</p>`;
//         });
//     })
//     .catch((error) => {
//       resulTT.innerHTML = `<p style="color:red;">Error fetching city data: ${error}</p>`;
//     });
// });

// document.getElementById("button").addEventListener("click", resolveWeatherInfo);
// function resolveWeatherInfo() {
//   let longitude = document.getElementById("longitude").value;
//   let latitude = document.getElementById("latitude").value;
//   const GetwatherBy = document.getElementById("GetwatherBy");
//   GetwatherBy.style.color = "yellow";
//   GetwatherBy.style.textShadow = "2px 3px 4px red";

//   let result = document.getElementById("result");
//   if (!longitude || !latitude) {
//     result.innerHTML = `<p style="color:red;">Fill in both fields!</p>`;
//     return;
//   }
//   fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
//     {
//       method: "GET",
//     }
//   )
//     .then((response) => response.json())
//     .then((weatherInfo) => {
//       GetwatherBy.innerHTML =
//         `<p style="color:white">accepted</p>`.toUpperCase();
//       GetwatherBy.style.fontFamily = `Coral Pixels,sans-serif`;
//       result.innerHTML = `
//           <p> Temerature at the longitute of ${longitude} and at the latitute of ${latitude} is: ${weatherInfo.current_weather.temperature} </p>

//         `;
//     });
// }

// fetch(`https://api.open-meteo.com/v1/forecast?latitude=41.7151&longitude=44.8271&current_weather=true`)
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })
