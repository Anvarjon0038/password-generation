
const input = document.querySelector('input');
const genButton = document.getElementById('genButton');
const copyButton = document.getElementById('copyButton');

let lowercaseLetters = '';
let uppercaseLetters = '';
let numbers = '';
let SpcSymbol = '.!@#$%^&*()_+-=';

let allSymbols = '';

for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
  lowercaseLetters += String.fromCharCode(i);
  uppercaseLetters += String.fromCharCode(i).toUpperCase();
}

for (let i = 0; i <= 9; i++) {
  numbers += i;
}

allSymbols = lowercaseLetters + uppercaseLetters + numbers + SpcSymbol;

genButton.addEventListener('click', () => {
  let password = '';

  for (let i = 0; i < 16; i++) {
    const symbolIndex = Math.floor(Math.random() * allSymbols.length);

    password += allSymbols[symbolIndex];
  }

  input.value = password;
});

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(input.value);
});
