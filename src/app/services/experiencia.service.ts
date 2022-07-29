import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../models/Experiencia.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private URL = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public traerTodas(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.URL}/experiencia/traer`);
  } 

  public traerTodasByPersona(prsId?:number): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.URL}/experiencia/traerporprs/${prsId}`);
  } 
  public agregarExperiencia(edu:Experiencia): Observable<any>{
    return this.http.post(`${this.URL}/experiencia/crear`,edu, {responseType:'text'});
  }

  public editarExperiencia(edu:Experiencia): Observable<any>{
    return this.http.put(`${this.URL}/experiencia/editar`,edu, {responseType: 'text'});
  }
  public borrarExperiencia(eduId?:number): Observable<any>{
    return this.http.delete(`${this.URL}/experiencia/borrar/${eduId}`, {responseType: 'text'});
  }

}