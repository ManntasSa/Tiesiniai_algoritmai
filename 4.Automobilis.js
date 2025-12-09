"use strict"

var prompt = require('prompt-sync')();

const autoSpeed = prompt("How fast is the car?")
const tunnelLenght = 264;

const timePassed = tunnelLenght / (autoSpeed * 5/18);


console.log(`The car will pass tunnel in  ${timePassed.toFixed(2)} s`);