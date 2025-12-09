"use strict"

var prompt = require('prompt-sync')();

const fiveCents = prompt("How many cent there are in 5 cent?");
const twentyCents = prompt("How many cent there are in 20 cent?");
const twoLitai = prompt("How many Litai there are in 2 Lt?");

const totalMoney = 0.05 * fiveCents + 0.20 * twentyCents + 2 * twoLitai;

console.log("There are " + totalMoney + " Lt");