import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DatabaseService } from '../../../shared/service/database.service';
import { setFlagsFromString } from 'v8';
declare let jQuery: any;


// var sheetsId = "1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w";
// var apiKey = "AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY";

@Component({
  selector: 'app-idea-generator',
  templateUrl: './idea-generator.component.html',
  styleUrls: ['../../../../assets/css/allPage_minified.css', '../../../../assets/css/style.css', '../../../../assets/css/responsive.css', '../../../../assets/css/selectize.default.css']
})


export class IdeaGeneratorComponent implements OnInit {timestamp: any;
    flag: boolean;
    isFinancial: boolean;
    isEducation: boolean;
    isEcommerce: boolean;
    category: string = "";
    newOptions: string = "";
    saveData = {};
    email: string;
    parseData = [];
    buildSelect=[];
    link;
    option = "&range=Category!A2:Z";
    saveSubCat = [];
    show = false;
    
    constructor(private router: Router, title: Title) {
    title.setTitle("Idea Generation | Outgrow");
    this.isEcommerce = false;
    this.isEducation = false;
    this.isFinancial = false;
    this.link = new GoogleSheet('Category')
    this.sendRequest(this.link.getLink(this.option))
    }
   
    ngOnInit() {
   
    jQuery(document).ready(function (){
    // jQuery('#background').mouseParallax({ moveFactor: 5 });
    // jQuery('#foreground').mouseParallax({ moveFactor: 1 });
   
   
    jQuery(".sec1-button").click(function (){
    jQuery(".sec1-bg").hide();
    jQuery(".sec2-bg").removeClass("hide");
    jQuery(".logo-top").removeClass("hide");
    jQuery('html, body').animate({
    scrollTop: jQuery('.sec2-bg').offset().top
    }, 1000);
    setTimeout(function(){
    jQuery(".sec1-bg").addClass("hide");
    }, 1000)
    
   
    });
    })
   
    console.log("::-----------::")
    jQuery('.selectize-category').selectize({
    create: false,
    sortField: 'text',
    onChange:function (event){
        var self=this;
        console.log(this)
        console.log('::in sec-2::',event)
    self.makeSubCategory('.selectize-sub-category',event);
    self.saveData['category'] = event;
   
    jQuery(".sec3-bg").removeClass("hide");
    jQuery('html, body').animate({
    scrollTop: jQuery('.sec3-bg').offset().top
    }, 1000);
    setTimeout(function (){
    jQuery(".sec2-bg").addClass("hide");
    }, 1000)
   
    jQuery('.selectize-category-result')[0].selectize.setValue(event);
    }
    });
   
   
   
    jQuery('.selectize-sub-category').selectize({
    create: false,
    sortField: 'text',
    onChange:function (event){
    this.saveData['subCat'] = event;
   
    jQuery(".sec4-bg").removeClass("hide");
    jQuery('html, body').animate({
    scrollTop: jQuery('.sec4-bg').offset().top
    }, 1000);
    setTimeout(function (){
    jQuery(".sec3-bg").addClass("hide");
    }, 1000)
   
    jQuery('.selectize-sub-category-result')[0].selectize.setValue(event);
    }
    });
   
    jQuery("#form-email").focus(function (){
    if(!jQuery('.email-validator').hasClass('hide')) jQuery('.email-validator').addClass('hide');
    })
   
    // jQuery(".sec-button").click(function (){
    // var verify = emailValidation(jQuery("#form-email").val());
    // if(verify) {
    // const email = jQuery("#form-email").val();
    // if(this.parseData[this.saveData['category']][this.saveData['subCat']] || this.parseData[this.saveData['category']]['keyCustom']) this.showTitle();
    // jQuery(".sec5-bg").fadeIn("slow", function (){
    // jQuery(this).removeClass("hide");
    // });
    // jQuery(".sec4-bg").fadeOut("slow", function (){
    // jQuery(this).addClass("hide");
    // });
    // jQuery(".logo-top").removeClass("hide");
    // jQuery('body').css('overflow-y','scroll');
   
    // }
    // else jQuery('.email-validator').removeClass('hide');
    // });
   
    jQuery('.sec-button-update').click(function (){
    if(this.parseData[this.saveData['category']][this.saveData['subCat']]){
    jQuery('.result-page-loader').removeClass('hide');
    this.showTitle();
    }
    // jQuery('.build-btn').removeClass('hide');
    })
   
    jQuery('.selectize-category-result').selectize({
    create: false,
    sortField: 'text',
    onChange:function (event){
    this.makeSubCategory('.selectize-sub-category-result',this.saveSubCat[event]);
    this.saveData['category'] = event;
    }
    });
   
    jQuery('.selectize-sub-category-result').selectize({
    create: false,
    sortField: 'text',
    onChange:function (event){
    this.saveData['subCat'] = event;
    }
    });
   
    // owl carousel start js
    
    // });
   
    jQuery(document).on('click', '.item-selected', function (event){
    var index = this.buildSelect.indexOf(jQuery(this).text().trim());
    if(jQuery(this).children('input').prop('checked')) {
    if(index == -1) this.buildSelect.push(jQuery(this).text().trim());
    }
    else {
    if(index > -1) this.buildSelect.splice(index,1);
    }
    if(this.buildSelect.length > 0) {
    jQuery('#build-select').html('('+this.buildSelect.length+')');
    if(jQuery('.build-btn').hasClass('hide')) jQuery('.build-btn').removeClass('hide');
    }
    else {
    if(!jQuery('.build-btn').hasClass('hide')) jQuery('.build-btn').addClass('hide');
    }
    })
   
    jQuery('.build-btn').click(function (){
    jQuery('.build-btn').addClass('hide');
    var data = {
    timestamp:this.timestamp,
    email: this.email,
    category:this.saveData['category'],
    sub_category:this.saveData['subCat'],
    app_selected: this.buildSelect,
    flag: this.flag ? false : true 
    }
    this.requestBuild(data);
    /* jQuery.ajax({
    type:'POST',
    url: link.getResponseLink(),
    data: JSON.stringify(data),
    success:(response){
    console.log(JSON.parse(response));
    },
    error:(){
   
    }
    })*/
    this.flag = true;
    })
   
    }

    sendRequest(link) {
    var self = this;    
    jQuery.get({
    url: link,
    success: function (response){
    console.log("::Send Request::",response.values);
    console.log("::going towards makecategories:")
    self.makeCategories(response.values);   
    console.log("::going towards makestructure::")
    self.makeStructure(response.values);
    },
    error: function (err){
    console.log(err);
    }
    })
    }
    
    makeCategories(response) {
        var self= this;
        console.log("1");
    var selectizeCategory = [];
    response.forEach(function(category, index){
    let key = category[0].replace(" ", "") + "-Key"
    selectizeCategory.push({
    text: category[0],
    value: key
    })
    
    self.saveSubCat[key] = category.slice(1);
    console.log("::Category -> saveCat::",self.saveSubCat[key])
    })
    /** For category*/
    console.log("::Category ::",selectizeCategory);
    self.makeSelectize('.selectize-category', selectizeCategory);
    self.makeSelectize('.selectize-category-result', selectizeCategory);
    self.stopLoader('.category-page-loader');
    /** For Sub-Category*/
    }

    makeSelectize(htmlClass, selectizeData) {
    var selectize = jQuery(htmlClass)[0].selectize;
    // selectize.clear();
    selectize.clearOptions();
    selectize.load(function(callback){
    callback(selectizeData);
    });
    }
   
    makeSubCategory(htmlClass, data) {
    var selectizeSubCat = [];
    data.forEach(function(subCat, index){
    selectizeSubCat.push({
    text: subCat,
    value: "key" + subCat.trim().replace(" ", "")
    })
    })
    this.makeSelectize(htmlClass, selectizeSubCat);
    this.makeSelectize('.selectize-sub-category-result', selectizeSubCat);
    }
   
    makeStructure(response) {
        var self=this;
        console.log("makeStructure")
    let sheetVal = [];
    response.forEach(function(category, cIndex){
    let key = category[0].replace(" ", "") + "-Key";
    let subArr = [];
    category.slice(1).forEach(function(subCat, sIndex){
    let keySub = "key" + subCat.trim().replace(" ", "");
    subArr.push(keySub);
    })
    self.link = new GoogleSheet( key);
    self.option = "&range=" + key + "!A2:Z";
    self.getCalcTitle(self.link.getLink(self.option), key);
    })
    self.stopLoader('.sub-category-page-loader');
    console.log(self.parseData);
    }
   
    getCalcTitle(link, key) {
        var self= this;
    jQuery.get({
    url: link,
    success: function(response){
    if (response.values) self.parseData[key] = self.makeCalcTitle(response.values, key);
    else self.parseData[key] = self.makeCalcTitle([], key);
    },
    error: function(err){
    console.log(err);
    }
    })
    }
   
    makeCalcTitle(response, key) {
        var self=this;
    let object = [];
    response.forEach(function(value, index){
    if (!object[value[0]]) object[value[0]] = [];
    var ob = {};
    value.forEach(function(val, key){
    if (key !== 0) {
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
   
    showTitle() {
    var html = {};
    var loopData = [this.saveData['subCat']];
    var rand;
    if (this.parseData[this.saveData['category']]['keyCustom']) loopData.push('keyCustom');
   
    loopData.forEach(function(subCat, sIndex){
    if (this.parseData[this.saveData['category']][subCat] && this.parseData[this.saveData['category']][subCat].length > 0) {
    this.parseData[this.saveData['category']][subCat].forEach(function(data, index){
    if (data.top && data.top != "") {
    rand = this.randomNumber();
    if (!html['top']) html['top'] = "";
    // html.top.count = ;
    html['top'] += '<div class="item item-selected"><input id="xs-img-top-' + index + '" type="checkbox" name="xs-img-top-' + index + '" value="xs-img-top-' + index + '" /><label class="xs-img-hover img img' + rand + '" for="xs-img-top-' + index + '"><div class="overlay-outer"><div class="overlay">' + data.top + '</div> </div></label></div>';
    }
    if (data.middle && data.middle != "") {
    rand = this.randomNumber();
    if (!html['middle']) html['middle'] = "";
   
    html['middle'] += '<div class="item item-selected"><input id="xs-img-mid-' + index + '" type="checkbox" name="xs-img-mid-' + index + '" value="xs-img-mid-' + index + '" /><label class="xs-img-hover img img' + rand + '" for="xs-img-mid-' + index + '"><div class="overlay-outer"><div class="overlay">' + data.middle + '</div> </div></label></div>';
    }
    if (data.bottom && data.bottom != "") {
    rand = this.randomNumber();
    if (!html['bottom']) html['bottom'] = "";
    html['bottom'] += '<div class="item item-selected"><input id="xs-img-bottom-' + index + '" type="checkbox" name="xs-img-bottom' + index + '" value="xs-img-bottom-' + index + '" /><label class="xs-img-hover img img' + rand + '" for="xs-img-bottom-' + index + '"><div class="overlay-outer"><div class="overlay">' + data.bottom + '</div> </div></label></div>';
    }
    })
    }
    })
    if (html['top']) {
    jQuery('.top-funnel').empty().append(html['top']);
    this.reInitCarousel('.top-funnel');
    }
    if (html['middle']) {
    jQuery('.mid-funnel').empty().append(html['middle']);
    this.reInitCarousel('.mid-funnel');
    }
    if (html['bottom']) {
    jQuery('.bottom-funnel').empty().append(html['bottom']);
    this.reInitCarousel('.bottom-funnel');
    }
    this.stopLoader('.result-page-loader');
    }
   
    reInitCarousel(className) {
    jQuery(className).data('owlCarousel').reinit({
   
    //autoPlay: 3000, //Set AutoPlay to 3 seconds
   
    //items : length,
    itemsDesktop: [1366, 3],
    itemsDesktopSmall: [979, 2],
    navigation: true,
    navigationText: [
    "<i class='material-icons'>keyboard_arrow_left</i>",
    "<i class='material-icons'>keyboard_arrow_right</i>"
    ],
   
    });
    }
   
    randomNumber() {
    return Math.floor((Math.random() * 8) + 1);
    }
   
    stopLoader(element) {
    if (!jQuery(element).hasClass('hide')) jQuery(element).addClass('hide');
    }
    requestBuild(data){
    console.log(data,'>>>>>>>>>>>>>>>',data.app_selected.length);
    jQuery('.result-page-loader').removeClass('hide');
    // this.makeRequest(data,data.app_selected.length);
    }
    
    makeRequest(app,count, finalCallback) {
    var data = this.appParams(app,count-1);
    this.someAjaxCall(data, function(response){
    if(count > 0){
    console.log(response,'>>>>>>>',count);
    this.makeRequest(app,count - 1, finalCallback);
    } else {
    jQuery('.result-page-loader').addClass('hide');
    jQuery('.build-btn').removeClass('hide');
    finalCallback && finalCallback();
    }
    });
    }
    
    someAjaxCall(data, callback){
    jQuery.ajax({
    type:'POST',
    url: this.link.getBuildLink(),
    headers: { 
    "Content-Type": "application/json"
    },
    data: JSON.stringify(data),
    success:function(response){
    if(response.error) callback();
    else callback(response);
    },
    error:function(err){
    callback(err);
    }
    })
    }
    
    appParams(data, key){
    let name = data.email.split('@')[0].split('.').join(' ');
    let domain = data.email.split('@')[1].split('.')[0];
    let params = { 
    "user": {
    "emails": {
    "email": data.email
    },
    "name" : name,
    "password" : "1234567890"
    },
    "company": {
    "sub_domain": domain,
    "name": domain
    },
    "app":{
    "name": data.app_selected[key],
    "header":data.app_selected[key],
    "background":""
    },
    "template":"5892d26dcbff7e0b1c34bf65"
    }
    return params;
    }
   
   }
   
   
   class GoogleSheet {
    baseUrl: string;
    sheetName: any;
    public spreadsheetsId = "1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w";
    public apiKey = "AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY";
   
    constructor(sheetName) {
    this.spreadsheetsId = this.spreadsheetsId;
    this.apiKey = this.apiKey;
    this.sheetName = sheetName;
    this.baseUrl = "https://sheets.googleapis.com/v4/spreadsheets";
    }
   
    getLink(options = '') {
    var link = this.baseUrl + '/' + this.spreadsheetsId + '/values/' + this.sheetName + '?key=' + this.apiKey + options;
    return link;
    }
   
    getResponseLink(){
       return "https://script.google.com/macros/s/AKfycbxccQ3kn22cdLp0Prt6xcWmHty-TXakawdYRjiwukue_-PIPfc/exec"; 
     }
   
     getBuildLink(){
       return "http://localhost:3000/api/v1/demo_app/create";
     }}