let loanAmount = document.getElementById('loan-amount');
let interestRate = document.getElementById('interest-rate');
let years = document.getElementById('years');
let mortgageOutput = document.getElementById('mortgage-output');
mortgageOutput.innerHTML = `Monthly Payment: $${Math.round((loanAmount.value * (interestRate.value / 100) / 12) / (1 - Math.pow(1 + (interestRate.value / 100) / 12, -years.value * 12))*100)/100}`;

function calculateMortgage() {
    if (loanAmount.value == "") {
        loanAmount.value = 340000;
    }
    if (interestRate.value == "") {
        interestRate.value = 5.5;
    }
    if (years.value == "") {
        years.value = 30;
    }

    if (isNaN(parseFloat(loanAmount.value))) {
        mortgageOutput.innerHTML = `Loan Amount entered is not a number.`;
    }
    if (isNaN(parseFloat(interestRate.value))) {
        mortgageOutput.innerHTML = `Interest Rate entered is not a number.`;
    }
    if (isNaN(parseFloat(years.value))) {
        mortgageOutput.innerHTML = `Number of years entered is not a number.`;
    }

    if (!isNaN(parseFloat(loanAmount.value)) && !isNaN(parseFloat(interestRate.value)) && !isNaN(parseFloat(years.value))) {
        loanAmount.value = parseFloat(loanAmount.value);
        interestRate.value = parseFloat(interestRate.value);
        years.value = parseFloat(years.value);
        monthlyPayment = Math.round((loanAmount.value * (interestRate.value / 100) / 12) / (1 - Math.pow(1 + (interestRate.value / 100) / 12, -years.value * 12))*100)/100;
        mortgageOutput.innerHTML = `Monthly Payment: $${monthlyPayment}`;
    }
}

loanAmount.addEventListener("blur", () => {
    calculateMortgage();
});
interestRate.addEventListener("blur", () => {
    calculateMortgage();
});
years.addEventListener("blur", () => {
    calculateMortgage();
});