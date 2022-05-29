import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/models/Educacion.model';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
    @Input() educaciones: Array<Educacion> = new Array<Educacion>();
    public editEdu: Educacion | undefined;
    public delEdu: Educacion | undefined;
    
    constructor(private educacionService:EducacionService) { }

    ngOnInit(): void {

    }

    public onOpenModal(mode:String,edu?:Educacion):void {
        const container=document.getElementById('main-container');
        const button=document.createElement('button');
        button.style.display='none';
        button.setAttribute('data-toggle','modal');

        if(mode==='agregrar')
        {
          button.setAttribute('data-target','#agrEducacionModal');

        }else if(mode==='editar')
        {
          this.editEdu=edu;
          button.setAttribute('data-target','#editEducacionModal');

        }else if(mode==='borrar')
        {
          this.delEdu=edu;
          button.setAttribute('data-target','#borrEducacionModal');
        }

        container?.appendChild(button);
        button.click();
    
    }
  
    public onAgregarEdu(addForm: NgForm){
      document.getElementById('agregar-edu-form')?.click();
      this.educacionService.agregarEducacion(addForm.value).subscribe({
        next: (response: Educacion)=>{ 
          console.log(response)
          this.educacionService.traerTodas();
          addForm.reset();
          },
          error:(error:HttpErrorResponse)=>{
            alert(error.message);
            addForm.reset();
          } 
      })
    }
    
    public onEditarEdu(edu: Educacion){
      this.editEdu=edu;
      document.getElementById('editar-edu-form')?.click();
      this.educacionService.editarEducacion(edu).subscribe({
        next: (response: Educacion) => { 
          console.log(response)
          this.educacionService.traerTodas();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })


    }
  
    public onBorrarEdu(eduId: number):void{
  
      this.educacionService.borrarEducacion(eduId).subscribe({
        next: (response: void) => { 
          console.log(response)
          this.educacionService.traerTodas();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })


    }

}
