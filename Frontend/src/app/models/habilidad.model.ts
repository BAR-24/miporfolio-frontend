export class Habilidad {
    habid? : number;
    habTitulo : string; 
    habDescripcion : string;
    habPorcentaje : number;
 




    constructor (habTitulo: string, habDescripcion: string, habPorcentaje: number){
            this.habTitulo =    habTitulo;
            this.habDescripcion =   habDescripcion;
            this.habPorcentaje =   habPorcentaje;            

    }
}