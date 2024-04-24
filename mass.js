const MASS = document.getElementById("MASS");

function toggleMass(event) {
    if(event.keyCode == 109) {
        if(MASS.style.visibility == "visible") {
            MASS.style.visibility = "hidden";
        } else {
            MASS.style.visibility = "visible";
        }
    }
}

addEventListener("keypress", toggleMass);
