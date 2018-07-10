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
  constructor(private calcService:CalcService,title:Title) {
    title.setTitle('Interactive Quizzes | Outgrow');
   }

  ngOnInit() {
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
