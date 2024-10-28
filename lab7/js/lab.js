//
// Author: Zhongfengjing Lin
// Date: October 28, 2024
// License: Public Domin
//

// variables
let userName = window.prompt("Please enter your userName") //get user input of username

// functions
function sortUsername(){
  if (typeof userName === 'string') { //check fo the type of the string to avoid error
    let sortedUsername = userName.split('').sort().join('').toLowerCase();
    return sortedUsername; //return the sorted username
  } else {
    return "Type error"; //return error message
  }
}

//output
document.writeln("Here is your username before: ",userName,".</br>", " Here is it sorted: ",sortUsername(),".</br>");