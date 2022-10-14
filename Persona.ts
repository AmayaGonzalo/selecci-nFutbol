
export class Persona {
    protected nombre: string;
    protected apellido: string;
    protected edad: number;

 constructor (pNombre: string, pApellido: string, pEdad: number){
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.edad = pEdad;
    }
    getNombre(): string {
        return this.nombre
    }
    setNombre (pNombre: string): void {
        this.nombre = pNombre;
    }

    getApellido(): string{
        return this.apellido;
    }
    setApellido(pApellido: string): void {
        this.apellido = pApellido;
    }
    getEdad (): number{
        return this.edad;
    }
    setEdad(pEdad: number): void {
        this.edad = pEdad;
    }
}