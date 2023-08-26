'use strict'

const counter = function(text) {
    const words = text.split(' ');
    return words.length;
}

let text = prompt('enter the text');
console.log(counter(text));