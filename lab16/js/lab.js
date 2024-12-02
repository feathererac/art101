/*
Author: Zhongfengjing Lin
Date: Dec, 2024
Requirements: jQuery must be loaded for this script to work. Poke API.
License: Public Domin
*/

$('#generate').click(function () {
  const xkcdUrl = 'https://xkcd.com/info.0.json';

  // Fetch the latest XKCD comic
  $.getJSON(xkcdUrl, function (data) {
      // Extract relevant data
      const { title, img, alt } = data;

      // Build HTML content
      const comicHtml = `
          <h2>${title}</h2>
          <img src="${img}" alt="${alt}" style="max-width: 100%; height: auto;">
          <p>${alt}</p>
      `;

      // Inject content into the output div
      $('#output').html(comicHtml);
  }).fail(function () {
      // Handle errors gracefully
      $('#output').html('<p>Failed to load the comic. Please try again later.</p>');
  });
});

// Redirect to homepage
$('#home-button').click(function () {
  window.location.href = '../index.html';
});





