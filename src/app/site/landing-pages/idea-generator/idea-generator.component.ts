import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SheetDataService } from '../../../shared/services/sheet-data.service';
import { BuildDataService } from '../../../shared/services/build-data.service';
declare let jQuery: any;


// var sheetsId = "1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w";
// var apiKey = "AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY";

@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['../../../../assets/css/allPage_minified.css', '../../../../assets/css/style.css', '../../../../assets/css/responsive.css', '../../../../assets/css/selectize.default.css']
})


export class IdeaGeneratorComponent implements OnInit {

  constructor(private router: Router, title: Title, private sheetService : SheetDataService ) {
    title.setTitle("Idea Generation | Outgrow");
  }

  ngOnInit() {
    jQuery(document).ready(function(){

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
  
      })
    });

    jQuery('.selectize-category').selectize({
      create: false,
      sortField: 'text',
      onChange:function(event){
          this.sheetService.makeSubCategory('.selectize-sub-category',this.sheetService.saveSubCat[event]);
          this.sheetService.saveData.category = event;

          jQuery(".sec3-bg").removeClass("hide");
          jQuery('html, body').animate({
              scrollTop: jQuery('.sec3-bg').offset().top
          }, 1000);
          setTimeout(function(){
              jQuery(".sec2-bg").addClass("hide");
          }, 1000)

         jQuery('.selectize-category-result')[0].selectize.setValue(event);
      }
  });

   jQuery('.selectize-sub-category').selectize({
    create: false,
    sortField: 'text',
    onChange:function(event){
        this.saveData.subCat = event;

        jQuery(".sec4-bg").removeClass("hide");
        jQuery('html, body').animate({
            scrollTop: jQuery('.sec4-bg').offset().top
        }, 1000);
        setTimeout(function(){
            jQuery(".sec3-bg").addClass("hide");
        }, 1000)

        jQuery('.selectize-sub-category-result')[0].selectize.setValue(event);
    }
});

jQuery("#form-email").focus(function(){
    if(!jQuery('.email-validator').hasClass('hide')) jQuery('.email-validator').addClass('hide');
})

// jQuery(".sec-button").click(function(){
//     var verify = this.emailValidation(jQuery("#form-email").val());
//     if(verify) {
//         window.email = jQuery("#form-email").val();
//         if(parseData[saveData.category][saveData.subCat] || parseData[saveData.category]['keyCustom'])    showTitle();
//         jQuery(".sec5-bg").fadeIn("slow", function() {
//             jQuery(this).removeClass("hide");
//         });
//         jQuery(".sec4-bg").fadeOut("slow", function() {
//             jQuery(this).addClass("hide");
//         });
//         jQuery(".logo-top").removeClass("hide");
//         jQuery('body').css('overflow-y','scroll');

//     }
//     else jQuery('.email-validator').removeClass('hide');
// });

jQuery('.sec-button-update').click(function(){
    // if(parseData[saveData.category][saveData.subCat]){
        jQuery('.result-page-loader').removeClass('hide');
        // showTitle();
    // }
    // jQuery('.build-btn').removeClass('hide');
})

jQuery('.selectize-category-result').selectize({
    create: false,
    sortField: 'text',
    onChange:function(event){
        this.makeSubCategory('.selectize-sub-category-result',this.saveSubCat[event]);
        this.saveData.category = event;
    }
});

jQuery('.selectize-sub-category-result').selectize({
    create: false,
    sortField: 'text',
    onChange:function(event){
        this.saveData.subCat = event;
    }
});
  }
}