"use strict"

var prompt = require('prompt-sync')();

const numberOfAuto = +prompt("How many automobiles there are?")
const ferryCapacity = +prompt("How many cars will fit in ferry?")

const trips = Math.floor(numberOfAuto / ferryCapacity ); // Math.floor suapvalina iki sveiko skaiciaus
const carsLeft = numberOfAuto % ferryCapacity;

console.log(`Trips ${trips}`);
console.log(`Cars left ${carsLeft}`);

