window .addEventListener("DOMContentLoaded",()=>{
       document.querySelectorAll("[id]").forEach(eweryId=>{
        eweryId.style.backgroundColor = "yellow";

    });
    document.querySelectorAll(".alert").forEach(alertElemEnt=>{
        alertElemEnt.style.border = "2px solid grey";
        alertElemEnt.style.borderRadius="5px"

    });
    document.querySelectorAll(".alert.stop").forEach(aleroRstop=>{
        aleroRstop.style.backgroundColor="red"
    });
    document.querySelectorAll(".alert.go").forEach(alerToRgo=>{
        alerToRgo.style.backgroundColor="green"
        alerToRgo.style.textShadow ="2px 2px 3px red"
        alerToRgo.style.color ="white"


    })

});
//აქ გამოვიყენე querySelectorAll რადგან ვიცით რომ მულტიფუნქციურია შემდეგ მასივებად მივაწოდე id და forEach ციკლით
//გადავუარე ყველა შესაძლო id და ამ მოქმედებით სადაც კი id იქნებოდა ყველაზე გააკეთა აქცენტი რომ მდემებოდა 
//კონკრეტული div ში არსებული Id ებიზე გადავლა მაშინ იმ დივს ავუირჩევდი და მას გადავატარებდი ციკლს.!

//რამოდენიმე წუთი ვერ გავიგე როგორ უნდა მექნა როგროც ზემოთ id ებზე მოვიქცენი ესენიც მასივში გადმქონდა თუმცა არ იყო სწორი
//ამიტომაც ცოტა დრო დამჭირდა და  .წერტილით ვეუბნები კლასზე ხოლო კიდევ ერთი ერტილით კიდევ ასე რომ ვთქვათ
//ვაბავვ 2 კლასს .alert.stop .alert.go ვეუბნები რომ სადაც ეს 2 ერთად არის გამოყენებული იქ გააკეთოს მანიპულაცია
//გააკეთოს ანუ რომელსაც 2 ივე კლასი აქვს როგროც stop ისე alert როგროც alert go ეს 2 2 კლასი ომელსაც აქვს ერთად
//იმათძე გაკეტოს მანიპულაცია!!
// ✅ დიახ, ზუსტი განმარტებაა!
// შენი კოდი სწორად მოქმედებს იმ ელემენტებზე, რომლებსაც ორივე კლასი ერთდროულად აქვთ: