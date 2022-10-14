import { Persona } from "./Persona";
import { Futbolista } from "./Futbolista";
import { Masajista } from "./Masajista";

export class Entrenador extends Persona{
    private plantel: Futbolista[];

    constructor(pNombre: string, pApellido: string, pEdad: number, pPlantel: Futbolista[]) {
        super(pNombre, pApellido, pEdad)
        this.plantel = pPlantel;        
    }

    titularizar (pNombre: Futbolista): void {
        this.plantel.push(pNombre);
        console.log(pNombre," queddo como titular en el equipo.");
    }
    sacarListaDeTitulares(pNombre: Futbolista): void {
        for (let i: number = 0; this.plantel.length; i ++){
            if (pNombre.getApellido() == this.plantel[i].getApellido()) {
                this.plantel.splice(i, 1);
                console.log ("El jugador ", pNombre.getApellido()," quedo en lista de suplentes.");
            }
        }
    } 
}
