import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
declare let jQuery: any;

@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['../../../../assets/css/allPage_minified.css', '../../../../assets/css/style.css', '../../../../assets/css/responsive.css', '../../../../assets/css/selectize.default.css']
})
export class IdeaGeneratorComponent implements OnInit {
  isFinancial: boolean;
  isEducation: boolean;
  isEcommerce: boolean;
  category: string = "";
  newOptions: string = "";
  saveData = "";
  email: string;
  parseData = [];
  makeSunCategory(a, b) { };
  saveSubCAt = [];
  show=false;
  constructor(private router: Router, title: Title) {
    title.setTitle("Idea Generation | Outgrow");
    this.isEcommerce=false;
    this.isEducation=false;
    this.isFinancial=false
  }

  ngOnInit() {
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
    jQuery('.selectize-input').
      click(function (event) {
        jQuery(".selectize-dropdown").toggleClass("hide");
      });
      // jQuery(".expand").click( function(event) {
      //   var $target = jQuery(event.target);
      //   jQuery(this).toggleClass('open');
      //   $target.closest(".expand").find(".detail").slideToggle(); 
      // });

    jQuery('.option').
      click(function(event){
        this.category = jQuery(this).attr('value');
        console.log("my category",this.category)
        // console.log("!!",jQuery(this),jQuery(this).data('class'))
        if (this.category == 'eCommerce-Key') {
          console.log(this.category);
          this.isEcommerce=true;
          // this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="b2b">B2B</option><option value="b2c">B2C</option>`;
          // jQuery('.selectize-sub-category').attr("placeholder",'choose..');
          this.newOPtions=`<div data-value="keyB2B" data-selectable="" class="option">B2B</div><div data-value="keyB2C" data-selectable="" class="option active">B2C</div>`;
          jQuery('.selectize-dropdown-content').append(`<div data-value="keyB2B" data-selectable="" class="option">B2B</div><div data-value="keyB2C" data-selectable="" class="option active">B2C</div>`);
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
          jQuery('.selectize-category-result option[value=eCommerce]').attr('selected', 'selected')
        }
        else if (this.category == 'Education-Key') {
          this.isEducation=true;
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="higherEducation">Higher Education</option>`;
          jQuery('.selectize-dropdown-content').html(jQuery(this.newOptions));
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
          jQuery('.selectize-category-result option[value=education]').attr('selected', 'selected')
        }
        else if (this.category == 'FinancialServices-Key') {
          this.isFinancial=true;
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="banking">Banking</option><option value="mortage">Mortgage and Loans</option><option value="mutualFunds">Mutual Funds</option><option value="venture">Venture Capital</option>`;
          jQuery('.selectize-dropdown-content').html(jQuery(this.newOptions));
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
          jQuery('.selectize-category-result option[value=financial]').attr('selected', 'selected')
        }
        else if (this.category == 'Insurance-Key') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="vechicle">Vehicle Insurance</option><option value="fire">Fire Insurance</option><option value="health">Health Insurance</option><option value="life">Life Insurance</option>`;
          jQuery('.selectize-dropdown-content').html(jQuery(this.newOptions));
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
          jQuery('.selectize-category-result option[value=insurance]').attr('selected', 'selected')
        }
        else if (this.category == 'Media and Entertainment-Key') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="news">News & Journalism</option><option value="subscription">Subscription-based Content</option>`;
          jQuery('.selectize-dropdown-content').html(jQuery(this.newOptions));
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
          jQuery('.selectize-category-result option[value=media]').attr('selected', 'selected')
        }
        else if (this.category == 'Saas-Key') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="collabrative">Collaborative Software</option><option value="crm">CRM</option><option value="marketing">Marketing</option><option value="other">Other Packaged Software</option>`;
          jQuery('.selectize-dropdown-content').html(jQuery(this.newOptions));
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
          jQuery('.selectize-category-result option[value=saas]').attr('selected', 'selected')
        }

        jQuery(".sec3-bg").removeClass("hide");
        jQuery('html, body').animate({
          scrollTop: jQuery('.sec3-bg').offset().top
        }, 1000);
        setTimeout(function () {
          jQuery(".sec2-bg").addClass("hide");
        }, 1000)

        
      })

    jQuery('.selectize-sub-category').
      change(function (event) {
        jQuery(".sec4-bg").removeClass("hide");
        jQuery('html, body').animate({
          scrollTop: jQuery('.sec4-bg').offset().top
        }, 1000);
        setTimeout(function () {
          jQuery(".sec3-bg").addClass("hide");
        }, 1000)
      });

    // jQuery("#form-email").focus(function(){
    //     if(!jQuery('.email-validator').hasClass('hide')) jQuery('.email-validator').addClass('hide');
    // })

    jQuery(".sec-button").click(function () {
      // var verify = emailValidation(jQuery("#form-email").val());
      // if(verify) {
      //     window.email = jQuery("#form-email").val();
      //     if(parseData[saveData.category][saveData.subCat] || parseData[saveData.category]['keyCustom'])    showTitle();
      jQuery(".new-sec-bg").fadeIn("slow", function () {
        jQuery(this).removeClass("hide");
      });
      jQuery(".sec4-bg").fadeOut("slow", function () {
        jQuery(this).addClass("hide");
      });
      jQuery(".logo-top").removeClass("hide");
      jQuery('body').css('overflow-y', 'scroll');

      // }
      // else jQuery('.email-validator').removeClass('hide');
    });

    jQuery('.sec-button-update').click(function () {
      // if(parseData[saveData.category][saveData.subCat]){
      jQuery('.result-page-loader').removeClass('hide');
      // showTitle();
      // }
      // jQuery('.build-btn').removeClass('hide');
    })

    jQuery('.selectize-category-result').
      change(function (event) {
        this.category = jQuery(this).val();
        if (this.category == 'eCommerce') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="b2b">B2B</option><option value="b2c">B2C</option>`;
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
        }
        else if (this.category == 'education') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="higherEducation">Higher Education</option>`;
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
        }
        else if (this.category == 'financial') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="banking">Banking</option><option value="mortage">Mortgage and Loans</option><option value="mutualFunds">Mutual Funds</option><option value="venture">Venture Capital</option>`;
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
        }
        else if (this.category == 'insurance') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="vechicle">Vehicle Insurance</option><option value="fire">Fire Insurance</option><option value="health">Health Insurance</option><option value="life">Life Insurance</option>`;
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
        }
        else if (this.category == 'media') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="news">News & Journalism</option><option value="subscription">Subscription-based Content</option>`;
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
        }
        else if (this.category == 'saas') {
          this.newOptions = `<option hidden disabled selected>Choose Sub Category</option><option value="collabrative">Collaborative Software</option><option value="crm">CRM</option><option value="marketing">Marketing</option><option value="other">Other Packaged Software</option>`;
          jQuery('.selectize-sub-category-result').html(jQuery(this.newOptions));
        }

      });

    jQuery('.selectize-sub-category-result').
      change(function (event) {
        this.subCategory = jQuery(this).val();
        if (this.subCategory == 'b2b') {
          this.newOptions1 = `<li>Find out your business acumen</li><li>What kind of entrepreneur are you?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>Is (insert product name) right for your business?</li><li>Which (insert product type) is right for you?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much can you save with bulk ordering (Insert your product here)?</li><li>How much can you save with X deal?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));

        }

        else if (this.subCategory == 'b2c') {

          this.newOptions1 = `<li>What kind of shopper are you?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>Which (insert product type) is right for you?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much can you save with X deal?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'higherEducation') {
          this.newOptions1 = `<li>Which major is right for you?</li><li>What should be your top college choices?</li><li>Which type of college should you aim at?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>Do you truly understand the college application procress?</li><li>What are your chance of getting into Harvard?</li><li>Are you ready for an MBA?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much scholarship can I get?</li><li>By when can I complete my degree?</li><li>What are my cances of getting a job?'</li><li>What is going to be the ROI of going to Harvard?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'banking') {

          this.newOptions1 = `<li>How soon should you start saving?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>Which type of bank account is right for you?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>Savings Calculator','Financial Stability Score</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'mortage') {
          this.newOptions1 = `<li>Do you qualify for a home/education/business loan in (Insert country/region/district)?</li><li>Is mortgage/loan a financial option for me?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>Time/Period Calculator</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>Loan repayment calculator</li><li>Mortgage Calculator</li><li>Financial Stability Score</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }

        else if (this.subCategory == 'mutualFunds') {

          this.newOptions1 = `<li>How much would it cost me to hire an investment advisor?</li><li>How much do you know about the stock market? Find out.</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>What investment (stock / bond) mix makes the most sense for me?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>Risk Calculator</li><li>How much would it cost me to invest in an index fund?</li><li>Financial Stability Score</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'venture') {
          this.newOptions1 = `<li>How well you understand the venture capital terminology?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>How much venture capital should you raise?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How good is your startup pitch?</li><li>Financial Stability Score</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }

        else if (this.subCategory == 'vechicle') {

          this.newOptions1 = `<li>Do you need Vechicle Insurance?</li><li>How much money can you save after opting for Vechicle Insurance?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>What type of Vechicle Insurance is right for your family?</li><li>Do you qualify for your desired Vechicle Insurance plan?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much premium will you need to pay for your desired Vechicle Insurance plan?</li><li>Risk Calculator</li><li>Tax Saving/Rebate Calculator</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'fire') {
          this.newOptions1 = `<li>Do you need Fire Insurance?</li><li>How much money can you save after opting for Fire Insurance?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>What type of Fire Insurance is right for your family?</li><li>Do you qualify for your desired Fire Insurance plan?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much premium will you need to pay for your desired Fire Insurance plan?</li><li>Risk Calculator</li><li>Tax Saving/Rebate Calculator</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }

        else if (this.subCategory == 'health') {

          this.newOptions1 = `<li>Do you need Health Insurance?</li><li>How much money can you save after opting for Health Insurance?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>What type of Health Insurance is right for your family?</li><li>Do you qualify for your desired Health Insurance plan?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much premium will you need to pay for your desired Health Insurance plan?</li><li>Risk Calculator</li><li>Tax Saving/Rebate Calculator</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'life') {
          this.newOptions1 = `<li>Do you need Life Insurance?</li><li>How much money can you save after opting for Life Insurance?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>What type of Life Insurance is right for your family?</li><li>Do you qualify for your desired Life Insurance plan?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much premium will you need to pay for your desired Life Insurance plan?</li><li>Risk Calculator</li><li>Tax Saving/Rebate Calculator</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }

        else if (this.subCategory == 'news') {

          this.newOptions1 = `<li>How much do you know about (Insert hot news topic here)?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>What type of news consumer are you?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>Based on what you\'ve read</li><li>which article should you read next?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'subscription') {
          this.newOptions1 = `<li>How much do you know about (Insert most popular content)?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>Which should you actually subscribe to?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much more content will you consume with a paid subscription?</li><li>Based on your history, what content is right for you?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }

        else if (this.subCategory == 'collabrative') {

          this.newOptions1 = `<li>How collaborative is your workplace?</li><li>How Remote Friendly Is Your Organization?</li><li>Which type of distributed organization are you?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>How much can you save by switching to distributed environment?</li><li>Calculate your team\'s collaboration score</li><li>How much can (Insert your product benefit here) contribute to your business?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much can save you vs.</li><li>What is the ROI of using (Insert your product here)?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'crm') {
          this.newOptions1 = `<li>Are you a customer\'s darling?</li><li>What\'s your customer relationship score?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>How much do you know about CRMs?</li><li>How much do you know about project management?</li><li>How much can (Insert your product benefit here) contribute to your business?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>How much do you know about CRMs?</li><li>How much time could you save by using (Insert your product here)?</li><li>What is the ROI of using (Insert your product here)?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'marketing') {

          this.newOptions1 = `<li>What kind of marketer are you?','Are you a true digital marketer?</li>`;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>How much can (Insert your product benefit here) contribute to your business?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>Find out your digital marketing strategy</li><li>What is the ROI of using (Insert your product here)?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
        else if (this.subCategory == 'other') {
          this.newOptions1 = ``;
          jQuery('#top-funnel').html(jQuery(this.newOptions1));
          this.newOptions2 = `<li>How much can (Insert your product benefit here) contribute to your business?</li>`;
          jQuery('#mid-funnel').html(jQuery(this.newOptions2));
          this.newOptions3 = `<li>What is the ROI of using (Insert your product here)?</li>`;
          jQuery('#bottom-funnel').html(jQuery(this.newOptions3));
        }
      });

    

    function emailValidation(email) {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))jQuery/
      if (regex.test(email)) return true;
      else false;
    }

    jQuery("#form-email").focus(function () {
      if (!jQuery('.email-validator').hasClass('hide')) jQuery('.email-validator').addClass('hide');
    })

    jQuery(".sec-button").click(function () {
      var verify = emailValidation(jQuery("#form-email").val());
      console.log(verify);
      if (verify) {
        this.email = jQuery("#form-email").val();
        console.log(this.email);
        if (this.parseData[this.saveData.category][this.saveData.subCat] || this.parseData[this.saveData.category]['keyCustom'])
          jQuery(".sec5-bg").fadeIn("slow", function () {
            jQuery(this).removeClass("hide");
          });
        jQuery(".sec4-bg").fadeOut("slow", function () {
          jQuery(this).addClass("hide");
        });
        jQuery(".logo-top").removeClass("hide");
        jQuery('body').css('overflow-y', 'scroll');

      }
      else jQuery('.email-validator').removeClass('hide');
    });

  }
}
