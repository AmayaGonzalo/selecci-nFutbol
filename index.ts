import {Persona} from "./Persona" 
import {Futbolista} from "./Futbolista"
import {Masajista} from "./Masajista"

let FutbolistaUno: Futbolista = new Futbolista ("Lionel", "Messi", 35, 10, 21, 11);
let FutbolistaDos: Futbolista = new Futbolista ("Lautaro", "Martinez", 25, 22, 21, 11);
let FutbolistaTres: Futbolista = new Futbolista ("Franco", "Armani", 35, 1, 21, 11)

//ejecucion del programa
let nuevaListaJugadores = [FutbolistaUno, FutbolistaDos]

let MasajistaUno: Masajista = new Masajista ("Juan", "Perez,", 30, nuevaListaJugadores);
MasajistaUno.AsignarJugador(FutbolistaTres);

console.log (FutbolistaUno);
console.log (MasajistaUno);