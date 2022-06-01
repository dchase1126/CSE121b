//Array
const days = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let day = days[d.getDay()];
let month = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = day + ", " + month + " " + d.getDate() + ", " + d.getFullYear();
 
document.getElementById("currentdate").textContent = fulldate;
