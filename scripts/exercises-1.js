
// var a = 2;
// var b = 3;
// var c = 5;

//console.log(a+b+c);

function sum(num1, num2, num3) {
    return num1+num2+num3;
}



function product(num1, num2, num3, num4) {
    return num1*num2*num3*num4;
}

// /**
//  * Part I: use any of the looping methods discussed in class
//  *
//  * 1. for loop,
//  * 2. Array.forEach,
//  * 3. custom forEach
//  *
//  * to complete the following problems
//  */

// // 0. write your own forEach() that takes two arguments: an array, and a callback

// var nameList = ["Sengl", "Gandolf", "Loiosh", "Belgarion"];
// function greeting(){
//     nameList.forEach(function(name){
//         console.log("Howdy " + name); 
//     });
// }
// greeting(nameList);


var nums = [1, 2, 3, 4];
function forEach(array, callback){
    var total = 1;
    for (i = 0; i < array.length; i++) {
        total *= array[i];
    }
    return total;
}

forEach(nums, display);

function display(el) {
    console.log(el);
}


 // testing your code with console.assert
 var total = 1;
[1, 2, 3, 4].forEach(function(a){ total *= a; });


// and finally assert; if this fails, the program stops
console.assert(total === 24);


// // 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
     // parse arguments into an array
     var sumTotal = 0;
     var args = [].slice.call(arguments);

     // .. do something with each element of args
     // YOUR CODE HERE
     for(i = 0; i < args.length; i++) {
        sumTotal += args[i];
     }
     return sumTotal;
}
sum(1, 2, 3, 4, 5);

console.assert( sum(1, 2, 3, 4, 5) === 15 )
display(sum(1, 2, 3, 4, 5));

// // 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
//     // parse arguments into an array
     var avgTotal = 0;
     var args = [].slice.call(arguments);

     // .. do something with each element of args
     // YOUR CODE HERE
     for(i = 0; i < args.length; i++) {
        avgTotal += args[i]/args.length;
     }
     return avgTotal;
}

display(average(2, 4, 6, 8));
console.assert( average(2, 4, 6, 8) === 5 )

// // 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
//     // parse arguments into an array
    var args = [].slice.call(arguments);
     var bigNum = 0;
     for(i = 0; i < args.length; i++) {
        if (args[i] > bigNum) {
            var bigNum = args[i];
        }
     }
     return bigNum;
    }
 display(largest(2, 4, 6, 8));
 console.assert( largest(2, 4, 6, 8) === 8 )

// // 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
//     // parse arguments into an array
     var args = [].slice.call(arguments);
     str = 0;
     var longStr = null;
     for(i = 0; i < args.length; i++) {
        if (args[i].length > str) {
            var str = args[i].length;
            var longStr = args[i];
            console.log(longStr);
//     // .. do something with each element of args
        }
      } 
      return longStr; 
 }
 display(longest("this", "is", "a", "awesome", "function"));

console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

 var nameList = ["Sengl", "Gandolf", "Loiosh", "Belgarion", "Sarah", "Anna", "Rob"];
 var numList = [5, 3, 10, 7, 22, 1, 12, 16, 4, 47, 44];

//.sort()
function toSort() {
    var myNumList = [].sort.call(arguments);
    console.log(myNumList);
    return myNumList;
}
display(toSort(2, 4, 1, 3));
//console.assert( myNumList[2] === 3); 


// .concat()
   var newArray = nameList.concat(numList); 
console.log("All Hail " +newArray[3]);
console.assert(newArray[3]) === "Belgarion";


// .indexOf()
console.log(numList.indexOf(22));
console.log("The number 22 is position number "+ numList.indexOf(22)+" of the numList array!!")
console.assert(numList.indexOf(22) === 4);

// .split()
var tempStr = "I am satisfactorily using a variety of functions";
var splitString = tempStr.split(' ');

console.log(splitString);
console.assert(splitString[3] === "using");

// .join()

var wholeStr = splitString.join(' + ');
console.log(wholeStr);
console.assert(wholeStr[0] === "I");

// .pop()
var popped = nameList.pop();
console.log("I have removed "+popped+" from the end of my names array!");
console.assert(popped === "Rob");

// .push()
var pushed = nameList.push("Marianne");
console.log(nameList);
console.log("There are now "+ pushed+" names on my list");
console.assert(nameList.indexOf("Marianne") === nameList.length-1)

// .slice()
var sliced = nameList.slice(4, 6);
console.log(sliced[0] + " and " +sliced[1]+ " are the most important on this list.")
console.assert(sliced[0] === "Sarah");


// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
// Status API Training Shop Blog About Pricing