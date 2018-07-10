import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import  * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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
  var header = document.querySelector('.navbar-fixed-top');
  header.classList.add('hide');

  $(document).ready(function(){
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){  
            $('.header1').addClass("sticky")
               }else{
                 $('.header1').removeClass("sticky");
               }
             
                        
  });
  $('.navbar ul li a').on('click', function () {
   $('.params').removeClass('active');
   $(this).addClass('active');
});
  });
 
}
  fadeOut(){
    $('#toogle-menu').trigger('click');
  }

}
