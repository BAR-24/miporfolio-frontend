export class Proyecto {
    proid? : number;
    proTitulo : string; 
    proDescripcion : string;
    proFechaInicio : number;
    proFechaFin:  number;
    proImgUrl : string;




    constructor (proTitulo: string, proDescripcion: string, proFechaInicio: number,
        proFechaFin: number,   proImgUrl: string){
            this.proTitulo =    proTitulo;
            this.proDescripcion =   proDescripcion;
            this.proFechaInicio =   proFechaInicio;
            this.proFechaFin =  proFechaFin;
            this.proImgUrl =    proImgUrl;
            

    }
}