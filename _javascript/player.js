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

    video.width = 500;

}  

function reduzir() // Reduzir tamanho do player
{  

    video.width = 300;

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