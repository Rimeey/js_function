'use strict'

const reverse = function(enter) {
    const text = enter.split(' ');
    const words = text.reverse();
    const result = words.join(' ');
    
    return result;
}

let enter = prompt('Enter the symbols');
console.log(reverse(enter));