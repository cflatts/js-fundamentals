/*PART 0 *
Write a function that calculates the sum of all the numbers in an array */

var sumOfArray = function(arr){
    var sum = 0
    for(var i=0; i< arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of // numbers as an argument and finds the highest number.

var maxOfArray = function(nums) {
     if(nums[0] > nums[1]) {
         var max = nums[0]
         }
     else {
         var max = nums[1]
         }
     for (var i= 2; i < nums.length; i++) {
         if(typeof nums[i] === 'number') {
            var testNum = nums[i]
            if( testNum > max) {
                 max = testNum
            }
        } else {
            max = NaN
        }
 } return max
}


console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))

/**

PART 2 *
Write a function isVowel() that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise. */
var vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

var isVowel = function(symbol) {
    for(var i = 0; i < vowelArray.length; i++) {
        var vowel = vowelArray[i]
        if(vowel === symbol) {
            return true
        }
    }
    return false
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**

Part 3 *
Define a function reverse() that computes
the reversal of a string. For example,
reverse("skoob") should return the
string "books". */

var reverse = function(sentence) {
    var backwards = ''
    var parts = sentence.split('')
    for(var i = parts.length - 1; i >= 0; i--) {
        backwards += parts[i]
    }
    return backwards
}


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**

Part 4 *
write a function the returns a FizzBuzz string for some number N (counting up from 1).
- for every number that isn't a multiple of 3 or 5, return a period "."
- for every number that is a multiple of 3 (but not 5), return "fizz"
- for every number that is a multiple of 5 (but not 3), return "buzz"
- for every number that is a multiple of 3 and 5, return "fizzbuzz" */
console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**

Part 5 *
Write a function findLongestWord() that takes a string of words and returns the longest word.
i.e. findLongestWord("a book full of dogs") should return "book" */
// function findLongestWord(sentence){ // YOUR CODE HERE }

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")

/**

PART 6 *
write a function that returns the Greatest Common Denominator of two numbers
- if no GCD exists, return 1 */
console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);