import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
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
 active = document.querySelector('.interactive');
 activeHeader="";
 href="";
 text:any;

 constructor(router:Router, title:Title) {
 title.setTitle("Why Interactive Content ? | Outgrow");
 }

  ngOnInit() {
    this.load.classList.add('hide');
    this.header.classList.remove('hide');
    this.footer.classList.remove('hide');
    this.href = window.location.href;
    this.text=this.href.split('/');
    this.text.forEach(element => {
      if(element=="why-interactive"){
          this.active.classList.add('active')
      }
    });
   

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
