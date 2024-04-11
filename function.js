function hideFunction(){
    document.getElementById("start").style.display="none"
    document.getElementById("ches-choose").style.display="block"
};

//this sets the timer for the battle function changing whaterver text 
var sec = 30;
function timer(){
    setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='Time: 00:'+sec;
        sec--;
        
        if (sec < 0) { 
             document.getElementById("yan").style.display="block";
             document.getElementById('safeTimerDisplay').innerHTML='Time: 00:'+sec;
             document.getElementById("first-battle").style.display="none";
            
       
        }
        
       

    }, 50 );
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
        document.getElementById("ches-choose").style.display="none";
         
    }

    function retry(){
        document.getElementById("ches-choose").style.display="block"
        document.getElementById('safeTimerDisplay').style.display= "block";
        document.getElementById('safeTimerDisplay').innerHTML='Time: 00:'+sec;
        document.getElementById("first-battle").style.display="block";
     
        
    };
        
    