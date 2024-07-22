const display = document.getElementById("display");
let isError = false;

function appendToDisplay(input) {
    if (isError) {
        clearDisplay();
    }
    display.value += input;
    adjustFontSize();
}

function clearDisplay() {
    display.value = "";
    resetFontSize();
    isError = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        isError = false;
    } catch(error) {
        display.value = "Error!";
        isError = true;
    }
    adjustFontSize();
}

function adjustFontSize() {
    const maxLength = 10; 
    const minFontSize = 2;
    const maxFontSize = 5;

    if (display.value.length > maxLength) {
        const fontSize = Math.max(maxFontSize - (display.value.length - maxLength) * 0.3, minFontSize);
        display.style.fontSize = `${fontSize}rem`;
    } else {
        resetFontSize();
    }
}

function resetFontSize() {
    display.style.fontSize = '5rem';
}