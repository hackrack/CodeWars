// Write a function called validParentheses that takes a string of parentheses,
// and determines if the order of the parentheses is valid. validParentheses should
// return true if the string is valid, and false if it's invalid.
//
// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true
function validParentheses(parens){
  var length = parens.length / 2;
  for (var i = 0; i <= length; i++) {
    parens = parens.replace('()', '');
    parens = parens.replace('{}', '');
    parens = parens.replace('[]', '');
  }
  return parens == '';
}
// console.log(validParentheses("(()"));
