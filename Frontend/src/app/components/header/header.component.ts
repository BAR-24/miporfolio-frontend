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
    @Input() persona: Persona = new Persona(0,"","",0,"","","","",[],[],[],[],undefined);
 
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
        else if(mode==='editarInfoPerfil')
        {
          
          this.editPrs=prs;          
          button.setAttribute('data-target','#editInfoPerfilModal');

        }


        container?.appendChild(button);
        button.click();
    
    } 


 
    public onEditarPortada(editPortadaForm: NgForm){       
      
      document.getElementById('editar-portada-form')?.click(); 
      
      //editForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
      this.persona.prsImgPortadaUrl = editPortadaForm.control.get("prsImgPortadaUrl")?.value;

      this.personaService.editarPersona(this.persona).subscribe({
        next: (response: Persona) => { 
          this.getPersona();
        
        },
        error:(error:HttpErrorResponse)=>{
          console.log(error.message);
          
        } 
      })
    }

    public onEditarPerfil(editPerfilForm: NgForm){       
      
      document.getElementById('editar-perfil-form')?.click(); 
      
      //editForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
      this.persona.prsImgPerfilUrl = editPerfilForm.control.get("prsImgPerfilUrl")?.value;

      this.personaService.editarPersona(this.persona).subscribe({
        next: (response: Persona) => { 
          this.getPersona();
        
        },
        error:(error:HttpErrorResponse)=>{
          console.log(error.message);
          
        } 
      })
    }

    public onEditarInfoPerfil(editInfoPerfilForm: NgForm){       
      
      document.getElementById('editar-InfoPerfil-form')?.click();       
     
      this.persona.prsApellido = editInfoPerfilForm.control.get("prsApellido")?.value;
      this.persona.prsNombre = editInfoPerfilForm.control.get("prsNombre")?.value;
      this.persona.prsEdad = editInfoPerfilForm.control.get("prsEdad")?.value;
      this.persona.prsOcupacion = editInfoPerfilForm.control.get("prsOcupacion")?.value;
      this.persona.prsAcercaDeMi = editInfoPerfilForm.control.get("prsAcercaDeMi")?.value;

      this.personaService.editarPersona(this.persona).subscribe({
        next: (response: Persona) => { 
          this.getPersona();
        
        },
        error:(error:HttpErrorResponse)=>{
          console.log(error.message);
          
        } 
      })
    }

}
