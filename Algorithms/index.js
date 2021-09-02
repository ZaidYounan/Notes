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
