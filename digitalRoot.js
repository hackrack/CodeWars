// In this kata, you must create a digital root function.
// A digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has two digits,
// continue reducing in this way until a single-digit number is produced.
// This is only applicable to the natural numbers.

function digital_root(n) {
  var sum = 0;
  var str = n.toString();
  for (var i = 0; i < str.length; i++) {
    var num = Number(str[i]);
    sum += num;
  }
  var arr = [];
  if (sum > 10) {
    arr.push(digital_root(sum));
    return arr[0];
  }
  return sum;
}

// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2
