"use strict"

var prompt = require('prompt-sync')();

const brickSq = 200;

const wallLenght = prompt("How long is the wall in cm?");
const wallHeight = prompt("How heigh is the wall in cm?");
const oneBrickCost = prompt("How much is the cost of the brick in ct?");

const brickQuantity = (wallLenght*wallHeight)/brickSq;
const totalBrickCost = brickQuantity*oneBrickCost;

console.log(`You will need ${brickQuantity.toFixed(0)} bricks.`);
console.log(`The total cost of brick will be ${totalBrickCost.toFixed(2)}`);