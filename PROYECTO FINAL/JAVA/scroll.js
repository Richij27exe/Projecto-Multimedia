let paginas = [
"index.html",
"pagina2.html",
"pagina3.html",
"pagina4.html",
"pagina5.html"
];

let actual = paginas.indexOf(
window.location.pathname.split("/").pop()
);

let bloqueado = false;

window.addEventListener("wheel", function(e){

if(bloqueado) return;

bloqueado = true;

if(e.deltaY > 0){

if(actual < paginas.length - 1){
window.location.href = paginas[actual + 1];
}

}else{

if(actual > 0){
window.location.href = paginas[actual - 1];
}

}

setTimeout(()=>{
bloqueado = false;
},800);

});