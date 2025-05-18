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

// დავალების დამატება ნიშნავს?	სიაში ახალი ტექსტის შეტანას და ჩვენებას
// იმუშავებს თუ არა სხვა HTML-ზე?	მხოლოდ მაშინ, თუ იგივე ელემენტები გაქვს ან კოდს მოარგებ
// let usrInp = document.getElementById("usrInp").value.trim();
// ამ შემთხვევაში კონვერტირდება usrInp მისი value-შედეგი და trim-რადგან არ მოხდეს ცარიელი ადგილის დატვება

// ეს იმიტომ ხდება, რომ if ამოწმებს განსაკუთრებულ მდგომარეობას,
// და else ასრულებს ძირითად ლოგიკას მხოლოდ მაშინ, როცა if-ის პირობა არ შესრულდა.
// else ბლოკში იმიტომ არის მეტი კოდი, რომ სწორად შეყვანილი მონაცემის
// შემთხვევაში უნდა განხორციელდეს მთავარი ლოგიკა — შენახვა, ჩვენება და სხვა.
// if ბლოკი კი უბრალოდ "სტოპერად" მუშაობს, თუ ცუდი მონაცემია.

//აქ თუ usrInp ტოლია ცარიელი სტრინგის alertma ბრაუზერში უნ და დაბეჭდოს შესაბამისი ტექსტი
//if (usrInp === "") {
//     alert("Input must be a valid string");
//   }

// let todoData = localStorage.getItem("todoList");
// if (todoData === null) {
//   let data = [];
//   data.push(usrInp);
//აქ როდესაც  todoData უდრის null  მაშინ ცვლადი data რომელიც მასივია მასში აიტვირთება usrInp data.push(usrInp); ანუ რასაც შევიყვანთ  usrInp  
//გახდება მასივი რასც შევიყვანთ მასში ყვეალფერი მასივში იქნება localStorage.setItem("todoList", JSON.stringify(data)); ამით კი რაც მასში შევა ყვეალფერი
//სტრინგად გადავა:



// else if (todoData !== null) {
//     todoData = JSON.parse(todoData); // მონაცემები რახან ინახებოდა სტრიქონულ ფორმატში მოვახდინე მისი JSON ფორმატში კონვერტირება
//     todoData.push(usrInp);
//     localStorage.setItem("todoList", JSON.stringify(todoData));
// აქ თუ todoData არ უდრის null ანუ მასში რაიმე არის შეყვანილი ინფორმაცია მაშინ ის გახდება ნამდვილი მასვი todoData.push(usrInp); ამით კი
// იტვირთება როგრც ნამდვილი მასივი: ანუ იტვირთება როგორც მასივი რამდენიც არ უნდა შევიყვანოთ მასში 
// localStorage.setItem("todoList", JSON.stringify(todoData));
//აქ კი ისევ კონვერტირდება სტრიონგად:



// // let todoData = localStorage.getItem("todoList");
// if (!todoData) return;
// todoData = JSON.parse(todoData);
// if (!todoData) return;
// 👉 ეს ნიშნავს:
// თუ todoData არ არსებობს (ანუ ის არის null, undefined ან ცარიელი string "") — მაშინ:
// 🔁 გამოდით ფუნქციიდან და არ გააგრძელო კოდის გაშვება.
// ➡️ ეს იცავს იმას, რომ შემდეგი ხაზზე არ მოხდეს შეცდომა.

// todoData = JSON.parse(todoData);
// 👉 აქ todoData სტრიქონია, რომელიც JSON-ის სახითაა შენახული (მაგ. "['დავალება 1']")
// ამ ხაზით:
// ❗ სტრიქონი გადაკეთდება ნამდვილ JavaScript მასივად: ["დავალება 1"]
// „თუ todoData არ არსებობს, ფუნქცია შეწყდეს. თუ არსებობს, მაშინ ის სტრიქონია და უნდა
//  გადაკეთდეს JSON ფორმატში რეალურ მასივად, რათა შემდგომ მისი გამოყენება შევძლოთ.“



// let existingList = document.querySelector("ul");
//   if (existingList) {
//     existingList.remove();
//   }

//   let ul = document.createElement("ul");

// document.querySelector("ul")
// ეძებს HTML-ში პირველ <ul> ელემენტს (თუ არსებობს).
// if (existingList)
// თუ მართლაც იპოვა <ul>, მაშინ შლის მას DOM-იდან:
// ანუ თუ არის მასში Ul მაშინ  მას წაშლის ხოლო თუ არ  არის ამატებს ამით let ul = document.createElement("ul");

// ანუ რომ იყოს რაიმე ul li ელემენტები მათი გარომაგება და 2 ჯერ გამოტანა რომ 
// არ მოხდეს მაგიტომ  ვიზღვევთ თავს და ვშლით თავიდა და შემდეგ ვქმნით
//🤔რატომ ვშლით და თავიდან ვქმნით:!

// როცა localStorage-დან გამოგვაქვს todo-ს სია და ვამატებთ <li>-ებს, თუ ძველი <ul> არ წავშალეთ, ძველი ელემენტები დარჩება და გაორმაგდება.


// todoData.forEach((data, index) => {
//     let li = document.createElement("li");
//     li.textContent = data;
// ამ შემთხვევაში გვაქვს მასივი რომელიც გადის  todoData ამის თითიეულ ელემენტს რაც ნიშნავს რომ რასაც მასში შევიყვანთ ყველა ელმენტს გაივლის
// რადგან  todoData ში მოვათავსეთ usrInp და რასაც usrInp-ში შევიყვანთ  todoData აისახება შემდეგ  index არის ამ ელემენტების სია ანუ მაგ :
// პური-0-ინდექსი წყალი-1-ინდექსი და ასე შემდეგ
// todoData არის მასივი, რომელიც შენ ინახავ localStorage-ში (მაგალითად: [ "პური", "წყალი", "ზარი" ])

// forEach გადის ამ მასივზე ელემენტ-ელემენტად
// data ნიშნავს მიმდინარე ელემენტს (მაგ: "პური", "წყალი"...)
// index ნიშნავს ამ ელემენტის ადგილმდებარეობას მასივში — ანუ:
// "პური" არის index = 0
// "წყალი" არის index = 1
// "ზარი" არის index = 2
// let li = document.createElement("li");
// li.textContent = data;
// ეს ნიშნავს: შექმენი <li> ტეგი და ჩაწერე მასში data-ს მნიშვნელობა, ანუ "პური" ან "წყალი".
// 👉 და ბოლოს ეს li ამატებ ul სიაში.

// let delBtn = document.createElement("button");
// delBtn.textContent = "წაშლა";
// delBtn.style.marginLeft = "10px";
// ამ შემთხვევაში იქმენება  let delBtn = document.createElement("button"); ღილაკი რომელიც ამატებს მასში ტექსტს delBtn.textContent = "წაშლა";-ამატებს
// შემდეგ მარჯვნივ გადადის   delBtn.style.marginLeft = "10px";

// delBtn.onclick = () => {
//     deleteTodo(index);
//   };
//   li.appendChild(delBtn);
//   ul.appendChild(li);
// document.body.appendChild(ul);
//ამ შემთხვევაში როდესაც დავაწვებით რაც შევქმენით ღილას რომელსაც გვერით აქვს წაშლა ეს ყველაფერი ეწაიშლება მისი შვილობილი ელემენტებიანა
//   ul.appendChild(li); document.body.appendChild(ul); რაც წერია
// document.body.appendChild(ul);-👉 <ul> ელემენტი (სია) დაემატოს <body>-ს შიგნით, ბოლოში.
//  ანუ ეს ელემენტები   let ul = document.createElement("ul") რომლებიც  ჩავამატეთ და კიდევ მასში რომ li
//  let li = document.createElement("li") ჩავამატეთ ეგენი იგულისხმება რომ
//ბადი ში გამოჩნდეს

// function deleteTodo(index) {
//     let todoData = JSON.parse(localStorage.getItem("todoList"));
//     todoData.splice(index, 1);
//     localStorage.setItem("todoList", JSON.stringify(todoData));
//     loadTodo();
//   }
// ეს ფუნქცია გამოიყენება ერთ-ერთი დავალების წასაშლელად, როცა მომხმარებელი დააწვებს "წაშლა" ღილაკს. იმ შემთხვევაშ თუ იგვე ტიპის html-სტრუქტურა
//აქვს
//  let todoData = JSON.parse(localStorage.getItem("todoList"));
// 🔹 ამ ხაზით ფუნქცია იღებს localStorage-დან შენახულ მასივს "todoList" 
//(სტრინგად არის შენახული) და JSON.parse-ით გარდაქმნის ნამდვილი მასივის ფორმაში.
// todoData.splice(index, 1);
// 🟢 ეს ნიშნავს:
// "წაშალე სიის ის ელემენტი, რომელიც მისამართ index-ზეა"
// მაგალითად:
// თუ index = 0, წაიშლება "დავწერო კოდი"
// თუ index = 1, წაიშლება "წასაკითხი წიგნი"

// todoData.splice(index, 1);
// შინაარსი არის:
// 👉 "წაშალე ის ელემენტი, რომელიც დგას index ნომერზე"
// ანუ შეესაბამება იმ ელემენტს, რომელიც გინდა რომ წაიშალოს.
// ანუ index არის ის ელემენტი რომელსაც ვწწერთ შემდეგ ეს ელემენტი იშლება ზუსტად ისე როგროც უნდა წაიშლაოს აქ რომ ყოფლილიყო 1,1 მაშნ მე 2 ელემენტს
//წაშლიდ არადგან პროგრამირებაში ათვლა 0 იდან იწყება

// 👉 splice(index, 1) ნიშნავს: წაშალე ერთი ელემენტი ამ მისამართიდან.
// localStorage.setItem("todoList", JSON.stringify(todoData));
// 🟢 ეს ნიშნავს:
// "განახლებული სია თავიდან შეინახე localStorage-ში"

// რადგან localStorage სტრინგებს ინახავს, მასივს ისევ ვაქცევ სტრინგად JSON.stringify-ით.

// loadTodo();
// 🟢 ეს ეუბნება ბრაუზერს:
// "ახლა თავიდან დახატე ეკრანზე განახლებული სია!"

// let bomb = document.getElementById("bomb");
// document.getElementById("usrInp").style.display = "none";
// document.getElementById("clerButton").style.display = "none";
// localStorage.removeItem("todoList");
// let existingList = document.querySelector("ul");
// if (existingList) {
//   existingList.remove();
// }
// bomb.style.backgroundColor = "red";
// bomb.style.color = "white";
// bomb.style.backgroundColor = "black";
// bomb.style.textShadow = "2px 2px red";
// bomb.style.fontSize = "25px";
// bomb.style.borderRadius = "10%";
// ამ ნაწილშ იშლება ყველაფერი ერთი ღილაკზე თთის დაჭერით როგროც ლოკალ სთორიჯი ასევე სხვა html ატრიბუყტები 