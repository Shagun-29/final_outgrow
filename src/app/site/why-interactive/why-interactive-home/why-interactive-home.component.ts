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

 constructor(router:Router, title:Title) {
 title.setTitle("Why Interactive Content ? | Outgrow");
 }

  ngOnInit() {
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
