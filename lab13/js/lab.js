/*
Author: Zhongfengjing Lin
Date: November, 2024
Requirements: jQuery must be loaded for this script to work.
License: Public Domin
*/

//Function

function FizzBuzz() {
  const outputContainer = $("#output");
  outputContainer.empty(); // Clear any existing content

  let table = $("<table></table>"); // Create table element
  let row; // To hold each table row
  let cellCount = 0;

  for (let numCount = 1; numCount <= 200; numCount++) {
    let result = numCount;

    if (numCount % 3 === 0) {
      result += " Fizz!";
    }
    if (numCount % 5 === 0) {
      result += " Buzz!";
    }
    if (numCount % 7 === 0) {
      result += " Boom!";
    }

    // Create a new row every 10 cells
    if (cellCount % 10 === 0) {
      row = $("<tr></tr>");
      table.append(row);
    }

    // Create and append a cell
    let cell = $("<td></td>").html(result);
    row.append(cell);
    cellCount++;
  }

  outputContainer.append(table); // Append the table to the container
}

// Call the FizzBuzz function on page load
$(document).ready(function() {
  FizzBuzz();
});


$("#home-button").click(function() {
  window.location.href = "../index.html";
});

$("#js-button").click(function() {
  window.location.href = "./js/lab.js";
});


