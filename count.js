const sonnet = `I love love Nelle Nelle Nelle Bertrand my my future wife wife`;

// let uniques = {};
// let words = sonnet.match(/\w+/g);

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   if (uniques[word]) {
//     uniques[word] += 1;
//   } else {
//     uniques[word] = 1;
//   }
// }

// console.log(uniques);


// The Map method.

// Unique words using Map
let words = sonnet.match(/[\w']+/g);
let uniquesUsingMap = new Map();

// Iterate through `words` and build up a map of unique words.
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let currentValue = uniquesUsingMap.get(word);
  if (uniquesUsingMap.get(word)) {
    uniquesUsingMap.set(word, currentValue + 1);
  } else {
    uniquesUsingMap.set(word, 1);
  }
}

console.log(uniquesUsingMap);
