import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUsuario } from 'src/app/models/LoginUsuario.model';
import { Redes } from 'src/app/models/Redes.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() redes?: Redes = new Redes(0,"","","","");
  @Input() prsId?: number = 0;

  
  isLogged = false;
  isLogginFail = false;
  isUsrAdmin = false;
  loginUsuario!: LoginUsuario;
  usrName! : string;
  password! : string;
  roles! : string[];
  errMjs! : string;

  constructor(private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();    
      
    }
    this.tokenService.getIsUsrAdmin().subscribe( Admin => this.isUsrAdmin = Admin); 
    this.tokenService.getIsLogged().subscribe( logged => this.isLogged = logged); 
  }

  public onOpenModal(mode:String):void {
      const container=document.getElementById('main-container');
      const button=document.createElement('button');
      button.style.display='none';
    
      button.setAttribute('data-toggle','modal');

      if(mode==='login')
      {
        button.setAttribute('data-target','#loginModal');

      }

      container?.appendChild(button);
      button.click();

  } 
 
  public onLogin(loginForm: NgForm){      
    document.getElementById('login-form')?.click();
    
    this.loginUsuario = new LoginUsuario(loginForm.value.usrName,loginForm.value.password);

    this.authService.login(this.loginUsuario).subscribe(data => {
     
      this.tokenService.setToken(data.token);
      this.tokenService.setUsrname(data.usrName);
      this.usrName = data.usrName;
      this.tokenService.setAuthorities(data.authorities);
      this.roles = this.tokenService.getAuthorities();    
    

    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMjs = err.error.message;
      console.log(this.errMjs);
    }
    )     
  }

  public onLogOut() {
    this.tokenService.logOut();
    
  }

 
 

}
