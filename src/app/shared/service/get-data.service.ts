import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { forEach } from '@angular/router/src/utils/collection';
import 'rxjs/add/operator/map';

@Injectable()
export class GetDataService {

  constructor(private http: HttpClient) { }
  categories = []
  categoryKey=""
    getCategories(){
      return this.http.get("https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/category?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=Category!A2:Z")
      
    }
    getSubCategories(key){
      this.categoryKey=key.replace(/ +/g, "")+"-Key";
     
      let url ="https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/category?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=" + this.categoryKey +"!A2:Z";
      console.log("::Event::",this.categoryKey,"---------",url);
      return this.http.get("https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/category?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=" + this.categoryKey +"!A2:Z")
    }
}
