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
	//or return str1.substr(-str2.length) === str2;
}
checkEnding('Ali', 'li');

//#5 Find The Largest Number In An Array
function findLargestNum(arr) {
  return arr.reduce((previousVal, currentVal) => Math.max(previousVal, currentVal));
  //or return Math.max(...arr) but this will have an issue with many elements, according to MDN.
}
findLargestNum([5, 10, 15, 20, 25, 50, 125, 1]);

//#6 Calculate The Mean Average - Round to two decimal places.
function mean(arr) {
  return parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(2));
}
mean([2, 4, 6, 8]);

//#7 Get Word Count
function countWords(str){
	return str.split(' ').length;
}
countWords("What's the story morning glory!");

//#8 Reverse The Order Of A String
function reverse(str) {
    let reversed = "";
    for(let x = str.length-1; x >= 0; x--) {
        reversed += str[x];
    }
    return reversed;
}
reverse("Step off the train all alone at dawn.");

//#9 Check If Number Is Less Than Or Equal To Zero
function lessThanOrEqualToZero(num) {
  return num <= 0 ? true : false;
}
lessThanOrEqualToZero(16);

//#10 Eliminate All Odd Numbers Within An Array
function noOdds(arr) {
  return arr.filter((number) => number % 2 === 0);
}
noOdds([1, 3, 5, 6, 8, 10]);

//#11 Wurst is Better
function wurstIsBetter(str) {
  const sausages = /kielbasa|chorizos|moronga|salami|sausage|andouille|naem|merguez|gurka|snorkers|pepperoni/gi;
  return str.replace(sausages, "Wurst");
}
wurstIsBetter("I like chorizos, but not sausages");

//#12 Find The Smallest Number
function findSmallestNum(arr) {
  return Math.min(...arr);
}
findSmallestNum([16, 32, 64, 4, -4, -16, -32, -64]);

//#13 Repeating Letters
function doubleChar(str) {
  return str.split("").map((letter) => letter += letter).join("");
}
doubleChar("All your dreams are made!");

//#14 Find The Minimum, Maximum, Length And Average Values
function minMaxLengthAverage(arr) {
  const average = arr.reduce((accumulator, number) => accumulator + number) / arr.length;
  return [Math.min(...arr), Math.max(...arr), arr.length, average];
}
minMaxLengthAverage([4, 8, 16, 32]);

//#15 Add Up The Numbers From A Single Number
function addUp(num) {
  return num <= 0 ? 0 : num + addUp(num-1);
}
addUp(4);

//#16 Alphabet Soup - Only simple sentences.
function AlphabetSoup(str) {
  return str.split("").sort().join("");
}
AlphabetSoup("oasis");
