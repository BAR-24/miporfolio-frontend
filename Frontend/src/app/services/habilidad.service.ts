import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../models/Habilidad.model';


@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  private URL = environment.urlBase;

  constructor(private http: HttpClient) { }

  public traerTodas(): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.URL}/habilidad/traer`);
  } 

  public traerTodasByPersona(prsId?:number): Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.URL}/habilidad/traerporprs/${prsId}`);
  } 
  public agregarHabilidad(hab:Habilidad): Observable<any>{
    return this.http.post(`${this.URL}/habilidad/crear`,hab, {responseType:'text'});
  }

  public editarHabilidad(hab:Habilidad): Observable<any>{
    return this.http.put(`${this.URL}/habilidad/editar`,hab, {responseType: 'text'});
  }
  public borrarHabilidad(habId?:number): Observable<any>{
    return this.http.delete(`${this.URL}/habilidad/borrar/${habId}`, {responseType: 'text'});
  }

}