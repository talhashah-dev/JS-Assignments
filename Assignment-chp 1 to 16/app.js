// // =================== Javascript Assignment 1 Chapter 1 to 16 ==========================

// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 1 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
// // Question-1
// alert("Welcome!");

// // Question-2
// alert("Error! Please a valid password.");

// // Question-3
// alert("Welcome to JS Land...\nHappy Coding!");

// // Question-4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");
// // ********* The checkbox in the alert is shown by the browser to avoid repetitive alerts to the user or maybe it's a custome alert *********

// // Question-5
// console.log("Hello... I can run JS through my web browser's console");



// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 2 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
// // Question-1
// let userName;

// // Question-2
// let myName= "Syed Talha";

// // Question-3
// let message="Hello World!";
// alert(message);

// // Question-4
// let studentName = "John Doe";
// let studentAge = "15 years old";
// let certifiedIn = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(certifiedIn);

// // Question-5
// let pizzaMessage = "PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(pizzaMessage)

// // Question-6
// let email = "syedt.in00@gmail.com"
// alert("My email address is " + email)

// // Question-7
// let book="A smarter\nway to learn JavaScript."
// alert("I am trying to learn from the Book " + book)

// // Question-8
// document.write("Yah! I can write HTML content through JavaScript");

// // Question-9
// let symbols = ("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// document.write(symbols)



// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 3 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

// // Question-1
// let age = 19;
// alert("I am " + age + " years old")

// // Question-2
// let userVisit = 10;
// alert("You have visited this page " + userVisit + " times")

// // Question-3
// let birthYear = 2004;
// document.writeln("My birth year is " + birthYear + "<br>");
// document.writeln("Data type of my declared Variable is " + typeof birthYear);

// // Question-4
// let userName = "Ali";
// let productName = " T-shirt"
// let quantity = 5;
// document.write(userName + " Ordered " + quantity + productName + "(s)" + " on A.B Clothing store.")



// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 4 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

// // Question-1
// let variable1, variable2, variable3;

// // Question-2
// // -- Legal Names --
// // 1.camelCase
// // 2.variable3
// // 3.user_full_name
// // 4.Name
// // 5.$amount

// // -- Illegal Names --
// // 1.12variable (variable names can't start with numbers)
// // 2.my-name (hyphen not allowed)
// // 3.my name (space not allowed)
// // 4.alert (alert is reserved keyword in js)
// // 5.for (for is also a reserved kewyord)

// // Question-3
// document.write("<h3>" + "Rules for naming JS variables" + "</h3>")
// document.write("a) Variable names can only contain numbers, $ and _ . for example: $my_1stVariable" + "<br>")
// document.write("b) Variables must begin with a $ , _ or letter. For example: $name, _name or name" + "<br>")
// document.write("c) Variable names are case sensitive." + "<br>")
// document.write("d) Variable names should not be JS keywords" + "<br>")



// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 5 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

// // Question-1
// // -- Addition -- 
// let num1 = 3;
// let num2 = 8;
// let num3 = num1 +  num2;
// document.write("Addition: " + num1 + " + " + num2 + "=" + num3)  

// // Question-2
// // -- Subtraction -- 
// let num1 = 10;
// let num2 = 3;
// let num3 = num1 -  num2;
// document.write("Subtraction: " + num1 + " - " + num2 + "=" + num3)  

// // -- Multiplication -- 
// let num1 = 10;
// let num2 = 3;
// let num3 = num1 *  num2;
// document.write("Multiplication: " + num1 + " * " + num2 + "=" + num3)  

// // -- Division -- 
// let num1 = 10;
// let num2 = 2;
// let num3 = num1 /  num2;
// document.write("Division: " + num1 + " / " + num2 + "=" + num3)  

// // -- Modulus -- 
// let num1 = 10;
// let num2 = 2;
// let num3 = num1 %  num2;
// document.write("Division: " + num1 + " % " + num2 + "=" + num3)  

// // Question-3
// var myVariable;
// document.write("Value after variable declaration is: " + myVariable + "<br>");
// myVariable = 5;
// document.write("Initial value: " + myVariable + "<br>");
// myVariable++;
// document.write("Value after increment is: " + myVariable + "<br>");
// myVariable += 7;
// document.write("Value after addition is: " + myVariable + "<br>");
// myVariable--;
// document.write("Value after decrement is: " + myVariable + "<br>");
// var remainder = myVariable % 3;
// document.write("The remainder is: " + remainder + "<br>");

// // Question-4
// let cost = 600;
// let quantity = 5;
// let total = quantity * cost;
// document.write("Total cost to buy " + quantity + " tickets to a movie is " + total + "PKR" )

// // Question-5
// let tableOf = 5;
// document.write("<h3>" + "Table of " + tableOf + "</h3>")
// document.write(tableOf + " x 1= " + tableOf*1 + "<br>")
// document.write(tableOf + " x 2= " + tableOf*2 + "<br>")
// document.write(tableOf + " x 3= " + tableOf*3 + "<br>")
// document.write(tableOf + " x 4= " + tableOf*4 + "<br>")
// document.write(tableOf + " x 5= " + tableOf*5 + "<br>")
// document.write(tableOf + " x 6= " + tableOf*6 + "<br>")
// document.write(tableOf + " x 7= " + tableOf*7 + "<br>")
// document.write(tableOf + " x 8= " + tableOf*8 + "<br>")
// document.write(tableOf + " x 9= " + tableOf*9 + "<br>")
// document.write(tableOf + " x 10= " + tableOf*10 + "<br>")
// document.write(tableOf + " x 11= " + tableOf*11 + "<br>")
// document.write(tableOf + " x 12= " + tableOf*12 + "<br>")

// // Question-6
// let c = 25;
// let cTof = (c*9/5)+32;
// let f = 70;
// let fToC = (f-32)*5/9;
// document.write(c + "<sup>0</sup>C is " + cTof + "<sup>o</sup>F" + "<br>")
// document.write(f + "<sup>0</sup>F is " + fToC + "<sup>o</sup>C" + "<br>")

// // Question-7
// let priceItem1 = 650;
// let priceItem2 = 150;
// let quantityItem1 = 4;
// let quantityItem2 = 5;
// let subTotalItem1 = quantityItem1*priceItem1;
// let subTotalItem2 = quantityItem2*priceItem2;
// let shippingCharges = 150;
// let totalAmount = subTotalItem1+subTotalItem2+shippingCharges;
// document.write("<h2>" + "Shopping Cart" + "</h2>")
// document.write("Price of Item 1 is " + priceItem1 + "<br>")
// document.write("Quantity of Item 1 is " + quantityItem1 + "<br>")
// document.write("Price of Item 2 is " + priceItem2 + "<br>")
// document.write("Quantity of Item 2 is " + quantityItem2 + "<br>")
// document.write("Shipping Charges " + shippingCharges + "<br><br>")
// document.write("Total cost of your order is " + "<b> <u>" + totalAmount + "</u> </b>")

// // Question-8
// let totalMarks = 980;
// let marksObtained = 804;
// let percentage = marksObtained/totalMarks*100;
// document.write("<h3>" + "Mark Sheet" + "</h3>")
// document.write("Total Marks: " + totalMarks + "<br>")
// document.write("Marks Obtained: " + marksObtained + "<br>")
// document.write("Percentage: " + percentage + "%" + "<br>")

// // Question-9
// let dollar = 10;
// let riyal = 25;
// let dollarRate = 306.27;
// let riyalRate = 81.65;
// let totalValueInRupee = (dollar*dollarRate) + (riyal*riyalRate);

// document.write("<h2>" + "Curruncy in PKR" + "</h2>")
// document.write("<small>" + "*1 USD = 306.27 PKR" + "</small>" + "<br>")
// document.write("<small>" + "*1 Riyal = 81.65 PKR" + "</small>"  + "<br>")
// document.write("Total Curruncy in PKR: " + totalValueInRupee)

// // Question-10
// let num = 20;
// let result =((num + 5) * 10) / 2
// console.log(result)

// // Question-11
// let curruntYear = 2023;
// let birthYear = 2004;
// let age = curruntYear - birthYear;
// document.write("<h1>" + "Age Calculater" + "</h1>")
// document.write("Current Year: " + curruntYear + "<br>")
// document.write("Birth Year: " + birthYear + "<br>")
// document.write("Your Age is: " + age + "<br>")

// // Question-12
// let radius = 20;
// const pi = 3.142;
// let circumference = 2 * pi * radius;
// let area = pi * radius * radius;
// document.write("<h1>" + "The Geometrizer" + "</h1>")
// document.write("Radius of a circle: " + radius + "<br>")
// document.write("The Circumference is: "+ circumference + "<br>")
// document.write("The area is: "+ area + "<br>")

// // Question-13
// let fav_snack = " Cheetoz";
// let current_age = 15;
// let max_age = 65;
// let eat_per_day = 3;
// let total = (max_age - current_age) * eat_per_day;
// document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>")
// document.write("Favorite Snack: " + fav_snack + "<br>")
// document.write("Current Age: " + current_age + "<br>")
// document.write("Estimated Maximum Age: " + max_age + "<br>")
// document.write("You will need " + total + fav_snack +" to last you until the ripe old age of " + max_age)4


// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 6-9 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-

// // Question-1
// let a = 10;
// document.write("<h3>" + "Result" + "</h3>")
// document.write("The value of a is: " + a + "<br>")
// document.write("------------------------------------" + "<br>")
// ++a;
// document.write("The value of ++a is: " + a + "<br>")
// document.write("Now the value of a is: " + a + "<br><br>")
// document.write("The value of a++ is: " + a + "<br>")
// a++;
// document.write("Now the value of a is: " + a + "<br><br>")
// --a;
// document.write("The value of --a is: " + a + "<br>")
// document.write("Now the value of a is: " + a + "<br><br>")
// document.write("The value of a-- is: " + a + "<br>")
// a--;
// document.write("Now the value of a is: " + a + "<br><br>")

// // Question-2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a + "<br>")
// document.write("b is: " + b + "<br>")
// document.write("result is: " + result + "<br>")

// // Question-3
// let name = prompt("What's your name?")
// alert("Welcome dear " + name + "!")

// // Question-5
// var subject1 = prompt("Enter the name of the first subject:");
// var subject2 = prompt("Enter the name of the second subject:");
// var subject3 = prompt("Enter the name of the third subject:");

// var totalMarks = 100;

// var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
// var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
// var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<h2>Result</h2>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td></tr>");
// document.write("<tr><td><strong>Percentage</strong></td><td colspan='2'><strong>" + totalPercentage.toFixed(2) + "%</strong></td></tr>");
// document.write("</table>");

// // -\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-- Chapter 9-11 --\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-\-
// // Question-1
// let city = prompt("Enter your city name:");
// if (city === "karachi"){
//     alert("Welcome to city of lights!")
// } else {
//     alert("Welcome!")
// }

// // Question-2
// let gender = prompt("Please enter your gender:");
// if (gender === "male") {
//     alert("Good Morning Sir.");
// } else if (gender === "female") {
//     alert("Good Morning Ma'am.");
// } else {
//     alert("Invalid input. Please enter 'male' or 'female'.");
// }

// // Question-4
// let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car in liters:"));
// if (remainingFuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("have a safe journey.");
// }














