import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }

  public isAuthnticated():boolean{

    return true;
  }

  public login(loginData){
    return this.http.post('https://www.trianabot.com/test_api/get_user_role.php',loginData);
  }
  public signup(userData){
    
  }
  public logout(userData){
    
  }
  Provider
  
}
