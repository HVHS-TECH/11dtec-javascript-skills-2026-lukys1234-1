/****************************
Name of Task:

****************************/
console.log("Running JavaScript_and_HTML.js")
console.log("CONNOR SG MNGRL MB yza!")

// This is a single line comment

//Variables 
let name = "Jacob"
let age = 13;
let year = 2027;
let money = 1000;

let divideTwo = money/2;
let plusThree = year+3;
let plusThreeAge = age+3;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

OUTPUT.innerHTML ="<p> Greetings " + name;

OUTPUT.innerHTML +="<p> As of " + year + " you are " + plusThreeAge + " years old "; 

OUTPUT.innerHTML += "<p> The year is " + plusThree;

OUTPUT.innerHTML +="<p>As of " + year + " you had " + money;

OUTPUT.innerHTML +="<p>You spend half you money, you now have " +  divideTwo;



/**********************************
Main Code
***************************************/




/**************************************************
Functions
 ***************************************************/