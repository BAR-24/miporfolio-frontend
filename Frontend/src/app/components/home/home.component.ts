import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/models/LoginUsuario.model';
import { Persona } from 'src/app/models/Persona.model';
import { AuthService } from 'src/app/services/auth.service';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'miporfolio';
  
  loginUsuario!: LoginUsuario;
  roles! : string[];
  errMjs! : string;

  public persona: Persona = new Persona(0,"","",0,"","","","",[],[],[],[], undefined);


  constructor(private tokenService: TokenService, private authService: AuthService,private personaService : PersonaService) { }

  ngOnInit(): void {

    this.loginUsuario = new LoginUsuario("user","1234");

    this.authService.login(this.loginUsuario).subscribe(data => {
     
      this.tokenService.setToken(data.token);
      this.tokenService.setUsrname(data.usrName);     
      this.tokenService.setAuthorities(data.authorities);
      

    }, err => {
     
      this.errMjs = err.error.message;
      console.log(this.errMjs);
      
    })

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
