import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private URL = "https://miporfolioweb.herokuapp.com";

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
    return this.http.get<Persona>(`${this.URL}/personas/traer/1`);
  } 

  public editarPersona(prs:Persona): Observable<any>{
    return this.http.put(`${this.URL}/personas/editar`,prs, {responseType: 'text'});
  }
}
