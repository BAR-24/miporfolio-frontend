export class Habilidad {
    habId? : number;
    habTitulo : string; 
    habDescripcion : string;
    habPorcentaje : number;


    constructor (habTitulo: string, habDescripcion: string, habPorcentaje: number){
            this.habTitulo =    habTitulo;
            this.habDescripcion =   habDescripcion;
            this.habPorcentaje =   habPorcentaje;            

    }
}