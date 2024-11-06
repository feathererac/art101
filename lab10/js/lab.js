/*
Author: Zhongfengjing Lin
Date: November, 2024
Requirements: jQuery must be loaded for this script to work.
License: Public Domin
*/


//function
function generateRandomText() {
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min; // Added this line to define randLen
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  return text.slice(randStart, randStart + randLen);
}

//buttons
$("#make-convo").click(function(){
  const newText = generateRandomText();
  $("#output").append('<div class="textmessage"><p>' + newText + '</p></div>');
  $("#output").append('<p></p>'); //adds a new line after a inline element
});

$("#home-button").click(function() {
  window.location.href = "../index.html";
});


