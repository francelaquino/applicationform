import { Injectable } from '@angular/core';
import {  Http,  RequestOptions,  RequestMethod,  Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

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


    
  saveLoanApplication(data: any) {
    return this.http.post(this.baseUrl + '/' + 'nonmember/saveLoanApplication', data, this.options)
      .map((res) => res.json());

  }

  saveLoanApplicationDocuments(data:FormData) {
    return this.http.post(this.baseUrl + '/' + 'nonmember/saveLoanApplicationDocuments', data, this.options)
      .map((res) => res);

  }

  getLoanApplication(id:string) {
    return this.http.get(this.baseUrl + '/' + 'nonmember/getLoanApplicationDetails/'+id)
      .map((res) => res.json());
  }


}
