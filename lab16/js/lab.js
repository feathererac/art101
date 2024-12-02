/*
Author: Zhongfengjing Lin
Date: Dec, 2024
Requirements: jQuery must be loaded for this script to work. 
License: Public Domain
*/

const xkcdUrl = 'https://xkcd.com/info.0.json';
// Update proxyUrl if using your own proxy or the demo server
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

$('#generate').click(function () {
    $.ajax({
        url: proxyUrl + xkcdUrl, // Proxying the XKCD API request
        type: "GET",
        dataType: "json", // Expecting JSON response
        success: function (comicObj) {
            // Extract the title, image URL, and alt text
            const title = comicObj.title;
            const imgUrl = comicObj.img;
            const altText = comicObj.alt;

            // Dynamically create the HTML content
            const comicHtml = `
                <h2>${title}</h2>
                <img src="${imgUrl}" alt="${altText}" title="${altText}">
                <p>${altText}</p>
            `;

            // Inject content into the #output container
            $('#output').html(comicHtml);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            // Handle errors gracefully
            console.error('Error fetching XKCD comic:', textStatus, errorThrown);
            $('#output').html('<p>Failed to load the comic. Please try again later.</p>');
        }
    });
});

// Redirect to homepage
$('#home-button').click(function () {
    window.location.href = '../index.html';
});





