import { Persona } from "./Persona.model";

export class Educacion {
    eduId? : number;
    eduTitulo : string; 
    eduDescripcion : string;
    eduFechaInicio : number;
    eduFechaFin:  number;
    eduImgUrl : string;
    persona : Persona;




    constructor (eduTitulo: string, eduDescripcion: string, eduFechaInicio: number,
        eduFechaFin: number,_eduImgUrl: string, persona: Persona){
            this.eduTitulo = eduTitulo;
            this.eduDescripcion = eduDescripcion;
            this.eduFechaInicio = eduFechaInicio;
            this.eduFechaFin = eduFechaFin;
            this.eduImgUrl = _eduImgUrl;
            this.persona = persona;
            

    }
}