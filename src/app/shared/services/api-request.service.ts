import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Headers, RequestOptions } from '@angular/http';
@Injectable()
export class ApiRequestService{
protected headers:any;
  constructor(public _http:Http) { 
  }
  protected get_options() {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Origin':'outgrow.co' });
    return new RequestOptions({ headers: this.headers, method: 'get' });
  }
  protected post_options() {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Origin':'outgrow.co' });
    return new RequestOptions({ headers: this.headers, method: 'post' });
  }

  getAllCalculators(data:any){
    let response= this._http.post('https://api.outgrow.co/api/v1/admin/getCalculators',data,this.post_options())
    return response;
  }
}
