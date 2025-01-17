let reSult = prompt("")
function stringToArray(testString) {
    let resulTmath = Array.from(testString)
    alert(resulTmath)
}
stringToArray(reSult)



























// // მომხმარებლის მონაცემები
// function createUserProfile(name, age, job, hobbies) {
//     // ამ ფუნქციაში ქმნის მომხმარებლის ობიექტს
//     let userProfile = {
//         name: name,
//         age: age,
//         job: job,
//         hobbies: hobbies
//     };

//     // დამატებითი ფუნქცია მომხმარებლის ასაკის შესამოწმებლად
//     userProfile.displayProfile= function() {
//         if (this.age < 18) {
//             console.log(`${this.name} - ასაკი შესაბამს არაა!`);
//         } else {
//             console.log(`მომხმარებლის სახელი: ${this.name}`);
//             console.log(`მომხმარებლის ასაკი: ${this.age}`);
//             console.log(`მომხმარებლის სამუშაო: ${this.job}`);
//             console.log(`ჰობი: ${this.hobbies.join(", ")}`);
//         }
//     };

//     return userProfile;  // ობიექტი დავაბრუნოთ
// }

// // ახალი მომხმარებლის შექმნა
// let user1 = createUserProfile("ანა", 16, "სერვისის მენეჯერი", ["მუსიკა", "პარალელური სწავლა"]);
// let user2 = createUserProfile("გიორგი", 28, "დეველოპერი", ["პროგრამირება", "პოლიტიკა"]);
// let user4 = createUserProfile("liuka", 28, "დეველოპერი", ["პროგრამირება", "პოლიტიკა"]);
// let user5 = createUserProfile("gui", 28, "დეველოპერი", ["პროგრამირება", "პოლიტიკა"]);



// // მომხმარებლის პროფილის ჩვენება
// user1.displayProfile();  // ანას პროფილი
// user2.displayProfile(); 
// user4.displayProfile();
// user5.displayProfile(); // გიორგის პროფილი
