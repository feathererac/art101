//
// Author: Zhongfengjing Lin
// Date: October 30, 2024
// License: Public Domin
//

// variables
var numbers = [1, 4, 9, 16, 25]; //set up an array of numbers

// functions
function squareRoot(x) {  //Calculates squar roots
  var results = Math.sqrt(x);
  return results;
}
var sqrtresults = numbers.map(squareRoot); //get square root result of array numbers

var addResults = sqrtresults.map(function(x) {   //calculates +3 based on the sqrtresults.
  return x + 3;
});

//output

//Prints in console
console.log("Array numbers is:", numbers);
console.log("Square Roots:", sqrtresults); 
console.log("Added Results of array numbers +3 is:", addResults);

//Prints in html
$("#output1").html("Array numbers is: " + numbers.join(", ") + ".</br>");
$("#output2").html("Square Roots: " + sqrtresults.join(", ") + ".</br>"); 
$("#output3").html("Added Results of array numbers +3 is: " + addResults.join(", ") + ".</br>");