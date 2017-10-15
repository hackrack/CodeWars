// Write function scramble(str1,str2) that returns true if a portion of str1
// characters can be rearranged to match str2, otherwise returns false.
//

function scramble(str1, str2) {
  for (var i = 0; i < str2.length; i++) {
    var char = str2[i];
    if (str1.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}
// str1 is 'rkqodlw' and str2 is 'world' the output should return true.
// str1 is 'cedewaraaossoqqyt' and str2 is 'codewars' should return true.
// str1 is 'katas' and str2 is 'steak' should return false.
