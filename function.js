function hideFunction(){
    document.getElementById("start").style.display="none"
    document.getElementById("test").style.display="block"
};

function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
             document.getElementById("start").style.display="none"
        }
    }, 1000);
};

var hp= 1;
function myFight(){
        hp -= 1;
        document.getElementById("hpfifth").innerhtml= hp;
    
};
