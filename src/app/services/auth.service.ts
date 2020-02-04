import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthnticated():boolean{

    return true;
  }

  public login(loginData){

  }
  public signup(userData){
    
  }
  public logout(userData){
    
  }
}
