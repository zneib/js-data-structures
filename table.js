const word = 'academind';

// Time Complexity: 0(n^2)
// function findFirstRep(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return str[i];
//       }
//     }
//   }
// }

// console.log(findFirstRep(word));

// Time Complexity: 0(n)
function findFirstRep(str) {
  const table = {};
  for (const char of str) {
    if (table[char]) {
      return char
    }
    table[char] = 1;
  }
}

console.log(findFirstRep(word));


