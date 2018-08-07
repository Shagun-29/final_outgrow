import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import  * as $ from 'jquery';
import { Router } from '../../../../../node_modules/@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public href: string = "";
  url: string = "";
  text=[];
  activeHeader="";
  collapse: boolean = true;
  emailId:any;
  constructor(private titleService: Title,private router:Router) {
    
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
  $('.navbar-collapse ul li a').on('click', function () {
   $('.params').removeClass('active');
   $(this).addClass('active');
});
  });
 
}
  fadeOut(){
    $('#toogle-menu').trigger('click');
  }

  putEmailId(email:any){
    this.emailId = email;
    console.log("------- Email ID entered --------",email);
    window.location.href="https://app.outgrow.co/signup/?email="+this.emailId;

  }
}
