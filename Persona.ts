export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected edad: number;
    protected estado: boolean;

    constructor(pNombre: string, pApellido: string, pEdad: number, pEstado: boolean) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
        this.estado = pEstado;
    }

    getNombre(): string {
        return this.nombre
    }
    setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }
    getApellido(): string {
        return this.apellido;
    }
    setApellido(pApellido: string): void {
        this.apellido = pApellido;
    }
    getEdad(): number {
        return this.edad;
    }
    setEdad(pEdad: number): void {
        this.edad = pEdad;
    }
    abstract descansar(): void;
}