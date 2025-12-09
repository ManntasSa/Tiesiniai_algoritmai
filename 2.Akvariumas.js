"use strict";

var prompt = require('prompt-sync')();

const currentFishNum = +prompt('How many fishes in the aquarium?')
const addedFish = +prompt("How many fishes added to the aquarium?");
const daysPassed = +prompt("How many days passed?")

const totalFish = daysPassed * addedFish + currentFishNum;

console.log("After " + daysPassed + " days there are " + totalFish + " fishes in the aquarium.");