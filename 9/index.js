'use strict'

const palendrome = function(word) {
    let text = word.split('').reverse().join('');

    if (text === word) {
        return 'its palindrome'
    } else {
        return 'isnt palendrome'
    }
}

const znaki = function (text) {
  let for_test = text.toLowerCase();
  const symbols = ` .,;:-_=!?'"<>/{}[]|/\\`;

  for (const znak of symbols) {
    for_test = for_test.split(znak).join('');
  }

  return for_test;
}

let text = prompt('enter the text');
console.log(`'${znaki(text)}' ${palendrome(znaki(text))}`);