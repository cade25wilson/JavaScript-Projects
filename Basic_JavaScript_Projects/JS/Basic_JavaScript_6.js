function Ride_Function() {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride=(Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=Can_ride+" to ride.";
}

function vote_Function() {
    var Age, Can_vote;
    Age=document.getElementById("Age").value;
    Can_vote=(Age<18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML=Can_vote+"!!!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " +Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}



function Dog (Breed, age, color, tricks, size) {
    this.Dog_Breed=Breed;
    this.Dog_age=age;
    this.Dog_color=color;
    this.Dog_tricks=tricks;
    this.Dog_size=size;
}
var Suzy= new Dog("Bulldog", 4, "Brown", "Roll-over", "Large");
var Rex= new Dog("Husky", 7, "Black and White", "Speak", "Large");
function newFunction() {
    document.getElementById("New_and_This").innerHTML= "Rex is a "+Rex.Dog_Breed;
}

function multiply_Function() {
    document.getElementById("Nested_Function").innerHTML = multiply();
    function multiply() {
        var First_Number = 5;
        function Times_Five() {First_Number *= 5;}
        Times_Five();
        return First_Number;
    }
}