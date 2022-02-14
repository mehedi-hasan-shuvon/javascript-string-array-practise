const anthem = "Amar Sonar Bangla Ami Tomay Valobashi";

const words = anthem.split(' ');

const withoutA = anthem.split('a');

const smallSlice = anthem.slice(5, 13); // ending index exclude

//substr
const anotherPart = anthem.substr(5, 7); // koto carether dorkar

//substring
const anotherAnotherPart = anthem.substring(5, 13);

//concat
const first = 'amader';
const second = 'City';
// const fullString=first+second;
const fullString = first.concat(second).concat('abc');

//alljoinded
const word = ['it', 'is', 'a', 'beautiful', 'world'];
const allJoin = word.join(' ');
console.log(allJoin);


console.log(fullString);

console.log(words);
console.log(withoutA);
console.log(smallSlice);
console.log(anotherPart);
console.log(anotherAnotherPart);

