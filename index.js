"use strict";
exports.__esModule = true;
var Futbolista_1 = require("./Futbolista");
var Masajista_1 = require("./Masajista");
var Entrenador_1 = require("./Entrenador");
var futbolistaUno = new Futbolista_1.Futbolista("Lionel", "Messi", 35, false, 10, 21, 11);
var futbolistaDos = new Futbolista_1.Futbolista("Lautaro", "Martinez", 25, false, 22, 21, 11);
var futbolistaTres = new Futbolista_1.Futbolista("Franco", "Armani", 35, false, 1, 21, 11);
var nuevaListaJugadores = [futbolistaUno, futbolistaDos];
var masajistaUno = new Masajista_1.Masajista("Juan", "Perez,", 30, true, nuevaListaJugadores);
var plantelTitulares = [futbolistaUno, futbolistaDos, futbolistaTres];
var entrenadorUno = new Entrenador_1.Entrenador("Emilio", "Torres", 46, false, plantelTitulares);
masajistaUno.asignarJugador(futbolistaTres); // se espera el resultado en consola "Se asigno el jugador Franco Armani..."
entrenadorUno.sacarDeListaDeTitulares(futbolistaTres); //Se espera el resultado " El jugador Armano quedo en lista de suplentes"
console.log(entrenadorUno);
console.log(futbolistaUno);
console.log(masajistaUno);
entrenadorUno.descansar;
