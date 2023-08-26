'use strict'

const two = function() {
    let ryad1 = prompt('Enter the symbols 1');
    let ryad2 = prompt('Enter the symbols 2');

    if (ryad1 > ryad2) {return 1}
    if (ryad2 > ryad1) {return -1}
    if (ryad2 === ryad1) {return 0}
}

console.log(two());