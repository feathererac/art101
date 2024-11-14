/*
Author: Zhongfengjing Lin
Date: November, 2024
Requirements: jQuery must be loaded for this script to work.
License: Public Domin
*/

// Function to determine Hogwarts house based on name length
function sortingHat(str) {
  const cleanStr = str.replace(/\s+/g, ''); // Remove all spaces from the name
  const length = cleanStr.length;           // Count the letters in the name without spaces
  const mod = length % 4;                   // Get the remainder when divided by 4
  // Assign house based on mod value
  if (mod === 0) {
    return { house: "Gryffindor", description: "Gryffindor values bravery, daring, nerve, and chivalry." };
  } else if (mod === 1) {
    return { house: "Ravenclaw", description: "Ravenclaw values intelligence, knowledge, and wit." };
  } else if (mod === 2) {
    return { house: "Slytherin", description: "Slytherin values ambition, cunning, leadership, and resourcefulness." };
  } else {
    return { house: "Hufflepuff", description: "Hufflepuff values hard work, dedication, patience, and loyalty." };
  }
}
// Click listener for the sorting button
$("#submit").click(function() {
  const name = $("#name-input").val().trim();
  if (name) {
    const { house, description } = sortingHat(name);
    // Determine house color for styling
    let houseColor = "";
    if (house === "Gryffindor") {
      houseColor = "rgb(174, 0, 1)";
    } else if (house === "Ravenclaw") {
      houseColor = "rgb(25, 57, 160)";
    } else if (house === "Slytherin") {
      houseColor = "rgb(0, 98, 52)";
    } else if (house === "Hufflepuff") {
      houseColor = "rgb(240, 206, 74)";
    } 
    // Display the result with a magical style
    $("#output").html(
      `<p class="magic-message" style="background-color: ${houseColor};">
         ✨ ${name}, the Sorting Hat has sorted you into ${house}! ✨<br>
         <em>${description}</em>
       </p>`
    );
  } else {
    $("#output").html("<p>Please enter a name to be sorted.</p>");
  }
});
$("#home-button").click(function() {
  window.location.href = "../index.html";
});


