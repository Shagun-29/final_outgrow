import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../../shared/service/calc.service';
import { Title } from '@angular/platform-browser';
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
  
  constructor(router:Router, title:Title) {
    title.setTitle("Interactive calculators and quizes | Outgrow");
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
}
