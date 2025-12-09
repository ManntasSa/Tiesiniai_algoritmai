"use strict"

var prompt = require('prompt-sync')();

const pagA = +prompt("Give longer end of trapezium.");
const pagB = +prompt("Give shorter end of trapezium.");
const alt = +prompt("Give altitude of the trapezium.");
const trapArea = 0.5 * (pagA + pagB) * alt;
console.log(`Trapezium surface area is ${trapArea}`);