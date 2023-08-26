'use strict'

const spam_test = function(word) {
    if (word.includes('100%') || word.includes('free') || word.includes('increase sales') || word.includes('today only') || word.includes('today only') || word.includes('dont delete') || word.includes('xxx')) {return 'spam'} else {return 'not spam'}
}

let word = prompt('enter the text');
console.log(spam_test(word));