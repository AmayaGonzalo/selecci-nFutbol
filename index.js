"use strict";
exports.__esModule = true;
var Futbolista_1 = require("./Futbolista");
var Masajista_1 = require("./Masajista");
var Entrenador_1 = require("./Entrenador");
var FutbolistaUno = new Futbolista_1.Futbolista("Lionel", "Messi", 35, 10, 21, 11);
var FutbolistaDos = new Futbolista_1.Futbolista("Lautaro", "Martinez", 25, 22, 21, 11);
var FutbolistaTres = new Futbolista_1.Futbolista("Franco", "Armani", 35, 1, 21, 11);
var nuevaListaJugadores = [FutbolistaUno, FutbolistaDos];
var MasajistaUno = new Masajista_1.Masajista("Juan", "Perez,", 30, nuevaListaJugadores);
var plantelTitulares = [FutbolistaUno, FutbolistaDos, FutbolistaTres];
var EntrenadorUno = new Entrenador_1.Entrenador("Emilio", "Torres", 46, plantelTitulares);
MasajistaUno.AsignarJugador(FutbolistaTres); // se espera el resultado en consola "Se asigno el jugador Franco Armani..."
EntrenadorUno.sacarDeListaDeTitulares(FutbolistaTres); //Se espera el resultado " El jugador Armano quedo en lista de suplentes"
console.log(EntrenadorUno);
console.log(FutbolistaUno);
console.log(MasajistaUno);
