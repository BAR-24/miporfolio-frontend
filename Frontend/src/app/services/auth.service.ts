import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NuevoUsuario } from "../models/NuevoUsuario.model";
import { Observable } from "rxjs";
import { LoginUsuario } from "../models/LoginUsuario.model";
import { JwtDto } from "../models/JwtDto.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private URL = environment.urlBase;

    constructor(private httpClient: HttpClient){ 

    }

    public nuevo (nuevoUsuario: NuevoUsuario): Observable<any>{
        return this.httpClient.post<any>(this.URL +'/auth/nuevo', nuevoUsuario);
    }

    public login (login: LoginUsuario): Observable<JwtDto>{
        return this.httpClient.post<JwtDto>(this.URL +'/auth/login', login);
    }
}