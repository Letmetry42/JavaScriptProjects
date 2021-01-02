let daysitem = document.querySelector("#days");
let hoursitem = document.querySelector("#hours");
let minsitem = document.querySelector("#mins");
let secsitem = document.querySelector("#secs");

let countDown = () => {
    let futureDate = new Date("1 Jan 2022");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;
    //console.log(myDate);


    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60 ) % 24;
    let mins = Math.floor(myDate / 1000 / 60 ) % 60;
    let secs = Math.floor(myDate / 1000 ) % 60;


    daysitem.innerHTML = days;
    hoursitem.innerHTML = hours;
    minsitem.innerHTML = mins;
    secsitem.innerHTML = secs;



} 

countDown()

setInterval(countDown, 1000)





