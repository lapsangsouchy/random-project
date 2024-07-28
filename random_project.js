/* Part 1 - Random Sum */
let randNum1 = Math.floor(Math.random() * 11);
let randNum2 = Math.floor(Math.random() * 11);

let sum = randNum1 + randNum2;

console.log('Random number #1:', randNum1);
console.log('Random number #2:', randNum2);
console.log('Sum:', randNum1, '+', randNum2, '=', sum);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Part 2 - Lucky Star */
let days = [
  'Friday',
  'Monday',
  'Today',
  'Yesterday',
  'Your Birthday',
  'Never',
  'Sundae',
];

let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let luckyDay = days[Math.floor(Math.random() * days.length)];
let randCaption = reactions[Math.floor(Math.random() * reactions.length)];

console.log('Your lucky day:', luckyDay);
console.log(randCaption);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* Extra Credit - Random Number Generator (Advanced) */
// Sample range equation: Math.floor(Math.random() * (max - min + 1) + min)

/* Task #1 */
let randomRange = Math.floor(Math.random() * (54 - 37 + 1) + 37);
console.log('Random number:', randomRange);

// MDN Documentation For Other Method:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values

/* Task #2 */
let userMin = Number(process.argv[2]);
let userMax = Number(process.argv[3]);

let userRange = Math.floor(Math.random() * (userMax - userMin + 1) + userMin);

console.log('Random number:', userRange);
