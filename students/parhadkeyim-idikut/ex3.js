/*
Write a simple JavaScript program to join all elements of the following array into a string.

Sample array : 
var myText = ['This', 'is', 'not', 'working'];
joinArray(myText);

Expected Output : 
This is not working
 */

myText = ['This', 'is', 'not', 'working'];
console.log(myText.toString());
console.log(myText.join());
console.log(myText.join('+'));
