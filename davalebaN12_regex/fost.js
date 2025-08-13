let button = document.getElementById("button");
button.addEventListener("click", fostafuncshen);
const cities = [
  { code: "0000", name: "Tbilisi", color: "blue", className: "pirveli" },
  { code: "1111", name: "Qutaisi", color: "orange", className: "meroe" },
  { code: "3333", name: "Zestafoni", color: "purple", className: "mesame" },
  { code: "4433", name: "Guria", color: "teal", className: "meotxe" },
];

function fostafuncshen() {
  let textand = document.getElementById("textand");
  let input = document.getElementById("input").value.trim();
  const found = cities.find((cit) => cit.code === input);
  textand.innerHTML = "";
  let p = document.createElement("p");

  if (!/^\d+$/.test(input)) {
    p.textContent = "უნდა შეიცავდეს რიცხვს";
    p.style.color = "red";
  } else if (input.length !== 4) {
    p.textContent = "შეიყვანეთ მხოლოდ 4 რიცხვი";
    p.style.color = "red";
    p.style.textShadow = "2px 2px 3px black";
  } else if (found) {
    p.textContent = found.name;
    p.style.color = found.color;
    p.classList.add(found.className);
  } else {
    p.textContent = "მიღებულია";
    p.style.color = "green";
    p.style.textShadow = "2px 3px 2px red";
  }
  p.style.fontWeight = "bold";
  p.style.fontSize = "20px";

  textand.appendChild(p);
}


























//განმარტება ამ კოდის მხოლოდ js ნაწილი

// let button = document.getElementById("button");
// button.addEventListener("click", fostafuncshen);
// გადმოვიტანე ღილაკი და დავადე მოვლენა ამ შენთვევაში კლიკი რომლის 
//შედეგადაც უნდ ამოხდეს მოქმედება და შესარულო რაუმე ბრძანება
// const cities = [
//   { code: "0000", name: "Tbilisi", color: "blue", className: "pirveli" },
//   { code: "1111", name: "Qutaisi", color: "orange", className: "meroe" },
//   { code: "3333", name: "Zestafoni", color: "purple", className: "mesame" },
//   { code: "4433", name: "Guria", color: "teal", className: "meotxe" },
// ];
// აქ შევქმენი ობიექტი მასვში რადგან უფრო ამტივი აღსაქმელი და კოდი უფორ მოკლე ყოფილოიყო ამსუ გაკეთბა არა ერთი მეოდით შემეძლო
// switch while if else--და გამეტოლებია კონკრეტული სტრინგი და პასუხი დაებრუნებია და ასევე ობიექტითუმცა ყველაზ ეუფრო სწორი ესარის

// function fostafuncshen() 
// შევქმენი ფუნქცია რომელშიადაც რსაც დავწერ ავტომატურად მოხდება გაშვება მას შემდეგ რაც ივენთი შესრულდება
 
// let textand = document.getElementById("textand");
  // ეს არის დივი რომელშიდა ც უნდა ჩაიწეროს ველიუს მიღებული შედეგი ანუ დამწწრი დივი

  // let input = document.getElementById("input").value.trim();
  // ამომაქვს ინპუტი რაშიდაც შედის ინფორმაცია და შევმდგომ მას ვაძლევ value trim()რადგან ამოვიღო მხოლდო მისი მნიშვნელობა
  // და არა უშვალოდ ინპუტი და ასევე trim()რადგნა თავი დავიცვა სფეისებისგან და ზედმეტი ცარილეი დაგილებისგან

  // const found = cities.find((cit) => cit.code === input);
  // ვქმნი ცვლადს რომელსაც ვაძლევ მასივის პარამეტრს  find რომელიც ეძელბს პირველ თანხვედრას ელემენტშ და აბრუნებს შეესაბამის პასუხს
  // შევქმენი ფუქცია ისრისებური რომელშიდაც წაოვიღე code --ანუ გასაღები რომლებსაც მოყვება ავტომატურად თავსი მნიშვნელოვბები
  // და თუ რომელიმე დაფიქსირდება შესაბამისი ის წამოიღებს მის მნიშვნელობას === input ეს ასახავს ამას რადგან ინპუტს გაუტოლდა
  //ანუ ინპუტში ასახაული ინფორმაციასს ეძებს

  // textand.innerHTML = "";
  // ამით ხდება ინფორმაციის წაშლა რადგან მოხდეს მისი გადატვრთვა ანუ როდესაც რაიმე შესაძლოა ყოფილიუო მისი მნიშვნელობა გაიფილტრა
  // და არაფერ სარ უდრის შესაბამისად ის ცარიელია შედეგ  იქმნეება ელემენტი   let p = document.createElement("p"); პ-ტეგი
  // let p = document.createElement("p");

  // if (!/^\d+$/.test(input)) {
  //   p.textContent = "უნდა შეიცავდეს რიცხვს";
  //   p.style.color = "red";
  // } 
  // აქ მაქვს იფ რომელიც ამოწმებს იწყება თუ არა რიცხვებით რეჯექსი შემდეგ მაქვს test(input) რომელიც ამოწმებს რეჯექსისი უტყუერობას
  // და აბრუნებს შესაბამის პასუხს   p.style.color = "red"; ეს არის ახლად შექმნილი ელემენტი


  // else if (input.length !== 4) {
  //   p.textContent = "შეიყვანეთ მხოლოდ 4 რიცხვი";
  //   p.style.color = "red";
  //   p.style.textShadow = "2px 2px 3px black";
  // }
  // აქ ვითვლი ინპუტიში შეყვანილ ველიუს რომ უდორდეს 4 თუ არ უდირს მაშინ შესაბამისი ტიპის პასუხებს დააბრუნებს
  // !== ნიშნავს თუ არ უდრის

  // else if (found) {
  //   p.textContent = found.name;
  //   p.style.color = found.color;
  //   p.classList.add(found.className);
  // }
  // ამით ვეუბნები რომ წამოიღოს შესაბამისი ტიპის მნიშვნელობები რომლებიც მე შევქმენი html-ში და მივანიჭე სესაბმისი სტილები
    // const found = cities.find((cit) => cit.code === input); ეს არის აქ რომ ფუნქცია შევქმენი სწორედ მისი მნიშვნელობები 
    //მომაქვს აქ რადგან მასში ნათვქმი მაქვს რომ მტავარია coede მოძებნოს და ამ  კოდის შესაბამისი naem color   p.classList.add(found.className);
    // className დაამატოს ანუ ის ცსს ოარამეტრები რომებიც მე ჰტმლ-ში გავწერე წამოიღის pirvelo meore mesame ესენია Html-ში შექმნილი
    //კლასები რომელბიც შევინახე გასაღებ className-ში


  //   else {
  //   p.textContent = "მიღებულია";
  //   p.style.color = "green";
  //   p.style.textShadow = "2px 3px 2px red";
  // }
  // აქ ლოგიკა დავატრილე რადგან else  შეიცავ სიმართლის პარამეტრებს ასე იმიტომ მოვიქეცი რომ  უფრო მეტი ლოგიის წერა შემძლებოდა
  //if-ში რაგან ისე მხოლოდ 1 პასუხის გაცემი ს შაშვალება მქნებოდა რადგან თუ if სწორია ან არასორი მხოლოდ
  // მათ განიხილავს დანაჩენებს აღაც კი უყირებს  else if -ვგულიხმობ

  //   p.style.fontWeight = "bold";
  // p.style.fontSize = "20px";

  // textand.appendChild(p);
  // ყველაზ ესაინტერესო ამ შემთვევაშ ხდეაბ   textand.appendChild(p);  textand-ში ამ P-ჩამატება როგრც შვილობილის
  // appendChild()-ის საშვალებით

  
 