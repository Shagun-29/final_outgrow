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

 // liveReviews:boolean = false;
 public url="https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652";

 triggerLiveStaticReviews () {
       
   var gridJS = document.createElement('script')
   gridJS.src = 'https://repuso.com/widgets/grid.js';

   
   var live = document.querySelector('#liveReviews');
   var static1 = document.querySelector('#staticReviews');
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
     live.classList.remove('hide');
     static1.classList.add('hide');
   }else {
     static1.classList.remove('hide');
     live.classList.add('hide');
   }
 };
 xhttp.open("GET",this.url, true);
 xhttp.send();

 var head = document.querySelector('head');
   head.appendChild(gridJS);

 }
 openTestimonial(site: any) {
  var fb1 = document.querySelector('.fb1');
  var capterra1 = document.querySelector('.capterra1');
  var google1 = document.querySelector('.google1');
  var g21 = document.querySelector('.g21');

  // for active classes in fb, capterra, google, g2

  var fbActive = document.querySelector('.fbActive');
  var capterraActive = document.querySelector('.capterraActive');
  var googleActive = document.querySelector('.googleActive');
  var g2Active = document.querySelector('.g2Active');

  fbActive.classList.remove('testactive');
  capterraActive.classList.remove('testactive');
  g2Active.classList.remove('testactive');
  googleActive.classList.remove('testactive')

  // ends

  if (site == 'fb') {
    fbActive.classList.add('testactive');
    fb1.classList.remove('testhide');
    capterra1.classList.add('testhide');
    google1.classList.add('testhide');
    g21.classList.add('testhide');
  } else if (site == "capterra") {
    capterraActive.classList.add('testactive');
    fb1.classList.add('testhide');
    capterra1.classList.remove('testhide');
    google1.classList.add('testhide');
    g21.classList.add('testhide');
  } else if (site == "g2") {
    g2Active.classList.add('testactive');
    fb1.classList.add('testhide');
    capterra1.classList.add('testhide');
    google1.classList.add('testhide');
    g21.classList.remove('testhide');
  } else if (site == "google") {
    googleActive.classList.add('testactive');
    fb1.classList.add('testhide');
    capterra1.classList.add('testhide');
    google1.classList.remove('testhide');
    g21.classList.add('testhide');
  }
}
 constructor(private router: Router, title:Title, public apiRequestService:ApiRequestService) {
 title.setTitle("Why Interactive Content ? | Outgrow");
 }

  ngOnInit() {
    this.load.classList.add('hide');
    this.header.classList.remove('hide');
    this.footer.classList.remove('hide');
    this.href = this.router.url;
    this.text=this.href.split('/');

    if (this.text[this.text.length-1] == "why-interactive") {
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
   
    var gridJS = document.createElement('script')
    gridJS.src = 'https://repuso.com/widgets/grid.js';
    this.triggerLiveStaticReviews();
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
