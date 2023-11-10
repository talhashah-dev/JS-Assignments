// // =================== Javascript Assignment 2 Chapter 17 to 20 ==========================

// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 17 to 20 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
// // ---------- Question-1
// let array = [
//     [],
//     [],
//     []
// ];
// console.log(array)
// // ---------- Question-2
// let matrixArray = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];
// console.log(matrixArray)

// // ---------- Question-3
// for (let i=1;i<=10;i++){
//     console.log(i)
// };

// // ---------- Question-4
// let number = +prompt("Enter a number to show it's multiplication table");
// let length = +prompt("Enter  length of multiplication table");
// console.log(`Multiplication table of ${number}`)
// console.log(`Length ${length}`)
// for (let i=1;i<= length;i++){
//     let result = length * i;
//     console.log(`${number} x ${i} = ${result}`)
// };

// // ---------- Question-5
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// console.log("")
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Element at index ${i} is ${fruits[i]}`);
// }


// // ---------- Question-7
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchArray() {
//     let userInput = prompt("Enter an item to search:");

//     userInput = userInput.toLowerCase();
//     if (A.includes(userInput)) {
//         alert(`"${userInput}" is found in the list.`);
//     } else {
//         alert(`"${userInput}" is not found in the list.`);
//     }
// }

// searchArray();



// // ---------- Question-8
// let A = [24, 53, 78, 91, 12];
// let largest = A[0]; 
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// console.log("The largest number in the array is: " + largest);


// // ---------- Question-9
// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];
// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// console.log("The smallest number in the array is: " + smallest);



// // ---------- Question-10
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }













