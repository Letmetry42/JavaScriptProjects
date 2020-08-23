const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//functons
// 1- togglevideo - play or pause video
// If video is playing, then pause
// If video is paused, then play
function toogleVideo() {
    return true;
}

// 2- update




// 3 - updateProgress - update the position of the progress bar 
function updateProgress() {
    return true;
}


// 4 - StopVideo - stop video playback and reset time to 0
function 


// 5 - setProgress - update video playback time based on manual
function setProgress() {
    return true;
}
// Event Listeners
// 1- video Element - click to play or pause video
video.addEventListener('click', toogleVideo);

// 2- Video Element - pause to toggle play icon to pause icon
video.addEventListener('pause', updateIcon);

// 3- video Elemnet - play to toogle pause icon back to play icon
video.addEventListener('play', updateIcon);

// 4- video Element - update progress bar and timestamp
video.addEventListener('timeupdagte', updateProgress);

// 5- play button - click to play or pause video
play.addEventListener('click', toggleVideo);

// 6- stop button - click to reset video and pause video
Stop.addEventListener('click', stopVideo);

// 7- Progress Bar - change position to change time to playback
