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
  saveData="";
  email:string;
  parseData=[];
  makeSunCategory(a,b){};
  saveSubCAt=[];
  
  b2b={
    sec1:['Find out your business acumen','What kind of entrepreneur are you?'],
    sec2:['Is (insert product name) right for your business?','Which (insert product type) is right for you?'],
    sec3:['How much can you save with bulk ordering (Insert your product here)?','How much can you save with X deal?']
  }
  b2c={
    sec1:['What kind of shopper are you?'],
    sec2:['Which (insert product type) is right for you?'],
    sec3:['How much can you save with X deal?']
  }
  education={
    sec1:['Which major is right for you?','What should be your top college choices?','Which type of college should you aim at?'],
    sec2:['Do you truly understand the college application procress?','What are your chance of getting into Harvard?','Are you ready for an MBA?'],
    sec3:['How much scholarship can I get?','By when can I complete my degree?','What are my cances of getting a job?','What is going to be the ROI of going to Harvard?']
  }
  banking:{
    sec1:['How soon should you start saving?'],
    sec2:['Which type of bank account is right for you?'],
    sec3:['Savings Calculator','Financial Stability Score']
  }
  mortgage:{
    sec1:['Do you qualify for a home/education/business loan in (Insert country/region/district)?','Is mortgage/loan a financial option for me?'],
    sec2:['Time/Period Calculator'],
    sec3:['Loan repayment calculator','Mortgage Calculator','Financial Stability Score']
  }
  mutualFunds:{
    sec1:['How much would it cost me to hire an investment advisor?','How much do you know about the stock market? Find out.'],
    sec2:['What investment (stock / bond) mix makes the most sense for me?'],
    sec3:['Risk Calculator','How much would it cost me to invest in an index fund?','Financial Stability Score']
  }
  ventureCapital:{
    sec1:['How well you understand the venture capital terminology?'],
    sec2:['How much venture capital should you raise?'],
    sec3:['How good is your startup pitch?','Financial Stability Score']
  }
  vehicleInsurance:{
    sec1:['Do you need Vehicle Insurance?','How much money can you save after opting for Vehicle Insurance?'],
    sec2:['What type of Vehicle Insurance is right for your family?','Do you qualify for your desired Vehicle Insurance plan?'],
    sec3:['How much premium will you need to pay for your desired Vehicle Insurance plan?','Risk Calculator','Tax Saving/Rebate Calculator']
  }
  fireInsurance:{
    sec1:['Do you need fire Insurance?','How much money can you save after opting for fire Insurance?'],
    sec2:['What type of fire Insurance is right for your family?','Do you qualify for your desired fire Insurance plan?'],
    sec3:['How much premium will you need to pay for your desired Vehicle Insurance plan?','Risk Calculator','Tax Saving/Rebate Calculator']
  }
  healthInsurance:{
    sec1:['Do you need health Insurance?','How much money can you save after opting for health Insurance?'],
    sec2:['What type of health Insurance is right for your family?','Do you qualify for your desired health Insurance plan?'],
    sec3:['How much premium will you need to pay for your desired Vehicle Insurance plan?','Risk Calculator','Tax Saving/Rebate Calculator']
  }
  lifeInsurance:{
    sec1:['Do you need life Insurance?','How much money can you save after opting for life Insurance?'],
    sec2:['What type of life Insurance is right for your family?','Do you qualify for your desired life Insurance plan?'],
    sec3:['How much premium will you need to pay for your desired Vehicle Insurance plan?','Risk Calculator','Tax Saving/Rebate Calculator']
  }
  new:{
    sec1:['How much do you know about (Insert hot news topic here)?'],
    sec2:['What type of news consumer are you?'],
    sec3:['Based on what you\'ve read, which article should you read next?']
  }
  subscription:{
    sec1:['How much do you know about (Insert most popular content)?'],
    sec2:['Which should you actually subscribe to?'],
    sec3:['How much more content will you consume with a paid subscription?','Based on your history, what content is right for you?']
  }
  collaborative:{
    sec1:['How collaborative is your workplace?','How Remote Friendly Is Your Organization?','Which type of distributed organization are you?'],
    sec2:['How much can you save by switching to distributed environment?','Calculate your team\'s collaboration score','How much can (Insert your product benefit here) contribute to your business?'],
    sec3:['How much can save you vs.','What is the ROI of using (Insert your product here)?']
  }
  crm:{
    sec1:['Are you a customer\'s darling?','What\'s your customer relationship score?'],
    sec2:['How much do you know about CRMs?','How much do you know about project management?','How much can (Insert your product benefit here) contribute to your business?'],
    sec3:['How much do you know about CRMs?','How much time could you save by using (Insert your product here)?','What is the ROI of using (Insert your product here)?']
  }
  marketing:{
    sec1:['What kind of marketer are you?','Are you a true digital marketer?'],
    sec2:['How much can (Insert your product benefit here) contribute to your business?'],
    sec3:['Find out your digital marketing strategy','What is the ROI of using (Insert your product here)?']
  }
  otherPackage:{
    sec1:[''],
    sec2:['How much can (Insert your product benefit here) contribute to your business?'],
    sec3:['What is the ROI of using (Insert your product here)?']
  }

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

    function emailValidation(email){
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))jQuery/
      if(regex.test(email)) return true;
      else false;
  }

//   jQuery("#form-email").focus(function(){
//     if(!jQuery('.email-validator').hasClass('hide')) jQuery('.email-validator').addClass('hide');
// })

// jQuery(".sec-button").click(function(){
//     var verify = emailValidation(jQuery("#form-email").val());
//     console.log(verify);
//     if(verify) {
//         this.email = jQuery("#form-email").val();
//         console.log(this.email);
//         if(this.parseData[this.saveData.category][this.saveData.subCat] || this.parseData[this.saveData.category]['keyCustom'])    
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

}}
