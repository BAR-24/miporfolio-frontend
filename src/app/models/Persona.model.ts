import { Redes } from "./Redes.model";

export class Persona {
    prsId? : number;
    prsNombre : string; 
    prsApellido : string;
    prsEdad : number;
    prsOcupacion :  string;
    prsAcercaDeMi : string;
    prsImgPerfilUrl : string;
    prsImgPortadaUrl : string;
    listEdu : Array<any>;
    listExp : Array<any>;
    listHab : Array<any>;
    listPro : Array<any>;
    redes? : Redes;
   


    constructor (prsId: number,nombre: string, apellido: string, edad: number, ocupacion: string,
        _acercaDeMi: string,_imgPerfil: string, _imgPortada: string,
         listEdu: Array<any>,listExp: Array<any>,listHab: Array<any>,listPro: Array<any>,redes?: Redes){
            this.prsId = prsId; 
            this.prsNombre = nombre;
            this.prsApellido = apellido;
            this.prsEdad = edad;
            this.prsOcupacion = ocupacion;
            this.prsAcercaDeMi = _acercaDeMi;
            this.prsImgPerfilUrl = _imgPerfil;
            this.prsImgPortadaUrl = _imgPortada;
            this.listEdu = listEdu;
            this.listExp = listExp;
            this.listHab = listHab;
            this.listPro = listPro;
            this.redes = redes;

    }
}