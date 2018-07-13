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
  footer = document.querySelector('.section-14');
  constructor(private _cookieService:CookieService) { }


  public disableCookieDialog='false';
public isVisible=true;
  ngOnInit() {

    if(this._cookieService.get('disableCookieDialog')){
      this.isVisible=false;
    }
    this.footer.classList.add('hide');

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
    this._cookieService.set('disableCookieDialog', 'true');
  //  let x =this.getCookie('disableCookieDialog');
    if(this._cookieService.get('disableCookieDialog')){
      this.isVisible=false;
      // this.showMsg();
    }
  }

  showMsg(){
    this.isVisible=false;
  }

  getCookie(key: string){
    return this._cookieService.get('test');
  }
}
