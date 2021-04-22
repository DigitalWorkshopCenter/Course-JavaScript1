let student1 = "Byron"; // string
let student2 = "Fouzi"; // string
let student3 = "Nancy"; // string


let student1Age = 25; // number
let student2Age = 30; // number 
let student3Age = 26; // number

// let students = ["Byron", "Nancy", "Fouzi"]; // array of string
let studentAges = [25, 30, 26]; // array of numbers

let student = {
    name: "Byron",
    age: 25,
    eyeColor: "blue",
    phone: "555-555-5555"
}
student1 = { name: "Fouzi", age: 26, eyeColor: "brown", phone: "777-555-5555"}

let someVariable;

let iAmHappy = true; // true or false

// students = [student, student1]; // array of objects
// alert(students[0].name);

function computeCircleArea(radius) { // function datatype
    return Math.PI * radius * radius;
}

let area = computeCircleArea(20);
// alert("the area is: " + area);


// LOOPS!!!
// let loopBool = true;
// let count = 0;
// while(count < 5) {
//     alert("This is a simple loop");
//     count++; // count = count + 1 
// }

// for (let count = 0; count < 5; count++) {
//     alert("This is a simple loop");
// }


let students = ["Byron", "Nancy", "Fouzi"]; // array of string
               //   0      1          2
// students.length 3
for (let item in student) {
    alert(item + "  " + student[item]);

}
// let numberToGuess = 7;
// let userGuess = prompt("Please enter a number: ");

// let guessCount = 0;
// while(userGuess != numberToGuess) {
//     userGuess = prompt()
//     guessCount++;
// }
// alert("congratulations that took " + guessCount + " tries.");
