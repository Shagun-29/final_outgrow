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
  constructor(router:Router, title:Title) { 
    title.setTitle("Product Features | Outgrow");
  }

  ngOnInit() {

    $(document).ready(function(){

    
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
});


    this.f_slide1="//dzvexx2x036l1.cloudfront.net/f-slide1.jpg";
    this.f_slide2="//dzvexx2x036l1.cloudfront.net/f-slide2.jpg";
    this.f_slide3="//dzvexx2x036l1.cloudfront.net/slide1.jpg"
    this.f_slide4="//dzvexx2x036l1.cloudfront.net/slide2.jpg"
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

    this.isActiveSlide="//dzvexx2x036l1.cloudfront.net/f-slide1.jpg";
    this.isActiveSlide1="//dzvexx2x036l1.cloudfront.net/slide1.jpg";
    this.isActiveSlide2="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-01.jpg";
    this.isActiveSlide3="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-01.jpg";
  }
  imageShift(item){
    if(item=="a"){
      console.log("1")
      this.temp0=this.f_slide1;
      this.f_slide1=this.f_slide2;
      this.f_slide2=this.temp0;
    }
    else if(item=="b"){
      console.log("2")
      this.temp1=this.f_slide3;
      this.f_slide3=this.f_slide4;
      this.f_slide4=this.temp1;
    }
    
    
  }

  mover(term,item){
    if(term=="first"){
      if(item=='a'){
        this.isActive0=true;
        this.isActive1=false;
        this.isActiveSlide="//dzvexx2x036l1.cloudfront.net/f-slide1.jpg"
      }
      else if(item=='b'){
        this.isActive1=true;
        this.isActive0=false;
        this.isActiveSlide="//dzvexx2x036l1.cloudfront.net/f-slide2.jpg"
      }
    }

    else if(term=="second"){
      if(item=='a'){
        this.isActive2=true;
        this.isActive3=false;
        this.isActiveSlide1="//dzvexx2x036l1.cloudfront.net/slide1.jpg"
      }
      else if(item=='b'){
        this.isActive3=true;
        this.isActive2=false;
        this.isActiveSlide1="//dzvexx2x036l1.cloudfront.net/slide2.jpg"
      }
    }

    else if(term=="third"){
      if(item=='a'){
        this.isActive4=true;
        this.isActive5=false;
        this.isActive6=false;
        this.isActive7=false;
        this.isActiveSlide2="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-01.jpg"
      }
      else if(item=='b'){
        this.isActive5=true;
        this.isActive4=false;
        this.isActive6=false;
        this.isActive7=false;
        this.isActiveSlide2="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-02.jpg"
      }
      else if(item=='c'){
        this.isActive6=true;
        this.isActive4=false;
        this.isActive5=false;
        this.isActive7=false;
        this.isActiveSlide2="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-03.jpg"
      }
      else if(item=='d'){
        this.isActive7=true;
        this.isActive4=false;
        this.isActive5=false;
        this.isActive6=false;
        this.isActiveSlide2="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-04.jpg"
      }
    }

    else if(term=="fourth"){
      if(item=='a'){
        this.isActive8=true;
        this.isActive9=false;
        this.isActive10=false;
        this.isActive11=false;
        this.isActiveSlide3="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-01.jpg"
      }
      else if(item=='b'){
        this.isActive9=true;
        this.isActive8=false;
        this.isActive10=false;
        this.isActive11=false;
        this.isActiveSlide3="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-02.jpg"
      }
      else if(item=='c'){
        this.isActive10=true;
        this.isActive8=false;
        this.isActive9=false;
        this.isActive11=false;
        this.isActiveSlide3="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-03.jpg"
      }
      else if(item=='d'){
        this.isActive11=true;
        this.isActive8=false;
        this.isActive9=false;
        this.isActive10=false;
        this.isActiveSlide3="https://dzvexx2x036l1.cloudfront.net/features-graphsCharts-04.jpg"
      }
    }
  }
}
