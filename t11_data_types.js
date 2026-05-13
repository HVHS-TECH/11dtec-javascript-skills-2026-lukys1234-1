/****************************
Name of Task:t10_input_from_HTML

****************************/
console.log("t11_data_types")
console.log("CONNOR SG MNGRL MB yza!")

// This is a single line comment

//Variables 
let userName = "Jacob"
let userAge = 1;
let year = 2027;
let userMoney = 1000;
let divideTwo = userMoney / 2;
let plusThree = year + 3;
let plusThreeAge = userAge + 3;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/**********************************
Main Code
***************************************/



function start() {


  welcome()

  displayProduct("chips", 3);
  displayProduct("Chocalate", 4);
  displayProduct("Drink", 2.50);

  OUTPUT.innerHTML += "<p> Greetings " + userName;

  OUTPUT.innerHTML += "<p> As of " + year + " you are " + plusThreeAge + " years old ";

  OUTPUT.innerHTML += "<p> The year is " + plusThree;

  OUTPUT.innerHTML += "<p>As of " + year + " you had " + userMoney;

  OUTPUT.innerHTML += "<p>You spend half you money, you now have " + divideTwo;

}


/**************************************************
Functions
 ***************************************************/

function welcome() {
  OUTPUT.innerHTML += "<p> Welcome to the shop";

}

function getFormInput() {
  const AGE_FIELD = document.getElementById("ageField");
  let userAge = AGE_FIELD.value;
  const MONEY_FIELD = document.getElementById("moneyField");
  let userMoney = Number(MONEY_FIELD.value);
  OUTPUT.innerHTML = "<p> You are " + userAge+" years old </p1>";
  OUTPUT.innerHTML += "<p>You have " + userMoney+" dollars </p1>";

}

function displayProduct(_name, _price) {
  OUTPUT.innerHTML += "<p>" + _name + ": " + _price;

}         
