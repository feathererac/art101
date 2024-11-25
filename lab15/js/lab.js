/*
Author: Zhongfengjing Lin
Date: November, 2024
Requirements: jQuery must be loaded for this script to work. Poke API.
License: Public Domin
*/

// Add a click event to the button with ID 'generate'
$('#generate').click(function () {
  // Base URL for the API
  const API_URL = 'https://pokeapi.co/api/v2/';
  
  // Generate a random Pokémon ID between 1 and 1025
  const randomId = Math.floor(Math.random() * 1025) + 1;

  // Use jQuery's AJAX method to fetch data from the API
  $.ajax({
    // The API endpoint to fetch a specific Pokémon by ID
    url: `${API_URL}pokemon/${randomId}`,
    // The HTTP request type (GET, in this case)
    type: 'GET',
    // The expected response data type (JSON)
    dataType: 'json',
    // On success, this function runs
    success: function (data) {
      // Parse the data and insert it into the output div
      $('#output').html(`
        <h2>Name: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}" />
        <p>Type(s): ${data.types.map(type => type.type.name).join(', ')}</p>
      `);
    },
    // On error, this function runs
    error: function (jqXHR, textStatus, errorThrown) {
      console.error('Error fetching Pokémon:', textStatus, errorThrown);
      $('#output').html('<p>Error fetching Pokémon. Please try again.</p>');
    },
  });
});

//Function
$("#home-button").click(function() {
  window.location.href = "../index.html";
});



