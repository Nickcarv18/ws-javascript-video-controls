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

function ampliar() // Ampliar tamanho do player
{

    video.width = 600;

}  

function reduzir() // Reduzir tamanho do player
{  

    video.width = 300;

}
 
function tamaNormal() // Tamanho normal da tela do player
{

    video.width = 300;

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