let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  Number(input);
  if (input !== String(input) && input !== null) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(Number(input));
  total = total + Number(input);
} while (input !== null);

console.log(`Общая сумма чисел равна ${total}`);
