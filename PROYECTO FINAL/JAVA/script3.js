function mostrarDato(){

let dato = document.getElementById("datoExtra");

if(dato.style.display === "block"){
dato.style.display = "none";
}else{
dato.style.display = "block";
}

}

function mostrarImagenes(){

let imagenes = document.getElementById("imagenesExtra");

if(imagenes.style.display === "block"){
imagenes.style.display = "none";
}else{
imagenes.style.display = "block";
}

}

function reproducirAudio(){

let audio = document.getElementById("audioEstadio");

audio.currentTime = 0;
audio.play();

}