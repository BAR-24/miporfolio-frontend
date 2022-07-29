export class Experiencia {
    expId? : number;
    expTitulo : string; 
    expDescripcion : string;
    expFechaInicio : number;
    expFechaFin:  number;
    expImgUrl : string;




    constructor (expTitulo: string, expDescripcion: string, expFechaInicio: number,
        expFechaFin: number,   expImgUrl: string){
            this.expTitulo =    expTitulo;
            this.expDescripcion =   expDescripcion;
            this.expFechaInicio =   expFechaInicio;
            this.expFechaFin =  expFechaFin;
            this.expImgUrl =    expImgUrl;
            

    }
}