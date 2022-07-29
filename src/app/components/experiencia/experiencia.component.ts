import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



import { Experiencia } from 'src/app/models/Experiencia.model';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
    @Input() experiencias: Experiencia[] = [];
    @Input() prsId?: number = 0;
    
    isUsrAdmin = false;
    isLogged = false;

    public editExp: Experiencia | undefined;
    public delExp: Experiencia | undefined;
    
    constructor(private tokenService : TokenService ,private expService:ExperienciaService) { 
 

    }

    ngOnInit(): void {
       
      this.tokenService.getIsUsrAdmin().subscribe( Admin => this.isUsrAdmin = Admin); 
      this.tokenService.getIsLogged().subscribe( logged => this.isLogged = logged); 
    
    
    }

    public getExperiencias():void{
       this.expService.traerTodasByPersona(this.prsId).subscribe({
         next: (Response: Experiencia[])=>{ 
               this.experiencias = Response;      
          },
          error:(error:HttpErrorResponse)=>{
            alert(error.message);
            
          } 
      })
    }

    public onOpenModal(mode:String,exp?:Experiencia):void {
        const container=document.getElementById('main-container');
        const button=document.createElement('button');
        button.style.display='none';
      
        button.setAttribute('data-toggle','modal');

        if(mode==='agregrar')
        {
          button.setAttribute('data-target','#agrExperienciaModal');

        }else if(mode==='editar')
        {
         
          this.editExp=exp;          
          button.setAttribute('data-target','#editExperienciaModal');

        }else if(mode==='borrar')
        {
          this.delExp=exp;
          button.setAttribute('data-target','#borrExperienciaModal');
        }

        container?.appendChild(button);
        button.click();
    
    } 
  
    public onAgregarExp(addForm: NgForm){      
      document.getElementById('agregar-exp-form')?.click();
      addForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
      console.log(addForm.value);
      this.expService.agregarExperiencia(addForm.value).subscribe({
        next: (response: Experiencia)=>{ 
          console.log(response)
          this.getExperiencias();
          },
          error:(error:HttpErrorResponse)=>{
            alert(error.message);
            addForm.reset();
          } 
      })
    }
    
    public onEditarExp(editForm: NgForm){       
     
      document.getElementById('editar-exp-form')?.click(); 
     
      editForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });
   
      this.expService.editarExperiencia(editForm.value).subscribe({
        next: (response: Experiencia) => { 
          this.getExperiencias();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })


    }
  
    public onBorrarExp(expId?: number):void{
  
      this.expService.borrarExperiencia(expId).subscribe({
        next: (response: void) => { 
          this.getExperiencias();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })


    }

}
