let display = document.getElementById('result');

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  let equation = display.value;
  let result = eval(equation);
  display.value = result;
}
