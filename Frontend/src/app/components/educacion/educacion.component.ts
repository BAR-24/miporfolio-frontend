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
    @Input() educaciones: Educacion[] = [];
    @Input() prsId?: number = 0;
  

    public editEdu: Educacion | undefined;
    public delEdu: Educacion | undefined;
    
    constructor(private educacionService:EducacionService) { 
 

    }

    ngOnInit(): void {
       
        
    
    }

    public getEducaciones():void{
       this.educacionService.traerTodasByPersona(this.prsId).subscribe({
         next: (Response: Educacion[])=>{ 
               this.educaciones = Response;      
          },
          error:(error:HttpErrorResponse)=>{
            alert(error.message);
            
          } 
      })
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
      addForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
      console.log(addForm.value);
      this.educacionService.agregarEducacion(addForm.value).subscribe({
        next: (response: Educacion)=>{ 
          console.log(response)
          this.getEducaciones();
          },
          error:(error:HttpErrorResponse)=>{
            alert(error.message);
            addForm.reset();
          } 
      })
    }
    
    public onEditarEdu(editForm: NgForm){       
     
      document.getElementById('editar-edu-form')?.click(); 
     
      editForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
   
      this.educacionService.editarEducacion(editForm.value).subscribe({
        next: (response: Educacion) => { 
          this.getEducaciones();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })


    }
  
    public onBorrarEdu(eduId?: number):void{
  
      this.educacionService.borrarEducacion(eduId).subscribe({
        next: (response: void) => { 
          this.getEducaciones();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })


    }

}
