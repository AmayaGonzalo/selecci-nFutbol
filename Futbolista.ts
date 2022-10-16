import {Persona} from "./Persona"

export class Futbolista extends Persona {
    private numeroCamiseta: number;
    private estadoActual: boolean;
    private fechaJuego: number;
    private mesJuego: number;

 constructor (pNombre: string, pApellido: string, pEdad:number, pEstado: boolean, pNumeroCamiseta: number, pFechaJuego: number, pMesJuego: number) {
    super (pNombre, pApellido, pEdad, pEstado);
    this.numeroCamiseta = pNumeroCamiseta;
    this.fechaJuego = pFechaJuego;
    this.mesJuego = pMesJuego;
    }
  
    
    titularizar (): void {
        if (this.estadoActual == false){
            this.estadoActual = true;
        } else {
            console.log("El jugador ya es titular");
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