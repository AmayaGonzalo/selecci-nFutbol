import {Persona} from "./Persona"

export class Futbolista extends Persona {
    private numeroCamiseta: number;
    
    

 constructor (pNombre: string, pApellido: string, pEdad:number, pEstado: boolean, pNumeroCamiseta: number) {
    super (pNombre, pApellido, pEdad, pEstado);
    this.numeroCamiseta = pNumeroCamiseta;
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