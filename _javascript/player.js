var video = document.getElementById("playerCustomizado");

function telaCheia() //Tela Cheia
{      

    video.requestFullscreen();  

}  

function playPause() // Play Pause
{
    
    if (video.paused) {
        video.play();
    }
    else{
        video.pause()
    }
    
}  

function ampliar()
{
}  

function reduzir()
{  
}
 
function tamaNormal()
{
}  

function volMais()
{
} 

function VolMenos()
{
}  

function mute()
{      
} 