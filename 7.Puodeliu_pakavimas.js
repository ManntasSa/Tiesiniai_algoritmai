"use strict"

var prompt = require('prompt-sync')();

const cups = +prompt("Cups for packaging.");

const fullBoxes = Math.floor(cups / 3); // Math.floor suapvalina iki sveiko skaiciaus
const cupsLeft = cups % 3;
console.log(`There are ${fullBoxes} boxes of cups.`);
console.log(`There are ${cupsLeft} cups not boxed.`);

