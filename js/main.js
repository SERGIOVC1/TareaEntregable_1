/*Posicionarnos en el elemento #contenedorCartas y mostrarme por consola los siguientes elementos:
1) Su primer hijo
2) Su tercer hijo
3) El siguiente hermano del tercer hijo
4) Su último hijo
5) Su padre
6) El padre del padre
7) Su hermano anterior
8) Las clases del último hijo*/

// Seleccionar el elemento #contenedorCartas
const contenedorCartas = document.getElementById("contenedorCartas");

// 1) Su primer hijo
const primerHijo = contenedorCartas.firstElementChild;
console.log("Primer hijo:", primerHijo);

// 2) Su tercer hijo
const tercerHijo = contenedorCartas.children[2]; // index 2 es el tercer elemento
console.log("Tercer hijo:", tercerHijo);

// 3) El siguiente hermano del tercer hijo
const siguienteHermano = tercerHijo.nextElementSibling;
console.log("Siguiente hermano del tercer hijo:", siguienteHermano);

// 4) Su último hijo
const ultimoHijo = contenedorCartas.lastElementChild;
console.log("Último hijo:", ultimoHijo);

// 5) Su padre
const padre = contenedorCartas.parentElement;
console.log("Padre:", padre);

// 6) El padre del padre
const padreDelPadre = padre.parentElement;
console.log("Padre del padre:", padreDelPadre);

// 7) Su hermano anterior
const hermanoAnterior = tercerHijo.previousElementSibling;
console.log("Hermano anterior del tercer hijo:", hermanoAnterior);

// 8) Las clases del último hijo
const clasesUltimoHijo = ultimoHijo.classList;
console.log("Clases del último hijo:", clasesUltimoHijo);