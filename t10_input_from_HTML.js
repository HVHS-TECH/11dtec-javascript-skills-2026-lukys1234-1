/****************************
Name of Task:t10_input_from_HTML

****************************/
console.log("t10_input_from_HTML")
console.log("CONNOR SG MNGRL MB yza!")

// This is a single line comment

//Variables 
let name = "Jacob"
let age = 13;
let year = 2027;
let money = 1000;
let divideTwo = money / 2;
let plusThree = year + 3;
let plusThreeAge = age + 3;
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

/**********************************
Main Code
***************************************/



function start(){


welcome()

displayProduct("chips", 3);
displayProduct("Chocalate", 4);
displayProduct("Drink", 2.50);

OUTPUT.innerHTML += "<p> Greetings " + name;

OUTPUT.innerHTML += "<p> As of " + year + " you are " + plusThreeAge + " years old ";

OUTPUT.innerHTML += "<p> The year is " + plusThree;

OUTPUT.innerHTML += "<p>As of " + year + " you had " + money;

OUTPUT.innerHTML += "<p>You spend half you money, you now have " + divideTwo;

}


/**************************************************
Functions
 ***************************************************/

 function welcome() {
        OUTPUT.innerHTML += "<p> Welcome to the shop";
    
    }
    
    function getFormInput(){
        const NAME_FIELD = document.getElementById("nameField");
        let userName = NAME_FIELD.value;
        OUTPUT.innerHTML = "<p>Your name is "+userName+"</p>";
      }
      
    function displayProduct(_name, _price) {
        OUTPUT.innerHTML += "<p>" + _name + ": " + _price;
        
    }
