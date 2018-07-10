import { Component, OnInit } from '@angular/core';
import { VideoUrlService } from '../../../shared/service/video-url.service';

import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import  * as $ from 'jquery';
declare let jQuery: any;
declare let iFrameResize:any;
declare var window:any;
@Component({
  selector: 'app-examples-home',
  templateUrl: './examples-home.component.html',
  styleUrls: ['./examples-home.component.css']
})

export class ExamplesHomeComponent implements OnInit {
  public hiddenHeading ;
  public isActive0; isActive1; isActive2; isActive3; isActive4; isActive5;
  public isHeadingHide; isHideContent;
  public headingDescription;
  public items;gifs;
  public  sIndex: number = null;
  public  sIndex1: number = null;
  constructor(private videoURLService: VideoUrlService, router: Router, title: Title) {
    title.setTitle("Examples | Outgrow");

    this.isActive0 = true;
    this.isActive1 = false
    this.isActive2 = false;
    this.isActive3 = false;
    this.isActive4 = false;
    this.isActive5 = false;

    this.isHeadingHide = true;
    this.isHideContent = true;

  }
 public frame=document.getElementsByTagName('frame')
  ngOnInit() {
    console.log('----',this.frame)
    // new test();
    this.isHeadingHide = false;
    this.isHideContent = false;

    
    this.changeTab("Calculator");

    jQuery(document).ready(function(){
     
      });

      
    // jQuery(document).ready(function () {
     
    //    this.window.display = function (url) {
    //     jQuery('#og-iframe').attr('src',url);
    //     jQuery('#og-iframe').addClass('iframeHeight');
    //     this.calculateMinHeight();
        
    //     setTimeout(this.calculateMinHeight, 2000);
    //     }
  
    //   var iframes = iFrameResize({
    //         log: false,
    //         autoResize: true,
    //         enablePublicMethods: true,
    //         checkOrigin: false,
    //     },'#og-iframe');
    
    //     jQuery('.calc-links a').on('click',function(){
    //     jQuery('a').removeClass('active');
    //     jQuery(this).addClass('active');
    //   });
    //     jQuery('.og-iframe-res').each(function () {
    //         console.log('Examples og');
    //         if (jQuery(this).attr('data-calc')) {
    //             console.log('Examples og if');
    //             jQuery(this).attr('src', jQuery(this).attr('data-calc'));
    //             jQuery(this).attr('data-calc', '');
    //         }
    //     })
    //    this.window.runTimeout = function() {
    //       setTimeout(function () {
    //           jQuery('.content-loader').addClass('hide');   
    //       }, 5000);
    //   }
    // });

   
  }
  
  //function for service
  videoURL(type, frame) {
    if (type == 'a') {
      this.isActive0 = true;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    }
    else if (type == 'b') {
      this.isActive1 = true;
      this.isActive0 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    }
    else if (type == 'c') {
      this.isActive2 = true;
      this.isActive0 = false;
      this.isActive1 = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    }
    else if (type == 'd') {
      this.isActive3 = true;
      this.isActive0 = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive4 = false;
      this.isActive5 = false;
    }
    else if (type == 'e') {
      this.isActive4 = true;
      this.isActive0 = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive5 = false;
    }
    else if (type == 'f') {
      this.isActive5 = true;
      this.isActive0 = false;
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    }

    
    this.videoURLService.videoURL(type, frame);

  }//end of function videoUrl;

  ngAfterViewInit(){
    // frame=document.getElementById('')
    this.videoURLService.videoURL('a',this.frame);
  }
  // function for heading example:"there is a calculator for that"
  changeTab(tabName) {

    if (tabName == "Calculator") {
      this.hiddenHeading = "There is a Calculator for that!"
      this.items = [
        { name: 'Auto', id: 'Auto' },
        { name: 'Education', id: 'Education' },
        { name: 'Finance', id: 'Finance' },
        { name: 'Marketing & Advertising', id: 'MarketingAdvertising' },
        { name: 'Health & Fitness', id: 'HealthFitness' },
        { name: 'Legal', id: 'Legal' },
        { name: 'Quintessential', id: 'Quintessential' },
        { name: 'Real Estate & Construction', id: 'RealEstateConstruction' },
        { name: 'Technology', id: 'Technology' },
        { name: 'Travel', id: 'Travel' },
        { name: 'Publishing', id: 'Publishing' },
        { name: 'Trending', id: 'Trending' }
 
      ];
      this.gifs=[
        {
          url:'https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif',
          title:'NEW CAR VS USED CAR',
          description:'The Chicago',
          hRef:'https://premade.outgrow.us/New-Car-vs-Used-Car'
        }
      ];
      console.log("@@@@",this.items[0].id)
      this.shuffleCalcs(this.items[0].id,0)
    }

    else if (tabName == "OutcomeQuiz") {
      this.hiddenHeading = "There is an Outcome quiz for that"
      this.items = [
        { name: 'Auto', id: 'Auto' },
        { name: 'Education', id: 'Education' },
        { name: 'Health & Fitness', id: 'HealthFitness' },
        { name: 'Real Estate & Construction', id: 'RealEstateConstruction' },
        { name: 'Travel', id: 'Travel' },
        { name: 'TV and Entertainment', id: 'TVandEntertainment' },
        { name: 'Trending', id: 'Trending' }
       
      ];
      this.gifs=[
        {
          url:'https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif',
          title:'NEW CAR VS USED CAR',
          description:'The Chicago',
          hRef:'https://premade.outgrow.us/New-Car-vs-Used-Car'
        }
      ];
      console.log("@@@@",this.items[0].id)
      this.shuffleCalcs(this.items[0].id,0)      
    }

    else if (tabName == "GradedQuiz") {
      this.hiddenHeading = "There is a Graded quiz for that!"
      this.items = [
        { name: 'Auto', id: 'Auto' },
        { name: 'Marketing & Advertising', id: 'MarketingAdvertising' },
        { name: 'Health & Fitness', id: 'HealthFitness' },
        { name: 'Real Estate & Construction', id: 'RealEstateConstruction' },
        { name: 'Trending', id: 'Trending' }
      ];
      this.gifs=[
        {
          url:'https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif',
          title:'NEW CAR VS USED CAR',
          description:'The Chicago',
          hRef:'https://premade.outgrow.us/New-Car-vs-Used-Car'
        }
      ];
      console.log("@@@@",this.items[0].id)
      this.shuffleCalcs(this.items[0].id,0)      
    }

    else if (tabName == "Poll") {
      this.hiddenHeading = "There is a Poll for that!";
      this.items = [
        { name: 'Marketing & Advertising', id: 'MarketingAdvertising' },
        { name: 'Trending', id: 'Trending' }
      ];
      this.gifs=[
        {
          url:'https://dzvexx2x036l1.cloudfront.net/calc_images/find+out+your+digital+quotient.gif',
          title:'WHAT IS YOUR DIGITAL QUOTIENT?',
          description:'The Stockholm',
          hRef:'https://premade.outgrow.us/digital-quotient-quiz'
        }
      ];
      console.log("@@@@",this.items[0].id)
      this.shuffleCalcs(this.items[0].id,0)      
    }

  }

  //function to change auto education finance etc content;
  shuffleCalcs(item,i) {
    console.log("!!!!!!!",i)
    this.sIndex = i;
    if (item == "Auto") {
      this.headingDescription = ["Find out the downpayment amount you'll need to purchase your new home",
      "Find out which car suits you the best.",  
       "Answer 6 questions to find out whether you should buy or lease your next car.",
       "Calculate the monthly lease payment on your next car.",
        "Find out if you're ready to buy a car.",
        "Find out wheather you should buy a used card or a new one",
        "Find out how much monthly installment you'll be paying on your auto loan.",
        "How much extra monthly payment will you need to make to shorten your car loan term?",
 
      ]
      this.markAsActive(0);
    }
    else if (item == "Education") {
      this.headingDescription = [
        "Find out which major should you study.",
        "Answer 9 simple questions to find out which Ivy League college is best for you.",
        "Find out if your SAT or ACT scores are good enough to land you in Harvard.",
        "Use this calculator to calculate your budget as a full-time student.",
        "Find out how much is college really going to cost you."
        
        
        
      ]
      this.markAsActive(0);
    }
    else if (item == "Finance") {
      this.headingDescription = [
        "Find out when you will become a millionaire!",
        "Set your savings goal today and find out how much you need to invest every month to achieve that goal.",
        "How much money do you need if you want to retire?",
        "Calculate your monthly mortgage payment.",
        "Find out how long will you take to payoff your credit card.",
        "Calculate your monthly home budget and find how much you are saving each month.",
        "Find out how much balance will you have in your 401(k) at retirement.",
        
      ]
      this.markAsActive(0);
    }
    else if (item == "MarketingAdvertising") {
      this.headingDescription = [
        "Estimate the ROI of your current email marketing strategy.",
        "Find out how much you should spend on Paid Advertising.",
        "Take the poll on the top content marketing trends of 2018.",
        "Take this quiz to find out if you are a Facebook Marketing Expert.",
        "Find out how often you should be blogging and how much you stand to gain from it.",
        "Find out your Digital Quotient. ",
        "Find out whether you should go for a PPC agency or build an in-house team.",
        "Find out if your SEO knowledge stacks up against top the 150 marketers with this 12-question SEO quiz."
        
        
       
        
        
       
      ]
      this.markAsActive(0);
    }
    else if (item == "HealthFitness") {
      this.headingDescription = [
        "Find out which yoga practice will deliver the results you want and is best suited for your physical condition Get your recommended daily protein intake.",
        "Find your ideal bodyweight",
        "Find out if you know enough before jumping into your new fitness regime.",
        "Set your weight loss target and find out how much calories you need to reduce every day.",
        "FInd out the ideal number of calories you should be consuming every day.",
        "Find out which sport will be best suited for you.",
        "Find out if you are at risk of a heart attack or a stroke.",
       
      ]
      this.markAsActive(0);
    }
    else if (item == "Legal") {
      this.headingDescription = [
        "Get an estimate of your legal fees when you purchase a home.",
      ]
      this.markAsActive(0);
    }
    else if (item == "Quintessential") {
      this.headingDescription = [
        "Estimate the ROI you will get from using Outgrow.",
      ]
      this.markAsActive(0);
    }
    else if (item == "RealEstateConstruction") {
      this.headingDescription = [
        "Find out if you should buy or rent your next accomodation.",
        "Enter some details about your property and find out how much you will make by selling it.",
        "Find out how much you will need to shell out for your dream pool.",
        
        "Enter your details to find out the house value that fits within your budget.",
        "See how much it would cost you to rent instead of buying a house.",
        "Take this quiz to find out if you are ready to buy a house."
      ]
      this.markAsActive(0);
    }
    else if (item == "Technology") {
      this.headingDescription = [
        "Find out if your SaaS business is in a healthy condition.",
        "Find out how much your company can save with a payroll system.",
        "Get an estimate of how much you will need to build the app that you want."
      ]
      this.markAsActive(0);
    }
    else if (item == "Travel") {
      this.headingDescription = [
        "Get an estimate of how much it will cost you to climb Mount Everest.",
        "Find out which summer destination should you be heading out to.",
        "Get an estimate of how much you will save by staying in a hostel instead of a hotel for your next vacation."
      ]
      this.markAsActive(0);
    }
    else if (item == "Publishing") {
      this.headingDescription = [
        "Find out how much you know about global warming.",
        "Find out how likely are you to default on your student debt.",
        "Find out how much Trump tax plan will affect your tax bill."
      ]
      this.markAsActive(0);
    }
    else if (item == "TVandEntertainment") {
      this.headingDescription = [
        "Find out which Friends character are you most like."
      ]
      this.markAsActive(0);
    }
    else if (item == "Trending") {
      this.headingDescription = [
        "The 2018 Winter Olympics has been in the storm of controversies.",
        "Find out which one would you be! Find out the expat destination most suitable for you! There are 9 Best Picture nominations this year.",
        "Find out which of them are you likely to be! The Lunar New Year celebrations involve a lot of floral decorations.",
        "Find out which one suits you the best.",
        "Find out how posh you are compared to one of the wealthiest fictional characters of all time.",
        "Try out this quiz to refresh your knowledge of Women's issues.",
        "St. Patrick performed a whole host of #ThugLife miracles during his lifetime.",
        "Find out which one you'd be most likely to perform.",
        "Pi Day is an annual celebration of the mathematical constant π.",
        "And what better way to celebrate it than baking a pie that suits you the best.",
        "Thursday, March 22nd is the UN World Water Day.",
        "Take this quiz to find out whether your current water consumption is sustainable or not.",
        "Are you the speedy pup, or the narcissus pup, or the eternally stuck pup of the internet?",
        "Good Friday is on March 30th. And Twitter is as usual sprouting out Biblical jokes. Take this quiz to discover some of the finest ecclesiastical jokes ever.",
        "Easter is here, so let the great Easter egg hunt begin!",
        "The 1st of April is just around the corner. So take this quiz, gather your props, and get ready to play the best prank ever!",
        "Spielberg's next game-changing film, Ready Player One, is going to be in theatres this Thursday. Take this quiz to find out if you're as creative as the veteran mastermind.",
        "World Health Day is on the 7th of April. Take this quiz to find out how (un)healthy you are in your day-to-day life.",
        "Find out how long you'd survive if you'd gambled your way onto the Titanic, like Jack from James Cameron's 1997 film does.",
        "Take this quiz to find out if the time is right for your company to raise VC."
      ]
      this.markAsActive(0);
    }
  }// end of function ShuffleClas;

  markAsActive(i){
    this.sIndex1=i;
  }
 
//   calculateMinHeight = function() {
//     var a = screen.width / screen.height,
//         b = document.getElementById("og-iframe"),
//         c = b.clientWidth / a;
//     b.style.minHeight = c + "px";
//     b.style.height = c + "px";
// };
  
}
