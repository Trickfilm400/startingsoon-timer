let countdown = document.getElementById("countdown");
let finishtext = document.getElementById("finishtext");

var timediff = 0;
var beginning = 0;
var laststatus = true;

function time() {
    return(Date.now() / 1000 | 0);
}


if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}




countdown.style.display = "block";
finishtext.style.display = "none";

function startTimer(startTime) {

    //
    var data = {
        timenow: Math.floor(Date.now() / 1000),
        beginning: startTime
    }

    timediff = data.timenow - time();
    beginning = data.beginning;

    setInterval(function () {
        let timeNow = time() + timediff;
        let remaining = beginning - timeNow;

        if (remaining >= 0 && laststatus === false) {
            countdown.style.display = "block";
            finishtext.style.display = "none";
            laststatus = true;
        } else if (remaining < 0 && laststatus === true) {
            countdown.style.display = "none";
            finishtext.style.display = "block";
            laststatus = false;
        }

        let sign = (remaining < 0) ? "-" : "";
        remaining = Math.abs(remaining);
        // Setting and displaying hours, minutes, seconds
        let hours = (remaining / 3600) | 0;
        let minutes = ((remaining % 3600) / 60) | 0;
        let seconds = (remaining % 60) | 0;

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdown.innerText = sign + ((hours != 0) ? hours + ":" : "") + minutes + ":" + seconds;
    }, 250);
}
