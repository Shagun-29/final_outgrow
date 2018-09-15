webpackJsonp(["common"],{

/***/ "./src/app/shared/service/video-url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoUrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoUrlService = /** @class */ (function () {
    function VideoUrlService() {
        this.iFrames = [
            {
                name: 'calc1',
                media: 'https://dzvexx2x036l1.cloudfront.net/calc06.jpg',
                url: 'https://website.outgrow.us/build-a-startup?vHeight=1'
            },
            {
                name: 'calc2',
                media: 'https://dzvexx2x036l1.cloudfront.net/calc01.jpg',
                url: 'https://website.outgrow.us/Which-engineering-major-is-right-for-you?vHeight=1'
            },
            {
                name: 'calc3',
                media: 'https://dzvexx2x036l1.cloudfront.net/calc02.jpg',
                url: 'https://website.outgrow.us/Cost-of-a-video-campaign-4?vHeight=1'
            },
            {
                name: 'calc4',
                media: 'https://dzvexx2x036l1.cloudfront.net/calc03.jpg',
                url: 'https://website.outgrow.us/What-is-your-risk-of-getting-a-heart-disease?vHeight=1'
            },
            {
                name: 'calc5',
                media: 'https://dzvexx2x036l1.cloudfront.net/calc04.jpg',
                url: 'https://website.outgrow.us/outgrow-roi?vHeight=1'
            },
            {
                name: 'calc6',
                media: 'https://dzvexx2x036l1.cloudfront.net/calc05.jpg',
                url: 'https://website.outgrow.us/build-an-app?vHeight=1'
            }
        ];
    }
    VideoUrlService.prototype.resizeIframe = function (frame) {
        jQuery('#og-iframe').addClass('iframeHeight');
        var iframes = iFrameResize({
            log: false,
            autoResize: true,
            enablePublicMethods: true,
            checkOrigin: false,
        }, '#og-iframe');
        setTimeout(function () {
            window.calculateMinHeight();
        }, 2000);
    };
    VideoUrlService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], VideoUrlService);
    return VideoUrlService;
}());



/***/ }),

/***/ "./src/app/shared/services/pricing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingService = /** @class */ (function () {
    function PricingService() {
        this.planTypes = [{
                id: 'annual',
                name: 'Annual',
                description: 'SAVE UPTO 44%'
            },
            {
                id: 'monthly',
                name: 'Monthly',
                description: ''
            }];
        this.annualPlans = [
            {
                id: 'annaulLeads',
                name: 'Leads',
                freelancerHead: '12,000 per year',
                freelancerDescription: 'Number of subsmissions of the lead generation form on Outgrow',
                essentialsHead: '90,000 per year',
                essentialsDescription: 'Number of subsmissions of the lead generation form on Outgrow',
                businessHead: '600,000 per year',
                businessDescription: 'Number of subsmissions of the lead generation form on Outgrow',
                freelancerQuizHead: '12,000 per year',
                freelancerQuizDescription: 'Number of subsmissions of the lead generation form on Outgrow',
                freelancerClass: 'quater',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'annualContentPiece',
                name: 'No. of Content Pieces',
                freelancerHead: '5',
                freelancerDescription: 'Number of calculators, quizzes, recommendations etc you can build.',
                essentialsHead: 'Unlimited',
                essentialsDescription: 'Number of calculators, quizzes, recommendations etc you can build.',
                businessHead: 'Unlimited',
                businessDescription: 'Number of calculators, quizzes, recommendations etc you can build.',
                freelancerQuizHead: '3',
                freelancerQuizDescription: 'Number of quizzes you can build.',
                freelancerClass: 'quater',
                essentialsClass: 'full',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'annualTemplates',
                name: 'Templates & Layouts ',
                freelancerHead: 'Basic Templates & Layout',
                freelancerDescription: 'Only the Classic "Chicago and Londoner" layout and templates.',
                essentialsHead: 'All Templates & Layouts',
                essentialsDescription: 'All layouts and templates are unlocked.',
                businessHead: 'All Templates & Layouts',
                businessDescription: 'All layouts and templates are unlocked.',
                freelancerQuizHead: 'Basic Templates & Layout',
                freelancerQuizDescription: 'Only the Classic "Chicago and Londoner" layout and templates.',
                freelancerClass: 'quater',
                essentialsClass: 'full',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'annualHosting',
                name: 'Hosting & Embedding',
                freelancerHead: 'Embed Anywhere',
                freelancerDescription: 'Experience hosted on Outgrow domain [yourcompany.outgrow.co] and can be embedded on any webpage.',
                essentialsHead: 'Embed Anywhere',
                essentialsDescription: 'Experience hosted on Outgrow domain [yourcompany.outgrow.co] and can be embedded on any webpage.',
                businessHead: 'Embed & Custom Domain',
                businessDescription: 'Experience hosted on your domain [yourcompany.com] and can be embedded on any webpage.',
                freelancerQuizHead: 'Embed Anywhere',
                freelancerQuizDescription: 'Experience hosted on Outgrow domain [yourcompany.outgrow.co] and can be embedded on any webpage.',
                freelancerClass: 'full',
                essentialsClass: 'full',
                businessClass: 'full',
                freelancerQuizClass: 'full',
            },
            {
                id: 'annualCharts',
                name: 'Charts & Graphs',
                freelancerHead: 'No Access',
                freelancerDescription: 'You do not have access to charts and graphs.',
                essentialsHead: 'No Access',
                essentialsDescription: 'You do not have access to charts and graphs.',
                businessHead: 'Full Access',
                businessDescription: 'Increase interactivity by adding charts, graphs and tables to your experiences.',
                freelancerQuizHead: 'No Access',
                freelancerQuizDescription: 'You do not have access to charts and graphs.',
                freelancerClass: 'none',
                essentialsClass: 'none',
                businessClass: 'full',
                freelancerQuizClass: 'none',
            },
            {
                id: 'annualCustomBranding',
                name: 'Custom Branding ',
                freelancerHead: 'Limited Access',
                freelancerDescription: 'You can add your own logo and use your brand’s colors. A small discreet Outgrow logo will appear.',
                essentialsHead: 'Standard Access',
                essentialsDescription: 'You can add your own logo and use your brand’s colors. A small discreet Outgrow logo will appear.',
                businessHead: 'Full Access',
                businessDescription: 'You can add your own logo and use your brand’s colors. A small discreet Outgrow logo will appear.',
                freelancerQuizHead: 'Limited Access',
                freelancerQuizDescription: 'You can add your own logo and use your brand’s colors. A small discreet Outgrow logo will appear.',
                freelancerClass: 'quater',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'annualIntegrations',
                name: 'Integrations',
                freelancerHead: 'Standard Integrations',
                freelancerDescription: 'You can sync users contact information using Zapier or over 17 native integrations with tools like Marketo, Salesforce, MailChimp, Aweber, Hubspot, GetResponse, Intercom, Sendlane, Drip, Slack etc.',
                essentialsHead: 'Standard Integrations',
                essentialsDescription: 'You can sync users contact information using Zapier or over 17 native integrations with tools like Marketo, Salesforce, MailChimp, Aweber, Hubspot, GetResponse, Intercom, Sendlane, Drip, Slack etc.',
                businessHead: 'Advanced Integrations',
                businessDescription: 'Send all lead data using direct integrations, Zapier as well as Webhooks and our highly versatile API.',
                freelancerQuizHead: 'Standard Integrations',
                freelancerQuizDescription: 'You can sync users contact information using Zapier or over 17 native integrations with tools like Marketo, Salesforce, MailChimp, Aweber, Hubspot, GetResponse, Intercom, Sendlane, Drip, Slack etc.',
                freelancerClass: 'half',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'half',
            },
            {
                id: 'annualFormula',
                name: 'Formula & Logic Jump',
                freelancerHead: 'Limited Access',
                freelancerDescription: 'You can use basic mathematical operators like +,-, x and /. Logic jump is not included.',
                essentialsHead: 'Full Access',
                essentialsDescription: 'You can use any mathematical (^, log etc) or logical (if then, average etc) operator as well as use visual logic jump [branching logic] to improve personalization.',
                businessHead: 'Full Access',
                businessDescription: 'You can use any mathematical (^, log etc) or logical (if then, average etc) operator as well as use visual logic jump [branching logic] to improve personalization.',
                freelancerQuizHead: 'Limited Access',
                freelancerQuizDescription: 'You can use basic mathematical operators like +,-, x and /. Logic jump is not included.',
                freelancerClass: 'quater',
                essentialsClass: 'full',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'annualAnalytics',
                name: 'Analytics & Tracking',
                freelancerHead: 'Standard Access',
                freelancerDescription: 'Traffic Details, Lead Data and User Responses. Can add Facebook and Google Analytics tracking codes.',
                essentialsHead: 'Standard Access',
                essentialsDescription: 'Traffic Details, Lead Data and User Responses. Can add Facebook and Google Analytics tracking codes.',
                businessHead: 'Advanced Access',
                businessDescription: 'Traffic Details, Lead Data, User Responses & Funnel Visualization. Can add all tracking codes.',
                freelancerQuizHead: 'Standard Access',
                freelancerQuizDescription: 'Traffic Details, Lead Data and User Responses. Can add Facebook and Google Analytics tracking codes.',
                freelancerClass: 'half',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'half',
            },
            {
                id: 'annualAdvanced',
                name: 'Advanced Features',
                freelancerHead: 'No Access',
                freelancerDescription: 'You do not have access to conditional messaging or advanced design customizations',
                essentialsHead: 'Limited Access',
                essentialsDescription: 'Access to conditional messaging.',
                businessHead: 'Advanced Access',
                businessDescription: 'Access to conditional messaging, email embeds, email validation, custom HTML/CSS/JS and custom notifications.',
                freelancerQuizHead: 'No Access',
                freelancerQuizDescription: 'You do not have access to conditional messaging or advanced design customizations',
                freelancerClass: 'none',
                essentialsClass: 'quater',
                businessClass: 'full',
                freelancerQuizClass: 'none',
            },
            {
                id: 'annualSupport',
                name: 'Support',
                freelancerHead: 'Support Docs',
                freelancerDescription: 'You will have access to support docs.',
                essentialsHead: 'Basic',
                essentialsDescription: 'You will have access to support docs as well as email support. We will try to answer all queries within 24-48 hours.',
                businessHead: 'Priority',
                businessDescription: 'You will have access to support docs, email support as well as live chat.',
                freelancerQuizHead: 'Support Docs',
                freelancerQuizDescription: 'You will have access to support docs.',
                freelancerClass: 'quater',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            }
        ];
        this.monthlyPlans = [
            {
                id: 'monthlyLeads',
                name: 'Leads',
                freelancerHead: '1,000 per month',
                freelancerDescription: 'Number of subsmissions of the lead generation form on Outgrow',
                essentialsHead: '7,500 per month',
                essentialsDescription: 'Number of subsmissions of the lead generation form on Outgrow',
                businessHead: '50,000 per month',
                businessDescription: 'Number of subsmissions of the lead generation form on Outgrow',
                freelancerQuizHead: '1,000 per month',
                freelancerQuizDescription: 'Number of subsmissions of the lead generation form on Outgrow',
                freelancerClass: 'quater',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'monthlyContentPieces',
                name: 'No. of Content Pieces',
                freelancerHead: '5',
                freelancerDescription: 'Number of calculators, quizzes, recommendations etc you can build.',
                essentialsHead: 'Unlimited',
                essentialsDescription: 'Number of calculators, quizzes, recommendations etc you can build.',
                businessHead: 'Unlimited',
                businessDescription: 'Number of calculators, quizzes, recommendations etc you can build.',
                freelancerQuizHead: '3',
                freelancerQuizDescription: 'Number of quizzes you can build.',
                freelancerClass: 'quater',
                essentialsClass: 'full',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'monthlyTemplates',
                name: 'Templates & Layouts ',
                freelancerHead: 'Basic Templates & Layout',
                freelancerDescription: 'Only the Classic "Chicago and Londoner" layout and templates.',
                essentialsHead: 'All Templates & Layouts',
                essentialsDescription: 'All layouts and templates are unlocked.',
                businessHead: 'All Templates & Layouts',
                businessDescription: 'All layouts and templates are unlocked.',
                freelancerQuizHead: 'Basic Templates & Layout',
                freelancerQuizDescription: 'Only the Classic "Chicago and Londoner" layout and templates.',
                freelancerClass: 'quater',
                essentialsClass: 'full',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'monthlyHoisting',
                name: 'Hosting & Embedding',
                freelancerHead: 'Embed Anywhere',
                freelancerDescription: 'Experience hosted on Outgrow domain [yourcompany.outgrow.co] and can be embedded on any webpage.',
                essentialsHead: 'Embed Anywhere',
                essentialsDescription: 'Experience hosted on Outgrow domain [yourcompany.outgrow.co] and can be embedded on any webpage.',
                businessHead: 'Embed & Custom Domain',
                businessDescription: 'Experience hosted on your domain [yourcompany.com] and can be embedded on any webpage.',
                freelancerQuizHead: 'Embed Anywhere',
                freelancerQuizDescription: 'Experience hosted on Outgrow domain [yourcompany.outgrow.co] and can be embedded on any webpage.',
                freelancerClass: 'full',
                essentialsClass: 'full',
                businessClass: 'full',
                freelancerQuizClass: 'full',
            },
            {
                id: 'monthlyCharts',
                name: 'Charts & Graphs',
                freelancerHead: 'No Access',
                freelancerDescription: 'You do not have access to charts and graphs.',
                essentialsHead: 'No Access',
                essentialsDescription: 'You do not have access to charts and graphs.',
                businessHead: 'Full Access',
                businessDescription: 'Increase interactivity by adding charts, graphs and tables to your experiences.',
                freelancerQuizHead: 'No Access',
                freelancerQuizDescription: 'You do not have access to charts and graphs.',
                freelancerClass: 'none',
                essentialsClass: 'none',
                businessClass: 'full',
                freelancerQuizClass: 'none',
            },
            {
                id: 'monthlyCustomBranding',
                name: 'Custom Branding ',
                freelancerHead: 'Limited Access',
                freelancerDescription: 'You can add your own logo and use your brand’s colors. A small discreet Outgrow logo will appear.',
                essentialsHead: 'Standard Access',
                essentialsDescription: 'You can add your own logo and use your brand’s colors. A small discreet Outgrow logo will appear.',
                businessHead: 'Full Access',
                businessDescription: 'You can add your own logo and use your brand’s colors. A small discreet Outgrow logo will appear.',
                freelancerQuizHead: 'Limited Access',
                freelancerQuizDescription: 'You can add your own logo and use your brand’s colors. A small discreet Outgrow logo will appear.',
                freelancerClass: 'quater',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'monthlyIntegrations',
                name: 'Integrations',
                freelancerHead: 'Standard Integrations',
                freelancerDescription: 'You can sync users contact information using Zapier or over 17 native integrations with tools like Marketo, Salesforce, MailChimp, Aweber, Hubspot, GetResponse, Intercom, Sendlane, Drip, Slack etc.',
                essentialsHead: 'Standard Integrations',
                essentialsDescription: 'You can sync users contact information using Zapier or over 17 native integrations with tools like Marketo, Salesforce, MailChimp, Aweber, Hubspot, GetResponse, Intercom, Sendlane, Drip, Slack etc.',
                businessHead: 'Advanced Integrations',
                businessDescription: 'Send all lead data using direct integrations, Zapier as well as Webhooks and our highly versatile API.',
                freelancerQuizHead: 'Standard Integrations',
                freelancerQuizDescription: 'You can sync users contact information using Zapier or over 17 native integrations with tools like Marketo, Salesforce, MailChimp, Aweber, Hubspot, GetResponse, Intercom, Sendlane, Drip, Slack etc.',
                freelancerClass: 'half',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'half',
            },
            {
                id: 'monthlyFormula',
                name: 'Formula & Logic Jump',
                freelancerHead: 'Limited Access',
                freelancerDescription: 'You can use basic mathematical operators like +,-, x and /. Logic jump is not included.',
                essentialsHead: 'Full Access',
                essentialsDescription: 'You can use any mathematical (^, log etc) or logical (if then, average etc) operator as well as use visual logic jump [branching logic] to improve personalization.',
                businessHead: 'Full Access',
                businessDescription: 'You can use any mathematical (^, log etc) or logical (if then, average etc) operator as well as use visual logic jump [branching logic] to improve personalization.',
                freelancerQuizHead: 'Limited Access',
                freelancerQuizDescription: 'You can use basic mathematical operators like +,-, x and /. Logic jump is not included.',
                freelancerClass: 'quater',
                essentialsClass: 'full',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            },
            {
                id: 'monthlyAnalytics',
                name: 'Analytics & Tracking',
                freelancerHead: 'Standard Access',
                freelancerDescription: 'Traffic Details, Lead Data and User Responses. Can add Facebook and Google Analytics tracking codes.',
                essentialsHead: 'Standard Access',
                essentialsDescription: 'Traffic Details, Lead Data and User Responses. Can add Facebook and Google Analytics tracking codes.',
                businessHead: 'Advanced Access',
                businessDescription: 'Traffic Details, Lead Data, User Responses & Funnel Visualization. Can add all tracking codes.',
                freelancerQuizHead: 'Standard Access',
                freelancerQuizDescription: 'Traffic Details, Lead Data and User Responses. Can add Facebook and Google Analytics tracking codes.',
                freelancerClass: 'half',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'half',
            },
            {
                id: 'monthlyAdvanced',
                name: 'Advanced Features',
                freelancerHead: 'No Access',
                freelancerDescription: 'You do not have access to conditional messaging or advanced design customizations',
                essentialsHead: 'Limited Access',
                essentialsDescription: 'Access to conditional messaging.',
                businessHead: 'Advanced Access',
                businessDescription: 'Access to conditional messaging, email embeds, email validation, custom HTML/CSS/JS and custom notifications.',
                freelancerQuizHead: 'No Access',
                freelancerQuizDescription: 'You do not have access to conditional messaging or advanced design customizations',
                freelancerClass: 'none',
                essentialsClass: 'quater',
                businessClass: 'full',
                freelancerQuizClass: 'none',
            },
            {
                id: 'monthlySupport',
                name: 'Support',
                freelancerHead: 'Support Docs',
                freelancerDescription: 'You will have access to support docs.',
                essentialsHead: 'Basic',
                essentialsDescription: 'You will have access to support docs as well as email support. We will try to answer all queries within 24-48 hours.',
                businessHead: 'Priority',
                businessDescription: 'You will have access to support docs, email support as well as live chat.',
                freelancerQuizHead: 'Support Docs',
                freelancerQuizDescription: 'You will have access to support docs.',
                freelancerClass: 'quater',
                essentialsClass: 'half',
                businessClass: 'full',
                freelancerQuizClass: 'quater',
            }
        ];
    }
    PricingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PricingService);
    return PricingService;
}());



/***/ })

});
//# sourceMappingURL=common.chunk.js.map