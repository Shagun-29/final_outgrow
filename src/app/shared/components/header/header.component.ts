import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../../assets/css/allPage_minified.css','../../../../assets/css/animations.css','../../../../assets/css/custom-sa.css','../../../../assets/css/sahil-hover.css','../../../../assets/css/home-responsive.css','../../../../assets/css/useCase.css','../../../../assets/css/animated-masonry-gallery.css','../../../../assets/css/useCase-responsive.css']
})
export class HeaderComponent implements OnInit {

  collapse: boolean = true;
  constructor(private titleService: Title) {
    
   }
   public setTitle0(){
    this.titleService.setTitle("Interactive Calculators and Quizzes | Outgrow")
  }
   public setTitle1(){
     this.titleService.setTitle("Why Interactive Content ? | Outgrow")
   }
   public setTitle2(){
    this.titleService.setTitle("Product Features | Outgrow")
  }
  public setTitle3(){
    this.titleService.setTitle("Pricing | Outgrow")
  }
  public setTitle4(){
    this.titleService.setTitle("Examples | Outgrow")
  }
  
  ngOnInit() {
  }

}
