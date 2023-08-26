'use strict'

const biggest = function(text) {
    const words = text.split(' ');
    let counts = []
        for (let i = 0; i < words.length; i++) {
            counts.push(words[i].length)
        }
    return counts
}

function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }

let text = prompt('enter the text');
let counts = biggest(text);
console.log(max(counts));