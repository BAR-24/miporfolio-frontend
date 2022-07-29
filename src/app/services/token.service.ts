import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';



const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  private roles: Array<string> = [];
  
  private isUsrAdmin$ : Subject<boolean>;
  private isLogged$ : Subject<boolean>;

  constructor(private http: HttpClient) { 
    this.isUsrAdmin$ = new Subject();
    this.isLogged$ = new Subject();
  }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);

    this.isLogged$.next(true);
  }

  public getIsLogged(): Observable<boolean> {
    return this.isLogged$.asObservable();
  }

  public getToken():string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setUsrname(usrName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY,usrName);
  }

  public getUsrname():string {
    return sessionStorage.getItem(USERNAME_KEY)!;
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities))

    if(sessionStorage.getItem(AUTHORITIES_KEY)!){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
          this.roles.push(authority.authority);
      });
    }
    this.isUsrAdmin$.next(this.isAdmin());
  }

  public getIsUsrAdmin(): Observable<boolean> {
    return this.isUsrAdmin$.asObservable();
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if(sessionStorage.getItem(AUTHORITIES_KEY)!){
        JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
            this.roles.push(authority.authority);
        });
    }
    return this.roles;
  }

  public logOut(): void{
    window.sessionStorage.clear();
    this.isLogged$.next(false);
  }

  private isAdmin() : boolean {
    let resp = false;
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
          resp = true;
      } else {
          resp = false;
      }
    })
    return resp;
  }

}