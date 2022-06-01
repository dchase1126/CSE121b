
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



/*let theDate =  new Date();
let dayOfWeek = theDate.getDate();
let current = getDay();
let theDay = `${theDate.getmonth()}/${theDate.getDate()}`;
document.querySelector(fulldate).textContent = fulldate;*/

//const currentYear = newDate().getFullYear(); /*-- This was a suggestion from another classmember and Bro Blazzard.*/
//document.querySelector('#year').innerHTML = currentYear;
