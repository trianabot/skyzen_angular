import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getStockes(){
    return this.http.get("http://ec2-3-231-255-189.compute-1.amazonaws.com:8156/product/");
  }

  uploadFile(fileData){
    return this.http.post("http://ec2-3-231-255-189.compute-1.amazonaws.com:8156/part/stock",fileData)
  }
  getAllOrders(){
    const id=sessionStorage.getItem("userId")
    return this.http.get("http://3.231.255.189:8156/user/"+id+"/order");
  }
}
