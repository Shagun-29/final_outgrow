import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SelectModule } from 'ng2-select';

import { GoogleSheet } from '../../../shared/interfaces/GoogleSheet';
import { IdeaGenService } from '../../../shared/services/idea-gen.service';

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
  link: GoogleSheet;
  option = "&range=Category!A2:Z";
  saveSubCat = [];
  show = false;
  public items;
  public value;
  constructor(private router: Router, title: Title, private ideaGenService: IdeaGenService) {
  }

  ngOnInit() {
    console.log("ngOninit1")
    this.link = new GoogleSheet('Category')
    console.log("ngOninit2")
    this.sendRequest(this.link.getLink(this.option))
    this.getCalcTitle('https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/Category/?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=Saas-Key!A2:Z','SaaS-Key')
  }

  sendRequest(link):any {
    var self = this;
    self.ideaGenService.callGoogleSheet(link)
      .then((res) => {
        console.log("data",res)
        // here we receive keys and their categories
        console.log("after resolved")
        console.log("{", res.values);
        self.makeCategories(res.values);
        console.log("calling makeStructure")
        self.makeStructure(res.values);
      }).catch((err) => {
        console.log(err)
      })
  }

  makeCategories(response) {
    var self = this;
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
    self.makeSelectize('.selectize-category', selectizeCategory);
    self.makeSelectize('.selectize-category-result', selectizeCategory);
    // self.stopLoader('.category-page-loader');
    /** For Sub-Category*/
  }
  makeSelectize(htmlClass, selectizeData) {
    var selectize = jQuery(htmlClass)[0].selectize;
    selectize.clear();
    selectize.clearOptions();
    selectize.load((callback) => {
      callback(selectizeData);
    });
  }

  //here we can get funnel data top,middle,bottom
  makeStructure(response) {
    console.log("in makeStructure")
    let sheetVal = [];
    response.forEach((category, cIndex) => {
      let key = category[0].replace(" ", "") + "-Key";
      let subArr = [];
      category.slice(1).forEach((subCat, sIndex) => {
        let keySub = "key" + subCat.trim().replace(" ", "");
        subArr.push(keySub);
      })
      this.link = new GoogleSheet(key);
      this.option = "&range=" + key + "!A2:Z";
      console.log("calling getCalctitle")
      this.getCalcTitle(this.link.getLink(this.option), key);
    })
    // stopLoader('.sub-category-page-loader');
  }

  getCalcTitle(link, key) {
    console.log("in makeStructure")
    this.ideaGenService.callGoogleSheet(link).then((res) => {
      console.log("my data in get Calctittle is ::", res);
    })
  }
  
 makeCalcTitle(response, key){
  let object = [];
  response.forEach(function(value, index){
      if(!object[value[0]])   object[value[0]] = [];
      var ob = {};
      value.forEach( (val,key)=>{
          if(key !== 0) {
              switch (key) {
                  case 1:
                      ob['top'] = val;
                      break;
                  case 2:
                      ob['middle'] = val;
                      break;
                  case 3:
                      ob['bottom'] = val;
                      break;
              }
          }
      });
      object[value[0]].push(ob);
  })
  return object;
}

}



