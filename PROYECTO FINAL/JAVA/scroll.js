let paginas = [
    "index.html",
    "pagina2.html",
    "pagina3.html",
    "pagina4.html",
    "pagina5.html"
];

let actual = window.location.pathname.split("/").pop();

let indice = paginas.indexOf(actual);

window.addEventListener("wheel", function(event){

    if(event.deltaY > 0 && indice < paginas.length - 1){
        window.location.href = paginas[indice + 1];
    }

    if(event.deltaY < 0 && indice > 0){
        window.location.href = paginas[indice - 1];
    }

});