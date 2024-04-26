function startGame() {
<<<<<<< HEAD
    toggleVis(["aquacorde_town", "start_game"]);
=======
    toggleVis(["start_game", "aquacorde_town"]);

>>>>>>> a57e5c5f5ed2b47d4ed3a34e4cc612ad5f4e8d7e
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
            toggleVis(["yan", "first-battle", "safeTimerDisplay", "retry"]);
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
        toggleVis(["nay", "yan", "safeTimerDisplay", "first-battle", "continue"]);
        sec = 9999999
        clearInterval(timers)
    }
}

function reveal() {
    toggleVis(["number", "safeTimerDisplay", "first-battle"]);
}

function retry() {
    toggleVis(["ches-choose", "retry", "yan"]);
};

function revealBady() {
    toggleVis(["nay", "continue", "grunt_battle", "badyfight", "won", "lost"]);
}

var secs = 30;
function timer2() {

    var timerss = setInterval(function () {
        document.getElementById('safeTimerDisplaytwo').innerHTML = 'Time: 00:' + secs;
        secs--;

        if (secs <= 0) {
            document.getElementById('safeTimerDisplaytwo').innerHTML = 'Time: 00:' + secs;
            toggleVis(["lost", "second-battle", "safeTimerDisplaytwo"]);
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
        toggleVis(["won", "lost", "safeTimerDisplaytwo", "second-battle"]);
        secs = 9999999
        clearInterval(timerss)

    }
}

function reveal2() {
    toggleVis(["numbertwo", "badyfight", "safeTimerDisplaytwo", "second-battle"]);
}

function retry2() {
    toggleVis(["badyfight", "lost"]);
}

function letHimCook() {
    toggleVis(["join_flare", "refuse-flare", "join-flare", "won", "follow_grunt", "glittering_cave", "head_straight", "accept-pur", "first-mission", "head_straight", "lost_cave", "rematch", "beaten", "take_over", "base", "rival_battle", "battle_prof", "evil_end", "puzzle-partone", "puzzle-parttwo", "puzzle-partthree", "puzzle-partfour", "pass-puzzle", "fail-puzzle"]);
}

function joinChoice() {
    toggleVis(["purposal-text", "refuse-flare", "join-flare", "follow_grunt", "accept-pur"]);
}

function refuseChoice() {
    toggleVis(["purposal-text", "refuse-flare", "join-flare", "wandering", "aimless", "blackout", "blackout_battle", "chasing", "deny-pur", "chasing", "refuse_flare"]);
}

function followFlare() {
    toggleVis(["accept-pur", "follow_grunt", "first-mission", "glittering_cave"]);
}

function cave() {
    toggleVis(["first-mission", "glittering_cave", "lost_cave", "head_straight"]);
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
    toggleVis(["fail-puzzle", "puzzle-partone", "puzzle-parttwo", "puzzle-partthree", "puzzle-partfour"]);
}

function retrace() {
    toggleVis(["puzzle-partone", "fail-puzzle"]);
}

var secs = 30;
function timer2() {

    var timerss = setInterval(function () {
        document.getElementById('safeTimerDisplaytwo').innerHTML = 'Time: 00:' + secs;
        secs--;

        if (secs <= 0) {
            toggleVis(["lost", "second-battle", "safeTimerDisplaytwo"]);
            document.getElementById('safeTimerDisplaytwo').innerHTML = 'Time: 00:' + secs;
            secs = 30;
            clearInterval(timerss);
            document.getElementById('numbertwo').value = 20;

        }
    }, 700);
};

//This code makes are attack button work when a battle starts where one click substracts one hp untill hp reaches zero and then the next code plays
function attack3() {
    var value = parseInt(document.getElementById('numbertwo').value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('numbertwo').value = value
    if (value == 0) {
        toggleVis(["won", "lost", "safeTimerDisplaytwo", "second-battle"]);
        secs = 9999999
        clearInterval(timerss)
    }
}

function reveal3() {
    toggleVis(["numbertwo", "badyfight", "safeTimerDisplaytwo", "second-battle"]);
}

function retry3() {
    toggleVis(['badyfight', 'lost'])
}

function toggleVis(elementIDs) {
    elementIDs.forEach(element => {
        console.log(element);
        document.getElementById(element).classList.toggle('hidden');
    });
}