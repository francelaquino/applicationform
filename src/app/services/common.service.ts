import { Injectable } from '@angular/core';
import {  Http,  RequestOptions,  RequestMethod,  Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CommonService {

  http: any;
  baseUrl:string="http://localhost:8080/api.payrollclub/index.php";
  headers: Headers;
  options: RequestOptions;
  response: any;
  
  constructor(http: Http) { 
    this.http = http;
    
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    let options = new RequestOptions({
      headers: this.headers
    });
  }

  getcivilstatus() {
    return this.http.get(this.baseUrl + 'civilstatus/getcivilstatus')
      .map((res) => res.json());
  }

}
