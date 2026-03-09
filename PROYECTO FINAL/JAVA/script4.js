function mostrarOpiniones(){

let opiniones = document.getElementById("opiniones");

if(opiniones.style.display === "block"){
opiniones.style.display = "none";
}else{
opiniones.style.display = "block";
}

}

function audioNarrador(){

let audio = document.getElementById("audioNarrador");

audio.currentTime = 0;
audio.play();

}