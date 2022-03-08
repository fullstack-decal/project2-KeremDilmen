let total = 0;
let strbuffer = "0";
let operator = "";

function calculations() {
    const intBuffer = parseInt(strbuffer); 
    if (operator === "+") {
        total += intBuffer;
    } else if (operator === "-") {
        total -= intBuffer;
    } else if (operator === "÷") {
        total /= intBuffer;
    } else if (operator === "x") {
        total *= intBuffer;
    }
}

function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
        strbuffer += value;

        if (operator === "") {
            total = parseInt(strbuffer);
        }
    }
}

function makesSymbol(symbol) {
    if (symbol === "C") {
        strbuffer = "0";
        total = 0;
    } else if (symbol === "←") {
        if (strbuffer.length === 1) {
            strbuffer = "0";
        } else {
            strbuffer = strbuffer.substring(0, strbuffer.length - 1);
        }

        if (operator === "") {
            total = parseInt(strbuffer);
        }
    } else if (symbol === "=") {
        if (operator === "") {
            total = parseInt(strbuffer); 
        }
        
        calculations();
        strbuffer = `${total}`;
        operator = "";
    } else { 
        const intBuffer = parseInt(strbuffer);
        if (total === 0) {
            total = intBuffer;
        } else {
            calculations();
        }
        operator = symbol;
        strbuffer = "0";
    }
}

function setListeners() {
    let buttons = document.querySelectorAll(".buttons"); 
    for (const item of buttons) {
        item.addEventListener("click", function (event) {
            buttonClicked(event.target.innerText);
        });
    }
}


setListeners();


function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { 
        makesSymbol(valueClicked);
    } else {
        makesNumber(valueClicked);
    }
    document.querySelector(".result-screen").innerText = strbuffer;
}