function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 =" + Subtraction;
}

function addition_Function() {
    var Addition = 5+5;
    document.getElementById("Add").innerHTML ="5 + 5 =" + Addition;
}

function multiplication() {
    var simple_math = 25*4;
    document.getElementById("multiple").innerHTML= "25 x 4 =" +simple_math;
}

function division() {
    var simple_math = 100/4;
    document.getElementById("divide").innerHTML= "100 / 4 =" +simple_math
}

function more_math() {
    var simple_math=(1 + 8) * 40 / 1 -1;
    document.getElementById("Lots").innerHTML= "1 plus 8, times 40, divided by 1, and subtracted by 1 =" + simple_math;
}

function modulus_Operator() {
    var simple_math = 42 % 5;
    document.getElementById("remainder").innerHTML= "When you divide 42 by 5 you have a remainder of: " +simple_math;
}

function negation_Operator() {
    var y =45;
    document.getElementById("opposite").innerHTML=-y;
}

var X=22;
X++;
document.write(X);

var Y=9;
Y--;
document.write(Y);
window.alert(Math.random() * 100000);

function root_Operator() {
    document.getElementById("square").innerHTML =Math.sqrt(25)
}
