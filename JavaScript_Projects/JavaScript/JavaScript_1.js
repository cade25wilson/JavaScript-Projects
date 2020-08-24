function Sport_Function() {
    var Sport_Output;
    var Sports = document.getElementById("Sport_Input").value;
    var Sports_String = " is a fun sport!";
    switch(Sports) {
        case "Basketball":
            Sport_Output = "Basketball" + Sports_String;
        break;
        case "Football":
            Sport_Output = "Football" + Sports_String;
        break;
        case "Soccer":
            Sport_Output = "Soccer" + Sports_String;
        break;
        case "Volleyball":
            Sport_Output = "Volleyball" + Sports_String;
        break;
        case "Golf":
            Sport_Output = "Golf" + Sports_String;
        break;
        case "Tennis":
            Sport_Output = "Tennis" + Sports_String;
        break;
        case "Bowling":
            Sport_Output = "Bowling" + Sports_String;
        break;
        default:
        Sport_Output = "Make sure the sport you entered is on the list.";
    }
    document.getElementById("Output").innerHTML = Sport_Output;
}

function change_Text() {
    var X=document.getElementsByClassName("thisElement");
    X[1].innerHTML="This is index 1!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,500,0);
grd.addColorStop(0,"salmon");
grd.addColorStop(0.5,"brown");
ctx.font = "75px Arial";
ctx.fillStyle = grd;
ctx.fillRect(0,0,800,900);

ctx.fillStyle = "#000";
ctx.fillText("Dotted box",125,200);;