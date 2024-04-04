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


function myFight(){ 
        var hpfive = 1
        hpfive -= 1;
        document.getElementById("hpfifth").innerhtml= hpfive;
    };

    function incrementValue()
    {
        var value = parseInt(document.getElementById('number').value);
        value = isNaN(value) ? 0 : value;
        value--;
        document.getElementById('number').value = value;
    }