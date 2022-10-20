import { Persona } from "./Persona"
import { Futbolista } from "./Futbolista"
import { Masajista } from "./Masajista"
import { Entrenador } from "./Entrenador";

let futbolistaUno: Futbolista = new Futbolista("Lionel", "Messi", 35, false, 10)
let futbolistaDos: Futbolista = new Futbolista("Lautaro", "Martinez", 25, false, 22);
let futbolistaTres: Futbolista = new Futbolista("Franco", "Armani", 35, false, 1)

let nuevaListaJugadores = [futbolistaUno, futbolistaDos]
let masajistaUno: Masajista = new Masajista("Juan", "Perez,", 30, true, nuevaListaJugadores);

let plantelTitulares = [futbolistaUno, futbolistaDos, futbolistaTres]
let entrenadorUno: Entrenador = new Entrenador("Emilio", "Torres", 46, false, plantelTitulares);

masajistaUno.asignarJugador(futbolistaTres);// se espera el resultado en consola "Se asigno el jugador Franco Armani..."

entrenadorUno.sacarDeListaDeTitulares(futbolistaTres);//Se espera el resultado " El jugador Armano quedo en lista de suplentes"

console.log(entrenadorUno);
console.log(futbolistaUno);
console.log(masajistaUno);

entrenadorUno.descansar()