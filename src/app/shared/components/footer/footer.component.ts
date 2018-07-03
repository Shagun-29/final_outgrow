import { Component, OnInit } from '@angular/core';
import  * as $ from 'jquery';
import { CookieService } from 'angular2-cookie/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _cookieService:CookieService) {
    
  }
public disableCookieDialog='false';
public isVisible=true;
  ngOnInit() {
    $(document).ready(function(){
        $(".icon-close").click(function(){
           $(".sec-cookies").hide();
           });
          //  $(".btn-understand").click(function(){
          //   // this._cookieService.put('test', 'true');
          //   $(".sec-cookies").hide();
          //   }); $(".btn-understand").click(function(){
          //   // this._cookieService.put('test', 'true');
          //   $(".sec-cookies").hide();
          //   });
  
      });

    if(this.getCookie('disableCookieDialog')){
      // console.log("====",x)
      this.isVisible=false;
    }
  }

  saveCookie(){
    this._cookieService.put('disableCookieDialog', 'true');
    // console.log("Set Test Cookie as Test");
   let x =this.getCookie('disableCookieDialog');
    if(x){
      console.log("====",x)
      this.isVisible=false;
    }
  }

  showMsg(){

    this.isVisible=true;
  }
  getCookie(key: string){
    return this._cookieService.get(key);
  }
}
