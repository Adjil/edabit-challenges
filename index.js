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
