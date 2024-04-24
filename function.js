
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
    document.getElementById("fenn-choose").style.display = "none";
    document.getElementById("froakie-choose").style.display = "none";
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

function letHimCook(){
    document.getElementById("join_flare").style.display = "block";
    document.getElementById("refuse-flare").style.display = "block";
    document.getElementById("join-flare").style.display = "block";
    document.getElementById("won").style.display = "none";
    document.getElementById("follow_grunt").style.display = "none";
    document.getElementById('glittering_cave').style.display = "none";
    document.getElementById("head_straight").style.display = "none";
    document.getElementById("accept-pur").style.display = "none";
    document.getElementById("first-mission").style.display = "none";
    document.getElementById('head_straight').style.display = "none";
    document.getElementById("lost_cave").style.display = "none";
    document.getElementById("rematch").style.display = "none";
    document.getElementById("beaten").style.display = "none";
    document.getElementById("take_over").style.display = "none";
    document.getElementById("base").style.display = "none";   
    document.getElementById("rival_battle").style.display = "none";
    document.getElementById("battle_prof").style.display = "none";
    document.getElementById("evil_end").style.display = "none";
    document.getElementById("puzzle-partone").style.display = "none";
    document.getElementById("puzzle-parttwo").style.display = "none";
    document.getElementById("puzzle-partthree").style.display = "none";
    document.getElementById("puzzle-partfour").style.display = "none";
    document.getElementById("pass-puzzle").style.display = "none";
    document.getElementById("fail-puzzle").style.display = "none";
}

function joinChoice(){
    document.getElementById("purposal-text").style.display = "none";
    document.getElementById("refuse-flare").style.display = "none";
    document.getElementById("join-flare").style.display = "none";
    document.getElementById("follow_grunt").style.display = "block"
    document.getElementById("accept-pur").style.display = "block";

}

function refuseChoice(){
    document.getElementById("purposal-text").style.display = "none";
    document.getElementById("refuse-flare").style.display = "none";
    document.getElementById("join-flare").style.display = "none";
    document.getElementById("wandering").style.display = "none";
    document.getElementById("aimless").style.display = "none";
    document.getElementById("blackout").style.display = "none";
    document.getElementById("blackout_battle").style.display = "none";
    document.getElementById("chasing").style.display = "block"
    document.getElementById("deny-pur").style.display = "block";
    document.getElementById("chasing").style.display = "block";
    document.getElementById("refuse_flare").style.display = "block";
  
}

function followFlare(){
    document.getElementById("accept-pur").style.display = "none";
    document.getElementById("follow_grunt").style.display = "none";
    document.getElementById("first-mission").style.display = "block";
    document.getElementById("glittering_cave").style.display = "block";
}

function cave(){
    document.getElementById("first-mission").style.display = "none";
    document.getElementById("glittering_cave").style.display = "none";
    document.getElementById("lost_cave").style.display = "block";
    document.getElementById("head_straight").style.display = "block";
}

function puzzle1(){
    document.getElementById("lost_cave").style.display = "none";
    document.getElementById("head_straight").style.display = "none";
    document.getElementById("puzzle-partone").style.display = "block";
}

function right1(){
    document.getElementById("puzzle-partone").style.display = "none";
    document.getElementById("puzzle-parttwo").style.display = "block";
}

function right2(){
    document.getElementById("puzzle-parttwo").style.display = "none";
    document.getElementById("puzzle-partthree").style.display = "block";
}
function right3(){
    document.getElementById("puzzle-partthree").style.display = "none";
    document.getElementById("puzzle-partfour").style.display = "block";
}
function right4(){
    document.getElementById("puzzle-partfour").style.display = "none";
    document.getElementById("pass-puzzle").style.display = "block";
}

function wrongChoice(){
    document.getElementById("puzzle-partwo").style.display = "none";
    document.getElementById("puzzle-partthree").style.display = "none";
    document.getElementById("puzzle-partfour").style.display = "none";
    document.getElementById("puzzle-partone").style.display = "none";
    document.getElementById("fail-puzzle").style.display = "block";
}
function retrace(){
    document.getElementById("puzzle-partone").style.display = "block";
    document.getElementById("fail-puzzle").style.display = "none";
}