
export class GoogleSheet {
    baseUrl: string="https://sheets.googleapis.com/v4/spreadsheets";;
    sheetName: any;
    public spreadsheetsId = "1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w";
    public apiKey = "AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY";
    constructor(sheetName:any) {
      this.sheetName = sheetName;
    }
    getLink(options = '') {
        console.log("in get link")
      var link = this.baseUrl + '/' + this.spreadsheetsId + '/values/' + this.sheetName + '?key=' + this.apiKey + options;
      return link;
    }
  
    getResponseLink() {
      return "https://script.google.com/macros/s/AKfycbxccQ3kn22cdLp0Prt6xcWmHty-TXakawdYRjiwukue_-PIPfc/exec";
    }
  
    getBuildLink() {
      return "http://localhost:3000/api/v1/demo_app/create";
    }
  
  }