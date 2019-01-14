
function cap(sentence) {
  var firstLast = sentence.slice(-1)+sentence[0];
  firstLast = firstLast.toUpperCase();

  return firstLast
}

function reverse(string) {
  firstLetter = string.charAt(0);
  lastLetter = string.charAt(1);
  var reversed = lastLetter + firstLetter;
  return reversed;
}



function addtoend(sentence, reversed) {
  var add = sentence + reversed;
  return add;
}


function counting(sentence) {
  var divide = sentence.length;
  divide = divide / 2;
  divide = Math.floor(divide);
  alert(divide);
  return divide;
}

function concatenate(divide, sentence, addingtoEnd) {
  divide = parseInt(divide);
  divide = divide - 1;
  alert(divide);
  var position = sentence.charAt(divide);
  alert(position);
  var final = position + addingtoEnd;
  return final;
}
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}


function main() {
  var sentence = prompt("Enter something random");
  console.log(sentence);
  var result = cap(sentence);
  alert(result);
  var reversed = reverse(result);
  alert(reversed);
  var addingtoEnd = addtoend(sentence, reversed);
  alert(addingtoEnd);
  var divide = counting(sentence);
  var final = concatenate(divide, sentence, addingtoEnd);
  final = reverseString(final);
  alert(final);
}







main();
