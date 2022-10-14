import {Persona} from "./Persona"
export class Futbolista extends Persona {
    private numeroCamiseta: number;
    private estadoActual: boolean;
    private fechaJuego: number;
    private mesJuego: number;

 constructor (pNombre: string, pApellido: string, pEdad:number, pNumeroCamiseta: number, pFechaJuego: number, pMesJuego: number) {
    super (pNombre, pApellido, pEdad);
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
    
    entrenar (pApellido: string, pfecha: number): void {     
              
    }        
}