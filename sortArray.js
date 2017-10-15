// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  var sorted = [];
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    if (number % 2 !== 0) {
      sorted.push(number);
      sorted.sort(function(a,b) {
        return a - b;
      })
    }
  }
  for (var j = 0; j < array.length; j++) {
    var num = array[j];
    if (num % 2 === 0) {
      sorted.splice(j,0,num);
    }
  }
  return sorted;
}
