import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { RequestDataService } from '../../../shared/services/request-data.service';
declare let jQuery: any;

var sheetsId = "1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w";
var apiKey = "AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY";

@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['../../../../assets/css/allPage_minified.css', '../../../../assets/css/style.css', '../../../../assets/css/responsive.css', '../../../../assets/css/selectize.default.css']
})


export class IdeaGeneratorComponent implements OnInit {

  constructor(private router: Router, title: Title,private RequestDataService : RequestDataService) {
    title.setTitle("Idea Generation | Outgrow");
  }

  ngOnInit() {
    //section-1
    jQuery(document).ready(function () {

      jQuery(".sec1-button").click(function () {
        //jQuery(".sec1-bg").hide();
        jQuery(".sec2-bg").removeClass("hide");
        jQuery(".logo-top").removeClass("hide");
        jQuery('html, body').animate({
          scrollTop: jQuery('.sec2-bg').offset().top
        }, 1000);
        setTimeout(function () {
          jQuery(".sec1-bg").addClass("hide");
        }, 1000)

      });
    });


    //section-2
    // jQuery('.selectize-category').selectize({
    //             create: false,
    //             sortField: 'text',
    //             onChange:function(event){
    //                 this.sheetData.makeSubCategory('.selectize-sub-category',this.saveSubCat[event]);
    //                 this.sheetData.saveData.category = event;

    //                 jQuery(".sec3-bg").removeClass("hide");
    //                 jQuery('html, body').animate({
    //                     scrollTop: jQuery('.sec3-bg').offset().top
    //                 }, 1000);
    //                 setTimeout(function(){
    //                     jQuery(".sec2-bg").addClass("hide");
    //                 }, 1000)

    //                jQuery('.selectize-category-result')[0].selectize.setValue(event);
    //             }
    //         });
      //section-3
      
          }}
