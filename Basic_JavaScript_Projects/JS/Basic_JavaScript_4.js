function my_Dictionary() {
    var Car= {
        Make:"Ford",
        Model:"Mustang",
        Color:"Red",
        Engine:"V8",
        Drive:"RWD"
    };
    delete Car.Color;
    document.getElementById("Dictionary").innerHTML=Car.Color;
}