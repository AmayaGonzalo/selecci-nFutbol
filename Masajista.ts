import { Futbolista } from "./Futbolista";
import { Persona } from "./Persona";

export  class Masajista extends Persona {
    private ListaJugadorAsiganado: Futbolista [];

    constructor(pNombre:string, pApellido: string, pEdad: number, pEstado: boolean, pListaJugadorAsignado: Futbolista[]) {
        super(pNombre, pApellido, pEdad, pEstado)
        this.ListaJugadorAsiganado = pListaJugadorAsignado;
    }
    asignarJugador(pNombre: Futbolista): void {
        this.ListaJugadorAsiganado.push(pNombre);
        console.log("Se le asigno el jugador: ",pNombre);
    }

    bajaJugador(pNombre: Futbolista): void {
        for (let i: number = 0; i < this.ListaJugadorAsiganado.length; i++ ){
            if (pNombre.getApellido() === this.ListaJugadorAsiganado[i].getApellido()){
                this.ListaJugadorAsiganado.splice(i, 1);
                console.log("El jugador: ", pNombre.getNombre(), " se lo ha dado de baja.");
            }
        }
    }
     descansar(): void {
        if (this.estado){
            this.estado = false;
            console.log ("el personal se encuentra en descanso")
        }else {
            this.estado = true;
            console.log ("El personal se encuentra ejerciendo")
        }
    }
}