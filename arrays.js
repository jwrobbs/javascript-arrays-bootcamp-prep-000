var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(string,string2){
 var newArray = [string2, ...string]
 return newArray;
}

function destructivelyAddElementToBeginningOfArray(string,string2){
  return string.unshift(string2)
}

function addElementToEndOfArray() {
  
}
function destructivelyAddElementToEndOfArray() {
  
}