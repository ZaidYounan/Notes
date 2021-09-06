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