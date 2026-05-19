const numPadButtons = document.querySelectorAll("#num-pad > button");
const display = document.querySelector("#display > p");

numPadButtons.forEach((button) => {
    button.addEventListener("click", () => {
    //    alert(button.id);
        assignNum(button.id);
    });
});

const operatorPadButtons = document.querySelectorAll("#operator-pad > button");

operatorPadButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        //e.target.style.borderStyle = "inset";
        assignOperator(button.id, e);
    });
});

let num1 = "";
let num2;
let operator1;

function assignNum(num) {

    //decide what to do based on current display state
    if (num == "clear") {
        num1 = "0"
    } else if (num1 == "") {
        num1 = num;
    } else if (num1 == "0") {
        num1 = num;
    } else {
        num1 = num1.concat(num);
    };

    //num1 = parseInt(num); 
    updateDisplay(num1);   
};

function assignOperator(op, e) {
    e.target.style.borderStyle = "inset";
    operator1 = op;
    updateDisplay(op);
};

function updateDisplay(value) {
    display.textContent = value;
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, operator) {
    switch(operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "/":
            divide(a, b);
            break;
    }
}