const theDays = document.getElementById(`days`);
const theHours = document.getElementById(`hours`);
const theMins = document.getElementById(`mins`);
const theSecs = document.getElementById(`secs`);

const theEnd = '1 Jan 2023';

function countdown() {
    const theEndDate = new Date(theEnd);
    const currentDate = new Date();
    const totalSeconds = (theEndDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    theDays.innerHTML = days;
    theHours.innerHTML = timeFormat(hours);
    theMins.innerHTML = timeFormat(mins);
    theSecs.innerHTML = timeFormat(secs);
}

function timeFormat(time) {
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);