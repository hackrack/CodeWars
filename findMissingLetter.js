// You will always get an valid array. And it will be always exactly one letter be missing.
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.
function findMissingLetter(array) {
  var arr = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var first = array[0];
  var last = array[array.length-1];
  var sliced = alphabet.slice(alphabet.indexOf(first), (alphabet.indexOf(last)+1));
  for (var i = 0; i < array.length; i++) {
    var char1 = array[i];
    var char2 = sliced[i];
    if (char1 !== char2) {
      return char2;
    }
  }
}
// console.log(findMissingLetter(['a','b','c','d','f']));
