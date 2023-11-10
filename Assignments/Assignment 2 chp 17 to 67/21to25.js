// // =================== Javascript Assignment 2 Chapter 21 to 25 ==========================

// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 21 to 25 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

// // ---------- Question-1
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// alert("Hi " + firstName + "" + lastName + "!")


// // ---------- Question-2
// let favPhone = prompt("What is your favorite phone?");
// let inputLength = favPhone.length;
// alert("My favorite phone is: " + favPhone + "\n" +  "Length of string: " + inputLength)


// // ---------- Question-3
// let string = "Pakistani";
// let indexOfN = string.indexOf("n");
// alert("String: "+ string + "\n" + "index of 'n': " +indexOfN)



// // ---------- Question-4
// let string = "Hello World";
// let indexOfL = string.lastIndexOf("l");
// alert("String: "+ string + "\n" + "last index of 'l': " + indexOfN)


// // ---------- Question-5
// let string = "Pakistani";
// let indexOf3 = string.charAt(3);
// alert("String: "+ string + "\n" + "Charecter at index 3: " +indexOf3)


// // ---------- Question-7
// let city = "Hyderabad";
// let newCity = city.replace("Hyder" , "Islam");
// console.log(newCity)




// // ---------- Question-8
// let message = ("Ali and Sami are best friends. They play cricket andfootball together.");
// let newMessage = message.replace("and" , "&")
// console.log(newMessage)


// // ---------- Question-9
// let string = "472";
// console.log("Value: " + string + "\n" + "Type: " + typeof string)
// let newString = parseInt(string);
// console.log("Value: " + newString + "\n" + "Type: " + typeof newString)


// // ---------- Question-10
// let text = prompt("Enter a word or sentence:")
// let newText = text.toLocaleUpperCase();
// console.log("User input: " + text + "\n" + "Upper case: " + newText)


// // ---------- Question-11
// let userInput = prompt("Enter a phrase:");
// function toTitleCase(sentence) {
//     return sentence.toLowerCase().replace(/\b\w/g, function(firstLetter) {
//         return firstLetter.toUpperCase();
//     });
// }
// let titleCaseInput = toTitleCase(userInput);

// console.log("Input in Title Case: " + titleCaseInput);


// // ---------- Question-12

// let num = 35.36;
// let newNum = num.toString().replace("."  ,"");
// console.log("Number:", num)
// console.log("Updated Number:", newNum)


// // ---------- Question-13

let username = prompt("Enter your username:");

function isValidUsername(username) {
    for (let i = 0; i < username.length; i++) {
        let charCode = username.charCodeAt(i);
        if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
            return false;
        }
    }
    return true;
}

if (isValidUsername(username)) {
    alert("Username is valid!");
} else {
    alert("Please enter a valid username without special symbols [@, ., !]");
}



























