
function startGame(){
    document.getElementById("start_game").style.display = "none";
    document.getElementById("aquacorde_town").style.display = "block";
}

function aquacordeTown(){
    document.getElementById("aquacorde_town").style.display = "none";
    document.getElementById("choose").style.display = "block";
}

function hideFunctionGreen() {
        document.getElementById("choose").style.display = "none";
        document.getElementById("starter-img").style.display = "none";
        document.getElementById("ches-choose").style.display = "block";
    
};

function hideFunctionBlue(){
        document.getElementById("choose").style.display = "none";
        document.getElementById("starter-img").style.display = "none";
        document.getElementById("froakie-choose").style.display = "block";
    }  


function hideFunctionRed(){
        document.getElementById("choose").style.display = "none";
        document.getElementById("starter-img").style.display = "none";
        document.getElementById("fenn-choose").style.display = "block";
    
}
   


//this sets the timer for the battle function for the first battle of the game. It counts down by one untill it reaches zero and displays the corrisponding text
var sec = 30;
function timer() {
    var timers = setInterval(function () {
        document.getElementById('safeTimerDisplay').innerHTML = 'Time: 00:' + sec;
        sec--;

        if (sec <= 0) {
            document.getElementById("yan").style.display = "block";
            document.getElementById('safeTimerDisplay').innerHTML = 'Time: 00:' + sec;
            document.getElementById("first-battle").style.display = "none";
            document.getElementById('safeTimerDisplay').style.display = "none";
            document.getElementById('retry').style.display = "block";
            sec = 30
            clearInterval(timers)
            document.getElementById('number').value = 15;

        }



    }, 700);
};

//This code makes are attack button work when a battle starts where one click substracts one hp untill hp reaches zero and the journey continues
function attack() {
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value
    if (value == 0) {
        document.getElementById("nay").style.display = "block";
        document.getElementById("yan").style.display = "none";
        document.getElementById('safeTimerDisplay').style.display = "none";
        document.getElementById("first-battle").style.display = "none";
        document.getElementById("continue").style.display = "block";
        sec = 9999999
        clearInterval(timers)

    }



}

function reveal() {
    document.getElementById("number").style.display = "block"
    document.getElementById("ches-choose").style.display = "none";
    document.getElementById("safeTimerDisplay").style.display = "block";
    document.getElementById("first-battle").style.display = "block";
}

function retry() {
    document.getElementById("ches-choose").style.display = "block";
    document.getElementById('retry').style.display = "none";
    document.getElementById("yan").style.display = "none";
};

function revealBady(){
    document.getElementById("nay").style.display = "none";
    document.getElementById("continue").style.display = "none";
    document.getElementById("grunt_battle").style.display = "block";
    document.getElementById("badyfight").style.display = "block";
    document.getElementById("won").style.display = "none";
    document.getElementById("lost").style.display = "none";
}

var secs=30;
function timer2() {
    
    var timerss = setInterval(function () {
        document.getElementById('safeTimerDisplaytwo').innerHTML = 'Time: 00:' + secs;
        secs--;

        if (secs <= 0) {
            document.getElementById("lost").style.display = "block";
            document.getElementById('safeTimerDisplaytwo').innerHTML = 'Time: 00:' + secs;
            document.getElementById("second-battle").style.display = "none";
            document.getElementById('safeTimerDisplaytwo').style.display = "none";
            secs = 30;
            clearInterval(timerss);
            document.getElementById('numbertwo').value = 20;

        }



    }, 700);
};

//This code makes are attack button work when a battle starts where one click substracts one hp untill hp reaches zero and then the next code plays
function attack2() {
    var value = parseInt(document.getElementById('numbertwo').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numbertwo').value = value
    if (value == 0) {
        document.getElementById("won").style.display = "block";
        document.getElementById("lost").style.display = "none";
        document.getElementById('safeTimerDisplaytwo').style.display = "none";
        document.getElementById("second-battle").style.display = "none";
       
        secs = 9999999
        clearInterval(timerss)

    }
}

function reveal2() {
    document.getElementById("numbertwo").style.display = "block"
    document.getElementById("badyfight").style.display = "none";
    document.getElementById("safeTimerDisplaytwo").style.display = "block";
    document.getElementById("second-battle").style.display = "block";
    
}

function retry2(){
    document.getElementById("badyfight").style.display = "block";
    document.getElementById("lost").style.display = "none";
}