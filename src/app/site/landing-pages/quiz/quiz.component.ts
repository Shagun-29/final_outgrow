import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../../shared/service/calc.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  filteredObj: any;
  myId:String;
  public obj;objLength;
  loader = document.querySelector('.preloader');
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
  constructor(private calcService:CalcService,title:Title) {
    title.setTitle('Interactive Quizzes | Outgrow');
   }

  ngOnInit() {
    let header = document.querySelector('.navbar-fixed-top');
    header.classList.add('show');
    this.loader.classList.add('hide');
    this.shuffleCalcs('Auto');
    var gridJS = document.createElement('script')
    gridJS.src = 'https://repuso.com/widgets/grid.js';
    this.triggerLiveStaticReviews();
  }
  
 markAsActive = function (calcId) {
  console.log(calcId)
  this.myId=calcId;
   var currentActiveCalc = document.querySelector('#gallery-content-center li.active');
  //  currentActiveCalc.classList.remove('active');
   var tobeActiveCalc = document.querySelector('#' + calcId);
  //  tobeActiveCalc.classList.add('active');
   let calc = this.calcService.calcs.find(function (calc) {
       return calc.id === calcId
   });	
   console.log(calc)
   var premadeGif = document.getElementById('premade-gif');
   var premadePreview = document.getElementById('premade-preview-link');
   var premadeName = document.getElementById('premade-calc-name');
   var premadeLayout = document.getElementById('premade-calc-layout')
   // premadeGif.src = calc.GIF;
   document.getElementById('premade-gif').setAttribute( 'src', calc.GIF);
   // premadePreview.href = calc['Published Link'];
   document.getElementById('premade-preview-link').setAttribute( 'href', calc['Published Link']);
   premadeName.innerHTML = '<i class="material-icons">&#xE80E;</i>' + calc.Name;
   premadeLayout.innerHTML = '<strong>Layout:</strong> ' + calc.Layout
}





changeActiveCalcCategory = function (id) {
 var currentActiveCat = document.querySelector('#calc-cats li.active');
 currentActiveCat.classList.remove('active');
 var tobeActiveCat = document.querySelector('#' + id);
 tobeActiveCat.parentElement.classList.add('active')
}

shuffleCalcs = function (filterName) {
   this.changeActiveCalcCategory(filterName);
   console.log(this.calcService.calcs);
   this.objLength=this.calcService.calcs.length;
   this.obj=this.calcService.calcs;

   function filter_obj(item) {
       return (item.Industry === filterName && item.route==="quiz");
   }
   
    this.filteredObj = this.obj.filter(filter_obj);
   console.log(this.filteredObj)
   this.markAsActive(this.filteredObj[0].id); 
   
   
   
}




}
