import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ApiRequestService {
  
  constructor(public _http: Http) {
  }
  
  gethref() {
    let href = window.location.href;
    let activeHeader = href.toString().split('/')[3];
    return activeHeader;
  }

  getAllCalculators(data: any) {
    let response = this._http.post('https://api.outgrow.co/api/v1/admin/getCalculators', data)
    return response;
  }

  getCategories() {
    return this._http.get("https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/category?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=Category!A2:Z");
  }

  getSubCategories(category) {
    let categoryKey = category.replace(" ", "") + "-Key";
    let url = "https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/category?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=" + categoryKey + "!A2:Z";
    return this._http.get(url)
  }
}
