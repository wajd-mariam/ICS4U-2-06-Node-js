/**
 * The TryCatchPop file adds integer added by the 
 * user to the stack array and it pops it off the stack. It also checks
 * whether the stack is empty or not and doesn't crash.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/13
 */
 
// Importing classes.
const Airplanes = require("./Airplanes");
const Jet = require("./Jet");

// Declaring biplane and setting its speed:
let biplane = new Airplanes();
biplane.setSpeed(212);
console.log(`The biplane travels at ${biplane.getSpeed()} KM/H`);

// Declaring Airbus and setting its speed:
let airbus = new Jet();
airbus.setSpeed(422);
console.log(`The Airbus travels at ${airbus.speed} KM/H`);

// Declaring counter.
let counter = 0;

// Entering a while loop:
while (counter < 4) { 
  airbus.accelerate();
  console.log(airbus.getSpeed());
  if (airbus.getSpeed() > 5000) { 
    biplane.setSpeed(biplane.getSpeed() * 2);
  } else {
    // Accelerating the boeing aircraft.
    airbus.accelerate();
  }
  // Adding 1 to counter:
  counter++;
}
// Printing out biplane final speed:
console.log(biplane.getSpeed());
