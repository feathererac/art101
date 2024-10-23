//
// Author: Zhongfengjing Lin
// Date: October 23, 2024
// License: Public Domin
//

// Constants
let myTransport = ["car", "bus", "bike"]
let myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "blue",
  year: 2014,
  currentYear: 2024,
  age: function(){
    return this.currentYear-this.year;
  }
}

document.writeln("My transportation: " + myTransport + "<br>")
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");