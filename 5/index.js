'use strict'

const count_words = function(text) {
    const for_test = text.toLowerCase();
    const words = "aeiouаеёиоуыэюя";
    let count = 0;

    for (let liter of for_test) {
        if (words.includes(liter)) {
            count++;
        }
    }

    return count;
}

let text = prompt('enter the text');
console.log(count_words(text));