"use strict"

var prompt = require('prompt-sync')();

const sweetsForBoy = +prompt("How many sweets Marius gets every day?");
const sweetsEating = +prompt("How many sweets Marius eats every day?");
const daysTillChristmas = +prompt("How many days left until Christmas?");

const howManyFriendsGetPresents = Math.floor((sweetsForBoy-sweetsEating)*daysTillChristmas/sweetsEating);
const sweetsAfterPacking = (sweetsForBoy-sweetsEating)*daysTillChristmas%sweetsEating;

console.log(`Marius will pack presents for ${howManyFriendsGetPresents} friends.`);
console.log(`Sweets left after packing: ${sweetsAfterPacking}.`);
