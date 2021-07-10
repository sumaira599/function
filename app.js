// CHAPTERS 34 TO 38

// 1. Write a function that displays current date & time in your
// browser.

// function tellTime(){
//     var now = new Date ();
//     document.write(now);
// }
// tellTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet(){
//     var a=prompt("enter your first name");
//     var b=prompt("enter your last name");
//     var c= a+b;
// alert("hello "+ c);
// }
// greet();


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// 4. Calculator:




// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// function calculator(num1,num2,operator){
//     var result=eval(num1+operator+num2)   
//     return result;

// }

// var firstValue=prompt("first value");
// var lastValue=prompt("last value");
// var opera=prompt("operator");
// var showResult=calculator(firstValue,lastValue,opera);
// document.write("your result is " + showResult);

// 5. Write a function that squares its argument.

// function square(num1){
//     return num1**2;
// }
// var squared=square(4);
// alert(squared);

// 6. Write a function that computes factorial of a number.



// var n=+prompt("enter your number");
// var ans=n;

// function fact(num){
//     if(num==0 || num==1){
//         return 1;
//     }
//    else{
//        for(var i=num-1; i>=1; i--){
//            ans=ans*1;
//        }
//        return(ans)
//    }
// }
// var c=fact(n);
// alert(c);


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.


// var start:number

// var start=+prompt("enter a start value")
// var end=+prompt("enter a end value")

// function count(){
//     for(var i= start; i<=end; i++){
//         document.write(i + "<br>")
//     }
// }
// count();




// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function hup(base: any,  per: any): number
// function hyp(base,per){
//     var m= Math.sqrt(base*base+per*per);
//     return m;
// }
// var b=prompt("enter base of triangle");
// var p=prompt("enter perpendicular of triangle");

// var calHyp=hyp(b,p);
// document.write(calHyp);




// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// function rectangle(l,b){
//     var area=l*b;
//     alert(area);
// }
// rectangle(6,7);



// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function palindrome(){
//     var word=prompt("enter your word")
//     var check="";
//     for( var i=word.length -1; i>+0; i--){
//         check +=word[i];
//     }
//     if(word===check){
//         alert(word + " is palindrome word")
//     }
//     else{
//         alert( "your word is not palindrome word")
//     }
// }
// palindrome();


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'



// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// // EXPECTED OUTPUT : 'Development'

// function longestWord(string){
//     var wordArray=string.tolowerCase().split(" ");
//     var longest=wordArray[0];
//     for (var i=1; i<wordArray.length; i++){
//         if (longest.length<wordArray[i].length){
//             longest=wordArray[i];
//         }
//     }
//     return longest;
// }
// var string=prompt("enter any string to find the longest word");
// var longest=longestWord(string);
// document.write("string: " + string + "<br>" + "longest word: " + longest);


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// var v1=prompt("input1");
// var v2=prompt("input2");
// var sign=prompt("sign");
// console.log(eval(v1 + sign + v2));