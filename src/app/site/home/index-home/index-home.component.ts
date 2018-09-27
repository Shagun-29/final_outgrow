
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VideoUrlService } from '../../../shared/service/video-url.service'
import { Title, DomSanitizer } from '@angular/platform-browser';
import { LoadingService } from '../../../shared/service/loading.service';
import { ApiRequestService } from '../../../shared/services/api-request.service';
declare let jQuery: any;

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.css']
})
export class IndexHomeComponent implements OnInit {
  public url = "https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652";
  public frame = document.getElementsByTagName('frame');
  //  liveIf = 0;
  //  staticIf =0;
  // liveReviews:boolean = false;
  menu1 = document.querySelector('.interactive');
  menu2 = document.querySelector('.features');
  menu3 = document.querySelector('.pricing');
  menu4 = document.querySelector('.examples');
  active = document.querySelector('.home');
  activeHeader: any;
  href: any;
  text: any;
  emailId:any;


  iFrames: { name: string; media: string; url: string; }[];
  activeFrame: number;
  frameUrl: any;
  youtubeLink: any;
  clicked_rs_mob: boolean = false;
  clicked_rs: boolean = false;
  clicked: boolean = false;
  clicked_xl: boolean = false;
  clicked1_rs_mob: boolean = false;
  clicked1_rs: boolean = false;
  clicked1: boolean = false;
  clicked1_xl: boolean = false;
  youtubeLink1: any;



  triggerLiveStaticReviews() {

    var gridJS = document.createElement('script')
    gridJS.src = 'https://repuso.com/widgets/grid.js';
  

    var live = document.querySelector('#liveReviews');
    var static1 = document.querySelector('#staticReviews');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      // if (this.readyState == 4 && this.status == 200) {
        if(this.status == 200){
        live.classList.remove('hide');
        static1.classList.add('hide');
      } else {
        static1.classList.remove('hide');
        live.classList.add('hide');
      }
    };
    xhttp.open("GET", this.url, true);
    xhttp.send();

    var head = document.querySelector('head');
    head.appendChild(gridJS);

  }

  openTestimonial(site: any) {
    var fb1 = document.querySelector('.fb1');
    var capterra1 = document.querySelector('.capterra1');
    var google1 = document.querySelector('.google1');
    var g21 = document.querySelector('.g21');

    // for active classes in fb, capterra, google, g2

    var fbActive = document.querySelector('.fbActive');
    var capterraActive = document.querySelector('.capterraActive');
    var googleActive = document.querySelector('.googleActive');
    var g2Active = document.querySelector('.g2Active');

    fbActive.classList.remove('testactive');
    capterraActive.classList.remove('testactive');
    g2Active.classList.remove('testactive');
    googleActive.classList.remove('testactive')

    // ends

    if (site == 'fb') {
      fbActive.classList.add('testactive');

      fb1.classList.remove('testhide');
      capterra1.classList.add('testhide');
      google1.classList.add('testhide');
      g21.classList.add('testhide');

    } else if (site == "capterra") {
      capterraActive.classList.add('testactive');

      fb1.classList.add('testhide');
      capterra1.classList.remove('testhide');
      google1.classList.add('testhide');
      g21.classList.add('testhide');
    } else if (site == "g2") {
      g2Active.classList.add('testactive');

      fb1.classList.add('testhide');
      capterra1.classList.add('testhide');
      google1.classList.add('testhide');
      g21.classList.remove('testhide');
    } else if (site == "google") {
      googleActive.classList.add('testactive');

      fb1.classList.add('testhide');
      capterra1.classList.add('testhide');
      google1.classList.remove('testhide');
      g21.classList.add('testhide');
    }
  }

  putEmailId(email:any){
    this.emailId = email;
    window.location.href="https://app.outgrow.co/signup/?email="+this.emailId;

  }
  constructor(private videoURLService: VideoUrlService, title: Title, public loadingService: LoadingService, public sanitizer: DomSanitizer, public apiRequestService:ApiRequestService) {

    //   // var gridJS = document.createElement('script')
    title.setTitle("Interactive Calculators and Quizzes | Outgrow");
  }

  // var gridJS = document.createElement('script')
  ngOnInit() {
    let load = document.querySelector('.preloader');
    let header = document.querySelector('.navbar-fixed-top');
    let footer = document.querySelector('.footer-14');
    header.classList.remove('hide');
    footer.classList.remove('hide');
    load.classList.add('hide');
    this.href = this.apiRequestService.gethref();
    if (this.href == "") {
      this.menu1.classList.remove('active');
      this.menu2.classList.remove('active');
      this.menu3.classList.remove('active');
      this.menu4.classList.remove('active');
    }if(this.active){
      this.menu1.classList.remove('active');
      this.menu2.classList.remove('active');
      this.menu3.classList.remove('active');
      this.menu4.classList.remove('active');
    }

    this.loadingService.isLoading.next(false);
    this.triggerLiveStaticReviews();
    if(this.triggerLiveStaticReviews){
      console.log("-----------request fulfilled-----------");
    }else{
      console.log("-----------request denied-----------");
    }
    this.iFrames = this.videoURLService.iFrames;
    this.videoURL(this.frame);
  }

  videoURL(frame, index = 0) {
    this.activeFrame = index;
    this.frameUrl = this.iFrames[index]['url'];
    this.frameUrl = this.sanitize(this.frameUrl);
    this.videoURLService.resizeIframe(frame);
  }

  sanitize(frameUri) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(frameUri);
  }

  playFirstVideo(id) {
    this.clicked_rs_mob = false;
    this.clicked_rs = false;
    this.clicked = false;
    this.clicked_xl = false;

    this.clicked_rs_mob = (id == 'video-main-rs-mob') && true;
    this.clicked_rs = (id == 'video-main-rs') && true;
    this.clicked = (id == 'video-main') && true;
    this.clicked_xl = (id == 'video-main-xl') && true;
    var xDiv = document.getElementById(`${id}`);
    this.youtubeLink = this.sanitize('https://www.youtube.com/embed/PmN_MY5kNrE?vq=hd720&amp;rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&amp;iv_load_policy=3');
    id == 'video-main-rs-mob' && (xDiv.style.height == '' ? xDiv.style.height = '360px' : xDiv.style.height = '');
    id == 'video-main-rs' && (xDiv.style.height == '' ? xDiv.style.height = '460px' : xDiv.style.height = '');
    id == 'video-main' && (xDiv.style.height == '' ? xDiv.style.height = '574px' : xDiv.style.height = '');
    id == 'video-main-xl' && (xDiv.style.height == '' ? xDiv.style.height = '1160px' : xDiv.style.height = '');
  }

  playSecondVideo(id) {
    this.clicked1_rs_mob = false;
    this.clicked1_rs = false;
    this.clicked1 = false;
    this.clicked1_xl = false;

    this.clicked1_rs_mob = (id == 'video-main-rs-mob') && true;
    this.clicked1_rs = (id == 'video-main-rs') && true;
    this.clicked1 = (id == 'video-main') && true;
    this.clicked1_xl = (id == 'video-main-xl') && true;
    var xDiv = document.getElementById(`${id}`);
    this.youtubeLink1 = this.sanitize('https://www.youtube.com/embed/1Bkoqqp1lro?vq=hd720&rel=0&controls=0&showinfo=0;autoplay=1&iv_load_policy=3');
    id == 'video-main-rs-mob' && (xDiv.style.height == '' ? xDiv.style.height = '360px' : xDiv.style.height = '');
    id == 'video-main-rs' && (xDiv.style.height == '' ? xDiv.style.height = '460px' : xDiv.style.height = '');
    id == 'video-main' && (xDiv.style.height == '' ? xDiv.style.height = '574px' : xDiv.style.height = '');
    id == 'video-main-xl' && (xDiv.style.height == '' ? xDiv.style.height = '1160px' : xDiv.style.height = '');
  }

}

