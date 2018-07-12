import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CalcService } from '../../../shared/service/calc.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  premadeNameIs:any;
  filteredObj: any;
  myId:String;
  public obj;objLength;
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
  constructor(private router: Router,private calcService:CalcService,title:Title) { 
    title.setTitle("Interactive, Business Calculators | Outgrow");
  }
  
  ngOnInit() {
    var gridJS = document.createElement('script')
    gridJS.src = 'https://repuso.com/widgets/grid.js';
    this.triggerLiveStaticReviews();

    this.shuffleCalcs('Auto');
    
  }
  openTestimonial(item){}
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
    //  var premadeName = document.getElementById('premade-calc-name');
     var premadeLayout = document.getElementById('premade-calc-layout')
     // premadeGif.src = calc.GIF;
     document.getElementById('premade-gif').setAttribute( 'src', calc.GIF);
     // premadePreview.href = calc['Published Link'];
     document.getElementById('premade-preview-link').setAttribute( 'href', calc['Published Link']);
    //  premadeName.innerHTML = '<i class="material-icons">&#xE80E;</i>' + calc.Name;
    this.premadeNameIs=calc.Name

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
         return (item.Industry === filterName && item.route==="calculator");
     }
     
      this.filteredObj = this.obj.filter(filter_obj);
     console.log(this.filteredObj)
     this.markAsActive(this.filteredObj[0].id); 
     
     
     
 }
 
 
  
}
