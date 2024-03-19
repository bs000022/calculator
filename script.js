// Function to append clicked button value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression in the display
function evaluateExpression() {
    let expression = document.getElementById('display').value;
    let result;
    try {
        result = eval(expression); // Using eval to evaluate the expression
    } catch (error) {
        result = 'Error'; // Handle any errors during evaluation
    }
    document.getElementById('display').value = result;
}
