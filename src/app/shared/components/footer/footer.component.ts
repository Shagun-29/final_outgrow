import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private _cookieService:CookieService) { }


  public disableCookieDialog=false;
  public isVisible=true;
  public loaded:any;
  public intercomTest = document.getElementsByClassName('intercom-launcher-frame') as HTMLCollectionOf<HTMLElement>;
  public intercomTestPart = document.getElementsByClassName('intercom-launcher-discovery-frame') as HTMLCollectionOf<HTMLElement>;
  ngOnInit() {
   
   let footerShow = document.querySelector('.footer-14');
   let footerShowAdjust = document.querySelector('.footer-social');
    footerShow.classList.add('hide');

    if(this._cookieService.get('disableCookieDialog')){
      this.loaded=true;
      this.isVisible=false;
      footerShowAdjust.classList.remove('footer-adjust');
    }else{
      
      footerShowAdjust.classList.add('footer-adjust');
    }
    

  }

  saveCookie(){
    this.intercomTest[0].style.bottom="";
    this.intercomTestPart[0].style.bottom="";
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
    this.intercomTest[0].style.bottom="";
    this.intercomTestPart[0].style.bottom="";
  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  ngAfterViewInit(){
    setInterval(()=>{
      let intercom : any= document.querySelector('.intercom-launcher-frame');
    if(intercom){
        
        if(this.isVisible){
          this.intercomTest[0].style.bottom="95px";
          this.intercomTestPart[0].style.bottom="95px";
        }else{
          this.intercomTest[0].style.bottom="";
          this.intercomTestPart[0].style.bottom="95px";
        }
      
    }else{
    } 
  },0)
  }
}