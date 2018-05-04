import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
declare let jQuery: any;

@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['./idea-generator.component.css','../../../../assets/css/allPage_minified.css','../../../../assets/css/style.css','../../../../assets/css/responsive.css','../../../../assets/css/selectize.default.css']
})
export class IdeaGeneratorComponent implements OnInit {
  category:string="";
  newOptions:string="";
  topFunnel="";
  middleFunnel="";
  bottomFunnel="";
  saveData="";
  makeSunCategory(a,b){};
  saveSubCAt=[];
  constructor(private router: Router,title:Title) {
    title.setTitle("Idea Generation | Outgrow");
   }
  ngOnInit() {
    jQuery(document).ready(function(){
      jQuery(".sec1-button").click(function(){
          //jQuery(".sec1-bg").hide();
          jQuery(".sec2-bg").removeClass("hide");
          jQuery(".logo-top").removeClass("hide");
          jQuery('html, body').animate({
              scrollTop: jQuery('.sec2-bg').offset().top
          }, 1000);
          setTimeout(function(){
              jQuery(".sec1-bg").addClass("hide");
          }, 1000)

      });
    });
    jQuery('.selectize-category').
      change(function(event){
        this.category=jQuery(this).val();
        jQuery('.this').attr("data-placeholder","Choose Category");
      if(this.category == 'eCommerce'){
        
        this.newOptions="<option>B2B</option><option>B2C</option>";
        // jQuery('.selectize-sub-category').attr("placeholder",'choose..');
        jQuery('.selectize-sub-category').html(jQuery(this.newOptions));
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      } 
      else if(this.category == 'education'){
        this.newOptions="<option>Higher Education</option>";
        jQuery('.selectize-sub-category').html(jQuery(this.newOptions));
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      } 
      else if(this.category == 'financial'){
        this.newOptions="<option>Banking</option><option>Mortgage and Loans</option><option>Mutual Funds</option><option>Venture Capital</option>";
        jQuery('.selectize-sub-category').html(jQuery(this.newOptions));
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      }
      else if(this.category == 'insurance'){
        this.newOptions="<option>Vehicle Insurance</option><option>Fire Insurance</option><option>Health Insurance</option><option>Life Insurance</option>";
        jQuery('.selectize-sub-category').html(jQuery(this.newOptions));
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      }
      else if(this.category == 'media'){
        this.newOptions="<option>News & Journalism</option><option>Subscription-based Content</option>";
        jQuery('.selectize-sub-category').html(jQuery(this.newOptions));
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      } 
      else if(this.category == 'saas'){
        this.newOptions="<option>Collaborative Software</option><option>CRM</option><option>Marketing</option><option>Other Packaged Software</option>";
        jQuery('.selectize-sub-category').html(jQuery(this.newOptions));
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      }
          jQuery(".sec3-bg").removeClass("hide");
          jQuery('html, body').animate({
              scrollTop: jQuery('.sec3-bg').offset().top
          }, 1000);
          setTimeout(function(){
              jQuery(".sec2-bg").addClass("hide");
          },1000)
      });
 

  jQuery('.selectize-sub-category').
      change(function(event){
          jQuery(".sec4-bg").removeClass("hide");
          jQuery('html, body').animate({
              scrollTop: jQuery('.sec4-bg').offset().top
          }, 1000);
          setTimeout(function(){
              jQuery(".sec3-bg").addClass("hide");
          }, 1000)     
    });

  // jQuery("#form-email").focus(function(){
  //     if(!jQuery('.email-validator').hasClass('hide')) jQuery('.email-validator').addClass('hide');
  // })

  jQuery(".sec-button").click(function(){
    // var verify = emailValidation(jQuery("#form-email").val());
    // if(verify) {
    //     window.email = jQuery("#form-email").val();
    //     if(parseData[saveData.category][saveData.subCat] || parseData[saveData.category]['keyCustom'])    showTitle();
        jQuery(".new-sec-bg").fadeIn("slow", function() {
            jQuery(this).removeClass("hide");
        });
        jQuery(".sec4-bg").fadeOut("slow", function() {
            jQuery(this).addClass("hide");
        });
        jQuery(".logo-top").removeClass("hide");
        jQuery('body').css('overflow-y','scroll');

    // }
    // else jQuery('.email-validator').removeClass('hide');
});
  
jQuery('.sec-button-update').click(function(){
  // if(parseData[saveData.category][saveData.subCat]){
      jQuery('.result-page-loader').removeClass('hide');
      // showTitle();
  // }
  // jQuery('.build-btn').removeClass('hide');
})
    jQuery('.selectize-category-result').
    change(function(event){
      this.category=jQuery(this).val();
      if(this.category == 'eCommerce'){
        this.newOptions="<option>B2B</option><option>B2C</option>";
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      } 
      else if(this.category == 'education'){
        this.newOptions="<option>Higher Education</option>";
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      } 
      else if(this.category == 'financial'){
        this.newOptions="<option>Banking</option><option>Mortgage and Loans</option><option>Mutual Funds</option><option>Venture Capital</option>";
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      }
      else if(this.category == 'insurance'){
        this.newOptions="<option>Vehicle Insurance</option><option>Fire Insurance</option><option>Health Insurance</option><option>Life Insurance</option>";
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      }
      else if(this.category == 'media'){
        this.newOptions="<option>News & Journalism</option><option>Subscription-based Content</option>";
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      } 
      else if(this.category == 'saas'){
        this.newOptions="<option>Collaborative Software</option><option>CRM</option><option>Marketing</option><option>Other Packaged Software</option>";
        jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
      }
      
    });
}}
