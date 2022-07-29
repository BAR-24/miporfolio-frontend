import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from "../models/NuevoUsuario.model";
import { Observable } from "rxjs";
import { LoginUsuario } from "../models/LoginUsuario.model";
import { JwtDto } from "../models/JwtDto.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private URL = "https://miporfolioweb.herokuapp.com";

    constructor(private httpClient: HttpClient){ 

    }

    public nuevo (nuevoUsuario: NuevoUsuario): Observable<any>{
        return this.httpClient.post<any>(this.URL +'/auth/nuevo', nuevoUsuario);
    }

    public login (login: LoginUsuario): Observable<JwtDto>{
        let resp : Observable<JwtDto>;
        resp = this.httpClient.post<JwtDto>(this.URL +'/auth/login', login);
        return resp; 
    }
}