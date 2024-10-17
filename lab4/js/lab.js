// Snake game
// An implementation of the Snake game
// Steve Lin <zlin99@ucsc.edu>
// October 16 2024

// Constants
//Sprites.
  //Set up the player sprite in idle mode.
  //Set up the AI sprite in idle mode.

//Print player map.
  //Lay out barriers such as walls.

//Print player UI.
  //Lay out scores in the top left corner.

//Accept/Validate player movement.
  //Accept player movements of moving left, right, up, and down when keys are pressed.
    //Bind left, right, up, and down animation to those keys.
  //Set player movement speed at a fixed amount.

//Spawn new items/sprites over time
  //Set up a timer
  //Loop items drop at random positions over fixed periods of time.
    //Continue spawning new items/sprites until the player hits the wall, themselves, or they cannot continue.
//AI:
  //Sprites move randomly.
    //Bind sprite left, right, up, and down animation to AI’s movements.
  //Sprites move at a fixed amount of speed.
  //Sprites cannot move out of the boundary of walls.

//Elongate player avatar.
  //If the player attains an item/sprite, the player elongates by 1 block.
  //The item/sprite disappears after colliding with the player.

//Test score/loss condition. 
  //Collision detections overall:
    //Set up collision detection between the player and the sprite.
    //Set up collision detection between walls and the player.
    //Set up collision detection when the player collides with themselves.
  //Score: The player hits an item/sprite and gains 1 point.
  //Lose: The player hits a wall or themselves. 


// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
