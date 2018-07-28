import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ApiRequestService } from '../../../shared/services/api-request.service';
import { VideoUrlService } from '../../../shared/service/video-url.service';
import * as $ from 'jquery';
import * as _ from 'lodash';

declare let jQuery: any;
declare let iFrameResize: any;
declare var window: any;
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
  active = document.querySelector('.examples')
  allCalcs: any;
  industries: any = [];
  calculators: any;
  finalCalculators: any;
  gif: any;
  loading: boolean;
  activeFrame: any;
  iFrames: Array<Object>;
  public frame = document.getElementsByTagName('frame');
  href="";
  text:any;
  activeHeader="";

  constructor(private videoURLService: VideoUrlService, router: Router, title: Title, public apiRequestService: ApiRequestService) {
    title.setTitle("Examples | Outgrow");
    this.iFrames = [
      {
        name: 'calc1',
        media: 'https://dzvexx2x036l1.cloudfront.net/calc06.jpg',
      },
      {
        name: 'calc2',
        media: 'https://dzvexx2x036l1.cloudfront.net/calc01.jpg',
      },
      {
        name: 'calc3',
        media: 'https://dzvexx2x036l1.cloudfront.net/calc02.jpg',
      },
      {
        name: 'calc4',
        media: 'https://dzvexx2x036l1.cloudfront.net/calc03.jpg',
      },
      {
        name: 'calc5',
        media: 'https://dzvexx2x036l1.cloudfront.net/calc04.jpg',
      },
      {
        name: 'calc6',
        media: 'https://dzvexx2x036l1.cloudfront.net/calc05.jpg',
      }
    ]
  }

  ngOnInit() {
    this.loading = true;
    this.getAllCalculators();
    this.load.classList.add('hide');
    this.header.classList.remove('hide');
    this.footer.classList.remove('hide');
    this.href = window.location.href;
    console.log("---------------------->",this.href.split('/'));
    this.text=this.href.split('/');
    this.activeHeader=this.text[3];
    console.log('::Active Header::',this.activeHeader);
    if(this.activeHeader == "examples"){
      this.active.classList.add('active')
    }

  }

  ngAfterViewInit() {
    this.videoURL(this.frame, 'calc1');
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
    this.tabHeading = `There is a ${type} for that!`;
    this.industries.splice(0, this.industries.length); //to clear industries array on this function call
    this.calculators = this.allCalcs.filter(calc => {
      if (calc['type'] == type)
        return calc
    });
    for (let i = 0; i < this.calculators.length; i++) {
      let data = {};
      for (let a in this.calculators[i]) {
        if (a == 'industry' || a == 'type') {
          data[a] = this.calculators[i][a];
        }
      }
      data.hasOwnProperty('industry') && this.industries.push(data);
    }
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
        calc.layout = 'Chandu';
    }
    this.sIndex1 = i;
    this.gif = Object.assign({}, calc);
    this.loading = false;
  }

  videoURL(frame, name, index = 0) {
    this.activeFrame = index;
    this.videoURLService.videoURL(name, frame);
  }

}
