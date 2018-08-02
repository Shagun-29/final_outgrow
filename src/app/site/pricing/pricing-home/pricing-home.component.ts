import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PricingService } from '../../../shared/services/pricing.service';
declare let jQuery: any;

@Component({
    selector: 'app-pricing-home',
    templateUrl: './pricing-home.component.html',
    styleUrls: ['./pricing-home.component.css']
})
export class PricingHomeComponent implements OnInit {
    activePlanIndex: any = 0;
    planTypes: Array<Object>;
    annualPlans: Array<Object>;
    monthlyPlans: Array<Object>;
    annualActive: boolean = true;
    expandaleRow: any;
    slideFreelancer: boolean = true;
    slideEssentials: boolean = true;
    slideBusiness: boolean = true;
    slideFreelancerQuiz: boolean = true;

    pricingToggle = [];

    pricingToggle_res = [];
    load = document.querySelector('.preloader');
    header = document.querySelector('.navbar-fixed-top');
    footer = document.querySelector('.footer-14');
    expandDesc: number;
    openClassActive: any;

    constructor(public title: Title,
        public pricingService: PricingService) {
        title.setTitle("Pricing | Outgrow");
        this.planTypes = this.pricingService.planTypes;
        this.annualPlans = this.pricingService.annualPlans;
        this.monthlyPlans = this.pricingService.monthlyPlans;
    }

    ngOnInit() {
        this.load.classList.add('hide');
        this.header.classList.remove('hide');
        this.footer.classList.remove('hide');
        
        this.planTab('annual');
    }

    runQueries(ind) { 
        jQuery(`#sliding${ind}`).find('.detail').slideToggle();
    }

    planTab(planType, index = 0) {
        this.activePlanIndex = index;
        if (planType == 'annual') {
            this.annualActive = true;
        } else {
            this.annualActive = false;
        }
    }

    //responsiveness functions startss
    togglePlan(planType) {
        this.pricingToggle_res && this.pricingToggle_res.splice(0, this.pricingToggle_res.length);
        if (planType == 'freelancer') {
            this.slideFreelancer = !this.slideFreelancer
        } else if (planType == 'essentials') {
            this.slideEssentials = !this.slideEssentials
        } else if (planType == 'business') {
            this.slideBusiness = !this.slideBusiness
        } else if (planType == 'freelancerQuiz') {
            this.slideFreelancerQuiz = !this.slideFreelancerQuiz
        }
    }

}
