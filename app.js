let numeroSecreto = 0;
let intentos = 0;
let numeroAleatorio = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verficarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else{
        // El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
        } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiaCampo();
    }
    return;
}

function limpiaCampo(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumerosecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroAleatorio) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Sí el número generado ya está en la lista de números sorteados, se genera otro número
    if (listaNumerosSorteados.length === numeroAleatorio) {
        asignarTextoElemento('p', 'Se han agotado los números disponibles');
    } else{
        // Sí el número generado ya está en la lista de números sorteados, se genera otro número
        // Includes devuelve true si el número generado está en la lista de números sorteados
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumerosecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Adivina el número secreto entre 1 y ${numeroAleatorio}`);
    // Generar nuevo número secreto
    numeroSecreto = generarNumerosecreto();
    // Inicializar el número de intentos
    intentos = 1;
    return;
}

function reiniciarJuego(){
    // Limpiar el campo de texto
    limpiaCampo();
    // Indicar mensaje de inicio
    // Generar nuevo número secreto
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

// Control + f para buscar una palabra en el código de la página