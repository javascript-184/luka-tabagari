function todoBtn() {
  let usrInp = document.getElementById("usrInp").value.trim();
  if (usrInp === "") {
    alert("Input must be a valid string");
  } else {
    let todoData = localStorage.getItem("todoList");
    if (todoData === null) {
      let data = [];
      data.push(usrInp);

      localStorage.setItem("todoList", JSON.stringify(data));
    } else if (todoData !== null) {
      todoData = JSON.parse(todoData); // მონაცემები რახან ინახებოდა სტრიქონულ ფორმატში მოვახდინე მისი JSON ფორმატში კონვერტირება

      todoData.push(usrInp);

      localStorage.setItem("todoList", JSON.stringify(todoData));
    }
    loadTodo();
  }
}

function loadTodo() {
  let todoData = localStorage.getItem("todoList");

  if (!todoData) return;

  todoData = JSON.parse(todoData);

  let existingList = document.querySelector("ul");
  if (existingList) {
    existingList.remove();
  }

  let ul = document.createElement("ul");

  todoData.forEach((data, index) => {
    let li = document.createElement("li");
    li.textContent = data;

    let delBtn = document.createElement("button");
    delBtn.textContent = "წაშლა";
    delBtn.style.marginLeft = "10px";

    delBtn.onclick = () => {
      deleteTodo(index);
    };

    li.appendChild(delBtn);
    ul.appendChild(li);
  });

  document.body.appendChild(ul);
}

function deleteTodo(index) {
  let todoData = JSON.parse(localStorage.getItem("todoList"));
  todoData.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(todoData));
  loadTodo();
}
document.getElementById("bomb").addEventListener("click", () => {
  let bomb = document.getElementById("bomb");
  document.getElementById("usrInp").style.display = "none";
  document.getElementById("clerButton").style.display = "none";
  localStorage.removeItem("todoList");
  let existingList = document.querySelector("ul");
  if (existingList) {
    existingList.remove();
  }
  bomb.style.backgroundColor = "red";
  bomb.style.color = "white";
  bomb.style.backgroundColor = "black";
  bomb.style.textShadow = "2px 2px red";
  bomb.style.fontSize = "25px";
  bomb.style.borderRadius = "10%";
});

// // // // დავალების დამატება ნიშნავს?	სიაში ახალი ტექსტის შეტანას და ჩვენებას
// // // // იმუშავებს თუ არა სხვა HTML-ზე?	მხოლოდ მაშინ, თუ იგივე ელემენტები გაქვს ან კოდს მოარგებ
// // // // let usrInp = document.getElementById("usrInp").value.trim();
// // // // ამ შემთხვევაში კონვერტირდება usrInp მისი value-შედეგი და trim-რადგან არ მოხდეს ცარიელი ადგილის დატვება

// // // ეს იმიტომ ხდება, რომ if ამოწმებს განსაკუთრებულ მდგომარეობას,
// // // // და else ასრულებს ძირითად ლოგიკას მხოლოდ მაშინ, როცა if-ის პირობა არ შესრულდა.
// // // // else ბლოკში იმიტომ არის მეტი კოდი, რომ სწორად შეყვანილი მონაცემის
// // // // შემთხვევაში უნდა განხორციელდეს მთავარი ლოგიკა — შენახვა, ჩვენება და სხვა.
// // // // if ბლოკი კი უბრალოდ "სტოპერად" მუშაობს, თუ ცუდი მონაცემია.

// // // //აქ თუ usrInp ტოლია ცარიელი სტრინგის alertma ბრაუზერში უნ და დაბეჭდოს შესაბამისი ტექსტი
// // // //if (usrInp === "") {
// // // //     alert("Input must be a valid string");
// // // //   }

// // // // let todoData = localStorage.getItem("todoList");
// // // // if (todoData === null) {
// // // //   let data = [];
// // // //   data.push(usrInp);
// // // //აქ როდესაც  todoData უდრის null  მაშინ ცვლადი data რომელიც მასივია მასში აიტვირთება usrInp data.push(usrInp); ანუ რასაც შევიყვანთ  usrInp
// // // //გახდება მასივი რასც შევიყვანთ მასში ყვეალფერი მასივში იქნება localStorage.setItem("todoList", JSON.stringify(data)); ამით კი რაც მასში შევა ყვეალფერი
// // // //სტრინგად გადავა:

// // // // else if (todoData !== null) {
// // // //     todoData = JSON.parse(todoData); // მონაცემები რახან ინახებოდა სტრიქონულ ფორმატში მოვახდინე მისი JSON ფორმატში კონვერტირება
// // // //     todoData.push(usrInp);
// // // //     localStorage.setItem("todoList", JSON.stringify(todoData));
// // // // აქ თუ todoData არ უდრის null ანუ მასში რაიმე არის შეყვანილი ინფორმაცია მაშინ ის გახდება ნამდვილი მასვი todoData.push(usrInp); ამით კი
// // // // იტვირთება როგრც ნამდვილი მასივი: ანუ იტვირთება როგორც მასივი რამდენიც არ უნდა შევიყვანოთ მასში
// // // // localStorage.setItem("todoList", JSON.stringify(todoData));
// // // //აქ კი ისევ კონვერტირდება სტრიონგად:
// // 🔸 როდესაც პირველად ეძებ localStorage.getItem("todoList")
// // და თუ არ არსებობს "todoList" სახელით ჩანაწერი,
// // ➡️ დააბრუნებს null-ს.

// // 🔸 მაგრამ თუ არსებობს, ანუ უკვე შენახულია რაღაც (მაგ: [ "პური", "წყალი" ]),
// // ➡️ მაშინ getItem აბრუნებს სტრიქონს, და ეგ სტრიქონი არ არის null, ამიტომ გადახვალ else if ბლოკში.

// // // // // let todoData = localStorage.getItem("todoList");
// // // // if (!todoData) return;
// // // // todoData = JSON.parse(todoData);
// // // // if (!todoData) return;
// // // // 👉 ეს ნიშნავს:
// // // // თუ todoData არ არსებობს (ანუ ის არის null, undefined ან ცარიელი string "") — მაშინ:
// // // // 🔁 გამოდით ფუნქციიდან და არ გააგრძელო კოდის გაშვება.
// // // // ➡️ ეს იცავს იმას, რომ შემდეგი ხაზზე არ მოხდეს შეცდომა.

// // // // todoData = JSON.parse(todoData);
// // // // 👉 აქ todoData სტრიქონია, რომელიც JSON-ის სახითაა შენახული (მაგ. "['დავალება 1']")
// // // // ამ ხაზით:
// // // // ❗ სტრიქონი გადაკეთდება ნამდვილ JavaScript მასივად: ["დავალება 1"]
// // // // „თუ todoData არ არსებობს, ფუნქცია შეწყდეს. თუ არსებობს, მაშინ ის სტრიქონია და უნდა
// // // //  გადაკეთდეს JSON ფორმატში რეალურ მასივად, რათა შემდგომ მისი გამოყენება შევძლოთ.“

// // // // let existingList = document.querySelector("ul");
// // // //   if (existingList) {
// // // //     existingList.remove();
// // // //   }

// // // //   let ul = document.createElement("ul");

// // // // document.querySelector("ul")
// // // // ეძებს HTML-ში პირველ <ul> ელემენტს (თუ არსებობს).
// // // // if (existingList)
// // // // თუ მართლაც იპოვა <ul>, მაშინ შლის მას DOM-იდან:
// // // // ანუ თუ არის მასში Ul მაშინ  მას წაშლის ხოლო თუ არ  არის ამატებს ამით let ul = document.createElement("ul");

// // // // ანუ რომ იყოს რაიმე ul li ელემენტები მათი გარომაგება და 2 ჯერ გამოტანა რომ
// // // // არ მოხდეს მაგიტომ  ვიზღვევთ თავს და ვშლით თავიდა და შემდეგ ვქმნით
// // // //🤔რატომ ვშლით და თავიდან ვქმნით:!

// // // // როცა localStorage-დან გამოგვაქვს todo-ს სია და ვამატებთ <li>-ებს, თუ ძველი <ul> არ წავშალეთ, ძველი ელემენტები დარჩება და გაორმაგდება.

// // // // todoData.forEach((data, index) => {
// // // //     let li = document.createElement("li");
// // // //     li.textContent = data;
// // // // ამ შემთხვევაში გვაქვს მასივი რომელიც გადის  todoData ამის თითიეულ ელემენტს რაც ნიშნავს რომ რასაც მასში შევიყვანთ ყველა ელმენტს გაივლის
// // // // რადგან  todoData ში მოვათავსეთ usrInp და რასაც usrInp-ში შევიყვანთ  todoData აისახება შემდეგ  index არის ამ ელემენტების სია ანუ მაგ :
// // // // პური-0-ინდექსი წყალი-1-ინდექსი და ასე შემდეგ
// // // // todoData არის მასივი, რომელიც შენ ინახავ localStorage-ში (მაგალითად: [ "პური", "წყალი", "ზარი" ])

// // // // forEach გადის ამ მასივზე ელემენტ-ელემენტად
// // // // data ნიშნავს მიმდინარე ელემენტს (მაგ: "პური", "წყალი"...)
// // // // index ნიშნავს ამ ელემენტის ადგილმდებარეობას მასივში — ანუ:
// // // // "პური" არის index = 0
// // // // "წყალი" არის index = 1
// // // // "ზარი" არის index = 2
// // // // let li = document.createElement("li");
// // // // li.textContent = data;
// // // // ეს ნიშნავს: შექმენი <li> ტეგი და ჩაწერე მასში data-ს მნიშვნელობა, ანუ "პური" ან "წყალი".
// // // // 👉 და ბოლოს ეს li ამატებ ul სიაში.

// // // // let delBtn = document.createElement("button");
// // // // delBtn.textContent = "წაშლა";
// // // // delBtn.style.marginLeft = "10px";
// // // // ამ შემთხვევაში იქმენება  let delBtn = document.createElement("button"); ღილაკი რომელიც ამატებს მასში ტექსტს delBtn.textContent = "წაშლა";-ამატებს
// // // // შემდეგ მარჯვნივ გადადის   delBtn.style.marginLeft = "10px";

// // // // delBtn.onclick = () => {
// // // //     deleteTodo(index);
// // // //   };
// // // //   li.appendChild(delBtn);
// // // //   ul.appendChild(li);
// // // // document.body.appendChild(ul);
// // // //ამ შემთხვევაში როდესაც დავაწვებით რაც შევქმენით ღილას რომელსაც გვერით აქვს წაშლა ეს ყველაფერი ეწაიშლება მისი შვილობილი ელემენტებიანა
// // // //   ul.appendChild(li); document.body.appendChild(ul); რაც წერია
// // // // document.body.appendChild(ul);-👉 <ul> ელემენტი (სია) დაემატოს <body>-ს შიგნით, ბოლოში.
// // // //  ანუ ეს ელემენტები   let ul = document.createElement("ul") რომლებიც  ჩავამატეთ და კიდევ მასში რომ li
// // // //  let li = document.createElement("li") ჩავამატეთ ეგენი იგულისხმება რომ
// // // //ბადი ში გამოჩნდეს

// // // // function deleteTodo(index) {
// // // //     let todoData = JSON.parse(localStorage.getItem("todoList"));
// // // //     todoData.splice(index, 1);
// // // //     localStorage.setItem("todoList", JSON.stringify(todoData));
// // // //     loadTodo();
// // // //   }
// // // // ეს ფუნქცია გამოიყენება ერთ-ერთი დავალების წასაშლელად, როცა მომხმარებელი დააწვებს "წაშლა" ღილაკს. იმ შემთხვევაშ თუ იგვე ტიპის html-სტრუქტურა
// // // //აქვს
// // // //  let todoData = JSON.parse(localStorage.getItem("todoList"));
// // // // 🔹 ამ ხაზით ფუნქცია იღებს localStorage-დან შენახულ მასივს "todoList"
// // // //(სტრინგად არის შენახული) და JSON.parse-ით გარდაქმნის ნამდვილი მასივის ფორმაში.
// // // // todoData.splice(index, 1);
// // // // 🟢 ეს ნიშნავს:
// // // // "წაშალე სიის ის ელემენტი, რომელიც მისამართ index-ზეა"
// // // // მაგალითად:
// // // // თუ index = 0, წაიშლება "დავწერო კოდი"
// // // // თუ index = 1, წაიშლება "წასაკითხი წიგნი"

// // // // todoData.splice(index, 1);
// // // // შინაარსი არის:
// // // // 👉 "წაშალე ის ელემენტი, რომელიც დგას index ნომერზე"
// // // // ანუ შეესაბამება იმ ელემენტს, რომელიც გინდა რომ წაიშალოს.
// // // // ანუ index არის ის ელემენტი რომელსაც ვწწერთ შემდეგ ეს ელემენტი იშლება ზუსტად ისე როგროც უნდა წაიშლაოს აქ რომ ყოფლილიყო 1,1 მაშნ მე 2 ელემენტს
// // // //წაშლიდ არადგან პროგრამირებაში ათვლა 0 იდან იწყება

// // // // 👉 splice(index, 1) ნიშნავს: წაშალე ერთი ელემენტი ამ მისამართიდან.
// // // // localStorage.setItem("todoList", JSON.stringify(todoData));
// // // // 🟢 ეს ნიშნავს:
// // // // "განახლებული სია თავიდან შეინახე localStorage-ში"

// // // // რადგან localStorage სტრინგებს ინახავს, მასივს ისევ ვაქცევ სტრინგად JSON.stringify-ით.

// // // // loadTodo();
// // // // 🟢 ეს ეუბნება ბრაუზერს:
// // // // "ახლა თავიდან დახატე ეკრანზე განახლებული სია!"

// // ["წიგნის კითხვა", "ვარჯიში", "ნაგვის გატანა"]{

// // let todoData = JSON.parse(localStorage.getItem("todoList"));
// // აქ localStorage-დან ამოიღე "todoList" (სტრინგია!)
// // და გადააქციე ნამდვილი მასივად, რომ შეგეძლოს იმუშაო მასზე.

// // todoData.splice(index, 1);
// // აქ შლი მასივიდან მიმდინარე ინდექსზე მყოფ ელემენტს.
// // მაგალითად, index = 1, შლის "ვარჯიში"-ს.

// // localStorage.setItem("todoList", JSON.stringify(todoData));
// // ➡️ რაც დარჩა სიაში, ისევ გადააქციე სტრინგად და დაბრუნე localStorage-ში.

// // loadTodo();
// // ➡️ ხელახლა გამოიძახე ეკრანზე სია — ახალი მდგომარეობით, სადაც "ვარჯიში" უკვე აღარ არის.

// // შედეგი:
// // ძველი სია: ["წიგნის კითხვა", "ვარჯიში", "ნაგვის გატანა"]

// // deleteTodo(1) მუშაობს

// // ახალი სია: ["წიგნის კითხვა", "ნაგვის გატანა"]

// // ეგ ახალი სია ინახება და გამოისახება
// // }

// // // // let bomb = document.getElementById("bomb");
// // // // document.getElementById("usrInp").style.display = "none";
// // // // document.getElementById("clerButton").style.display = "none";
// // // // localStorage.removeItem("todoList");
// // // // let existingList = document.querySelector("ul");
// // // // if (existingList) {
// // // //   existingList.remove();
// // // // }
// // // // bomb.style.backgroundColor = "red";
// // // // bomb.style.color = "white";
// // // // bomb.style.backgroundColor = "black";
// // // // bomb.style.textShadow = "2px 2px red";
// // // // bomb.style.fontSize = "25px";
// // // // bomb.style.borderRadius = "10%";
// // // // ამ ნაწილშ იშლება ყველაფერი ერთი ღილაკზე თთის დაჭერით როგროც ლოკალ სთორიჯი ასევე სხვა html ატრიბუყტები

// function todoBtn() {
//   let usrInp = document.getElementById("usrInp").value.trim();
//   if (usrInp === "") {
//     alert("sheiyvaet teqsti");
//   } else {
//     let todoData = localStorage.getItem("todoList");
//     if (todoData === null) {
//       let data = [];
//       data.push(usrInp);
//       localStorage.setItem("todoList", JSON.stringify(data));
//     } else if (todoData !== null) {
//       todoData = JSON.parse(todoData);
//       todoData.push(usrInp);
//       localStorage.setItem("todoList", JSON.stringify(todoData));
//     }
//     loadTodo();
//   }
// }




// ეს სხვა ლოგიკაა უბრალოდ დავაამატე{
//     // { ლოგიკა როგრო შეიძლება ლოკალრად ბერვი ინფოს შენახვა და თან ასევე  ბრაუზრერში გადმოტანა
//   // // // ამის ქვემოთ არის კოდი თუ როგორ შეიძლება  წამოვიღოთ მთელი აპი ანროდესაც შევიყვანთ რაიმე ქალაქს მას მოყვება არა
// // // // კონკრეტუკი გრძედი და განედ არამედ მთელი ინფორმაცია რომელიც იმ api-ში არის რომლებიც გადმოვიტანე აქ
// // // //const location = data.results[0]; ამით ვეუბნები რომ resulte-ში რაც იქნება ყველაფერი პირველი გამოვიდეს ანუ ყველაფერი
// // // //0-ინდექსზე მდგარი ანუ რომელიც უფრო ახლოს იქნება იმ კონკრეტულ ქალაქთან თუ ქვეყანასთან ისენი ამოვიდეს
// // // // სწორედ მაგიტომაც არის 0 ინდექსი გამოყენებული რადგან ყველაზე ახლოს მდგარი ინდექსი ინფორმაცია წამოიღოს
// // // // results.innerHTML = ` ამ ნაწილს რაც შეეხება აქ ვქმნი ul li  სისტემას არარორდირებულ სიას რადგან რაც გამოვა უფრო
// // // //ლამაზი და  სინქრონულად იყოს თორე ჩევეულებრივ P ტეგშიდაც შეიძლებოდა მირებული შედეგის გამოსვლა

// // const clerButton = document
// //   .getElementById("clerButton")
// //   .addEventListener("click", todoBtn);
// // function todoBtn() {
// //   const usrInp = document.getElementById("usrInp").value.trim();
// //   const results = document.getElementById("results");

// //   fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${usrInp}`)
// //     .then((res) => res.json())
// //     .then((data) => {
// //       if (!data.results || data.results.length === 0) {
// //         alert("მონაცემები ვერ მოიძებნა");
// //         return;
// //       }
// //       const location = data.results[0];
// //       results.innerHTML = `
// //       <ol>
// //       <li style="color:black"><strong>აიდი</strong> ${location.id}</li>
// //       <li style="color:orange"><strong>ქალაქი</strong> ${location.name}</li>
// //       <li style="color:blue"><strong>გრძედი</strong> ${location.latitude}</li>
// //       <li style="color:Purple"><strong>განედი</strong> ${location.longitude}</li>
// //       <li style="color:gray"><strong>ამაღლება</strong> ${location.elevation}</li>
// //       <li style="color:Violet"><strong>ფუნქცია_კოდი</strong> ${location.feature_code}</li>
// //       <li style="color:brown"><strong>ქვეყნის კოდი</strong> ${location.country_code}</li>
// //       <li style="color:Pink"><strong>დროის სარტყელი</strong> ${location.timezone}</li>
// //       <li style="color:yellow"><strong>მოსახლეობა</strong> ${location.population}</li>
// //       <li style="color:white; text-shadow:2px 2px red;"><strong>ქვეყნის_იდენტიფიკატორი</strong> ${location.country_id}</li>
// //       <li style="color:green"><strong>ქვეყანა</strong> ${location.country}</li>
// //       </ol>
// //       `;
// //       let saved = JSON.parse(localStorage.getItem("neWboY")) || [];

// //       const alreadyExists = saved.some((item) => item.id === location.id);
// //       //ამით კონკრეტული id მოწმდება ამ api-ში და არა არის ეს ზოგადი მცნება ეს არის კონკრეტული id
// //     //   ეს ამოწმებს, არსებობს თუ არა უკვე მასივში saved ისეთი ობიექტი, რომლის id ზუსტად ემთხვევა location.id-ს.
// //     // რადგან ერათიდა იგივე 2 id ის მქონე ქვეყანა ვერ იქნება
// //     // რატომ id?
// //     // ერთი და იგივე ქალაქი ყოველთვის ექნება ერთსა და იმავე id-ს.
// //     // id არის უნიკალური იდენტიფიკატორი API-ში.
// //     // ამიტომაც შეგიძლია დაეყრდნო მხოლოდ id-ს და დარწმუნდე, რომ არ მოხდება დუბლირება.
// //     //ანუ id არის ყველაზე სანდო რადგა 2 ერთნაირი id არ იქნება
// //     // რადგან ერთი და იგივე id-ის მქონე ქვეყანა არ შეიძლება ორჯერ არსებობდეს, ამიტომ საკმარისია id-ით შევამოწმოთ!




       
// //       if (!alreadyExists) {
// //         saved.push(location); 
// //         localStorage.setItem("neWboY", JSON.stringify(saved));
// //       } 
// //       //ამ შემთხვეევაში კი ვეუბნებით თუ არ არის alreadyExists ანუ არ შეიცავ ი მოქმედებას რსაც alreadyExists აერის ასახული მაშ
// //       //მოხდეს saved.push(location); ანუ ამატება ამაში როგროც მასივი ასევე ლოკალსთორიჯიში მოოხდეს setItem-ით დამატება
// //       //სტრინგად saved-ის რაც ნიშნავს რომ newboy-ში რაც იქნება ყვეალფერი უნდა გახდეს მასივი ანუ neWboY ამის მნიშვნელობა
// //       //რადგან neWboY არის გასაღები.

// //       // //   localStorage.clear(location)
// //     })

// //     .catch((err) => {
// //       results.innerHTML = "<p>დაფიქსირდა შეცდომა</p>";
// //       console.error(err);
// //     });
// // }

// // todoBtn();

// // }
// }