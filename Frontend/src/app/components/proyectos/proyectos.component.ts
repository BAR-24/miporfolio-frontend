import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Proyecto } from 'src/app/models/Proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})


export class ProyectoComponent implements OnInit {
  @Input() proyectos: Proyecto[] = [];
  @Input() prsId?: number = 0;


  public editPro: Proyecto | undefined;
  public delPro: Proyecto | undefined;
  
  constructor(private proService:ProyectoService) { 


  }

  ngOnInit(): void {
     
      
  
  }

  public getProyectos():void{
     this.proService.traerTodasByPersona(this.prsId).subscribe({
       next: (Response: Proyecto[])=>{ 
             this.proyectos = Response;      
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })
  }

  public onOpenModal(mode:String,pro?:Proyecto):void {
      const container=document.getElementById('main-container');
      const button=document.createElement('button');
      button.style.display='none';
    
      button.setAttribute('data-toggle','modal');

      if(mode==='agregrar')
      {
        button.setAttribute('data-target','#agrProyectoModal');

      }else if(mode==='editar')
      {
       
        this.editPro=pro;          
        button.setAttribute('data-target','#editProyectoModal');

      }else if(mode==='borrar')
      {
        this.delPro=pro;
        button.setAttribute('data-target','#borrProyectoModal');
      }

      container?.appendChild(button);
      button.click();
  
  } 

  public onAgregarPro(addForm: NgForm){      
    document.getElementById('agregar-pro-form')?.click();
    addForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
    console.log(addForm.value);
    this.proService.agregarProyecto(addForm.value).subscribe({
      next: (response: Proyecto)=>{ 
        console.log(response)
        this.getProyectos();
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          addForm.reset();
        } 
    })
  }
  
  public onEditarPro(editForm: NgForm){       
   
    document.getElementById('editar-pro-form')?.click(); 
   
    editForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
 
    this.proService.editarProyecto(editForm.value).subscribe({
      next: (response: Proyecto) => { 
        this.getProyectos();
      
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        
      } 
  })


  }

  public onBorrarPro(proId?: number):void{

    this.proService.borrarProyecto(proId).subscribe({
      next: (response: void) => { 
        this.getProyectos();
      
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        
      } 
  })


  }

}
