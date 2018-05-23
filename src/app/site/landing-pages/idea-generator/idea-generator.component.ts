import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SelectModule } from 'ng2-select';
import { IdeaGenService } from '../../../shared/service/idea-gen.service';
import { GoogleSheet } from "../../../shared/service/google-sheet"

declare let jQuery: any;

@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['../../../../assets/css/allPage_minified.css', '../../../../assets/css/style.css', '../../../../assets/css/responsive.css', '../../../../assets/css/selectize.default.css']

})
export class IdeaGeneratorComponent implements OnInit {
  timestamp: any;
  flag: boolean;
  isFinancial: boolean;
  isEducation: boolean;
  isEcommerce: boolean;
  category: string = "";
  newOptions: string = "";
  saveData = {};
  email: string;
  parseData = [];
  buildSelect = [];
  link;
  option = "&range=Category!A2:Z";
  makeSunCategory(a, b) { };
  saveSubCat = [];
  show = false;
  public items;
  public value;
  constructor(private router: Router, title: Title,private ideaGenService:IdeaGenService) {
    console.log("::Link 1::",this.link)
    this.link = new GoogleSheet('Category')
    console.log("::Link::",this.link)
    this.sendRequest("https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/category?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=Category!A2:Z")
  }

  ngOnInit() {
     
  }

  sendRequest(link) {
    // var self=this;
    this.ideaGenService.callGoogleSheet(link)
    // .then((res)=>{
    //   console.log(res);
    //   self.makeCategories(res);
    // }).catch((err)=>{
    //   console.log(err)
    // })
  }

  makeCategories(response) {
    var self=this;
    var selectizeCategory = [];
    response.forEach(function (category, index) {
      let key = category[0].replace(" ", "") + "-Key"
      selectizeCategory.push({
        text: category[0],
        value: key
      })
      self.saveSubCat[key] = category.slice(1);
    })
    /** For category*/
    console.log(selectizeCategory);
    // self.makeSelectize('.selectize-category', selectizeCategory);
    // self.makeSelectize('.selectize-category-result', selectizeCategory);
    // self.stopLoader('.category-page-loader');
    /** For Sub-Category*/
  }

}