import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetCalcService {
  constructor(private http: HttpClient) { }
  
  getCalcData(){
    return this.http.post('https://api.outgrow.co/api/v1/admin/getCalculators',true);
  }
  
}
