function Greeting() {
    if (new Date().getHours() < 10) {
        document.getElementById("Time").innerHTML = "Good Morning!";
    }
}

if (5==5) {
    document.write(new Date)
}

function letter_Function() {
    letter = document.getElementById("letter").value;
    if (letter ==26) {
        Answer = "You are correct!";
    }
    else {
        Answer = "You are incorrect.";
    }
    document.getElementById("Number?").innerHTML = Answer;
}

function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time<12 == Time>0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply= "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

var X=44;                               //X is a global variable because it is defined outside of the function
function global() {
    document.write(39 + X + "<br>");
}
function Add() {
    document.write(X + 32559 + "<br>");         
}
global();
Add();

function Subtract() {
    var Y = 22;                     //Y is a local variable because it is defined inside a function
    document.write(44 - Y);
}

function Fix() {
    var R = 22;
    console.log(R * 2);             //This is the console log function that works showing 44 in the console in dev tools
}

function Console() {  
    console.log(32 + R);
}                                   //This is the function that does not work showing that R is not defined in the console log because R is a local variable
Fix();
Console();
