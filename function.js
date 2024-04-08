function hideFunction(){
    document.getElementById("start").style.display="none"
    document.getElementById("ches-choose").style.display="block"
};

//this sets the timer for the battle function changing whaterver text 
function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
             document.getElementById("yan").style.display="block"
             document.getElementById("safeTimerDisplay").style.display="none"
             document.getElementById("first-battle").style.display="none"
             document.getElementById("ches-choose").style.display="none"
             sec=30
        }
    }, 50);
};




    function attack()
    {
        var value = parseInt(document.getElementById('number').value);
        value = isNaN(value) ? 0 : value;
        value--;
        document.getElementById('number').value = value
        if(value==0){
            document.getElementById("nay").style.display="block"
        }
    }

    function reveal(){
        document.getElementById("number").style.display="block" 
    }

    function retry(){
        document.getElementById("ches-choose").style.display="block"

        var sec = 30;
        var timer = setInterval(function(){
            document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
            sec--;
            if (sec < 0) {
                 document.getElementById("yan").style.display="block"
                 document.getElementById("safeTimerDisplay").style.display="none"
                 document.getElementById("first-battle").style.display="none"
                 document.getElementById("ches-choose").style.display="none"
            }
        }, 50);
    };
        
    