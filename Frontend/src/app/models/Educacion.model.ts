export class Educacion {
    eduid? : number;
    eduTitulo : string; 
    eduDescripcion : string;
    eduFechaInicio : number;
    eduFechaFin:  number;
    eduImgUrl : string;




    constructor (eduTitulo: string, eduDescripcion: string, eduFechaInicio: number,
        eduFechaFin: number,_eduImgUrl: string){
            this.eduTitulo = eduTitulo;
            this.eduDescripcion = eduDescripcion;
            this.eduFechaInicio = eduFechaInicio;
            this.eduFechaFin = eduFechaFin;
            this.eduImgUrl = _eduImgUrl;
            

    }
}