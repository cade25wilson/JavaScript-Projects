function Word_Function(){
    var beggining = "This is ";
    var middle = "going to be ";
    var end = "a  complete sentence";
    var punctuation =".";
    var finished_product = beggining.concat(middle, end, punctuation);
    document.getElementById("broken_sentence").innerHTML = finished_product;
}

function Partial_Display() {
    var display = "If i code this right after hitting the button it should say Hello and nothing else.";
    var Section = display.slice (60,66);
    document.getElementById("Word").innerHTML = Section;
}

function Uppercase() {
    var text = "This all will be uppercase!";
    var after = text.toUpperCase();
    document.getElementById("Test").innerHTML=after;
}

function String_F() {
    var str= "search for Bears";
    var result= str.search("Bears");
    document.getElementById("Search").innerHTML=result;
}

function Number_Method() {
    var R =2607;
    document.getElementById("Numbers_into_text").innerHTML = R.toString();
}

function Approximation() {
    var G= 264738.958874676544325643;
    document.getElementById("Close").innerHTML=G.toPrecision(14);
}

function decimal() {
    var round = 2.4435632443234;
    var up = round.toFixed(5);
    document.getElementById("fewer").innerHTML = up;
}

function Value_Function() {
    var word = "Display this.";
    var answer = word.valueOf();
    document.getElementById("String").innerHTML = answer;
}