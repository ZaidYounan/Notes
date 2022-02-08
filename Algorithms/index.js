// Two Sum first successful attempt

var twoSum = function(numbers, target) {
    let indexPair = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                indexPair.push(i);
                indexPair.push(j);
            }
        }
    }
    return indexPair;
};



/* Two Sum version II, first successfull attempt - VERY SLOW.
Array is ordered, thus there must be a faster way to eliminate 
redudant numbers */

var twoSum = function(numbers, target) {
    let indexPair = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                indexPair.push(i + 1);
                indexPair.push(j + 1);
            }
        }
    }
    return indexPair;
};




/* Simple Fizzbuzz solution in an IIFE (immediately invoked function expression) */

(function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
})();





/* Two Sum II second successful attempt, much faster. This one was tricky. 
In the end I got an idea for this from a youtube video, and I solved it by 
iteratively checking the values of the first and last array indices. 
If the sum of the two values is higher than the target, you move the right index 
to the left by 1, if the sum is smaller you move the left index to the right. 
If the sum is equal to the target, it stores the indexes and returns them. The break
if necessary to stop an infinite loop.

This algorithm assumes that the target MUST exist in the array, and would 
fail if no target exists. I can think of a couple ways to fix this, but for now 
I am satisfied with the results of this challenge.*/


var twoSum = function(numbers, target) {
    let indexPair = [];
    let left = 0;
    let right = numbers.length - 1;
    
    while (left < right) {
        let sumLeftRight = numbers[left] + numbers[right];

        if (sumLeftRight > target) {
            right -= 1;
        } 
        else if (sumLeftRight < target) {
            left += 1;
        }
        else {
            indexPair.push(left + 1);
            indexPair.push(right + 1);
            break;
        }
    }

    return indexPair;
};




/* First (failed) attempt at Zig Zag Sequence */

function findZigZagSequence(a, n) {
    a.sort(function(x, y) {return x - y});
   
    var mid = Math.floor((n + 1) / 2);
    
    for (let i = 0; i < n; i++) {
      if ( a[i] >= a[mid] ) {
          a.push(i);
        } else if (a[i] < a[mid]) {
          a.unshift(i);
        }
      }
 
    return a;
}

console.log(findZigZagSequence([1, 2, 3, 4, 5, 6, 7], 7));



/* First successful attempt at Max Sum, but has a slow run-time. 
Next attempt is much faster. */


function findMaxSum(numbers) {
    sortedArray = numbers.sort(function(a, b){return a - b});
    const largest = sortedArray.length - 1
    const secondLargest = largest - 1
    
    return sortedArray[largest] + sortedArray[secondLargest];
}
  
  
  /* If the array is sorted, then you can just grab the 
  last two indexes and sum them together to get the largest sum. 
  */

console.log(findMaxSum([ 5, 9, 7, 11 ])); // should print 20





/* Go through the array and iterativelystore the highest / second 
highest values, then sum together.


If, instead, the array was already sorted - then you could just grab the 
last two indexes and sum them together to get the largest sum. 
*/

function findMaxSum(numbers) {
    let highestInt = 0;
    let nextHighestInt = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i] > highestInt) {
        nextHighestInt = highestInt;
        highestInt = numbers[i];
        } else if (numbers[i] > nextHighestInt) {
        nextHighestInt = numbers[i];
        } else {
        continue;
        }
    }
    return highestInt + nextHighestInt;
}

console.log(findMaxSum([ 5, 9, 7, 11 ])); // should print 20





/* This next one was given as part of a technical assessment for a job interview, 
the goal of the function being to test inputted strings to see if the letters
were surrounded by a '+' symbol. If not, it would return false. Although it's 
not a difficult question, I didn't solve it properly during the test, as I was 
running out of time and had other questions to answer. It's a bit difficult for me
to focus properly when I have the pressure of a (short) time limit, something I need
to work on. */

function SimpleSymbols(str) { 
    const stringArray = str.split('');
    let result = true;
  
    for (let i = 0; i < stringArray.length; i++) {
      
      console.log(stringArray[i]);
      if (stringArray[i].match(/[a-zA-Z]/) && (stringArray[i+1] !== undefined && stringArray[i-1] !== undefined)) {
        if (stringArray[i-1] !== "+" || stringArray[i+1] !== "+") {
          console.log('awww');
          result = false;
          break;
        }  
      } else {
        continue
      }
  }
    return result;
}

console.log(SimpleSymbols('+n====4===+s+'));


/* It's been a while since I've taken up "leetcoding" - but I took on this one today. The goal was to create a function 
that converted roman numerals  in string format into an integer value. It was a bit tricky to begin with, since with Roman numerals you
have to do some subtraction (e.g. when I is before X or V) - however I was able to come up with a solution eventually. I think my solution is
"okay", but I wonder what other, more efficient solutions might be out there.*/


var romanToInt = function(s) {
    const numerals = { "I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000 }
    
    let sum = 0;
    for (let i=0; i < s.length; i++) {
        if (s[i] == 'I' && s[i+1] == 'V') {
            sum += 4;
            i++;
        }
        else if (s[i] == 'I' && s[i+1] == 'X') {
            sum += 9;
            i++;
        }
        else if (s[i] == 'X' && s[i+1] == 'L') {
            sum += 40;
            i++;
        }
        else if (s[i] == 'X' && s[i+1] == 'C') {
            sum += 90;
            i++;
        }
        else if (s[i] == 'C' && s[i+1] == 'D') {
            sum += 400;
            i++;
        }
        else if (s[i] == 'C' && s[i+1] == 'M') {
            sum += 900;
            i++;
        }   
        else {
          sum += numerals[s[i]];
      }
    }
  return sum;  
};

  
/* This next one is a bit tricky - and so far I only have a partial solution.
Once again, i'm using two for loops - one to run through the index of the array,
and another to run through the individual characters in each string.
I have an extra counter "k" which i plan to use to measure if all of the characters measured in
that iteration are the same. */

function longestCommonPrefix(strs){
    let output = "";
    let k = 0;
  
    if (!strs[0]) {
        return output;
    }
  
    if (strs.length === 1) {
      output += strs;
      return output;
    }

    for (let i=0; i < strs.length; i++) {
      for (let r=0; r < strs.length-1; r++) {
        if (strs[r][i] == strs[r+1][i]) {
          k++;
        } 
        console.log(output)
        console.log(`current character is ${strs[r][i]}`)
        console.log(r)
        console.log(i)
        if (k >= strs.length-1) {
          output += strs[r][i];
          break
        }
      }
      k = 0;
    }
    return output;
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]))


/* This is the solution i ended up coming up with, not the
most elegant solution by any means - but it works. If i took the
time to think it through, i could probably make something much cleaner.
But i'm happy that it works. */

var longestCommonPrefix = function(strs) {
    let output = "";
  
    if (!strs[0]) {
        return output;
    }
    
    if (strs.length === 1) {
        return output += strs;
    }
 
    for (let i=0; i <= strs[0].length; i++) {
      for (let r=0; r < strs.length-1; r++) {
        if (strs[0][i] !== strs[r+1][i]) {
          return output += strs[0].slice(0, i);
        }
      }
    }
    if (strs[0] == strs[1]) {
        return output += strs[0];
    }
    return output;
};