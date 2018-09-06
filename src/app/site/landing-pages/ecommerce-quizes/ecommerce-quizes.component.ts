import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce-quizes',
  templateUrl: './ecommerce-quizes.component.html',
  styleUrls: ['./ecommerce-quizes.component.css']
})
export class EcommerceQuizesComponent implements OnInit {
  public url = "https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652";
  
  constructor() { }

  loader = document.querySelector('.preloader');
  ngOnInit() {
    let header = document.querySelector('.navbar-fixed-top');
    header.classList.add('show');
    let footer = document.querySelector('.footer-14');
    footer.classList.add('show');
    this.loader.classList.add('hide');
    this.triggerLiveStaticReviews();
  }

  triggerLiveStaticReviews() {

    var gridJS = document.createElement('script')
    gridJS.src = 'https://repuso.com/widgets/grid.js';


    var live = document.querySelector('#liveReviews');
    var static1 = document.querySelector('#staticReviews');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        live.classList.remove('hide');
        static1.classList.add('hide');
      } else {
        static1.classList.remove('hide');
        live.classList.add('hide');
      }
    };
    xhttp.open("GET", this.url, true);
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

}