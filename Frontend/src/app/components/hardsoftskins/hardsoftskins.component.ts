import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Habilidad } from 'src/app/models/Habilidad.model';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-hardsoftskins',
  templateUrl: './hardsoftskins.component.html',
  styleUrls: ['./hardsoftskins.component.css']
})
export class HardsoftskinsComponent implements OnInit {
  @Input() habilidades: Habilidad[] = [];
  @Input() prsId?: number = 0;

  public editHab: Habilidad | undefined;
  public delHab: Habilidad | undefined;

  constructor(private habService:HabilidadService) { 
 

  }

  ngOnInit(): void {
     
      
  
  }

  public getHabilidades():void{
     this.habService.traerTodasByPersona(this.prsId).subscribe({
       next: (Response: Habilidad[])=>{ 
             this.habilidades = Response;      
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })
  }

  public onOpenModal(mode:String,hab?:Habilidad):void {
      const container=document.getElementById('main-container');
      const button=document.createElement('button');
      button.style.display='none';
    
      button.setAttribute('data-toggle','modal');

      if(mode==='agregrar')
      {
        button.setAttribute('data-target','#agrHabilidadModal');

      }else if(mode==='editar')
      {
       
        this.editHab=hab;          
        button.setAttribute('data-target','#editHabilidadModal');

      }else if(mode==='borrar')
      {
        this.delHab=hab;
        button.setAttribute('data-target','#borrHabilidadModal');
      }

      container?.appendChild(button);
      button.click();
  
  } 

  public onAgregarHab(addForm: NgForm){      
    document.getElementById('agregar-hab-form')?.click();
    addForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
    console.log(addForm.value);
    this.habService.agregarHabilidad(addForm.value).subscribe({
      next: (response: Habilidad)=>{ 
        console.log(response)
        this.getHabilidades();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          addForm.reset();
        } 
    })
  }
  
  public onEditarHab(editForm: NgForm){       
   
    document.getElementById('editar-hab-form')?.click(); 
   
    editForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
 
    this.habService.editarHabilidad(editForm.value).subscribe({
      next: (response: Habilidad) => { 
        this.getHabilidades();
      
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        
      } 
  })


  }

  public onBorrarHab(habId?: number):void{

    this.habService.borrarHabilidad(habId).subscribe({
      next: (response: void) => { 
        this.getHabilidades();
      
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        
      } 
  })


  }


}
