import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Redes } from '../models/Redes.model';


@Injectable({
  providedIn: 'root'
})
export class RedesService {
  private URL = environment.urlBase;

  constructor(private http: HttpClient) { }

  public traerRedes(): Observable<Redes>{
    return this.http.get<Redes>(`${this.URL}/redes/traer`);
  } 

  public traerRedesByPersona(prsId?:number): Observable<Redes>{
    return this.http.get<Redes>(`${this.URL}/redes/traerporprs/${prsId}`);
  } 
  public agregarRedes(rds:Redes): Observable<any>{
    return this.http.post(`${this.URL}/redes/crear`,rds, {responseType:'text'});
  }

  public editarRedes(rds:Redes): Observable<any>{
    return this.http.put(`${this.URL}/redes/editar`,rds, {responseType: 'text'});
  }
  public borrarProyecto(rdsId?:number): Observable<any>{
    return this.http.delete(`${this.URL}/redes/borrar/${rdsId}`, {responseType: 'text'});
  }

}