'use strict'

const znaki = function (text) {
  let for_test = text.toLowerCase();
  const symbols = `.,;:-_=!?'"<>/{}[]|/\\`;

  for (const znak of symbols) {
    for_test = for_test.split(znak).join('');
  }

  return for_test;
}

let text = prompt('enter the text');
console.log(znaki(text));