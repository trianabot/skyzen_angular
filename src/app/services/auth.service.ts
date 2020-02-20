import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
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

  public productlogin() {
    var logininfo = {
      "identifier":"billusatheesh001@gmail.com",
	    "password":"Srirama@123"
    }
    return this.http.post('http://15.206.93.48/auth/local',logininfo);
  }

  getProducts() {
    let headers = new HttpHeaders({
      "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgxOTM5NTk4LCJleHAiOjE1ODQ1MzE1OTh9.eikAG1ikM2sqO1i-gjFTMu3xj7-9Dv6sad3LZQwwVV8'
    })
    return this.http.get('http://15.206.93.48/products', {headers});
  }
  
  

  
}
