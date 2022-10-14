"use strict";
exports.__esModule = true;
var Futbolista_1 = require("./Futbolista");
var Masajista_1 = require("./Masajista");
var FutbolistaUno = new Futbolista_1.Futbolista("Lionel", "Messi", 35, 10, 21, 11);
var FutbolistaDos = new Futbolista_1.Futbolista("Lautaro", "Martinez", 25, 22, 21, 11);
var FutbolistaTres = new Futbolista_1.Futbolista("Franco", "Armani", 35, 1, 21, 11);
//ejecucion del programa
var nuevaListaJugadores = [FutbolistaUno, FutbolistaDos];
var MasajistaUno = new Masajista_1.Masajista("Juan", "Perez,", 30, nuevaListaJugadores);
MasajistaUno.AsignarJugador(FutbolistaTres);
console.log(FutbolistaUno);
console.log(MasajistaUno);
