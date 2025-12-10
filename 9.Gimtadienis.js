"use strict"

var prompt = require('prompt-sync')();

const tautvydasCookies = +prompt("How many cookies Tautvydas made?");
const freindsWithCookies = +prompt("How many friends at the party brought cookies?");
const totalPartyMembers = +prompt("How many friends at the party?");

const cookiesForGuests = Math.floor((tautvydasCookies + (tautvydasCookies*freindsWithCookies)) / totalPartyMembers);

const extraCookiesForTautvydas = (tautvydasCookies + (tautvydasCookies*freindsWithCookies)) % totalPartyMembers;

console.log(`${cookiesForGuests} cookies for each party member.`);
console.log(`${extraCookiesForTautvydas} extra cookies for Tautvydas`);


