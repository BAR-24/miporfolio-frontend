
export class Persona {
    id? : number;
    nombre : string; 
    apellido : string;
    edad : number;
    ocupacion :  string;
    acercaDeMi : string;
    imgPerfil : string;
    imgPortada : string;
    listEdu : Array<any>;
    listExp : Array<any>;
    listHab : Array<any>;
    listPro : Array<any>;
   
   

    constructor (nombre: string, apellido: string, edad: number, ocupacion: string,
        _acercaDeMi: string,_imgPerfil: string, _imgPortada: string,
         listEdu: Array<any>,listExp: Array<any>,listHab: Array<any>,listPro: Array<any>){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.ocupacion = ocupacion;
            this.acercaDeMi = _acercaDeMi;
            this.imgPerfil = _imgPerfil;
            this.imgPortada = _imgPortada;
            this.listEdu = listEdu;
            this.listExp = listExp;
            this.listHab = listHab;
            this.listPro = listPro;

    }
}