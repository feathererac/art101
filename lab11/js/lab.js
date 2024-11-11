/*
Author: Zhongfengjing Lin
Date: November, 2024
Requirements: jQuery must be loaded for this script to work.
License: Public Domin
*/


//function
// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  return inputString.split('').sort().join('');
}
function anagram(string1, string2) {
  const normalize = str => str.toLowerCase().split('').sort().join('');
  return normalize(string1) === normalize(string2);
}

//buttons
$("#submit").click(function(){
  const userName = $("#user-name").val();
  const input1 = $("#input1").val();
  const input2 = $("#input2").val();

  // Sort user name and check anagram
  const userNameSorted = sortString(userName);
  const isAnagram = anagram(input1, input2);
  let anagramResult;
  if (isAnagram) {
      anagramResult = 'Yes';
  } else {
      anagramResult = 'No';
  }
  // Clear the output div
  $("#output").html('');
  
  // Append output without replacing previous content
  $("#output").append('<div class="text"><p>Sorted Name: ' + userNameSorted + '</p></div>');
  $("#output").append('<div class="text"><p>Anagram Check (' + input1 + ', ' + input2 + '): ' + anagramResult + '</p></div>');
});

$("#home-button").click(function() {
  window.location.href = "../index.html";
});


