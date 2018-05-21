import { Component, OnInit } from '@angular/core';
import { VideoUrlService } from '../../../shared/service/video-url.service'

import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { element } from 'protractor';


@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.css']
})
export class IndexHomeComponent implements OnInit {
  public isActive0; isActive1; isActive2; isActive3; isActive4; isActive5;
   liveIf = 0;
   staticIf =0;
  // liveReviews:boolean = false;
  triggerLiveStaticReviews () {
    var url = 'https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652';
    var live = document.querySelector('#liveReviews');
    var static1= document.querySelector('#staticReviews');
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
      console.log('Ready state changed');
      if (this.status == 200) {
        this.liveIf=1
        console.log("LIVE REVIEWS",this.liveIf)
      }
      else {
        // this.liveIf=0;
        this.staticIf=1;
        console.log("STATIC REVIEWS",this.staticIf)
      }
    }.bind(this);
    xhr.open("GET", url, true);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.send();
  }
  
  constructor(private videoURLService:VideoUrlService,title:Title) { 
    
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
    var gridJS = document.createElement('script')
    gridJS.src = 'https://repuso.com/widgets/grid.js';
    this.triggerLiveStaticReviews();
		// gridJS.src = 'https://repuso.com/widgets/grid.js';
    // await gridJS.onload;
		// var head = document.querySelector('body');
    // head.appendChild(gridJS);
   // await this.scriptService.load('repuso');
    
  //   var live = document.querySelector('#liveReviews');
	// 	var static1 = document.querySelector('#staticReviews');
  //   console.log("::Entry Point::")
  //  this.http.get('https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652')
  //  .subscribe(result=>{
      //this.liveReviews = true;
  //   if (result.status == 200) {
  //     console.log("In If condition")
  //    live.classList.remove('hide'); //show
  //    static1.classList.add('hide');
  //  }
  //  else {
  //    static1.classList.remove('hide');
  //    live.classList.add('hide');
  //  }
  //  });
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
    console.log('Res');
    window.location.replace('#bfrVid')
		document.getElementsByClassName("video-img-inner-res")[0].innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/PmN_MY5kNrE?vq=hd720&amp;rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&amp;iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
		var xDiv = document.getElementById('video-main-rs');
		if (xDiv.style.height == '')
			xDiv.style.height = '460px';
		else
			xDiv.style.height = '';
}

changeHeightWeb1 () {
  console.log('Tab');
  window.location.replace('#bfrVid')
  document.getElementById("him1").innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/PmN_MY5kNrE?vq=hd720&amp;rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&amp;iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
  var xDiv = document.getElementById('video-main');

  if (xDiv.style.height == '')
    xDiv.style.height = '600px';
  else
    xDiv.style.height = '';
}

changeHeightWebXL () {
					console.log('Tab');
					window.location.replace('#bfrVid')
					document.getElementById("him1-xl").innerHTML = "<div class='embed-responsive embed-responsive-16by9'><iframe class='outgrow-video' src='https://www.youtube.com/embed/PmN_MY5kNrE?vq=hd720&amp;rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&amp;iv_load_policy=3' frameborder='0' allowfullscreen></iframe></div>";
					var xDiv = document.getElementById('video-main-xl');

					if (xDiv.style.height == '')
						xDiv.style.height = '1160px';
					else
						xDiv.style.height = '';
        }
        
 
}
