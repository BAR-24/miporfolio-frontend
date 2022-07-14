import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../models/Proyecto.model';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private URL = environment.urlBase;

  constructor(private http: HttpClient) { }

  public traerTodas(): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.URL}/proyecto/traer`);
  } 

  public traerTodasByPersona(prsId?:number): Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.URL}/proyecto/traerporprs/${prsId}`);
  } 
  public agregarProyecto(pro:Proyecto): Observable<any>{
    return this.http.post(`${this.URL}/proyecto/crear`,pro, {responseType:'text'});
  }

  public editarProyecto(pro:Proyecto): Observable<any>{
    return this.http.put(`${this.URL}/proyecto/editar`,pro, {responseType: 'text'});
  }
  public borrarProyecto(proId?:number): Observable<any>{
    return this.http.delete(`${this.URL}/proyecto/borrar/${proId}`, {responseType: 'text'});
  }

}