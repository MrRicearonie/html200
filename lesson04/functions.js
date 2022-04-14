/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
function squareInput() {
  const input = prompt('Enter a number to square:');
  const result = Number(input) ** 2;
  alert(result);
}

// eslint-disable-next-line no-unused-vars
function multiplyInput() {
  const input = prompt('Enter two numbers separated by a space:');
  const numbers = input.split(' ');
  const result = Number(numbers[0]) * Number(numbers[1]);
  alert(result);
}
