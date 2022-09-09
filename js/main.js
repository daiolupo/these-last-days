/*
These Last Days JavaScript Interactivity
filename: main.js

Author: Dwain Aiolupotea
Date: 2 September 2021
updated: 9 September 2022
*/

"use strict";

// Automated year for copyright footer content
const latestDate = document.querySelector(".latest-date");
const date = new Date();
let year = date.getFullYear();
latestDate.innerHTML = ` ${year}©Copyright EGYM`;
