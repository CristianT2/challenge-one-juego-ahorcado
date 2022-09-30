var hombreAhorcado = document.getElementById("hombre");
var jugar = document.querySelector("#btn-njuego");

var image =hombreAhorcado;
cargarHorca();


function cargarHorca() {

    image.src = "./images/estados/07.png";
}

function cargarCabezaHombre() {
    
    image.src = "./images/estados/06.png";
}

function cargarCuerpoHombre() {
    
    image.src = './images/estados/05.png';
}

function cargarBrazoRHombre() {
    
    image.src = './images/estados/04.png';
}

function cargarBrazoLHombre() {
    
    image.src = './images/estados/03.png';
}

function cargarPiernaRHombre() {
    
    image.src = './images/estados/02.png';
}

function cargarPiernaLHombre() {
    image.src = './images/estados/01.png';
}

function actualizarHorca() {

    if(letrasErradas.length == 1){
        cargarCabezaHombre();
    }
    else if(letrasErradas.length == 2){
        cargarCuerpoHombre();
    }
    else if(letrasErradas.length == 3){
        cargarBrazoRHombre();
    }
    else if(letrasErradas.length == 4){
        cargarBrazoLHombre();
    }
    else if(letrasErradas.length == 5){
        cargarPiernaRHombre();
    }
    else if(letrasErradas.length == 6){
        cargarPiernaLHombre();
    }
}

function resetearHorca() {
    cargarHorca();
}