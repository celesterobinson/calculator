let displayWindow = document.getElementById('display');
let equationSolved = false;

function clearDisplay() {
    displayWindow.value = '';
}

function updateEquation(button) {
    // needs functionality to prevent stacking "/" and/or "*"
    if (equationSolved) {
        if (button.className === "number") {
            clearDisplay();
        }
        equationSolved = false;
    }
    displayWindow.value += button.value;
    displayWindow.style.backgroundColor = 'beige';
}

function solveAndDisplaySolution() {
    let solution = eval(displayWindow.value);
    equationSolved = true;
    displayWindow.value = solution;
}

// There's for sure a better way to do this. Figure it out next time
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 49) {
        document.getElementById('one').click();
    } else if (event.keyCode === 50) {
        document.getElementById('two').click();
    } else if (event.keyCode === 51) {
        document.getElementById('three').click();
    } else if (event.keyCode === 52) {
        document.getElementById('four').click();
    } else if (event.keyCode === 53) {
        document.getElementById('five').click();
    } else if (event.keyCode === 54) {
        document.getElementById('six').click();
    } else if (event.keyCode === 55) {
        document.getElementById('seven').click();
    } else if (event.keyCode === 56) {
        document.getElementById('eight').click();
    } else if (event.keyCode === 57) {
        document.getElementById('nine').click();
    } else if (event.keyCode === 48) {
        document.getElementById('zero').click();
    } else if (event.keyCode === 190.) {
        document.getElementById('decimal').click();
    } else if (event.keyCode === 189) {
        document.getElementById('subtract').click();
    } else if (event.keyCode === 191) {
        document.getElementById('divide').click();
    } else if (event.keyCode === 56) {
        document.getElementById('multiply').click();
    } else if (event.keyCode === 187) {
        document.getElementById('add').click();
    } else if (event.keyCode === 13) {
        solveAndDisplaySolution();
    } else if (event.keyCode === 67) {
        clearDisplay();
    }
});

