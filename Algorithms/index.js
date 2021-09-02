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
