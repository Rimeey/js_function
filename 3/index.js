'use strict'

const palendrome = function(word) {
    let text = word.split('').reverse().join('');

    if (text === word) {
        return 'yes its palindrome'
    } else {
        return 'no, isnt palendrome'
    }
}

let word = prompt('enter the text');
console.log(palendrome(word));