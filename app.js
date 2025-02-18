// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declara Variale
let amigos = [];
let amigosSorteados = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo");
  nombreAmigo = nombre.value.toUpperCase().trim();
  //console.log(`amigo = ${nombreAmigo}`);
  if (validarLaEntrada(nombreAmigo)) {
    asignarTextoElemento("h4", "");
    amigos.push(nombreAmigo);
    let indice = amigos.length - 1;
    //console.log(`amigos[${indice}] = ${amigos[indice]}. amigos = ${amigos}`);
    actualizarListaAmigos("listaAmigos", indice, " ");
    nombre.value = ""; //limpia el campo donde se captura el nombre del amigo
    limpiaTodosSorteados();
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

function actualizarListaAmigos(id, indice, texto) {
 // Lista de amigos (amigos)
 let obtenerAmigo = amigos[indice];
 var li = document.createElement("li");
 li.innerHTML = obtenerAmigo == "" ? "(nada)" : texto + obtenerAmigo;
 li.onclick = () => {
   if (confirm(`¿Borrar el amigo [${li.innerHTML.substring(2)}] de la lista del amigo secreto?`)) {
     amigos = amigos.filter((elAmigo) => elAmigo != li.innerHTML.substring(2));
    // console.log(`El nuevo valor de listadoAmigos = ${amigos}`);
     li.parentNode.removeChild(li); 
     var liSorteado = document.createElement("li");
     liSorteado.innerHTML = `El amigo sorteado es: ${li.innerHTML.substring(2)}`;
     amigosSorteados = amigosSorteados.filter((elAmigo) => elAmigo != liSorteado.innerHTML.substring(24)); 
     liSorteado.remove(); 
     li.parentNode.removeChild(liSorteado);
     var ul = document.getElementById("resultado");
     var items = ul.children;
     for (i = 0; i < items.length; i++) {
          if (items[i].innerHTML === liSorteado.innerHTML) {
         items[i].parentNode.removeChild(items[i]);
         break;
       }
       break;
     }
   }
  };
  let lista = document.getElementById(id);
  lista.appendChild(li);
}

function limpiaTodosSorteados() {
  if (amigosSorteados.length < amigos.length) {
    asignarTextoElemento("p", "");
  }
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function sortearAmigo() {
  if (amigos.length == 0) {
    asignarTextoElementoById("mensaje-sorteado", "No hay amigos registrados.");
  } else {
    let indiceAmigoSorteado = amigoSorteado();
    if (indiceAmigoSorteado != -1) {
      crearAmigoSorteados("resultado",indiceAmigoSorteado,"El amigo sorteado es: ");
    }
  }
  //console.log(`amigosSorteados = ${amigosSorteados}`);
}

function amigoSorteado() {
  //Ya sorteamos a todos los amigos
  if (amigosSorteados.length == amigos.length) {asignarTextoElementoById("mensaje-sorteado",
      "Ya se sortearon todos los amigos posibles");
    return -1;
  } else {
    // Para seleccionar un índice aleatorio del arreglo Math.floor(Math.random()).
    let indiceAmigoSorteado = Math.floor(Math.random() * amigos.length);
    if (!amigosSorteados.includes(amigos[indiceAmigoSorteado])) {
      //console.log( `listadoAmigos[${indiceAmigoSorteado}] = ${amigos[indiceAmigoSorteado]}` );
      amigosSorteados.push(amigos[indiceAmigoSorteado]);
      return amigosSorteados.length - 1; //regresa el ultimo elemento
    } else {
           return sortearAmigo();
    }
  }
} 

function crearAmigoSorteados(id, indice, texto) {
  //La lista de los amigos sorteados (amigosSorteados)
  let obtenerAmigo = amigosSorteados[indice];
  let li = document.createElement("li");
  li.innerHTML = obtenerAmigo == "" ? "(nada)" : texto + obtenerAmigo;
  let lista = document.getElementById(id);
  lista.appendChild(li);
}

function asignarTextoElementoById(elemento, texto) {
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

