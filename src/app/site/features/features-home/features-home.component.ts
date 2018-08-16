import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
declare let Swiper: any;
@Component({
 selector: 'app-features-home',
 templateUrl: './features-home.component.html',
 styleUrls: ['./features-home.component.css']
})
export class FeaturesHomeComponent implements OnInit {


  isActive11: boolean;
  isActive10: boolean;
  isActive9: boolean;
  isActive8: boolean;
  isActiveSlide3: string;
  isActiveSlide2: string;isActive5: boolean;isActive4: boolean;isActive6: boolean;isActive7: boolean;isActive3: boolean;isActive2: boolean;isActiveSlide1: any;isActiveSlide: string;isActive0: boolean;isActive1: boolean;
  public f_slide1;f_slide2;f_slide3;f_slide4;
  public temp0;temp1;
  load = document.querySelector('.preloader');
  header = document.querySelector('.navbar-fixed-top');
 footer = document.querySelector('.footer-14');
 active = document.querySelector('.features');
 activeHeader="";
 href="";
 text:any;

  constructor(router:Router, title:Title) { 
    title.setTitle("Product Features | Outgrow");
  }

  ngOnInit() {
    this.load.classList.add('hide');
    this.header.classList.remove('hide');
    this.footer.classList.remove('hide');
    this.href = window.location.href;
    this.text=this.href.split('/');
    this.text.forEach(element => {
      if(element=="features"){
          this.active.classList.add('active')
      }
    });

    $(document).ready(function(){

    
     

    setTimeout(function() {

      var swipera = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        autoplayDisableOnInteraction: false
    });
    
    }, 1000);


});


    this.f_slide1="https://dzvexx2x036l1.cloudfront.net/f-slide1.jpg";
    this.f_slide2="https://dzvexx2x036l1.cloudfront.net/f-slide2.jpg";
    this.f_slide3="https://dzvexx2x036l1.cloudfront.net/slide1.jpg"
    this.f_slide4="https://dzvexx2x036l1.cloudfront.net/slide2.jpg"
    this.temp0=null;
    this.temp1=null;

    this.isActive0=true;
    this.isActive1=false;

    this.isActive2=true;
    this.isActive3=false;

    this.isActive4=true;
    this.isActive5=false;
    this.isActive6=false;
    this.isActive7=false;

    this.isActive8=true;

    this.isActiveSlide="https://dzvexx2x036l1.cloudfront.net/f-slide1.jpg";
    this.isActiveSlide1="https://dzvexx2x036l1.cloudfront.net/slide1.jpg";
    this.isActiveSlide2="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-01.jpg";
    this.isActiveSlide3="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-01.jpg";
  }
  imageShift(item){
    if(item=="a"){
      this.temp0=this.f_slide1;
      this.f_slide1=this.f_slide2;
      this.f_slide2=this.temp0;
    }
    else if(item=="b"){
      this.temp1=this.f_slide3;
      this.f_slide3=this.f_slide4;
      this.f_slide4=this.temp1;
    }
    
    
  }
}
