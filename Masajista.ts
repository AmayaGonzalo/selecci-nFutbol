import { Futbolista } from "./Futbolista";
import { Persona } from "./Persona";

export class Masajista extends Persona {
    private ListaJugadorAsiganado: Futbolista [];

    constructor(pNombre:string, pApellido: string, pEdad: number, pListaJugadorAsignado: Futbolista[]) {
        super(pNombre,pApellido,pEdad)
        this.ListaJugadorAsiganado = pListaJugadorAsignado;
    }
    AsignarJugador(pNombre: Futbolista): void {
        this.ListaJugadorAsiganado.push(pNombre);
        console.log("Se le asigno el jugador: ",pNombre);
    }

    BajaJugador(pNombre: Futbolista): void {
        for (let i: number = 0; i < this.ListaJugadorAsiganado.length; i++ ){
            if (pNombre.getApellido() == this.ListaJugadorAsiganado[i].getApellido()){
                this.ListaJugadorAsiganado.splice(i, 1);
                console.log("El jugador: ", pNombre.getNombre(), " se lo ha dado de baja.");
            }
        }
    }
}