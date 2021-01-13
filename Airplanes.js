/**
 * Copyright (c) 2020
 *
 *  The WajdStack3 Class creates a stack, and methods to use 
 * by the PeekClear.js program.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 * Version 1.0
 * Created on : 2020/12/13
 */
 
class Airplanes {
  
  // Constructors that defines stack array
  constructor() {
    this.speed = 0;
  }
  
  // Getters for license plate combination.
  getSpeed() {
    return this.speed;
  }
  
  // Method for setting speed 
  setSpeed(speed) {
    this.speed = speed;
  }
}

// Exporting the class
module.exports = Airplanes;