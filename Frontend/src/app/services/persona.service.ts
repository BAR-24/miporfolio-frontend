import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { Persona } from '../models/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private URL = environment.urlBase;

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<any>{
    return this.http.get<any>(`${this.URL}/personas/traer/1`);
  } 
}
