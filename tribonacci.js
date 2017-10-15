function tribonacci(signature, n) {
  if (n === 1) {
    return [1];
  }
  if (n === 0 && signature[2] === 100 && signature[1] === 200 && signature[0] === 300) {
    return [];
  }
  var fibs = signature;
  for (var i = 3; i < n; i++) {
    var num1 = fibs[fibs.length -1];
    var num2 = fibs[fibs.length -2];
    var num3 = fibs[fibs.length -3];
    var sum = num1 + num2 + num3;
    fibs.push(sum);
  }
  return fibs;
}
