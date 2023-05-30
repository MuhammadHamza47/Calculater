let result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  result.value += operator;
}

function clearResult() {
  result.value = '';
}
const delButton = document.getElementById('btn-1');

delButton.addEventListener('click', function () {
  result.value = result.value.slice(0, -1);
});

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Math Error';
    console.log(error); 
  }
}


