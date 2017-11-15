//This is where my solutions live.

//#1 Return The Last Item In An Array
function getLastItem(arr) {
  return arr.pop();
}
getLastItem(['React', 'Vue.js', 'jQuery', 'AngularJS', 'React Native']);

//#2 Is The Number Even Or Odd?
function isEvenOrOdd(num) {
  return num % 2 === 0 ? 'even' : 'odd';
}
isEvenOrOdd(15);

//#3 Shuffle The Name
function nameShuffle(str) {
  return str.split(' ').reverse().join(' ');
}
nameShuffle('Richard Branson');

//#4 Check If String Ending Matches Second String
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}
checkEnding('Ali', 'li');

//#5 Find The Largest Number In An Array
function findLargestNum(arr) {
  return arr.reduce((previousVal, currentVal) => Math.max(previousVal, currentVal));
  // or return Math.max(...arr) but this will have an issue with many elements, according to MDN.
}
findLargestNum([5, 10, 15, 20, 25, 50, 125, 1]);
