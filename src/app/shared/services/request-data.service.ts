import { Injectable } from '@angular/core';

const sheetId = "1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w";
  const apiKey = "AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY";
 var sheetName,baseUrl;
@Injectable()
export class RequestDataService {
    constructor(sheetName) {
      sheetName = sheetName;
      baseUrl = "https://sheets.googleapis.com/v4/spreadsheets";
  
  
    function getLink(options = '') {
      var link = this.baseUrl+ '/' +this.sheetId+ '/values/' +this.sheetName+ '?key=' +this.apiKey+ options; 
      return link;
    }
  
    function getResponseLink(){
      return "https://script.google.com/macros/s/AKfycbxccQ3kn22cdLp0Prt6xcWmHty-TXakawdYRjiwukue_-PIPfc/exec"; 
    }
  
    function getBuildLink(){
      return "http://localhost:3000/api/v1/demo_app/create";
    }
  
    function titleValue(){
      return  [
              [
                "keyCustom"
              ],
              [
                "keyCategorySpecific",
                "Heyya",
                "jhjkkkj"
              ],
              [
                "keyCategorySpecific"
              ]
            ]
    }
  
  
    function sheetsValue(){
      return  [
              [
                "SaaS",
                "Category",
                "Category Specific",
                "Role"
              ],
              [
                "Ecommerce Specific",
                "Product Category",
                "Specific Product"
              ],
              [
                "Services"
              ]
        ]
    }
  
  }


}
