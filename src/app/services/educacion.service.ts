import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private URL = "https://miporfolioweb.herokuapp.com";

  constructor(private http: HttpClient) { }

  public traerTodas(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.URL}/educacion/traer`);
  } 

  public traerTodasByPersona(prsId?:number): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.URL}/educacion/traerporprs/${prsId}`);
  } 
  public agregarEducacion(edu:Educacion): Observable<any>{
    return this.http.post(`${this.URL}/educacion/crear`,edu, {responseType:'text'});
  }

  public editarEducacion(edu:Educacion): Observable<any>{
    return this.http.put(`${this.URL}/educacion/editar`,edu, {responseType: 'text'});
  }
  public borrarEducacion(eduId?:number): Observable<any>{
    return this.http.delete(`${this.URL}/educacion/borrar/${eduId}`, {responseType: 'text'});
  }

}