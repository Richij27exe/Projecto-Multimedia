function mostrarHistoria(){

let historia = document.getElementById("historiaAlterna");

if(historia.style.display === "block"){
historia.style.display = "none";
}else{
historia.style.display = "block";
}

}

function mostrarVideo(){

let video = document.getElementById("videoGol");

if(video.style.display === "block"){
video.style.display = "none";
}else{
video.style.display = "block";
}

}

function mostrarReflexion(){

let texto = document.getElementById("reflexionTexto");

if(texto.style.display === "block"){
texto.style.display = "none";
}else{
texto.style.display = "block";
}

}