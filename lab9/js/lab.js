/*
Author: Zhongfengjing Lin
Date: November, 2024
Requirements: jQuery must be loaded for this script to work.
License: Public Domin
*/


// Add a button to each section with the class "special-sections"
$(".special-sections").append("<button class='button-section'>Make Special</button>");

// Toggle "special" class on the parent section of the clicked button
$(".button-section").click(function() {
    $(this).parent().toggleClass("special");
});

$("#home-button").click(function() {
  window.location.href = "../index.html";
});

