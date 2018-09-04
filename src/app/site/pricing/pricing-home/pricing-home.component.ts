import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PricingService } from '../../../shared/services/pricing.service';
import { ApiRequestService } from '../../../shared/services/api-request.service';
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
    active = document.querySelector('.pricing');
    activeHeader="";
    href="";
    text:any;
    pricingToggle = [];

    pricingToggle_res = [];
    load = document.querySelector('.preloader');
    header = document.querySelector('.navbar-fixed-top');
    footer = document.querySelector('.footer-14');
    expandDesc: number;
    openClassActive: any;

    constructor(public title: Title,
        public pricingService: PricingService,
        public apiRequestService: ApiRequestService) {
        title.setTitle("Pricing | Outgrow");
        this.planTypes = this.pricingService.planTypes;
        this.annualPlans = this.pricingService.annualPlans;
        this.monthlyPlans = this.pricingService.monthlyPlans;
    }

    ngOnInit() {
        this.load.classList.add('hide');
        this.header.classList.remove('hide');
        this.footer.classList.remove('hide');

        this.href = this.apiRequestService.gethref();
        if (this.href == "pricing") {
            this.active.classList.add('active')
        }
    
        this.planTab('annual');
        jQuery(document).ready(function() {

        jQuery('.toggle-more').click(function(event){
            var $target = jQuery(event.target);
            var d = jQuery(this).children("i").html();
            if(d === 'add'){
                jQuery(this).children("i").html('remove');
                jQuery(this).children("p").html('show less');
            }
            else{
                jQuery(this).children("i").html('add');
                jQuery(this).children("p").html('show more');
            }
            jQuery(this).parents('.pricing-bottom').toggleClass('open');
            $target.closest(".pricing-bottom").find(".features").slideToggle();  
        });
        
        
        jQuery('li').click(function() {
            jQuery(this).addClass('active').siblings().removeClass('active'); 
        });
        jQuery('.expand-all').click( function(event){
            if(jQuery(this).hasClass('open')){
                jQuery('.expand').removeClass('open');
                jQuery(".detail").slideUp("slow");
            }
            else{
                jQuery('.expand').addClass('open');
                jQuery(".detail").slideToggle();
            }
            jQuery(this).toggleClass('open');
        });

        jQuery(".expand").click( function(event) {
            jQuery(this).toggleClass('open');
            jQuery(this).parents('.expand').find('.detail').slideToggle();
        });
    
        jQuery(".expand-rs").click( function(event) {
            // jQuery(this).parents('.expand').toggleClass('open');
            // jQuery(this).parents('.expand').find('.detail').slideToggle();
            
            var $target = jQuery(event.target);
            jQuery(this).toggleClass('open');
            // jQuery(this).parents('.expand').toggleClass('open');
            jQuery(this).children(".detail").slideToggle();
    
            //jQuery('.expand .expand-child > .detail').slideToggle();
        });  
        
        
   
       jQuery('a.toggle-dots-white').click(function(e) {
           jQuery(this).parent().find('.billing-grey-bottom').slideToggle('slow');
           jQuery(this).toggleClass('sliding');
           if (jQuery(this).hasClass("sliding")) {
               jQuery('a.toggle-dots-white p').html('Less info');
               jQuery('a.toggle-dots-white i').html('keyboard_arrow_up');
           } else {
               jQuery('a.toggle-dots-white p').html('More info');
               jQuery('a.toggle-dots-white i').html('keyboard_arrow_down');
           }
       });
       jQuery('a.toggle-dots-grey').click(function(e) {
           jQuery(this).parent().find('.billing-white-bottom').slideToggle('slow');
           jQuery(this).toggleClass('slidings');
           if (jQuery(this).hasClass("slidings")) {
               jQuery('a.toggle-dots-grey p').html('Less info');
               jQuery('a.toggle-dots-grey i').html('keyboard_arrow_up');
           } else {
               jQuery('a.toggle-dots-grey p').html('More info');
               jQuery('a.toggle-dots-grey i').html('keyboard_arrow_down');
           }
       });
       
    });
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

    triggerIntercom(){   
        setTimeout(()=>{
            let intercomTrigger = document.getElementsByClassName('intercom-launcher') as HTMLCollectionOf<HTMLElement>;

        // console.log(intercomTrigger)
        },8000) 
        
        // intercomTrigger.classList.add('intercom-launcher-active');
    }

}
