
// In this function you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// a being 1, b being 2, etc.
// As an example:
// alphabet_position("The sunset sets at twelve o' clock.")

function alphabetPosition(text) {
  var arr = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (var i = 0; i < text.length+1; i++) {
    var char = text[i];
    arr.push(1+alphabet.indexOf(char));
  }
  var arr1 = arr.filter(function(x) {
    if (typeof x === 'number') {
      return x;
    }
  })
  return arr1.join(" ");
}
