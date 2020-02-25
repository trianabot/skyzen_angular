import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { from } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
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
      "identifier":"juvvalasai@gmail.com",
	    "password":"skyzen"
    }
    return this.http.post('http://13.235.244.196/auth/local',logininfo);
  }

  getProducts() {
    let headers = new HttpHeaders({
      "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgyMjgzOTMwLCJleHAiOjE1ODQ4NzU5MzB9.zCvloh4XjqBV5N73wmb0AgFZLKeBxxRYHuyrS5Z7AS4'
    })
    return this.http.get('http://13.235.244.196/items');
  }
s
  updateProducts(data, id) {
    return this.http.put('http://13.235.244.196/items' + '/' + id, data);
  }

  getUsers() {
    return this.http.get('http://13.235.244.196/users');
  }

  updateUser(data, id) {
    console.log(data);
    return this.http.put('http://13.235.244.196/users' + '/' + id, data);
  }
  
  

  
}
