import { Futbolista } from "./Futbolista";
import { Persona } from "./Persona";

export class Masajista extends Persona {
    private listaJugadorAsiganado: Futbolista[];

    constructor(pNombre: string, pApellido: string, pEdad: number, pEstado: boolean, pListaJugadorAsignado: Futbolista[]) {
        super(pNombre, pApellido, pEdad, pEstado)
        this.listaJugadorAsiganado = pListaJugadorAsignado;
    }

    asignarJugador(pFutbolista: Futbolista): void {
        this.listaJugadorAsiganado.push(pFutbolista);
        console.log("Se le asigno el jugador: ", pFutbolista);
    }

    bajaJugador(pFutbolista: Futbolista): void {
        for (let i: number = 0; i < this.listaJugadorAsiganado.length; i++) {
            if (pFutbolista.getApellido() === this.listaJugadorAsiganado[i].getApellido()) {
                this.listaJugadorAsiganado.splice(i, 1);
                console.log("El jugador: ", pFutbolista.getNombre(), " se lo ha dado de baja.");
            }
        }
    }

    descansar(): void {
        if (this.estado) {
            this.estado = false;
            console.log("el personal se encuentra en descanso")
        } else {
            this.estado = true;
            console.log("El personal se encuentra ejerciendo")
        }
    }
}