import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import { ApiRequestService } from '../../../shared/services/api-request.service';
declare let Swiper: any;

@Component({
  selector: 'app-why-interactive-home',
  templateUrl: './why-interactive-home.component.html',
  styleUrls: ['./why-interactive-home.component.css']
})
export class WhyInteractiveHomeComponent implements OnInit {
  load = document.querySelector('.preloader');
  header = document.querySelector('.navbar-fixed-top');
 footer = document.querySelector('.footer-14');
 features = document.querySelector('.features');
 interactive = document.querySelector('.interactive');
  pricing = document.querySelector('.pricing');
  examples = document.querySelector('.examples');
 activeHeader="";
 href="";
 text:any;

 constructor(router:Router, title:Title, public apiRequestService:ApiRequestService) {
 title.setTitle("Why Interactive Content ? | Outgrow");
 }

  ngOnInit() {
    this.load.classList.add('hide');
    this.header.classList.remove('hide');
    this.footer.classList.remove('hide');
    this.href = this.apiRequestService.gethref();
    console.log("---------------------->",this.href)
    if (this.href == "why-interactive") {
      this.interactive.classList.add('active');
      if(this.examples){
        this.examples.classList.remove('active');  
      }
      if(this.features){
        this.features.classList.remove('active');
      }
      if(this.pricing){
        this.pricing.classList.remove('active');
      }
     
    }
   

    $(document).ready(function(){

    
      var swipera = new Swiper('.swiper-container-first', {
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
  }

}
