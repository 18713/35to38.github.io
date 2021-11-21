// 1. Write a function that displays current date & time in your
// browser.
function func() {
    var date = new Date();
    document.write(date)
}
func()

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function func1() {
    var firstName = "abdullah"+" ";
    var lastName = "meer"
    document.write(firstName+lastName)
}
func1()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function value(num1,num2) {
   var value = num1+num2;
   return value
}

var value = 2 + 4;
document.write(value)


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function add(){
var times = +prompt("how many values.......?")
var addvalue = 0;
for (var i =0; i < times; i++){
addvalue += +prompt("enter values"+(i +1))


}
document.write(addvalue)}



// function sub(){
//     var times = prompt("how many values.......?")
//     var subvalue = 0;
//     for (var i =0; i < times; i++){
//     subvalue -= prompt("enter values")
    
    
//     }
//     document.write(subvalue)
    
// }   

// 
// function mul(){
//     var times = prompt("how many values.......?")
//     var multivalue = 0;
//     for (var i =0; i < times; i++){
//     multivalue *= prompt("enter values")
    
    
//     }
//     document.write(multivalue)
    
// } 


// 5)  Write a function that squares its argument.

function sumOfSquares(num) {
    var i;

    for (i=0;i<=num;i++) {
        var sum=0;
        var i = i*i;
        sum = i;
}
    
document.write("The sum of squares for numbers up to and including ");
}

var num = parseInt(prompt("Enter a number:"));
sumOfSquares(num);

// 6. Write a function that computes factorial of a number.

function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
var n = 4;
answer = factorial(n)
document.write("The factorial of " + n + " is " + answer);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function sum()
{
    var FirstNumber = 1;
    var SecondNumber = document.getElementById('txtSecondNumber').value;
    alert(parseInt(FirstNumber) + parseInt(SecondNumber));
}

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()





function pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }
  
  document.write(pythagorean(4, 3));



// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");
function area(length, width) {
    return length * width;
}
function perimeter(length, width) {
    return 2*( length + width);
}

document.writeln('The area of your rectangle is ' + area(length, width));         
document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

function checkPalindrome(str) {

    // find the length of a string
    var len = string.length;

    // loop through half of the string
    for (var i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
var string = prompt('Enter a string: ');

// call the function
var value = checkPalindrome(string);

document.write(value);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o'));

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumfrence(radius) {
    var y = (Math.PI * radius) * 2;
  document.write("The circumfrence is " + y + "."  +"<br>"  +"<br>");
  }
  function calcArea(radius) {
    var x = (Math.PI * radius) * radius;
 document.write("The area is " + x + ".");
  }
  
  calcCircumfrence(30);
  calcArea(10);
