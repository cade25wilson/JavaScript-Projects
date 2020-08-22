function count_Down() {
    var Number = ""
    var Z = 100;
    while (Z > 0) {
        Number += "<br>" + Z;
        Z--;
    }
    document.getElementById("Loop").innerHTML = Number;
}

function Str_Lngth () {
    var ex= "This is an example function."
    var S = ex.length;
    document.getElementById("start").innerHTML= S;
}


var team = ["Bucks", "Celtics", "Raptors", "Pacers", "76ers", "Heat", "Nets", "Magic"];
var text = "";
var W;
function Return_Text() {
    for (W = 0; W < team.length; W++) {
        text += team[W] + "<br>";
    }
    document.getElementById("Games").innerHTML = text;
}

function Array_Function() {
    var Weekday = [];
    Weekday[1] = "Monday";
    Weekday[2] = "Tuesday";
    Weekday[3] = "Wednesday";
    Weekday[4] = "Thursday";
    Weekday[5] = "Friday";
    Weekday[6] = "Saturday";
    Weekday[7] = "Sunday";
    document.getElementById("Day").innerHTML = "Today is, " + 
    Weekday[6] +".";
}

function constant_function() {
    const Household_Pet = {species:"dog", breed:"Doberman", color:"black "};
    Household_Pet.breed = "pug";
    Household_Pet.age = "4";
    document.getElementById("Constant").innerHTML = "The " + Household_Pet.species + " was a "+ Household_Pet.age + " year old " + Household_Pet.color + Household_Pet.breed
}

var R = "the dog";
document.write(R);
{
    let R = "the cat";
    document.write("<br>" + R)
}
document.write("<br>" + R);

var Y = return_Function (5, 22);
function return_Function(r, d) {
    return r+d;
}
document.write(Y);

let shoe = {
    brand: "Jordan ",
    model: "3 ",
    year: "1988 ",
    colorway: "Black cement ",
    description : function() {
        return "My favorite shoe is the " + this.colorway + this.brand + this.model +"released in "+ this.year;
    }
};
document.getElementById("shoe_Object").innerHTML = shoe.description();
