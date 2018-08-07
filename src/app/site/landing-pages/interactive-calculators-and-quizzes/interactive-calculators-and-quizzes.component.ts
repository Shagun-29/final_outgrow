import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../../shared/service/calc.service';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-interactive-calculators-and-quizzes',
  templateUrl: './interactive-calculators-and-quizzes.component.html',
  styleUrls: ['./interactive-calculators-and-quizzes.component.css']
})
export class InteractiveCalculatorsAndQuizzesComponent implements OnInit {
  loader = document.querySelector('.preloader');
  public url="https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652";
  youtubeLink: any;
  clicked: boolean = false;
  clicked_rs_mob: boolean = false;
  clicked_rs: boolean = false;
  clicked_xl: boolean = false;

  constructor(router:Router, title:Title,public sanitizer: DomSanitizer) {
    title.setTitle("Interactive calculators and quizes | Outgrow");
   }

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
  ngOnInit() {
    this.loader.classList.add('hide');
    this.triggerLiveStaticReviews();
  }

  href="//app.outgrow.co/signup/?email="
  putEmailId(email){
    window.location.href="https://app.outgrow.co/signup/?email="+email;
  }

  openTestimonial(site:any){
    var fb1= document.querySelector('.fb1');
    var capterra1= document.querySelector('.capterra1');
    var google1= document.querySelector('.google1');
    var g21= document.querySelector('.g21');

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
   
    if(site == 'fb'){
      fbActive.classList.add('testactive');

      fb1.classList.remove('testhide');
      capterra1.classList.add('testhide');
      google1.classList.add('testhide');      
      g21.classList.add('testhide');
      
    }else if(site == "capterra"){
      capterraActive.classList.add('testactive');

      fb1.classList.add('testhide');
      capterra1.classList.remove('testhide');
      google1.classList.add('testhide');      
      g21.classList.add('testhide');
    }else if(site == "g2"){
      g2Active.classList.add('testactive');

      fb1.classList.add('testhide');
      capterra1.classList.add('testhide');
      google1.classList.add('testhide');      
      g21.classList.remove('testhide');
    }else if(site == "google"){
      googleActive.classList.add('testactive');
      
      fb1.classList.add('testhide');
      capterra1.classList.add('testhide');
      google1.classList.remove('testhide');      
      g21.classList.add('testhide');
    }
  }

  playFirstVideo(id) {
    this.clicked_rs_mob = false;
    this.clicked_rs = false;
    this.clicked = false;
    this.clicked_xl = false;

    this.clicked_rs_mob = (id == 'video-main-rs-mob') && true;
    this.clicked_rs = (id == 'video-main-rs') && true;
    this.clicked = (id == 'video-main') && true;
    this.clicked_xl = (id == 'video-main-xl') && true;
    var xDiv = document.getElementById(`${id}`);
    this.youtubeLink = this.sanitize('https://www.youtube.com/embed/PmN_MY5kNrE?vq=hd720&amp;rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&amp;iv_load_policy=3');
    id == 'video-main-rs-mob' &&(xDiv.style.height == '' ? xDiv.style.height = '360px' : xDiv.style.height = '');
    id == 'video-main-rs' && (xDiv.style.height == '' ? xDiv.style.height = '460px' : xDiv.style.height = '');
    id == 'video-main' && (xDiv.style.height == '' ? xDiv.style.height = '574px' : xDiv.style.height = '');
    id == 'video-main-xl' && (xDiv.style.height == '' ? xDiv.style.height = '1160px' : xDiv.style.height = '');
  }
  sanitize(frameUri) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(frameUri);
  }

}
