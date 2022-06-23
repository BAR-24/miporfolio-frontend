import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Persona } from 'src/app/models/Persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
    @Input() persona: Persona = new Persona(0,"","",0,"","","","",[],[],[],[]);
 
    public editPrs: Persona | undefined;
    public delPrs: Persona | undefined;
 
   constructor(private personaService:PersonaService) { }

    ngOnInit(): void {


    }

      public getPersona():void{
        this.personaService.getPersona().subscribe({
          next: (Response: Persona)=>{ 
                this.persona = Response;      
          },
          error:(error:HttpErrorResponse)=>{
            alert(error.message);
            
          } 
      })
    }

    public onOpenModal(mode:String,prs?:Persona):void {
        const container=document.getElementById('main-container');
        const button=document.createElement('button');
        button.style.display='none';
      
        button.setAttribute('data-toggle','modal');

        if(mode==='editarFotoPortada')
        {
          this.editPrs=prs;          
          button.setAttribute('data-target','#editFotoPortadaModal');

        }else if(mode==='editarFotoPerfil')
        {
          
          this.editPrs=prs;          
          button.setAttribute('data-target','#editFotoPerfilModal');

        }
        else if(mode==='editarInfo')
        {
          
          this.editPrs=prs;          
          button.setAttribute('data-target','#editInfoModal');

        }


        container?.appendChild(button);
        button.click();
    
    } 


 
    public onEditarPortada(editForm: NgForm){       
      
      document.getElementById('editar-portada-form')?.click(); 
      
      //editForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
      this.persona.prsImgPortadaUrl = editForm.control.get("prsImgPortadaUrl")?.value;

      this.personaService.editarPersona(this.persona).subscribe({
        next: (response: Persona) => { 
          this.getPersona();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
      })
    }

}
