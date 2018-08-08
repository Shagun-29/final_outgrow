import { Component, OnInit } from '@angular/core';
import  * as $ from 'jquery';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private _cookieService:CookieService) { }


  public disableCookieDialog='false';
  public isVisible=true;
  public loaded:any;
  ngOnInit() {
   
   let footerShow = document.querySelector('.footer-14');
   let footerShowAdjust = document.querySelector('.footer-social');
    footerShow.classList.add('hide');

    if(this._cookieService.get('disableCookieDialog')){
      this.loaded=true;
      console.log("----->>>>",this._cookieService.get('disableCookieDialog'))
      this.isVisible=false;
      footerShowAdjust.classList.remove('footer-adjust');
    }else{
      
      console.log("::else::")
      
      footerShowAdjust.classList.add('footer-adjust');
    }
    

    $(document).ready(function(){
        $(".icon-close").click(function() {
          $('body').removeClass('footer-cookies');
          });
          //  $(".btn-understand").click(function(){
          //   // this._cookieService.put('test', 'true');
          //   $(".sec-cookies").hide();
          //   }); $(".btn-understand").click(function(){
          //   // this._cookieService.put('test', 'true');
          //   $(".sec-cookies").hide();
          //   });
  
      });

    
  }

  saveCookie(){
    let footerShowAdjust = document.querySelector('.footer-social');
    this._cookieService.set('disableCookieDialog', 'true');
  //  let x =this.getCookie('disableCookieDialog');
    if(this._cookieService.get('disableCookieDialog')){
      this.isVisible=false;
      // this.showMsg();
      footerShowAdjust.classList.remove('footer-adjust');
    }
  }

  showMsg(){
    let footerShowAdjust = document.querySelector('.footer-social');
    this.isVisible=false;
    footerShowAdjust.classList.remove('footer-adjust');

  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  // ngAfterViewInit(){
  //   setTimeout(()=>{
  //     let intercom = document.querySelector('.intercom-launcher-frame');
  //   if(intercom){
  //       if(this._cookieService.get('disableCookieDialog')){
  //         console.log("inntercom is loaded and cookies is found")
  //         // intercom.classList.remove('hide');
  //       }else{
          
  //         console.log("inntercom is loaded and cookies is nnot found")
  //         intercom.classList.add('intercom-margin');
         
  //       }
  //       console.log("intercom loaded")
      
  //   }else{
  //     console.log("intercom not loaded")
      
  //   } 
  // },6000)
  // }
}