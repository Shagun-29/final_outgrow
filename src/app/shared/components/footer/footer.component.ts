import { Component, OnInit } from '@angular/core';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
declare let jQuery: any;

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
    
    let footerShowAdjust = document.querySelector('.footer-social');
    this._cookieService.set('disableCookieDialog', 'true');
  //  let x =this.getCookie('disableCookieDialog');
    if(this._cookieService.get('disableCookieDialog')){
      this.isVisible=false;
      // this.showMsg();
      footerShowAdjust.classList.remove('footer-adjust');
    }

  //   let intercomTest = document.getElementsByClassName('intercom-launcher-frame') as HTMLCollectionOf<HTMLElement>;
  // let intercomTestPart = document.getElementsByClassName('intercom-launcher-discovery-frame') as HTMLCollectionOf<HTMLElement>;
  //   intercomTest[0].style.bottom="";
  //   intercomTestPart[0].style.bottom="";

  const timeout = setTimeout(() => clearInterval(interval), 30000);
  const intercomMessengerInterval = setInterval(() => {
      const iframe = document.querySelector('.intercom-messenger-frame');
      const launcherBadge = document.querySelector('.intercom-launcher-badge-frame');
      const cookieSection = document.querySelector('.section.sec-cookies');
      const intercomBorderlessFrame = document.querySelector('.intercom-borderless-frame');

      if (!cookieSection.classList.contains('hide')) {
          if (iframe) {
              jQuery('.intercom-messenger-frame').css('bottom', '160px');
          }
          if (launcherBadge) {
              jQuery('.intercom-launcher-badge-frame').css('bottom','134px');
          }
          if(intercomBorderlessFrame) {
              jQuery('.intercom-borderless-frame').css('bottom', '160px');
          }

      }
  }, 1000)
  const interval = setInterval(() => {
    console.log('testing');
    const cookieSection = document.querySelector('.section.sec-cookies');
    const iframe = document.querySelector('.intercom-launcher-discovery-frame');
    // if (iframe && !cookieSection.classList.contains('hide')) {
    //     // iframe.style.bottom = '90px';
    //     // document.querySelector('.intercom-launcher-frame').style.bottom = '90px'
    //     console.log('setting custom intercom css')
    //     clearInterval(interval)
    // }
}, 1000)

  }

  showMsg(){
  //   let intercomTest = document.getElementsByClassName('intercom-launcher-frame') as HTMLCollectionOf<HTMLElement>;
  // let intercomTestPart = document.getElementsByClassName('intercom-launcher-discovery-frame') as HTMLCollectionOf<HTMLElement>;
  
  //   let footerShowAdjust = document.querySelector('.footer-social');
    this.isVisible=false;
  //   footerShowAdjust.classList.remove('footer-adjust');
  //   intercomTest[0].style.bottom="";
  //   intercomTestPart[0].style.bottom="";

  jQuery('.section.sec-cookies').addClass('hide');
    // jQuery('.intercom-launcher-discovery-frame').removeClass('custom-intercom');
    // jQuery('.intercom-launcher-frame').removeClass('custom-intercom');
    // jQuery('.intercom-launcher-badge-frame').removeClass('custom-intercom');
    jQuery('.intercom-launcher-discovery-frame').removeAttr('style');
    jQuery('.intercom-launcher-frame').removeAttr('style');
    jQuery('.intercom-launcher-badge-frame').removeAttr('style');
    jQuery('.intercom-borderless-frame').removeAttr('style');
    jQuery('.intercom-messenger-frame').css('bottom', 'calc(20px + 80px)');

  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }
  
  // openIntercom(){
    // let intercom : any= document.getElementsByClassName("intercom-app-launcher-enabled")[0].querySelectorAll('div');

    // console.log("::Intercom::");
    // this.Intercom('show')
    // intercom[0].classList.add('intercom-launcher');
    // intercom[1].classList.add('intercom-gradient');
   

    // let intercomGradient = document.querySelector("intercom-gradient")
    // console.log(intercomGradient)
    // intercomGradient.classList.add('intercom-gradient-enter-done');
    // let intercomLauncher=document.querySelector("intercom-launcher")
    // console.log(intercomLauncher)
    // intercomLauncher.classList.add(' intercom-launcher-active');
  // }

  ngAfterViewInit(){
    setInterval(()=>{
      let intercom : any= document.querySelector('.intercom-launcher-frame');
      let intercomTest = document.getElementsByClassName('intercom-launcher-frame') as HTMLCollectionOf<HTMLElement>;
      let intercomTestPart = document.getElementsByClassName('intercom-launcher-discovery-frame') as HTMLCollectionOf<HTMLElement>;
      // let intercomTestPart2 = document.getElementsByClassName('intercom-messenger-frame-enter-done') as HTMLCollectionOf<HTMLElement>;

    if(intercom){
        if(this.isVisible){
          intercomTest[0].style.bottom="100px";
          intercomTestPart[0].style.bottom="95px";
          // intercomTestPart2[0].style.bottom="180px";
        }else{
          intercomTest[0].style.bottom="";
          intercomTestPart[0].style.bottom="";
          // intercomTestPart2[0].style.bottom="";
        }
      
    }else{
    } 
  },2000)
  }

  
}