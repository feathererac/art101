/*
Author: Zhongfengjing Lin
Date: November, 2024
Requirements: jQuery must be loaded for this script to work. Poke API.
License: Public Domin
*/

document.getElementById('generate').addEventListener('click', () => {
    const API_URL = 'https://pokeapi.co/api/v2/';
    
    // Generate a random Pokémon ID within the valid range
    const totalPokemon = 1025; 
    const randomId = Math.floor(Math.random() * totalPokemon) + 1;

    // Fetch random Pokémon data
    fetch(`${API_URL}pokemon/${randomId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Pokémon with ID ${randomId} not found!`);
        }
        return response.json();
      })
      .then(pokemon => {
        // Display Pokémon details
        document.getElementById('name').textContent = `Name: ${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}`;
        document.getElementById('sprite').src = pokemon.sprites.front_default || '';
        document.getElementById('sprite').alt = pokemon.name;
        document.getElementById('type').textContent = `Type(s): ${pokemon.types.map(type => type.type.name).join(', ')}`;
      })
      .catch(error => {
        // Return Eorror message
        console.error('Error fetching Pokémon:', error);
        document.getElementById('name').textContent = 'Error fetching Pokémon. Please try again.';
        document.getElementById('sprite').src = '';
        document.getElementById('type').textContent = '';
      });
});

//Function
$("#home-button").click(function() {
  window.location.href = "../index.html";
});



