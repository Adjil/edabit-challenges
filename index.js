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
