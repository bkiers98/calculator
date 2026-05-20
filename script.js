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
let num2 = "";
let operator1 = "";

function assignNum(num) {

    //decide what to do based on current display state
    if (num == "clear") {
        num1 = "0";
        operator1 = "";
        updateDisplay(num1);
    } else if (operator1 == "") {
        //edit num1 if no operator has been assigned yet

        if (num1 == "") {
            num1 = num;
        } else if (num1 == "0") {
            num1 = num;
        } else {
            num1 = num1.concat(num);
        };
        updateDisplay(num1);
        
    } else {
        // update num2 if operator has been assigned

        if (num2 == "") {
            num2 = num;
        } else if (num2 == "0") {
            num2 = num;
        } else {
            num2 = num2.concat(num);
        };
        updateDisplay(num2);
    }
    

    //num1 = parseInt(num); 
    //updateDisplay(num1);   
};

function assignOperator(op, e) {

    //decide what to do based on display state
    if (num1 == "" || num1 == "0") {
        return;
    } else if (operator1 == "") {
        e.target.style.borderStyle = "inset";
        operator1 = e;
    } else {
        // perform operation and update operator variable
        operator1.target.style.borderStyle = "";
        
        operate(Number(num1), Number(num2), operator1.target.id);

        if (op != "equals") {
            e.target.style.borderStyle = "inset";
        };
        num2 = "";
        operator1 = e;
        updateDisplay(num1);

    };

    // operator1 = e;
    // updateDisplay(op);
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
        case "add":
            num1 = add(a, b);
            break;
        case "subtract":
            num1 = subtract(a, b);
            break;
        case "multiply":
            num1 = multiply(a, b);
            break;
        case "divide":
            num1 = divide(a, b);
            break;
    }
    num1 = num1.toString();
}