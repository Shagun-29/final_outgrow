import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increase-roi',
  templateUrl: './increase-roi.component.html',
  styleUrls: ['./increase-roi.component.css','../../../../assets/css/allPage_minified.css']
})
export class IncreaseRoiComponent implements OnInit {
  liveIf = 0;
  staticIf =0;
 // liveReviews:boolean = false;
 triggerLiveStaticReviews () {
   var url = 'https://api.repuso.com/v1/widgets/posts/4406?callback=jQuery111205308389182797406_1512564953651&website_id=0&_=1512564953652';
   var live = document.querySelector('#liveReviews');
   var static1= document.querySelector('#staticReviews');
   var xhr = new XMLHttpRequest;
   xhr.onreadystatechange = function () {
     console.log('Ready state changed');
     if (this.status == 200) {
       this.liveIf=1
       console.log("LIVE REVIEWS",this.liveIf)
     }
     else {
       // this.liveIf=0;
       this.staticIf=1;
       console.log("STATIC REVIEWS",this.staticIf)
     }
   }.bind(this);
   xhr.open("GET", url, true);
   xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
   xhr.send();
 }
 
 public hiddenHeading ;
 public isActive0; isActive1; isActive2; isActive3; isActive4; isActive5;
 public isHeadingHide; isHideContent;
 public headingDescription;
 public items;gifs;
 public  sIndex: number = null;
 public  sIndex1: number = null;
  constructor() {
    this.isActive0 = true;
    this.isActive1 = false
    this.isActive2 = false;
    this.isActive3 = false;
    this.isActive4 = false;
    this.isActive5 = false;

    this.isHeadingHide = true;
   
   }
  ngOnInit() {
    var gridJS = document.createElement('script')
    gridJS.src = 'https://repuso.com/widgets/grid.js';
    this.triggerLiveStaticReviews();

    
    this.isHeadingHide = false;
    this.isHideContent = false;

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
      ];
      this.gifs=[
        {
          url:'https://dzvexx2x036l1.cloudfront.net/calc_images/new+car+vs+used+car.gif',
          title:'NEW CAR VS USED CAR',
          description:'The Chicago',
          hRef:'https://premade.outgrow.us/New-Car-vs-Used-Car'
        }
      ];
      console.log("@@@@",this.items[0].id);
      this.shuffleCalcs(this.items[0].id,0);


      //static and live reviews
      
   
  }
  
  
  

  //function to change auto education finance etc content;
  shuffleCalcs(item,i) {
    console.log("!!!!!!!",i)
    this.sIndex = i;
    if (item == "Auto") {
      this.headingDescription = ["Find out whether you should buy a used card or a new one.",
        "Answer 6 questions to find out whether you should buy or lease your next car.",
        "Find out if you're ready to buy a car.",
        "Find out how much monthly installment you'll be paying on your auto loan.",
        "Calculate the monthly lease payment on your next car.",
        "How much extra monthly payment will you need to make to shorten your car loan term?",
        "Find out the downpayment amount you'll need to purchase your new home.",
        "Find out which car suits you the best."
      ]
      this.markAsActive(0);
    }
    else if (item == "Education") {
      this.headingDescription = [
        "Answer 9 simple questions to find out which Ivy League college is best for you.",
        "Find out how much is college really going to cost you.",
        "Use this calculator to calculate your budget as a full-time student.",
        "Find out if your SAT or ACT scores are good enough to land you in Harvard.",
        "Find out which major should you study."
      ]
      this.markAsActive(0);
    }
    else if (item == "Finance") {
      this.headingDescription = [
        "Calculate your monthly mortgage payment.",
        "Calculate your monthly home budget and find how much you are saving each month.",
        "How much money do you need if you want to retire?",
        "Find out when you will become a millionaire!",
        "Set your savings goal today and find out how much you need to invest every month to achieve that goal.",
        "Find out how much balance will you have in your 401(k) at retirement.",
        "Find out how long will you take to payoff your credit card."
      ]
      this.markAsActive(0);
    }
    else if (item == "MarketingAdvertising") {
      this.headingDescription = [
        "Find out your Digital Quotient. ",
        "Find out if your SEO knowledge stacks up against top the 150 marketers with this 12-question SEO quiz.",
        "Find out whether you should go for a PPC agency or build an in-house team.",
        "Take this quiz to find out if you are a Facebook Marketing Expert.",
        "Find out how much you should spend on Paid Advertising.",
        "Estimate the ROI of your current email marketing strategy.",
        "Find out how often you should be blogging and how much you stand to gain from it.",
        "Take the poll on the top content marketing trends of 2018."
      ]
      this.markAsActive(0);
    }
    else if (item == "HealthFitness") {
      this.headingDescription = [
        "Find out which sport will be best suited for you.",
        "Set your weight loss target and find out how much calories you need to reduce every day.",
        "Find out if you know enough before jumping into your new fitness regime.",
        "FInd out the ideal number of calories you should be consuming every day.",
        "Find out if you are at risk of a heart attack or a stroke.",
        "Find out which yoga practice will deliver the results you want and is best suited for your physical condition Get your recommended daily protein intake.",
        "Find your ideal bodyweight"
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
        "Enter some details about your property and find out how much you will make by selling it.",
        "Find out how much you will need to shell out for your dream pool.",
        "Find out if you should buy or rent your next accomodation.",
        "Enter your details to find out the house value that fits within your budget.",
        "See how much it would cost you to rent instead of buying a house.",
        "Take this quiz to find out if you are ready to buy a house."
      ]
      this.markAsActive(0);
    }
    
  }// end of function ShuffleClas;

  markAsActive(i){
    this.sIndex1=i;
  }
  }


