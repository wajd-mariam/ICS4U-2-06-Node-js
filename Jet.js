/**
 * Copyright (c) 2020
 *
 * The Flytest.java program calculates virtual speed 
 * of planes flight test.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/01/12
 */

// Importing the class WajdStack from another file
const Airplanes = require("./Airplanes");

class Jet extends Airplanes {
  
    
  // Constructors that defines jet sub class.
  constructor() {
    super();
    this.MULTIPLIER = 2;
  }
  
  // Setter for license plate combination.
  setSpeed(speed) {
    super.setSpeed(speed * this.MULTIPLIER);
  }
  
  // Getters for license plate combination.
  accelerate() {
    super.setSpeed(this.getSpeed() * 2);
  }
}
  
// Exporting the class
module.exports = Jet;