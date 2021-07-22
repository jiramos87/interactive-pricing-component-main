var slider = document.getElementById("slider");
var output = document.getElementById("billing-output");
var check = document.getElementById("checkbox");
var views = document.getElementById("views-output");
var checkBool = false;
var sliderValue = 0;
var outputValue = 0;
output.innerHTML = "$16.00"; // Display the default slider value


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    render(this.value);
    sliderValue = this.value;
  }
function toggleButton() {
    if(checkBool == false) {
        checkBool == true;
    } 
    if(checkBool == true) {
        checkBool == false;
    }

    render(sliderValue);
}

function renderViews(value) {
    if (value == 0) {
        views.innerHTML = "10K ";
    }
    if (value == 10) {
        views.innerHTML = "50K ";
    }
    if (value == 20) {
        views.innerHTML = "100K ";
    }
    if (value == 30) {
        views.innerHTML = "500K ";
    }
    if (value == 40) {
        views.innerHTML = "1M ";
    }

}

function calculateValue(value) {
    if (value == 0) {
        return 8;
    }
    if (value == 10) {
        return 12;
    }
    if (value == 20) {
        return 16;
    }
    if (value == 30) {
        return 24;
    }
    if (value == 40) {
        return 36;
    }
}

function render(value) {
    checkBool = document.getElementById("checkbox").checked;
    outputValue = calculateValue(value);
    renderViews(value);

    if(checkBool == true) {
    
    outputValue = outputValue * 0.75;
    output.innerHTML = "$" + outputValue + ".00";
    }   
    else { 
    output.innerHTML = "$" + outputValue + ".00";
    } 
  }