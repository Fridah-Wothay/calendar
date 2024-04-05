let date = new Date();// it returns dates objects that are declared in my html code
let year = date.getFullYear();//Its fetching for me data that already exists(month)
let month = date.getMonth(); // its fetching for me data that already exists(month)
 

const day = document.querySelector(".calendar-dates");//
 
const currdate = document
    .querySelector(".calendar-current-date"); // allows you to select  an element
 
const currCalender = document
    .querySelectorAll(".calendar-navigation span");
 
// Array of month names
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


