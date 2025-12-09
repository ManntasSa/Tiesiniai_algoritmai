"use strict"

var prompt = require('prompt-sync')();

let pirmadienis = +prompt("Kiek pamokų yra pirmadienį?");
let antradienis = +prompt("Kiek pamokų yra antradienį?");
let trečiadienis = +prompt("Kiek pamokų yra trečiadienį?");
let ketvirtadienis = +prompt("Kiek pamokų yra ketvirtadienį?");
let penktadienis = +prompt("Kiek pamokų yra penktadienį?");

let išVisoPamokų = pirmadienis + antradienis + trečiadienis + ketvirtadienis + penktadienis;

console.log( "Iš viso pamokų: " + išVisoPamokų);
console.log("Iš viso minučių: " + išVisoPamokų * 45 );