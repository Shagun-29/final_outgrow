import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import  * as $ from 'jquery';
declare let jQuery: any;

@Component({
 selector: 'app-pricing-home',
 templateUrl: './pricing-home.component.html',
 styleUrls: ['./pricing-home.component.css']
})
export class PricingHomeComponent implements OnInit {
 public isActive0; isActive1; isHideFree0; isHideFree1; isHideEssen0; isHideEssen1; isHideBusi0; isHideBusi1;
 public isOpen;
 public items=["temp","host","chart","cust","int","formula","analytic","af","support"];
 public show0;add_remove0; show1;add_remove1; show2;add_remove2; show3;add_remove3;
 public isOpened0; dispSec0;isOpened1; dispSec1;isOpened2; dispSec2; isOpened3; dispSec3;isOpened4; dispSec4;isOpened5; dispSec5;isOpened6; dispSec6;isOpened7; dispSec7;isOpened8; dispSec8;
 public isSmallOpen0;isSmallOpen1;isSmallOpen2;isSmallDetail0;isSmallDetail1;isSmallDetail2;
 load = document.querySelector('.preloader');
 header = document.querySelector('.navbar-fixed-top');
footer = document.querySelector('.footer-14');
 constructor(title: Title) {

 }

 ngOnInit() {
    this.load.classList.add('hide');
    this.header.classList.remove('hide');
    this.footer.classList.remove('hide');
    jQuery(document).ready(function(){
    // jQuery('.detail').hide();
	jQuery(".expand").click( function(event) {
		var $target = jQuery(event.target);
		jQuery(this).toggleClass('open');
		$target.closest(".expand").find(".detail").slideToggle(); 
	});

//  jQuery('.expand-all').click( function(event){
//  if(jQuery(this).hasClass('open')){
//  jQuery('.expand').removeClass('open');
//  jQuery(".detail").slideUp("slow");
//  }
//  else{
//  jQuery('.expand').addClass('open');
//  jQuery(".detail").slideToggle();
//  }
//  jQuery(this).toggleClass('open');
//  });

//  jQuery('.detail').hide();

 jQuery(".expand-rs").click( function(event) {
 // jQuery(this).parents('.expand').toggleClass('open');
 // jQuery(this).parents('.expand').find('.detail').slideToggle();
 
 var $target = jQuery(event.target);
 jQuery(this).toggleClass('open');
 // jQuery(this).parents('.expand').toggleClass('open');
 jQuery(this).children(".detail").slideToggle();
 
 //jQuery('.expand .expand-child > .detail').slideToggle();
 });



 jQuery('.toggle-more').click(function(event){
 var $target = jQuery(event.target);
 var d = jQuery(this).children("i").html();
 if(d === 'add'){
 jQuery(this).children("i").html('remove');
 jQuery(this).children("p").html('show less');
 }
 else{
     
 jQuery(this).children("i").html('add');
 jQuery(this).children("p").html('show more');
 }
 jQuery(this).parents('.pricing-bottom').toggleClass('open');
 $target.closest(".pricing-bottom").find(".features").slideToggle().removeClass('rs-hide');
 });
 
 jQuery('li').click(function() {
 jQuery(this).addClass('active').siblings().removeClass('active'); 
 });

});

    // jQuery('.toggle-sub-more').click(function (event) {
    // let $target = jQuery(event.target);
    // const d = jQuery(this).children('i').html();
    // if (d === 'add') {
    // jQuery(this).children('i').html('remove');
    // jQuery(this).children('p').html('show less');
    // } else {
    // jQuery(this).children('i').html('add');
    // jQuery(this).children('p').html('show more');
    // }
    // jQuery(this).parents('.pricing-bottom').toggleClass('open');
    // $target.closest('.pricing-bottom').find('.features').slideToggle().removeClass('rs-hide');
    // this.initJQuery();
    // });
    
    

 this.isActive0 = true;
 this.isActive1 = false;

 this.isHideFree0 = false;
 this.isHideFree1 = true;

 this.isHideEssen0 = false;
 this.isHideEssen1 = true;

 this.isHideBusi0 = false;
 this.isHideBusi1 = true;

 this.isOpen=false;
 this.isOpened0 = false;
 this.isOpened1 = false;
 this.isOpened2 = false;
 this.isOpened3 = false;
 this.isOpened4 = false;
 this.isOpened5 = false;
 this.isOpened6 = false;
 this.isOpened7 = false;
 this.isOpened8 = false;

 this.isSmallOpen0=false;
 this.isSmallOpen1=false;
 this.isSmallOpen2=false;

 this.show0="Show More";
 this.add_remove0="add";
 this.show1="Show More";
 this.add_remove1="add";
 this.show2="Show More";
 this.add_remove2="add";
 this.show3="Show More";
 this.add_remove3="add";
 }


 //Function Cycletab is for selectin Annual or Monthly
 cycleTab(plan) {
 if (plan == "annual") {
 this.isActive0 = true;
 this.isActive1 = false;

 this.isHideFree0 = false;
 this.isHideFree1 = true;

 this.isHideEssen0 = false;
 this.isHideEssen1 = true;

 this.isHideBusi0 = false;
 this.isHideBusi1 = true;
 }

 else if (plan == "monthly") {
 this.isActive0 = false;
 this.isActive1 = true;

 this.isHideFree0 = true;
 this.isHideFree1 = false;

 this.isHideEssen0 = true;
 this.isHideEssen1 = false;

 this.isHideBusi0 = true;
 this.isHideBusi1 = false;
 console.log("in monthly :is annual is hidden", this.isHideBusi0)
 console.log("in monthly:is monthly is hidden", this.isHideBusi1);
 }
 }

 //End of function cycle tab

 //function expand is for expanding&compressing li elements when it's get clciked(Full page Desktop version)
 // expand(item) {
 // if(item=="in_detail"){

 // this.isOpen=!this.isOpen;
 // for(let i=0;i<9;i++){
 // this.expand(this.items[i]);
 // }
 // }
 // if(item =="temp"){
 // this.isOpened0 = !this.isOpened0;
 // if (this.isOpened0 == true) {
 // this.dispSec0 = 'block';
 // }
 // else {
 // this.dispSec0 = 'none';
 // }
 // }
 // else if(item =="host"){
 // this.isOpened1 = !this.isOpened1;
 // if (this.isOpened1 == true) {
 // this.dispSec1 = 'block';
 // }
 // else {
 // this.dispSec1 = 'none';
 // }
 // }
 // else if(item =="chart"){
 // this.isOpened2 = !this.isOpened2;
 // if (this.isOpened2 == true) {
 // this.dispSec2 = 'block';
 // }
 // else {
 // this.dispSec2 = 'none';
 // }
 // }
 // else if(item =="cust"){
 // this.isOpened3 = !this.isOpened3;
 // if (this.isOpened3 == true) {
 // this.dispSec3 = 'block';
 // }
 // else {
 // this.dispSec3 = 'none';
 // }
 // }
 // else if(item =="int"){
 // this.isOpened4 = !this.isOpened4;
 // if (this.isOpened4 == true) {
 // this.dispSec4 = 'block';
 // }
 // else {
 // this.dispSec4 = 'none';
 // }
 // }
 // else if(item =="formula"){
 // this.isOpened5 = !this.isOpened5;
 // if (this.isOpened5 == true) {
 // this.dispSec5 = 'block';
 // }
 // else {
 // this.dispSec5 = 'none';
 // }
 // }
 // else if(item =="analytic"){
 // this.isOpened6 = !this.isOpened6;
 // if (this.isOpened6 == true) {
 // this.dispSec6 = 'block';
 // }
 // else {
 // this.dispSec6 = 'none';
 // }
 // }
 // else if(item =="af"){
 // this.isOpened7 = !this.isOpened7;
 // if (this.isOpened7 == true) {
 // this.dispSec7 = 'block';
 // }
 // else {
 // this.dispSec7 = 'none';
 // }
 // }
 // else if(item =="support"){
 // this.isOpened8 = !this.isOpened8;
 // if (this.isOpened8 == true) {
 // this.dispSec8 = 'block';
 // }
 // else {
 // this.dispSec8 = 'none';
 // }
 // }
 


 // }//End of expand function for Desktop version

 //Function SmallShow is for when we get clciked show more and show less items in mobile version
 // smallShow(item){
 // if(item=="freelancer"){
 // this.isSmallOpen0=!this.isSmallOpen0;
 // if(this.isSmallOpen0==true){
 // this.isSmallDetail0='block';
 // this.show0="Show Less";
 // this.add_remove0="remove";
 // }
 // else{
 // this.isSmallDetail0='none';
 // this.show0="Show More";
 // this.add_remove0="add";
 // }
 // }
 // else if(item=="essential"){
 // this.isSmallOpen1=!this.isSmallOpen1;
 // if(this.isSmallOpen1==true){
 // this.isSmallDetail1='block';
 // this.show1="Show Less";
 // this.add_remove1="remove";
 // }
 // else{
 // this.isSmallDetail1='none';
 // this.show1="Show More";
 // this.add_remove1="add";
 // }
 // }
 // else if(item=="business"){

 // this.isSmallOpen2=!this.isSmallOpen2;
 // if(this.isSmallOpen2==true){
 // this.isSmallDetail2='block';
 // this.show2="Show Less";
 // this.add_remove2="remove";
 
 // }
 // else{
 // this.isSmallDetail2='none';
 // this.show2="Show More";
 // this.add_remove2="add";
 // }
 // }
 // }//End of smallShow Function



}
