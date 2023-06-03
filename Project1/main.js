let op = {
    num1: null,
    num2: null,
    operator: null
};

function appendNumber(number) {
    let display = document.getElementById("display");
    let currentValue = display.textContent;
    if (currentValue === "0") {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendDecimal() {
    let display = document.getElementById("display");
    let currentValue = display.textContent;
    if (!currentValue.includes(".")) {
        display.textContent += ".";
    }
}

function operation(operator) {
    let display = document.getElementById("display");
    op.num1 = parseFloat(display.textContent);
    op.operator = operator;
    display.textContent = "0";
}

function cleare() {
    let display = document.getElementById("display");
    op.num1 = null;
    op.num2 = null;
    op.operator = null;
    display.textContent = "0";
}

function calculate() {
    let display = document.getElementById("display");
    op.num2 = parseFloat(display.textContent);

    if (op.operator === "+") {
        display.textContent = op.num1 + op.num2;
    } else if (op.operator === "-") {
        display.textContent = op.num1 - op.num2;
    } else if (op.operator === "*") {
        display.textContent = op.num1 * op.num2;
    } else if (op.operator === "/") {
        display.textContent = op.num1 / op.num2;
    }
}