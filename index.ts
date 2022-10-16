import { Persona } from "./Persona" 
import { Futbolista } from "./Futbolista"
import { Masajista } from "./Masajista"
import { Entrenador } from "./Entrenador";

let FutbolistaUno: Futbolista = new Futbolista ("Lionel", "Messi", 35, 10, 21, 11);
let FutbolistaDos: Futbolista = new Futbolista ("Lautaro", "Martinez", 25, 22, 21, 11);
let FutbolistaTres: Futbolista = new Futbolista ("Franco", "Armani", 35, 1, 21, 11)

let nuevaListaJugadores = [FutbolistaUno, FutbolistaDos]
let MasajistaUno: Masajista = new Masajista ("Juan", "Perez,", 30, nuevaListaJugadores);

let plantelTitulares = [FutbolistaUno, FutbolistaDos, FutbolistaTres]
let EntrenadorUno: Entrenador = new Entrenador ("Emilio", "Torres", 46, plantelTitulares);

MasajistaUno.AsignarJugador(FutbolistaTres);// se espera el resultado en consola "Se asigno el jugador Franco Armani..."

EntrenadorUno.sacarDeListaDeTitulares(FutbolistaTres);//Se espera el resultado " El jugador Armano quedo en lista de suplentes"

console.log (EntrenadorUno);
console.log (FutbolistaUno);
console.log (MasajistaUno);