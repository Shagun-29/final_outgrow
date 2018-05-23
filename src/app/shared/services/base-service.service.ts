import { Injectable } from '@angular/core';

@Injectable()
export class BaseServiceService {
  baseUrl: string;
  sheetName: any;
  sheetId: any;
  public spreadsheetsId = "1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w";
  public apiKey = "AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY";

  constructor(sheetId, apiKey, sheetName) {
    this.sheetId = sheetId;
    this.apiKey = apiKey;
    this.sheetName = sheetName;
    this.baseUrl = "https://sheets.googleapis.com/v4/spreadsheets";
  }

  getLink(options = '') {
		var link = this.baseUrl+ '/' +this.sheetId+ '/values/' +this.sheetName+ '?key=' +this.apiKey+ options; 
		return link;
	}
  
}
