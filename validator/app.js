// Data Types:
/*
1.String,
2.Integers/Numbers
3.Booleans,
4.Arrays
5.objects
*/
let name = "Kings";
let height = 50

function submit(){
   var input = document.getElementById("inputField").value;
   var input = parseInt(input); //Data Type Conversion
   var input = input + 1;
   // console.log(input)

}
let adult = true; // Boolean data type
let fruits = ['kiwi','pineapple','apple',30,false]
let person = {
    Fristname:'Ada',
    Lastname:'Lovelace',
    age:18,
    address:{
        country:'Seychelles',
        city:'Victoria',
        street:'Bani bani',
    },
    children:['Eileen','Tiva']
}
function saveItem(){
    var input= document.getElementById("inputField").value
    localStorage.setItem("inputItem",item);
    showWelcomeMessage(input)
}
function showWelcomeMessage(input){
    var messageElement = document.getElementById("showMessage")
    messageElement.textContent="We have saved your input as" + input;
}

var storedItem = localStorage.getItem("inputItem");
if(storedItem){
    showWelcomeMessage(saveItem)
}

