import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/Educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private URL = environment.urlBase;

  constructor(private http: HttpClient) { }

  public traerTodas(): Observable<Educacion>{
    return this.http.get<Educacion>(`${this.URL}/educacion/traer`);
  } 
  public agregarEducacion(edu:Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(`${this.URL}/educacion/crear`,edu);
  }

  public editarEducacion(edu:Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(`${this.URL}/educacion/editar`,edu);
  }
  public borrarEducacion(eduId:number): Observable<void>{
    return this.http.delete<void>(`${this.URL}/educacion/borrar/${eduId}`);
  }

}