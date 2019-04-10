import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiRequestService } from '../../../shared/services/api-request.service';
import { VideoUrlService } from '../../../shared/service/video-url.service';
import { LoadingService } from '../../../shared/service/loading.service';
import * as _ from 'lodash';
import { Http } from '@angular/http';
declare let Swiper: any;

@Component({
  selector: 'app-examples-home',
  templateUrl: './examples-home.component.html',
  styleUrls: ['./examples-home.component.css']
})

export class ExamplesHomeComponent implements OnInit {
  public tabHeading;
  public sIndex: number = null;
  public sIndex1: number = null;
  load = document.querySelector('.preloader');
  header = document.querySelector('.navbar-fixed-top');
  footer = document.querySelector('.footer-14');

  examples = document.querySelector('.examples');
  interactive = document.querySelector('.interactive');
  pricing = document.querySelector('.pricing');
  features = document.querySelector('.features');
  iFrames: { name: string; media: string; url: string; }[];

  allCalcs: any;
  industries: any = [];
  calculators: any;
  finalCalculators: any;
  gif: any;
  loading: boolean;
  activeFrame: any;
  // iFrames: Array<Object>;
  frameUrl: any;
  public frame = document.getElementsByTagName('frame');
  href="";
  text:any;
  activeHeader="";
  public allPosts: Array<{title:string, picUrl:string, url:string}>=new Array();
  public trendingCalc: Array<{title:string, type:string, description:string, media:string, preview:string}>=new Array();
  public allIndustries=[];
  constructor(public videoURLService: VideoUrlService,
    public title: Title,
    public apiRequestService: ApiRequestService,
    public sanitizer: DomSanitizer,
    private router: Router,public loadingService: LoadingService,
    private https : Http
  ) {
    title.setTitle("Examples | Outgrow");
  }

  ngOnInit() {
    this.loading = true;
    this.load.classList.add('hide');
    this.header.classList.remove('hide');
    this.footer.classList.remove('hide');
    this.href = this.router.url;
    this.text=this.href.split('/');

    // if (this.text[this.text.length-1] == "examples") {
    //   this.examples.classList.add('active');
    //   if(this.pricing){
    //     this.pricing.classList.remove('active');  
    //   }
    //   if(this.features){
    //     this.features.classList.remove('active');
    //   }
    //   if(this.interactive){
    //     this.interactive.classList.remove('active');
    //   }
     
    // }
    this.iFrames = this.videoURLService.iFrames;
    this.videoURL(this.frame);

      // get blog posts
    let promise=new Promise((resolve,reject)=>{
      let apiURL="https://outgrow.co/blog/api/get_posts/";
      let results=[];
      this.https.get(apiURL)
      .toPromise()
      .then(
        res=>{
        results=res.json();
        for (var prop in results) {
          if(prop=="posts"){
            results[prop].forEach(element => {
              this.allPosts.push({title:element.title,picUrl:element.attachments[0].url,url: element.url});
            });
          }   
        } 
          resolve();
        },msg=>{
          reject();
        }
      )
    })

    // get trending calculators
    let promise2=new Promise((resolve,reject)=>{
      let apiURL="https://api.outgrow.co/api/v1/admin/getCalculators";
      let results=[];
      this.https.post(apiURL,true)
      .toPromise()
      .then(
        res=>{
        results=res.json();
        this.allIndustries=results['data']['industries'];
        for (var prop in results) {
          if(prop=="data"){
            results['data']['calculators'].forEach(element => {
              if(element['industry']=="Trending"){
                this.trendingCalc.push({title:element['title'], type:element['type'], description:element['description'], media:element['media'], preview:element['liveApp']['url']});
              }
            });
          }
        }
          resolve();
        },msg=>{
          reject();
        }
      )
    })

    // get Events
    let promise3=new Promise((resolve,reject)=>{
      let apiUrl="https://api.outgrow.co/api/v1/admin/getEventsByDate";
      let results=[];
      let header={
        'date': new Date().toISOString(),
        'operator': '$gte'
      }
      this.https.post(apiUrl,header)
      .toPromise()
      .then(
        res=>{
          results=res.json();
          let events=results['data']['events'];
          resolve();
        }
      )
    })

    setTimeout(() => {
      var swiper = new Swiper('.swiper-container-recentNews', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          //spaceBetween: 30,
          //slidesPerView: 3,
          centeredSlides: true,
          // autoplay: 2500,
          speed: 500,
          autoplayDisableOnInteraction: false
      });
  }, 4000);


  setTimeout(() => {
    var swiper = new Swiper('.swiper-container-blog', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        //spaceBetween: 30,
        //slidesPerView: 3,
        centeredSlides: true,
        // autoplay: 2500,
        speed: 500,
        autoplayDisableOnInteraction: false
    });
}, 4000);
    
  }

  ngAfterViewInit() {
    this.getAllCalculators();
  //   jQuery('#select-list').selectize({
  //     create: true,
  //     sortField: 'text',
  //     onChange: function (event) {
  //         // window.shuffleCalcs(event, false)
  //         console.log("---yeah------")
  //     }
  // });
  }

  getAllCalculators() {
    let data = {};
    this.apiRequestService.getAllCalculators(data).subscribe((response: any) => {
      response = response.json();
      this.allCalcs = response.data.calculators;
      this.typeOfCalculator('Calculator');
    })
  }

  typeOfCalculator(type: string) {
    // this.tabHeading = `There is a ${type} for that!`;
    this.industries.splice(0, this.industries.length); //to clear industries array on this function call
    this.calculators = this.allCalcs.filter(calc => {
      if (calc['type'] == type)
        return calc;
    });
    this.calculators.map(myCalc => {
      let data = {};
      for (let a in myCalc) {
        if (a == 'industry' || a == 'type') {
          data[a] = myCalc[a]
        }
      }
      data.hasOwnProperty('industry') && this.industries.push(data)
    });
    this.industries.sort(function (a, b) {
      var industryA = a.industry.toLowerCase(), industryB = b.industry.toLowerCase()
      if (industryA < industryB)
        return -1
      if (industryA > industryB)
        return 1
      return 0
    })
    this.industries = _.uniqBy(this.industries, 'industry');

    this.displayCalcs(type, this.industries[0]['industry']);
  }

  displayCalcs(type, industry, i = 0) {
    this.sIndex = i;
    this.finalCalculators = this.calculators.filter(calc => {
      if (calc['type'] == type && calc['industry'] == industry)
        return calc;
    });
    this.markAsActive(this.finalCalculators[0]);
  }

  markAsActive(calc, i = 0) {
    switch (calc.template) {
      case 'one-page-card-new':
        calc.layout = 'The Chicago';
        break;
      case 'one-page-card-oldresult':
        calc.layout = 'The Chicago';
        break;
      case 'one-page-card':
        calc.layout = 'The Chicago';
        break;
      case 'sound-cloud-new':
        calc.layout = 'The Londoner';
        break;
      case 'sound-cloud-v3':
        calc.layout = 'The Londoner';
        break;
      case 'sound-cloud':
        calc.layout = 'The Londoner';
        break;
      case 'inline-temp-new':
        calc.layout = 'The Greek';
        break;
      case 'inline-temp':
        calc.layout = 'The Greek';
        break;
      case 'experian':
        calc.layout = 'The Tokyo';
        break;
      case 'template-five':
        calc.layout = 'The Madrid';
        break;
      case 'template-five-oldresult':
        calc.layout = 'The Madrid';
        break;
      case 'template-six':
        calc.layout = 'The Stockholm';
        break;
      case 'template-eight':
        calc.layout = 'The Venice';
        break;
      default:
        calc.layout = 'Calculator ledu dude';
    }
    this.sIndex1 = i;
    this.gif = Object.assign({}, calc);
    this.loading = false;
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

  // get response calc
 
}
