import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../../shared/service/calc.service';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';

@Component({
  selector: 'app-interactive-calculators-and-quizzes',
  templateUrl: './interactive-calculators-and-quizzes.component.html',
  styleUrls: ['./interactive-calculators-and-quizzes.component.css']
})
export class InteractiveCalculatorsAndQuizzesComponent implements OnInit {
  loader = document.querySelector('.preloader');
  constructor() { }

  
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
  ngOnInit() {
    this.loader.classList.add('hide');
  }

 
}
