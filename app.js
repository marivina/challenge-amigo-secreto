// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declara Variale
let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo");
  nombreAmigo = nombre.value.toUpperCase().trim();
  //console.log(`amigo = ${nombreAmigo}`);
  if (validarLaEntrada(nombreAmigo)) {
    asignarTextoElemento("h4", "");
    amigos.push(nombreAmigo);
    let indice = amigos.length - 1;
    //console.log(`amigos[${indice}] = ${amigos[indice]}. amigos = ${amigos}`);
    agregarNuevoAmigo("listaAmigos", indice, " ");
    nombre.value = ""; //limpia el campo donde se captura el nombre del amigo
  }
  //console.log(`listado de Amigos = ${amigos}`);
}

function validarLaEntrada(nombreAmigo) {
  let bandera = false;
  let mensaje = "";
  let nombre1 = document.getElementById("amigo");
  nombre1.value = ""; //Limpia el campo donde se captura el nombre del amigo
  if (nombreAmigo.length < 1) {
    mensaje = "Por favor, inserte un nombre.";
    nombre1.value = "";
  } else if (amigos.includes(nombreAmigo)) {
    mensaje = `El amigo [${nombreAmigo}] ya existe.`;
  } else if (!sonCaracteresValidos(nombreAmigo)) {
    mensaje = `[${nombreAmigo}] No es válido. Sólo se admiten letras y espacio.`;
  } else {
    bandera = true;
  }

  if (!bandera) {
    asignarTextoElemento("h4", mensaje);
  }
  return bandera;
}

function sonCaracteresValidos(nombreAmigo) {
  //valida si es numero = /(^[0-9])*$/.test(nombreAmigo)
  //valida si es una cadena de caracteres = /^[A-Z]+$/i  
  // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
  // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
  //--console.log(`evaluando expresion = ${/^[A-Z|\u00D1| |\u00F1]+$/i.test(nombreAmigo)}` );
  return /^[A-Z|\u00D1| |\u00F1]+$/i.test(nombreAmigo); //false= No es una Letra, true = es una letra
}

function agregarNuevoAmigo(id, indice, texto) {
 // Lista de amigos (amigos)
 let obtenerAmigo = amigos[indice];
 var li = document.createElement("li");
 li.innerHTML = obtenerAmigo == "" ? "(nada)" : texto + obtenerAmigo;
 let lista = document.getElementById(id);
 lista.appendChild(li);
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}