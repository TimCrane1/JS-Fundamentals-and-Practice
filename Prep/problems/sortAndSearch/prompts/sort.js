/** 
  * Implement a function that sorts and returns an array of numbers.
  * Your algorithm should have n*log(n) time complexity.
  *
  * Some acceptable strategies include: quicksort, mergesort, heapsort
  * Bonus for sorting in place.
  */

const sort = numbers => {
  // TODO: Implement sort here
  var sorted = true;
  
  for (i = 1; i < numbers.length; i++) {
    if (numbers[i] < numbers[i-1]) {
      sorted = false;
    }
  }
  
  if (numbers.length === 0 || sorted === true) {
    return numbers;
  }
  return quickSort(numbers);
}

module.exports = { sort };

function quickSort(arr) {
  
    if (arr.length === 0) {
    return [];
  }
    var pivot = arr.splice([Math.floor(arr.length/2)], 1);
    var less = [];
    var more = [];
  
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          less.push(arr[i]);
        } else if (arr[i] > pivot) {
          more.push(arr[i]);
        }
      }
      return quickSort(less).concat(pivot, quickSort(more));
}