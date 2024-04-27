//this is basically toggles for the starting of the game
function startGame() {
    toggleVis(["start_game", "aquacorde_town"]);
}

function aquacordeTown() {
    toggleVis(["aquacorde_town", "choose"]);
}

function hideFunctionGreen() {
    toggleVis(["choose", "starter-img", "ches-choose"]);
}

function hideFunctionBlue() {
    toggleVis(["choose", "starter-img", "froakie-choose"]);
}

function hideFunctionRed() {
    toggleVis(["choose", "starter-img", "fenn-choose"]);
}

//this sets the timer for the battle function for the first battle of the game. It counts down by one untill it reaches zero and displays the corrisponding text
var sec = 30;
function timer() {
    var timers = setInterval(function () {
        document.getElementById('safeTimerDisplay').innerHTML = 'Time: 00:' + sec;
        sec--;
        if (sec <= 0) {
            toggleVis(["yan", "first-battle", "retry"]);
            document.getElementById('safeTimerDisplay').innerHTML = 'Time: 00:' + sec;
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
        toggleVis(["nay", "first-battle", "continue"]);
        sec = 9999999
        clearInterval(timers)
    }
}
// All this makes it so when clicked on its assigned button it will make it so it toggles the values for what we choose.
function revealGreen() {
    toggleVis(["ches-choose", "first-battle"]);
}

function revealRed() {
    toggleVis(["fenn-choose", "first-battle"]);
}
function revealBlue() {
    toggleVis(["froakie-choose", "first-battle"]);
}
function retry() {
    toggleVis(["ches-choose", "retry", "yan"]);
};

function revealBady() {
    toggleVis(["nay", "continue", "grunt_battle", "badyfight", "won", "lost"]);
}
//This makes the toimer for the batle go down untill it reaches zero or hp reaches zero. This is the second battle with this
var secs = 30;
function timer2() {

    var timerss = setInterval(function () {
        document.getElementById('safeTimerDisplaytwo').innerHTML = 'Time: 00:' + secs;
        secs--;

        if (secs <= 0) {
            document.getElementById('safeTimerDisplaytwo').innerHTML = 'Time: 00:' + secs;
            toggleVis(["lost", "second-battle"]);
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
        toggleVis(["won", "second-battle"]);
        secs = 9999999
        clearInterval(timerss)

    }
}
//these triggers are for the grunt battle and the purposal of the grunt
function reveal2() {
    toggleVis(["badyfight", "second-battle"]);
}

function retry2() {
    toggleVis(["badyfight", "lost"]);
}

function letHimCook() {
    toggleVis(["join_flare", "proposal-flare", "won", "evil_end"]);
}

function joinChoice() {
    toggleVis(["accept-pur", "proposal-flare"]);
}

function refuseChoice() {
    //toggleVis(["purposal-text", "refuse-flare", "join-flare", "wandering", "aimless", "blackout", "blackout_battle", "chasing", "deny-pur", "chasing", "refuse_flare"]);
}

//these toggles are for aceppting the purposal and entering the cave. as well as the maze and after the second rival fight
function followFlare() {
    toggleVis(["accept-pur", "follow-cave"]);
}

function cave() {
    toggleVis(["follow-cave", "lost-cave"]);
}

function puzzle1() {
    toggleVis(["lost_cave", "head_straight", "puzzle-partone"]);
}

function right1() {
    toggleVis(["puzzle-partone", "puzzle-parttwo"]);
}

function right2() {
    toggleVis(["puzzle-parttwo", "puzzle-partthree"]);
}

function right3() {
    toggleVis(["puzzle-partthree", "puzzle-partfour"]);
}
function right4() {
    toggleVis(["puzzle-partfour", "pass-puzzle"]);
}

function wrongChoice() {
    toggleVis(["fail-puzzle", "puzzle-partone"]);
}

function wrongChoice2() {
    toggleVis(["fail-puzzle", "puzzle-parttwo"]);
}

function wrongChoice3() {
    toggleVis(["fail-puzzle", "puzzle-partthree",]);
}

function wrongChoice4() {
    toggleVis(["fail-puzzle", "puzzle-partfour"]);
}

function retrace() {
    toggleVis(["puzzle-partone", "fail-puzzle"]);
}

function goBack() {
    toggleVis(["return-base", "battle-rematchwon"])
}

function stillGoBack() {
    toggleVis(["return-base", "stop-char"])
}
//This makes the toimer for the batle go down untill it reaches zero or hp reaches zero. This is the third battle with this
var secss = 25;
function timer3() {

    var timersss = setInterval(function () {
        document.getElementById('safeTimerDisplaythree').innerHTML = 'Time: 00:' + secss;
        secss--;

        if (secss <= 0) {
            toggleVis(["battle-rematchlost", "third-battle", "safeTimerDisplaythree"]);
            document.getElementById('safeTimerDisplaythree').innerHTML = 'Time: 00:' + secss;
            secss = 30;
            clearInterval(timersss);
            document.getElementById('numberthree').value = 20;

        }
    }, 700);
};

//This code makes are attack button work when a battle starts where one click substracts one hp untill hp reaches zero and then the next code plays
function attack3() {
    var value = parseInt(document.getElementById('numberthree').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberthree').value = value
    if (value == 0) {
        toggleVis(["battle-rematchwon", "third-battle"]);
        secss = 9999999
        clearInterval(timersss);
    }
}

function reveal3() {
    toggleVis([, "pass-puzzle","third-battle"]);
}

function retry3() {
    toggleVis(["pass-puzzle","safeTimerDisplaythree", "battle-rematchlost"])
}


//This makes the toimer for the batle go down untill it reaches zero or hp reaches zero. This is the fouth battle with this
var secsss = 40;
function timer4() {

    var timerssss = setInterval(function () {
        document.getElementById('safeTimerDisplayfour').innerHTML = 'Time: 00:' + secsss;
        secsss--;

        if (secsss <= 0) {
            toggleVis([ "final-battle-retry", "fourth-battle", "safeTimerDisplayfour"]);
            document.getElementById('safeTimerDisplayfour').innerHTML = 'Time: 00:' + secsss;
            secsss = 40;
            clearInterval(timerssss);
            document.getElementById('numberfour').value = 20;

        }
    }, 700);
};

//This code makes are attack button work when a battle starts where one click substracts one hp untill hp reaches zero and then the next code plays
function attack4() {
    var value = parseInt(document.getElementById('numberfour').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numberfour').value = value
    if (value == 0) {
        toggleVis(["evil_end", "fourth-battle"]);
        secsss = 9999999
        clearInterval(timerssss);
    }
}

function reveal4() {
    toggleVis([, "stop-char","fourth-battle"]);
}

function retry4() {
    toggleVis(["stop-char","safeTimerDisplayfour", "final-battle-retry"])
}

//allows as to implement toggle functions to whatever id we choose to have. 
function toggleVis(elementIDs) {
    elementIDs.forEach(element => {
        console.log(element);
        document.getElementById(element).classList.toggle('hidden');
    });
}

