
function hideFunction() {
    var ches = document.getElementById("green").innerHTML;
    var fenn = document.getElementById("red").innerHTML;
    var froa = document.getElementById("blue").innerHTML;

    if (ches) {
        document.getElementById("start").style.display = "none";
        document.getElementById("starter-img").style.display = "none";
        document.getElementById("ches-choose").style.display = "block";
    }

    if (froa){
        document.getElementById("start").style.display = "none";
        document.getElementById("starter-img").style.display = "none";
        document.getElementById("froakie-choose").style.display = "block";
    }   
    
    if (fenn){
        document.getElementById("start").style.display = "none";
        document.getElementById("starter-img").style.display = "none";
        document.getElementById("fenn-choose").style.display = "block";
    }

   
};

//this sets the timer for the battle function changing whaterver text 
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
Z


    }, 200);
};
var value = parseInt(document.getElementById('number').value);
//code for making buttons dissapear
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
        sec = 30
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
    document.getElementById("ches-choose").style.display = "block"
    document.getElementById('retry').style.display = "none";
    document.getElementById("yan").style.display = "none";
};

