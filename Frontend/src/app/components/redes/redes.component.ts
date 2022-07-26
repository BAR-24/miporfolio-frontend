import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Redes } from 'src/app/models/Redes.model';
import { RedesService } from 'src/app/services/redes.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  @Input() redes?: Redes = new Redes(0,"","","","");
  @Input() prsId?: number = 0;
  
  isUsrAdmin = false;
  isLogged = false;
  
  public editRds: Redes | undefined;

  constructor(private tokenService : TokenService , private redesService: RedesService) { }

  ngOnInit(): void {

    this.tokenService.getIsUsrAdmin().subscribe( Admin => this.isUsrAdmin = Admin); 
    this.tokenService.getIsLogged().subscribe( logged => this.isLogged = logged); 

  }

  public getRedes():void{
    this.redesService.traerRedesByPersona(this.prsId).subscribe({
      next: (Response: Redes)=>{ 
            this.redes = Response;      
       },
       error:(error:HttpErrorResponse)=>{
         alert(error.message);
         
       } 
   })
 }

  public onOpenModal(mode:String,rds?:Redes):void {
      const container=document.getElementById('main-container');
      const button=document.createElement('button');
      button.style.display='none';
    
      button.setAttribute('data-toggle','modal');

      if(mode==='editarRedes')
      {
        this.editRds=rds;          
        button.setAttribute('data-target','#editRedesModal');

      }


      container?.appendChild(button);
      button.click();

    } 

    public onEditarRds(editForm: NgForm){       
        
      document.getElementById('editar-rds-form')?.click(); 
    
      editForm.control.patchValue({'persona': {"prsId" : `${this.prsId?.toString()}`} });

      this.redesService.editarRedes(editForm.value).subscribe({
        next: (response: Redes) => { 
          this.getRedes();
        
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
          
        } 
    })


}




}
