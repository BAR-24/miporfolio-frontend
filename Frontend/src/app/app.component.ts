import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'miporfolio';
  public persona: Persona = new Persona("","",0,"","","","",[],[],[],[]);
  
  constructor(private personaService : PersonaService) { }

  ngOnInit(): void {
    //this.personaService.getPersona().subscribe(data => {this.persona = data})
    this.personaService.getPersona().subscribe({
      next: (response: Persona) =>{
        this.persona=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })

  }

}
