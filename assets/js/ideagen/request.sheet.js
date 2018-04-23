var spreadsheetsId = "1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w";
var apiKey = "AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY";

class GoogleSheet {

	constructor(sheetId, apiKey, sheetName) {
		this.sheetId  = sheetId;
		this.apiKey = apiKey;
		this.sheetName = sheetName;
		this.baseUrl = "https://sheets.googleapis.com/v4/spreadsheets";
	}

	getLink(options = '') {
		var link = this.baseUrl+ '/' +this.sheetId+ '/values/' +this.sheetName+ '?key=' +this.apiKey+ options; 
		return link;
	}

	getResponseLink(){
		return "https://script.google.com/macros/s/AKfycbxccQ3kn22cdLp0Prt6xcWmHty-TXakawdYRjiwukue_-PIPfc/exec"; 
	}

	getBuildLink(){
		return "http://localhost:3000/api/v1/demo_app/create";
	}

	titleValue(){
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


	sheetsValue(){
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