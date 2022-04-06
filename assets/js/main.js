//Funcion para jugar desde el boton del html mediante (onclick)
function jugar() { 


let cant_juegos = parseInt(prompt("Cuantas Veces deseas Jugar"));
let ganadas = 0;
let perdidas = 0;
let empates = 0;

for (i = 1; i <= cant_juegos; i++){

// Genera un número aleatorio ente un rango de enteros
function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo +1 ) + minimo );
    return numero;
}

var opciones = ["Piedra","Papel","Tijera"];

// Definimos el resultado de cada combinación en el orden "piedra", "papel" y "tijera"
var opcionPiedra = ["Empate!","Perdiste, que tengas mas suerte en la proxima!","Felicidades, Ganaste!"];
var opcionPapel = ["Felicidades, Ganaste!","Empate!","Perdiste, que tengas mas suerte en la proxima!"];
var opcionTijera = ["Perdiste, que tengas mas suerte en la proxima!","Felicidades, Ganaste!","Empate!"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPriedra: 0\nPapel: 1\nTijera: 2", 0);

// Limitante o condicion para que el juego funcione o advierte al usuario una opcion invalida antes  de comenzar el juego
if (opcionUsuario == 0 || opcionUsuario == 1 || opcionUsuario == 2  ) {

alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

//CORRECION DEL REQUERIMIENTO 5. 
if(opcionUsuario == 0)
    {
        alert(opcionPiedra[opcionMaquina]);
        if(opcionPiedra[opcionMaquina] == opcionPiedra[0]){
            empates++;
        }
        else if(opcionPiedra[opcionMaquina] == opcionPiedra[1]){
            perdidas++;
        }
        else if(opcionPiedra[opcionMaquina] == opcionPiedra[2]){
            ganadas++;
        }
    }
else if(opcionUsuario == 1)
    {
        alert(opcionPapel[opcionMaquina]);
        if(opcionPapel[opcionMaquina] == opcionPapel[0]){
            ganadas++;
        }
        else if(opcionPapel[opcionMaquina] == opcionPapel[1]){
            empates++;
        }
        else if(opcionPapel[opcionMaquina] == opcionPapel[2]){
            perdidas++;
        }
    }
else if(opcionUsuario == 2)
    {
        alert(opcionTijera[opcionMaquina]);
        if(opcionTijera[opcionMaquina] == opcionTijera[0]){
            perdidas++;
        }
        if(opcionTijera[opcionMaquina] == opcionTijera[1]){
            ganadas++;
        }
        if(opcionTijera[opcionMaquina] == opcionTijera[2]){
            empates++;
        }
    }
else
    {
        alert("Opción no valida!");
    }    

}
else {
    alert("Opción no valida!");
}
}
if(ganadas > perdidas && ganadas >= empates){
    alert("GANASTE EL JUEGO :)");
}
else if(ganadas < perdidas && empates <= perdidas){
    alert("PERDISTE EL JUEGO :(");
}
else{
    alert("EMPATASTE EL JUEGO :/");
}

  };