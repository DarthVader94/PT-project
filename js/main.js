const inputANode = document.querySelector('.js__namber-a');
const inputBNode = document.querySelector('.js__namber-b');
const selectOperationNode = document.querySelector('.js__select');
const btnResultNode = document.querySelector('.js__btn-result');
const outputNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click', function () {
   const a = Number(inputANode.value);
   const b = Number(inputBNode.value);
   const operation = selectOperationNode.value;
   const result = calculate({ a, b, operation })

   outputNode.innerHTML = result;
})


function sum(a, b) {
   return a + b;
}

function substract(a, b) {
   return a - b;
}

function multiplay(a, b) {
   return a * b;
}

function division(a, b) {
   return a / b;
}