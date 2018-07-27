
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VideoUrlService } from '../../../shared/service/video-url.service'

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { element } from 'protractor';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';
import  * as $ from 'jquery';
import { LoadingService } from '../../../shared/service/loading.service';
declare let jQuery: any;

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.css']
})
export class IndexHomeComponent implements OnInit {
  public isActive0; isActive1; isActive2; isActive3; isActive4; isActive5;
   public url="https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652";
   public frame=document.getElementsByTagName('frame');
  //  liveIf = 0;
  //  staticIf =0;
  // liveReviews:boolean = false;
  


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

  constructor(private videoURLService:VideoUrlService,title:Title,public loadingService:LoadingService) { 
    
    this.isActive0 = true;
    this.isActive1 = false
    this.isActive2 = false;
    this.isActive3 = false;
    this.isActive4 = false;
    this.isActive5 = false;
  //   // var gridJS = document.createElement('script')
      title.setTitle("Interactive Calculators and Quizzes | Outgrow");
   }
  
  // var gridJS = document.createElement('script')
  ngOnInit() {
   let load = document.querySelector('.preloader');
   let header = document.querySelector('.navbar-fixed-top');
   let footer = document.querySelector('.footer-14');
   header.classList.remove('hide');
   footer.classList.remove('hide');
    load.classList.add('hide');
    

    console.log('......')
      this.loadingService.isLoading.next(false);

    console.log(this.loadingService.isLoading)

    this.triggerLiveStaticReviews();

    // jQuery(document).ready(function() {
    //    window.display = function (url) {
    //   document.getElementById('og-iframe').src = url;
    //   jQuery('#og-iframe').addClass('iframeHeight');
    //   calculateMinHeight();
      
    //   setTimeout(calculateMinHeight, 2000);
    //   }
    // });
    
   }

  videoURL(type,frame){
    if (type == 'a') {
      this.isActive0 = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    }
    else if (type == 'b') {
      this.isActive1 = true;
      this.isActive0 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    }
    else if (type == 'c') {
      this.isActive2 = true;
      this.isActive0 = false;
      this.isActive1 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    }
    else if (type == 'd') {
      this.isActive3 = true;
      this.isActive0 = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    }
    else if (type == 'e') {
      this.isActive4 = true;
      this.isActive0 = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive5 = false;
    }
    else if (type == 'f') {
      this.isActive5 = true;
      this.isActive0 = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    }

    this.videoURLService.videoURL(type,frame);
  }


  changeHeightRes () {
    window.location.replace('#bfrVid')
    document.getElementsByClassName("video-img-inner-res")[0].innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/PmN_MY5kNrE?vq=hd720&amp;rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&amp;iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
    var xDiv = document.getElementById('video-main-rs');
    if (xDiv.style.height == '')
      xDiv.style.height = '460px';
    else
      xDiv.style.height = '';
}

changeHeightWeb1 () {
  window.location.replace('#bfrVid')
  document.getElementById("him1").innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/PmN_MY5kNrE?vq=hd720&amp;rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&amp;iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
  var xDiv = document.getElementById('video-main');

  if (xDiv.style.height == '')
    xDiv.style.height = '574px';
  else
    xDiv.style.height = '';
}

changeHeightWebXL () {
  
          window.location.replace('#bfrVid')
          document.getElementById("him1-xl").innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/PmN_MY5kNrE?vq=hd720&amp;rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&amp;iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
          var xDiv = document.getElementById('video-main-xl');

          if (xDiv.style.height == '')
            xDiv.style.height = '1160px';
          else
            xDiv.style.height = '';
        }
        
        ngAfterViewInit(){
              // frame=document.getElementById('')
             this.videoURLService.videoURL('a',this.frame);
            }

            changeHeightRes2 () {
              window.location.replace('#outgrow2')
              document.getElementsByClassName("video-img-inner-res2")[0].innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/1Bkoqqp1lro?vq=hd720&rel=0&controls=0&showinfo=0;autoplay=1&iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
              var xDiv = document.getElementById('video-main-rs');
              if (xDiv.style.height == '')
                xDiv.style.height = '460px';
              else
                xDiv.style.height = '';
          }
          
          changeHeightWeb2 () {
            window.location.replace('#outgrow2')
            document.getElementById("him2").innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/1Bkoqqp1lro?vq=hd720&rel=0&controls=0&showinfo=0;autoplay=1&iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
            var xDiv = document.getElementById('video-main');
          
            if (xDiv.style.height == '')
              xDiv.style.height = '574px';
            else
              xDiv.style.height = '';
          }
          
          changeHeightWebXL2 () {
            
                    window.location.replace('#outgrow2')
                    document.getElementById("him2-xl").innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/1Bkoqqp1lro?vq=hd720&rel=0&controls=0&showinfo=0;autoplay=1&iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
                    var xDiv = document.getElementById('video-main-xl2');
          
                    if (xDiv.style.height == '')
                      xDiv.style.height = '1160px';
                    else
                      xDiv.style.height = '';
                  }
                  
 
}

