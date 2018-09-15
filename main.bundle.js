webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./examples/examples.module": [
		"./src/app/site/examples/examples.module.ts",
		"examples.module",
		"common"
	],
	"./features/features.module": [
		"./src/app/site/features/features.module.ts",
		"features.module"
	],
	"./home/home.module": [
		"./src/app/site/home/home.module.ts",
		"home.module",
		"common"
	],
	"./pricing/pricing.module": [
		"./src/app/site/pricing/pricing.module.ts",
		"pricing.module",
		"common"
	],
	"./site/site.module": [
		"./src/app/site/site.module.ts",
		"site.module",
		"common"
	],
	"./why-interactive/why-interactive.module": [
		"./src/app/site/why-interactive/why-interactive.module.ts",
		"why-interactive.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".preloader {\n    position: relative;\n    top: 0;\n    left: 0;\n    right: 0px;\n    bottom: 0;\n    background-color: #fff;\n    z-index: 9999;\n    text-align: center;\n    margin-bottom: 120px;\n    margin-top: 80px;\n    width: 100%;\n    height: 60vh;\n}\n.preloader .logo{\n\twidth: 15%;\n\theight: 34px;\n\tmargin-top: 11%;\n\tfloat: right;\n\tposition: absolute;\n\tright: 5vw;\n\tbottom: 20px;\n}\n.status {\n\twidth: 200px;\n\theight: 200px;\n\tposition: absolute;\n\tleft: 50%;\n\t/* centers the loading animation horizontally on the screen */\n\ttop: 65%;\n\t/* centers the loading animation vertically on the screen */\n\tbackground-image: url(\"https://Shagun-29.github.io/final_outgrow/assets/images/loaders/logoAnim.gif\");\n\t\n\t/* path to your loading animation */\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tmargin: -100px 0 0 -100px;\n\t/* is width and height divided by two */\n}\n.status-msg{\n\tfont-family: \"montserratregular\";\n\tfont-size: 12px;\n\tcolor: #FB6066;\n\tmargin-top: 70px;\n\tdisplay: block;\n}\n@font-face {\n\tfont-family: montserratregular;\n\tsrc: url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-regular-webfont.eot\");\n\tsrc: url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-regular-webfont.eot?#iefix\") format('embedded-opentype'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-regular-webfont.woff2\") format('woff2'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-regular-webfont.woff\") format('woff'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-regular-webfont.ttf\") format('truetype');\n\tfont-weight: 400;\n\tfont-style: normal;\n\tfont-smooth: always;\n\t-webkit-font-smoothing: antialiased;\n}\n@font-face {\n\tfont-family: montserratbold;\n\tsrc:  url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-bold-webfont.woff2\") format('woff2'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-bold-webfont.woff\") format('woff'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-bold-webfont.ttf\") format('truetype');\n\tfont-style: normal;\n\tfont-weight: 400;\n\t\n}\n@font-face {\n\tfont-family: montserratsemibold;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc:  url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-semibold-webfont.woff2\") format(\"woff2\"), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-semibold-webfont.woff\") format(\"woff\"), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-semibold-webfont.ttf\") format(\"truetype\")\n}\n@font-face {\n\tfont-family: montserratlight;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-light-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-light-webfont.woff2\") format(\"woff2\"), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-light-webfont.woff\") format(\"woff\"), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-light-webfont.ttf\") format(\"truetype\")\n}\n@font-face {\n\tfont-family: montserratultra_light;\n\tsrc: url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-ultralight-webfont.woff2\") format('woff2'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-ultralight-webfont.woff\") format('woff'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-ultralight-webfont.ttf\") format('truetype');\n\tfont-weight: 400;\n\tfont-style: normal\n}\n@font-face {\n\tfont-family: montserrathairline;\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-hairline-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-hairline-webfont.woff2\") format(\"woff2\"), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-hairline-webfont.woff\") format(\"woff\"), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/montserrat-hairline-webfont.ttf\") format(\"truetype\")\n}\n@font-face {\n\tfont-family: 'Material Icons';\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/MaterialIcons-Regular.eot\");\n\tsrc: local('Material Icons'), local('materialIcons-Regular'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/materialIcons-Regular.woff2\") format('woff2'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/materialIcons-Regular.woff\") format('woff'), url(\"https://Shagun-29.github.io/final_outgrow/assets/fonts/materialIcons-Regular.ttf\") format('truetype')\n}\n.content.temp-info h3 p i.material-icons {\n    color: #fb7f84;\n    font-size: 18px;\n    vertical-align: bottom;\n    margin-right: 7px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"premade-loader\" class=\"preloader\">\n    <div class=\"status\">&nbsp;</div>\n</div>  \n<!-- <div *ngIf=show> -->\n\n    <app-header></app-header>\n\n    <router-outlet></router-outlet>\n    \n    <app-footer ></app-footer>\n    <!-- <app-footer  *ngIf=flag></app-footer> -->\n<!-- </div> -->\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_loading_service__ = __webpack_require__("./src/app/shared/service/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router, loadingService, _cookieService) {
        this.router = router;
        this.loadingService = loadingService;
        this._cookieService = _cookieService;
        this.href = "";
        this.url = "";
        this.text = [];
        this.flag = true;
        this.show = false;
        this.show1 = true;
        this.show2 = false;
        this.features = document.querySelector('.features');
        this.interactive = document.querySelector('.interactive');
        this.pricing = document.querySelector('.pricing');
        this.examples = document.querySelector('.examples');
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this._cookieService.get('storage')) {
            var login = document.querySelector('.login');
            var dashboard = document.querySelector('.dashboard');
            var getStarted = document.querySelector('.nav-lead-input');
            login.classList.add('hide');
            dashboard.classList.remove('hide');
            getStarted.classList.add('hide');
        }
        else {
        }
        this.href = window.location.href;
        this.text = this.href.split('/');
        console.log("--------current route-------", this.text[this.text.length - 1]);
        if (this.text[this.text.length - 1] == "idea-generator") {
            this.flag = false;
        }
        else if (this.text[this.text.length - 1] == "why-interactive") {
            this.interactive.classList.add('active');
            if (this.examples) {
                this.examples.classList.remove('active');
            }
            if (this.features) {
                this.features.classList.remove('active');
            }
            if (this.pricing) {
                this.pricing.classList.remove('active');
            }
        }
        else if (this.text[this.text.length - 1] == "features") {
            this.features.classList.add('active');
            if (this.examples) {
                this.examples.classList.remove('active');
            }
            if (this.interactive) {
                this.interactive.classList.remove('active');
            }
            if (this.pricing) {
                this.pricing.classList.remove('active');
            }
        }
        else if (this.text[this.text.length - 1] == "examples") {
            this.examples.classList.add('active');
            if (this.interactive) {
                this.interactive.classList.remove('active');
            }
            if (this.features) {
                this.features.classList.remove('active');
            }
            if (this.pricing) {
                this.pricing.classList.remove('active');
            }
        }
        else if (this.text[this.text.length - 1] == "pricing") {
            this.pricing.classList.add('active');
            if (this.examples) {
                this.examples.classList.remove('active');
            }
            if (this.features) {
                this.features.classList.remove('active');
            }
            if (this.interactive) {
                this.interactive.classList.remove('active');
            }
        }
        else {
            this.flag = true;
        }
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.loadingService.isLoading
            .subscribe(function (res) {
            if (res) {
                _this.show = true;
                _this.show1 = false;
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_service_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_3__node_modules_ngx_cookie_service__["a" /* CookieService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_components_header_header_component__ = __webpack_require__("./src/app/shared/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_components_privacy_privacy_component__ = __webpack_require__("./src/app/shared/components/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_components_terms_terms_component__ = __webpack_require__("./src/app/shared/components/terms/terms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_footer_footer_component__ = __webpack_require__("./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_service_loading_service__ = __webpack_require__("./src/app/shared/service/loading.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_api_request_service__ = __webpack_require__("./src/app/shared/services/api-request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { Script } from './shared/service/script.service'; 






// import { CookieService } from 'angular2-cookie/core';


// import { GoogleSheet } from './shared/interfaces/GoogleSheet';
// import { IdeaGenService } from './shared/services/idea-gen.service';

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_components_privacy_privacy_component__["a" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_components_terms_terms_component__["a" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_components_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routes */])
            ],
            providers: [
                // Script
                __WEBPACK_IMPORTED_MODULE_10_ngx_cookie_service__["a" /* CookieService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_service_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_api_request_service__["a" /* ApiRequestService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_components_privacy_privacy_component__ = __webpack_require__("./src/app/shared/components/privacy/privacy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_terms_terms_component__ = __webpack_require__("./src/app/shared/components/terms/terms.component.ts");


var routes = [
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_0__shared_components_privacy_privacy_component__["a" /* PrivacyComponent */] },
    { path: 'tos', component: __WEBPACK_IMPORTED_MODULE_1__shared_components_terms_terms_component__["a" /* TermsComponent */] },
    { path: '', loadChildren: './site/site.module#SiteModule' },
];
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes); 


/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".sec-cookies {\n    background: #fb5f66;\n    font-family: montserratlight;\n    color: #fff;\n    font-size: 13px;\n    position: fixed;\n    bottom: 0;\n    margin: 0;\n    z-index: 999;\n    padding: 22px;\n}\na:active, a:hover {\n    outline: 0;\n}\n.btn-understand:hover {\n    border: 2px solid #fff !important;\n    background: none !important;\n    color: #fff !important;\n}\n.sec-cookies p {\n    float: left;\n    width: 75%;\n    margin-bottom: 0px;\n}\n.sec-cookies p a {\n    color: #fff;\n}\n.sec-cookies .btn-understand {\n    float: right;\n    background: #fff;\n    border-radius: 20px;\n    color: #fb5f66;\n    font-size: 12px;\n    text-transform: uppercase;\n    font-family: montserratlight;\n    -webkit-box-shadow: 0 5px 15px rgba(251, 95, 102, 0.8);\n            box-shadow: 0 5px 15px rgba(251, 95, 102, 0.8);\n    z-index: 9;\n    padding: 10px 35px;\n    -webkit-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n    border: 2px solid transparent;\n    outline: none;\n}\n.sec-cookies a.icon-close {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    float: right;\n}\n.sec-cookies i.material-icons {\n    font-size: 20px;\n    color: #fff;\n    opacity: 0.8;\n    -webkit-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n}\n.container, .container-fluid {\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.container, .container-fluid {\n    margin-right: auto;\n    margin-left: auto;\n}\n.np {\n    padding: 0;\n}\n.mk-animate-element {\n    opacity: 1;\n    -webkit-perspective: 1000;\n}\n.mk-animate-element, .mk-effect-bg-layer, .mk-fullscreen-search-overlay {\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n}\n.footer-link {\n    float: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.footer-img, .footer-link {\n    padding-left: 0;\n}\n.footer-link h4 {\n    float: left;\n    width: 100%;\n    color: #fb5f66;\n    font-size: 16px;\n    margin-bottom: 20px;\n    text-transform: uppercase;\n    text-align: left;\n}\n.contact-address {\n    font-family: montserratlight;\n    font-size: 12px;\n    margin-top: 10px;\n    text-transform: capitalize;\n    color: #8e989f;\n}\n.section-14 {\n    float: left;\n    width: 100%;\n    background: #fafafa;\n    margin: 0;\n    padding-top: 30px;\n    /* padding-bottom: 30px; */\n}\n.section {\n    /* margin-bottom: 30px; */\n}\n.section, .section-1 {\n    /* margin-top: 30px; */\n    float: left;\n    width: 100%;\n}\n/* #footer.section-14 .container .col-sm-12 {\n    padding-left: 15px;\n} */\n.footer-img, .footer-link {\n    padding-left: 0;\n    padding-right: 0px;\n}\n.border-left {\n    border-left: 1px solid rgba(189,197,200,.6);\n}\n.footer-link h4 {\n    float: left;\n    width: 100%;\n    color: #fb5f66;\n    font-size: 15px;\n    margin-bottom: 20px;\n    text-transform: uppercase;\n    text-align: left;\n}\n.footer-social ul li.social-icons {\n    padding: 0 3px;\n}\n.footer-social ul li.social-icons a i {\n    vertical-align: middle;\n}\ni.zmdi.zmdi-facebook-box {\n    font-size: 16px;\n    color: #3f529c;\n}\ni.zmdi.zmdi-linkedin-box {\n    font-size: 16px;\n    color: #0077b7;\n}\ni.zmdi.zmdi-twitter-box {\n    font-size: 16px;\n    color: #55acee;\n}\n.footer-copyright p, .footer-link ul li a {\n    font-family: montserratregular;\n    font-size: 13px\n}\n.footer-img, .footer-link {\n    padding-left: 0\n}\n.footer-link { /* to make the row height equal */\n    float: left;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.footer-link h4 {\n    float: left;\n    width: 100%;\n    color: #fb5f66;\n    font-size: 16px;\n    margin-bottom: 20px;\n    text-transform: uppercase\n}\n.footer-img, .footer-img2 {\n    margin-bottom: 15px;\n    float: left\n}\n.footer-img, .footer-link {\n    padding-left: 0;\n}\nimg {\n    max-width: 100%;\n    height: auto;\n    image-rendering: optimizeQuality;\n}\nimg {\n    vertical-align: middle;\n}\n.footer-img2 {\n    /* min-height: 100px */\n}\n.footer-img2 img {\n    border: 1px solid #bdc5c8\n}\n.footer-img2text {\n    float: left;\n    width: 100%;\n    color: #bdc5c8;\n    font-size: 18px;\n    margin-bottom: 20px\n}\n.footer-link ul {\n    float: left;\n    width: 100%;\n    margin: 0;\n    padding: 0\n}\n.footer-link ul li {\n    float: left;\n    width: 100%;\n    margin-bottom: 20px;\n    list-style: none;\n}\n.footer-link ul li a {\n    float: left;\n    width: auto;\n    color: #62696d;\n}\n.footer-link ul li a:hover {\n    color: #fb5f66;\n}\n/* .footer-copyright {\n    margin-top: 10px;\n    margin-bottom: 10px\n} */\n.footer-copyright {\n    margin-top: 11px;\n    margin-bottom: 0;\n}\n.footer-copyright .border-left {\n    line-height: 0px;\n    display: inline;\n    padding-left: 10px;\n    margin-left: 10px;\n    border-left: 1px solid rgba(189,197,200,.99);\n}\n.footer-copyright p {\n    display: inline;\n    color: #bdc5c8;\n    margin-right: 5px\n}\n.footer-copyright p i {\n    display: inline;\n    color: #bdc5c8;\n    font-size: 14px;\n    position: relative;\n    top: 2px;\n    margin-right: 3px\n}\n.footer-copyright img {\n    display: inline;\n    position: relative;\n    top: -2px;\n    max-width: 105px;\n}\n.footer-img-text {\n    font-size: 12px;\n    color: #62696d;\n    margin-top: 5px\n}\n.footer-img-text a {\n    color: #62696d;\n    font-family: montserratlight;\n}\n.footer-img-text a:hover {\n    color: #fb5f66;\n}\n.footer-social {\n    margin-top: 25px\n}\n.footer-social ul {\n    display: inline-block;\n    padding-left: 0;\n    margin-bottom: 0px;\n\n}\n.footer-social ul li {\n    display: inline-block;\n    padding-left: 10px;\n    padding-right: 10px\n}\n.footer-social ul li a {\n    float: left;\n    color: #62696d;\n    font-size: 13px;\n    font-family: montserratregular;\n}\n.footer-social ul li a:hover {\n    color: #fb5f66\n}\n.footer-copyright i {\n    position: relative;\n    top: 3px;\n    font-size: 14px;\n    margin-right: 3px;\n    color: #8e989f;\n}\n.footer-copyright span {\n    margin-right: 5px;\n    font-size: 13px;\n    color: #8e989f;\n}\n.bg1-img, .billing-grey-top p, .billing-white-top p, .billingpricing-text, .footer-copyright, .footer-social, .swiper-pagination {\n    text-align: center;\n}\na {\n    color: #337ab7;\n    text-decoration: none;\n}\n.footer-bottom-left {\n    float: left;\n}\n.footer-social ul li:first-child {\n    padding-left: 0px;\n}\n.footer-social {\n    text-align: left;\n    background: #f5f5f5;\n    padding: 50px;\n}\n.company-address, .footer-copyright {\n    float: left;\n}\n.company-address {\n    font-family: montserratlight;\n    font-size: 13px;\n    margin-top: 15px;\n    text-transform: capitalize;\n}\n.footer-badge {\n    float: right;\n    margin-top: 10px;\n}\n.footer-badge img {\n    margin-left: 5px;\n}\n@media (max-width: 990px) and (min-width: 769px)\n{\n.section {\n    margin-top: 0;\n}\n}\n@media (max-width: 990px) and (min-width: 0px)\n{\n    .footer-social {\n        text-align: center;\n        line-height: normal;\n        padding: 50px 0px;\n    }\n    .footer-bottom-left {\n        float: none;\n    }\n    .company-address, .footer-copyright {\n        display: inline-block;\n        float: none;\n    }\n    .footer-badge {\n        float: left;\n        margin-top: 20px !important;\n        text-align: center;\n        margin: 0 auto;\n        width: 100%;\n    }\n    .footer-badge img:first-child {\n        margin-left: 0;\n    }\n    .footer-social ul {\n       margin-bottom: 0;\n    \n    }\n}\n@media (min-width:1921px) and (max-width:6500px){\n    #footer{padding-top: 80px; padding-bottom: 30px;}\n    .footer-link h4 {font-size: 36px; margin-bottom: 40px;}\n    .footer-copyright p, .footer-link ul li a {font-size: 23px;}\n    .footer-img-text {font-size: 22px;}\n    .footer-social ul li a {font-size: 20px;}\n    .footer-copyright {margin-bottom: 30px;}\n    .footer-copyright i {font-size: 24px;}\n    .footer-copyright span {font-size: 24px;}\n    .footer-copyright img {width: 100%;}\n}\n@media (min-width:320px) and (max-width:768px) {\n.footer-img2,\n    .footer-img2text {\n        padding-left: 0\n    }\n    .section {\n        margin-top: 0;\n    }\n   \n}\n@media (min-width:440px) and (max-width:768px) {\n    .footer-img-text a {\n        padding: 0!important;\n        text-align: inherit!important;\n    }\n    \n    .footer-img2 {\n        padding-left: 0;\n        /* min-height: 175px */\n    }\n}\n@media (max-width: 480px) and (min-width: 321px)\n{\n.footer-img-text a {\n    padding: 0!important;\n    text-align: inherit!important;\n}\n}\n@media (max-width: 767px) and (min-width: 320px)\n{\n.sec-cookies {\n    text-align: center;\n}\n.sec-cookies p {\n    width: 100% !important;\n}\n.sec-cookies .btn-understand {\n    float: none !important;\n    margin-top: 20px;\n}\n\n\n.sec-cookies .btn-understand {\n    padding: 7px 20px !important;\n    font-size: 11px !important;\n}\n.sec-cookies i.material-icons {\n    right: -12px !important;\n    top: -12px !important;\n}\n}\n@media (max-width: 1024px) and (min-width: 0px)\n{\n.sec-cookies i.material-icons {\n    right: -10px !important;\n}\n}\n@media only screen and (max-width: 767px) and (min-width: 480px)\n{\n/* .footer-link ul li {\n    width: 50%;\n} */\n}\n@media (max-width: 1200px) and (min-width: 1024px)\n{\n.footer-link ul li a {\n    text-align: left;\n}\n}\n@media (max-width: 1024px) and (min-width: 997px)\n{\n.footer-link ul li a {\n    text-align: left;\n}\n}\n@media (max-width: 997px) and (min-width: 768px)\n{\n.footer-link ul li a {\n    text-align: left;\n}\n.footer-img-text a {\n    padding: 0!important;\n}\n}\n@media (min-width:1024px) and (max-width:1250px) {\n    .footer-img2 {\n        padding-left: 0\n    }\n    .section-14 {\n        min-height: 660px !important;\n    }\n\n}\n@media only screen and (max-width:1000px)\n{\n    \n    footer.uncover\n     {\n        position: relative!important;\n        left: 0!important;\n        margin-bottom: 0\n     }\n}\n@media (max-width: 375px) and (min-width: 0px)\n{\n    .footer-social ul li {\n        padding-bottom: 5px !important;\n    }\n    .footer-social ul li {\n        padding-bottom: 5px !important;\n    }\n    .footer-copyright {\n        margin-top: 10px;\n    }\n    .footer-badge {\n        margin-top: 10px !important;\n    }\n}\n@media (max-width: 480px) and (min-width: 0px)\n{\n\n    .footer-copyright .border-left {\n        border-left: none !important;\n    }\n}\n.footer-adjust{\n    padding-bottom:50px;\n}\n.extra-margin-intercom{\nbottom : 80px !important;\n}\n.black-intercom{\n    bottom:90px;\n}\n.footer-badge-spacing{\n    /* margin-top: -20px !important; */\n}\n@media (max-width: 1280px) and (min-width: 1024px)\n{\n.footer-social {\n    padding-left: 27px;\n}\n}\n.sumome-image-sharer{\n    display: none;\n}"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"footer-14\">\n<section class=\"section section-14 footer-14\" id=\"footer\">\n    <div class=\"container\">\n    <div class=\"col-xs-12 col-sm-12 np\">\n    <div class=\"col-xs-12 col-sm-2 footer-link mk-animate-element fade-in\">\n    <h4 style=\"font-family:montserratregular\">Overview</h4>\n    <!-- <h4 style=\"font-family:montserratregular\">Menu</h4> -->\n    <ul>\n    \n    <li id=\"none\"><a routerLink=\"why-interactive\" class=\"params \">Why Interactive Content?</a></li>\n    <li id=\"none\"><a routerLink=\"features\" class=\"params \">Features </a></li>\n    <li id=\"none\"><a routerLink=\"examples\" class=\"params \">Examples</a></li>\n    <li id=\"none\"><a routerLink=\"idea-generator\" class=\"params\" target=\"_blank\">Idea Generator</a></li>\n    <li id=\"none\"><a routerLink=\"pricing\" class=\"params \">Pricing</a></li>\n    <!-- <li><a href=\"http://affiliates.outgrow.co/\">Affiliates</a></li> -->\n    <li id=\"none\"><a href=\"http://resources.outgrow.co/\" class=\"params\">Resources</a></li>\n    <li id=\"none\"><a href=\"http://resources.outgrow.co/about\" class=\"params\">About</a></li>\n    <li id=\"none\"><a routerLink=\"ecommerce-quizes\" class=\"params\">Ecommerce Quizzes</a></li>\n    </ul>\n    </div>\n   \n\n    <div class=\"col-xs-12 col-sm-10 np footer-link mk-animate-element fade-in\">\n    <h4 class=\"footer-img2text col-xs-12\">Resources</h4>\n    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n    <div class=\"col-xs-12 np\"><img rel=\"noshare\" class=\"scrollimg \" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/res1.jpg\" alt=\"Resources\"></div>\n    <div class=\"col-xs-12 np footer-img-text\">\n    <a href=\"https://resources.outgrow.co/content-marketing-strategy-checklist/?utm_source=footer\">Is Your Content Marketing Worth All The Effort? Consult Our 10 Point Checklist.</a>\n    </div>\n    </div>\n    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n    <div class=\"col-xs-12 np\"><img rel=\"noshare\" class=\"scrollimg\" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/footer5.jpg\" alt=\"Resources\"></div>\n    <div class=\"col-xs-12 np footer-img-text\">\n    <a href=\"https://resources.outgrow.co/interactive-calculators-content-make-digital-marketing-agency-stand-out/?utm_source=footer\">Make Your Digital Marketing Agency Stand Out</a>\n    </div>\n    </div>\n    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n    <div class=\"col-xs-12 np\"><img rel=\"noshare\" class=\"scrollimg\" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/res3.jpg\" alt=\"Resources\"></div>\n    <div class=\"col-xs-12 np footer-img-text\">\n    <a href=\"https://resources.outgrow.co/university-college-calculators/?utm_source=footer\">7 Interactive Calculators Every University Needs on Its Website</a>\n    </div>\n    </div>\n    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n    <div class=\"col-xs-12 np\"><img rel=\"noshare\" class=\"scrollimg\" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/res4.jpg\" alt=\"Resources\"></div>\n    <div class=\"col-xs-12 np footer-img-text\">\n    <a href=\"https://resources.outgrow.co/lead-retention-activate-cold-leads/?utm_source=footer\">Lead Retention Made Easy! Activate Cold Leads with Calculators</a>\n    </div>\n    </div>\n    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n    <div class=\"col-xs-12 np\"><img rel=\"noshare\" class=\"scrollimg\" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/footer7.jpg\" alt=\"Resources\"></div>\n    <div class=\"col-xs-12 np footer-img-text\">\n    <a href=\"https://resources.outgrow.co/interactive-calculators-saas-companies/?utm_source=footer\">9 Calculators Every SaaS Company Should Consider</a>\n    </div>\n    </div>\n    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n    <div class=\"col-xs-12 np\"><img rel=\"noshare\" class=\"scrollimg\" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/res7.jpg\" alt=\"Resources\"></div>\n    <div class=\"col-xs-12 np footer-img-text\">\n    <a href=\"https://resources.outgrow.co/courses/best-interactive-lead-generation-techniques/?utm_source=footer\">Value Added Marketing With Digital Experiences</a>\n    </div>\n    </div>\n    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n    <div class=\"col-xs-12 np\"><img  rel=\"noshare\" class=\"scrollimg\" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/res8.jpg\" alt=\"Resources\"></div>\n    <div class=\"col-xs-12 np footer-img-text\">\n    <a href=\"https://resources.outgrow.co/courses/lead-generation-with-calculators/?utm_source=footer\">Lead Generation With Interactive Calculators</a>\n    </div>\n    </div>\n    <div class=\"footer-img2 col-xs-6 col-sm-3\">\n    <div class=\"col-xs-12 np\"><img rel=\"noshare\" class=\"scrollimg\" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/res9.jpg\" alt=\"Resources\"></div>\n    <div class=\"col-xs-12 np footer-img-text\">\n    <a href=\"https://resources.outgrow.co/how-an-interactive-calculator-generated-11592-qualified-leads/?utm_source=footer\">How an Interactive Calculator Generated 11,592 Qualified Leads</a>\n    </div>\n    </div>\n    </div>\n    \n    </div>\n</div>\n    <!-- <div class=\"col-xs-12 np footer-social\" >\n    <ul><b>\n    <li><a href=\"https://www.facebook.com/OutgrowCo/\" style=\"font-weight:300\">Facebook</a></li>\n    <li><a href=\"https://www.linkedin.com/company/outgrow.co\" style=\"font-weight:300\">Linkedin</a></li>\n    <li><a href=\"https://twitter.com/outgrowco\" style=\"font-weight:300\">Twitter</a></li> \n    <li class=\"border-left\"><a routerLink=\"privacy-policy\" style=\"font-weight:300\" class=\"params\">Privacy Policy</a></li>\n    <li><a routerLink=\"tos\" class=\"params\" style=\"font-weight:300\">Terms of Services</a></li>\n    <li><a href=\"javascript:void(0)\" target=\"_top\" id=\"intercom_trigger\" style=\"font-weight:300\">Contact Us</a></li>\n    <li><a href=\"https://angel.co/outgrow-5/jobs/?utm_source=footer\" style=\"font-weight:300\">Careers</a></li>\n    </b></ul> -->\n    <!-- <ul>\n    <li class=\"social-icons\"><a href=\"https://www.facebook.com/OutgrowCo/?utm_source=footer\" target=\"_blank\"><i class=\"zmdi zmdi-facebook-box\"></i></a></li>\n    <li class=\"social-icons\"><a href=\"https://www.linkedin.com/company/7966190/?utm_source=footer\" target=\"_blank\"><i class=\"zmdi zmdi-linkedin-box\"></i></a></li>\n    <li class=\"social-icons\"><a href=\"https://twitter.com/outgrowco/?utm_source=footer\" target=\"_blank\"><i class=\"zmdi zmdi-twitter-box\"></i></a></li>\n    </ul> -->\n    <!-- <div class=\"contact-address\"> 401 park ave , 10th floor, New York 10016</div>\n    <div class=\"footer-copyright\">\n    <i class=\"material-icons\">copyright</i> -->\n    <!-- <i class=\"material-icons\"></i> -->\n    <!-- <span style=\"font-weight:500\">Copyright 2018</span>\n    <img class=\"scrollimg\" data-scroll-img src=\"https://dzvexx2x036l1.cloudfront.net/outgrow_logo_grey.svg\" alt=\"Footer logo\" />\n    <a style=\"display:none;\" href=\"https://trustlogo.com/install/index5.html?certificatename=Comodo-SSL-Wildcard\" target=\"_blank\"><img class=\"scrollimg footer-img-2 rs-hide-mb\" data-scroll-img=\"//dzvexx2x036l1.cloudfront.net/comodo_secure.png\" src=\"\" alt=\"comodo_secure image\" /></a>\n    </div>\n    </div> -->\n\n    <div class=\"col-xs-12 np footer-social footer-badge-spacing\">\n\t\t<div class=\"container \">\n\t\t\t<div class=\"footer-bottom-left\">\n\t\t\t\t<ul>\n\t\t\t\t                                             \n                    <li><a routerLink=\"privacy-policy\" style=\"font-weight:300\" class=\"params\">Privacy Policy</a></li>\n                    <li><a routerLink=\"tos\" class=\"params\" style=\"font-weight:300\">Terms of Services</a></li>\n                    <li><a href=\"javascript:void(0)\" target=\"_top\" id=\"intercom_trigger\" style=\"font-weight:300\">Contact Us</a></li>\n                    <li><a href=\"https://angel.co/outgrow-5/jobs/?utm_source=footer\" style=\"font-weight:300\">Careers</a></li>\n                    <li class=\"social-icons\"><a href=\"https://www.facebook.com/OutgrowCo/?utm_source=footer\" target=\"_blank\"><i class=\"zmdi zmdi-facebook-box\"></i></a></li>\n                    <li class=\"social-icons\"><a href=\"https://www.linkedin.com/company/7966190/?utm_source=footer\" target=\"_blank\"><i class=\"zmdi zmdi-linkedin-box\"></i></a></li>\n                    <li class=\"social-icons\"><a href=\"https://twitter.com/outgrowco/?utm_source=footer\" target=\"_blank\"><i class=\"zmdi zmdi-twitter-box\"></i></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"footer-bottom-copyAddress\">\n\t\t\t\t\t<div class=\"company-address\">\n\t\t\t\t\t\t401 park ave, 10th floor, New York 10016\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"footer-copyright\">\n\t\t\t\t\t\t<div class=\"border-left\">\n\t\t\t\t\t\t\t<i class=\"material-icons\">copyright</i>\n\t\t\t\t\t\t\t<span>Copyright 2018</span>\n\t\t\t\t\t\t\t<img rel=\"noshare\" class=\"scrollimg\" data-scroll-img=\"\" src=\"https://dzvexx2x036l1.cloudfront.net/outgrow_logo_grey.svg\" alt=\"Footer logo\">\n\t\t\t\t\t\t\t<a style=\"display:none;\" href=\"https://trustlogo.com/install/index5.html?certificatename=Comodo-SSL-Wildcard\" target=\"_blank\"><img class=\"scrollimg footer-img-2 rs-hide-mb\" data-scroll-img=\"\" src=\"//dzvexx2x036l1.cloudfront.net/comodo_secure.png\" alt=\"comodo_secure image\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer-badge\">\n\t\t\t\t<img rel=\"noshare\" src=\"https://outgrow.co/images/footer-badge-ps.jpg\" alt=\"Privacy Shield Framework\">\n\t\t\t\t<img rel=\"noshare\" src=\"https://outgrow.co/images/footer-badge-gdpr.jpg\" alt=\"General Data Protection Regulation\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n    \n    </section>\n    <section class=\"section footer-cookie cookieSection sec-cookies \" id=\"cookieArea\"  *ngIf=isVisible>\n        <div class=\"container\">\n            <p>\n                We use cookies to offer you a better browsing experience, analyze site traffic and personalize content. <a href=\"/cookies-privacy-policy\">Read about how we use cookies.</a> If you continue to use this site, you consent to our use of cookies.\n            </p> \n            <!-- <p>\n                We use cookies to offer you a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. If you continue to use this site, you consent to our use of cookies.\n            </p> -->\n            <button type=\"button\" (click)=\"saveCookie()\" class=\"btn btn-understand btn-hover\" >Accept &amp; Close</button>\n        </div>\t\n        <a href=\"javascript:void(0);\"  (click)=\"showMsg()\" class=\"icon-close\" ><i class=\"material-icons\">close</i></a>\n    </section>\n</section>"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { CookieService } from 'angular2-cookie/core';

var FooterComponent = /** @class */ (function () {
    function FooterComponent(_cookieService) {
        this._cookieService = _cookieService;
        this.disableCookieDialog = false;
        this.isVisible = true;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var footerBadge = document.getElementsByClassName('footer-badge-spacing');
        var footerShow = document.querySelector('.footer-14');
        var footerShowAdjust = document.querySelector('.footer-social');
        footerShow.classList.add('hide');
        if (this._cookieService.get('disableCookieDialog')) {
            footerBadge[0].style.paddingBottom = "50px";
            this.loaded = true;
            this.isVisible = false;
            footerShowAdjust.classList.remove('footer-adjust');
        }
        else {
            // footerBadge.classList.add('footer-badge-spacing');
            footerBadge[0].style.paddingBottom = "140px";
            //  footerBadge[0].style.top="12px";
            footerShowAdjust.classList.add('footer-adjust');
        }
    };
    FooterComponent.prototype.saveCookie = function () {
        var footerBadge = document.getElementsByClassName('footer-badge-spacing');
        footerBadge[0].style.paddingBottom = "50px";
        var footerShowAdjust = document.querySelector('.footer-social');
        this._cookieService.set('disableCookieDialog', 'true');
        //  let x =this.getCookie('disableCookieDialog');
        if (this._cookieService.get('disableCookieDialog')) {
            this.isVisible = false;
            // this.showMsg();
            footerShowAdjust.classList.remove('footer-adjust');
        }
        //   let intercomTest = document.getElementsByClassName('intercom-launcher-frame') as HTMLCollectionOf<HTMLElement>;
        // let intercomTestPart = document.getElementsByClassName('intercom-launcher-discovery-frame') as HTMLCollectionOf<HTMLElement>;
        //   intercomTest[0].style.bottom="";
        //   intercomTestPart[0].style.bottom="";
        var timeout = setTimeout(function () { return clearInterval(interval); }, 30000);
        var intercomMessengerInterval = setInterval(function () {
            var iframe = document.querySelector('.intercom-messenger-frame');
            var launcherBadge = document.querySelector('.intercom-launcher-badge-frame');
            var cookieSection = document.querySelector('.section.sec-cookies');
            var intercomBorderlessFrame = document.querySelector('.intercom-borderless-frame');
            // if (!cookieSection.classList.contains('hide')) {
            //     if (iframe) {
            //         jQuery('.intercom-messenger-frame').css('bottom', '160px');
            //     }
            //     if (launcherBadge) {
            //         jQuery('.intercom-launcher-badge-frame').css('bottom','134px');
            //     }
            //     if(intercomBorderlessFrame) {
            //         jQuery('.intercom-borderless-frame').css('bottom', '160px');
            //     }
            // }
        }, 1000);
        var interval = setInterval(function () {
            var cookieSection = document.querySelector('.section.sec-cookies');
            var iframe = document.querySelector('.intercom-launcher-discovery-frame');
            // if (iframe && !cookieSection.classList.contains('hide')) {
            //     // iframe.style.bottom = '90px';
            //     // document.querySelector('.intercom-launcher-frame').style.bottom = '90px'
            //     console.log('setting custom intercom css')
            //     clearInterval(interval)
            // }
        }, 1000);
    };
    FooterComponent.prototype.showMsg = function () {
        //   let intercomTest = document.getElementsByClassName('intercom-launcher-frame') as HTMLCollectionOf<HTMLElement>;
        // let intercomTestPart = document.getElementsByClassName('intercom-launcher-discovery-frame') as HTMLCollectionOf<HTMLElement>;
        //   let footerShowAdjust = document.querySelector('.footer-social');
        var footerBadge = document.getElementsByClassName('footer-badge-spacing');
        footerBadge[0].style.paddingBottom = "50px";
        this.isVisible = false;
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
    };
    FooterComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
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
    FooterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setInterval(function () {
            var intercom = document.querySelector('.intercom-launcher-frame');
            var intercomTest = document.getElementsByClassName('intercom-launcher-frame');
            var intercomTestPart = document.getElementsByClassName('intercom-launcher-discovery-frame');
            // let intercomTestPart2 = document.getElementsByClassName('intercom-messenger-frame-enter-done') as HTMLCollectionOf<HTMLElement>;
            if (intercom) {
                var intercomBlack = document.getElementsByClassName('intercom-messenger-frame-enter-done');
                if (_this.isVisible) {
                    if (intercomTest[0] && intercomTestPart[0]) {
                        intercomTest[0].style.bottom = "100px";
                        intercomTestPart[0].style.bottom = "95px";
                        if (intercomBlack[0]) {
                            intercomBlack[0].style.marginBottom = '70px';
                        }
                        // intercomTestPart2[0].style.bottom="180px";
                    }
                }
                else {
                    if (intercomTest[0] && intercomTestPart[0]) {
                        intercomTest[0].style.bottom = "";
                        intercomTestPart[0].style.bottom = "";
                    }
                    if (intercomBlack[0]) {
                        intercomBlack[0].style.marginBottom = '0px';
                    }
                    // intercomTestPart2[0].style.bottom="";
                }
            }
            else {
            }
        }, 1000);
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie_service__["a" /* CookieService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar-nav > li > a.active.hvr-underline-from-left:before {\n    right: 5px;\n    left: 5px;\n    /* top: 59px; */\n    background: #fb5f66 !important;\n    height: 2px;\n}\na {\n    color: #337ab7;\n    text-decoration: none;\n}\n.header1{\n    padding: 0!important;\n}\n.header1.sticky {\n    font-size: 24px;\n    background: white;\n    -webkit-box-shadow: 0 2px 9px 1px rgba(0,0,0,.2);\n            box-shadow: 0 2px 9px 1px rgba(0,0,0,.2);\n    /* height: 60px; */\n    padding:0!important;\n    margin: 0;\n    -webkit-transition: 0.3s ease-in-out;\n    transition: 0.3s ease-in-out;\n  }\n.navbar {\n    margin-bottom: 0;\n}\n.navbar {\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 20px;\n    border: 1px solid transparent;\n}\n/* .sticky a.params.hvr-underline-from-left {\n    padding: 9px 12px 8px 0px!important;\n} */\n.navbar-nav>li>a {\n    line-height: 35px;\n  -webkit-transition: .5s ease-in-out; \n     transition: .5s ease-in-out; \n}\n.sticky .navbar-nav>li>a {\n    line-height: 25px;\n}\n.sticky.custom-navbar .signUp a ,.sticky.dashboard a{\n    margin-top: 13px!important;\n}\n.sticky li.nav-lead-input {\n    margin-top: 12px;\n}\n.navbar-brand {\n    padding-top: 16px;\n    -webkit-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n}\n.custom-navbar.navbar-default {\n    background: #fff;\n    border: none;\n    padding: 0;\n    z-index: 998!important;\n    border-bottom: 1px solid #f3f8fb;\n    padding: 5px 0px;\n    -webkit-transition: .4s ease-out;\n    -webkit-transition: .3s ease-in-out;\n    transition: .3s ease-in-out;\n}\n.custom-navbar.navbar-default {\n    padding: 0;\n}\n.custom-navbar.navbar-default .navbar-nav>li>a i.material-icons {\n    font-size: 18px;\n    vertical-align: sub;\n}\n.dropdown .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #fff;\n    min-width: 185px;\n    -webkit-box-shadow: 0px 30px 40px rgba(0,0,0,0.10);\n            box-shadow: 0px 30px 40px rgba(0,0,0,0.10);\n    z-index: 1;\n    left: 10px;\n    /* top: 60px; */\n}\n.collapse.in {\n    display: block!important;\n}\n.navbar-collapse.in {\n    overflow-y: auto;\n}\n.dropdown-content a {\n    color: #62686c;\n    padding: 0px 5px;\n    margin: 0px 13px;\n    text-decoration: none;\n    display: block;\n    font-size: 14px;\n    font-family: montserratlight;\n    line-height: 46px;\n    border-bottom: 1px solid rgba(215,215,215,0.5);\n}\n.drop-sub-menu a {\n    border-bottom: none;\n}\n.dropdown .dropdown-content a i.material-icons {\n    font-size: 14px;\n    color: #fb5f66;\n    float: right;\n    line-height: 46px;\n}\n.dropdown .dropdown-sub-content {\n    display: none;\n    position: absolute;\n    right: -172px;\n    top: 50px;\n    background: #fff;\n    background-color: #fff;\n    /* min-width: 158px; */\n    -webkit-box-shadow: 0px 30px 40px rgba(0,0,0,0.10);\n            box-shadow: 0px 30px 40px rgba(0,0,0,0.10);\n    z-index: 1;\n    font-size: 12px;\n}\n.dropdown .dropdown-sub-content a {\n    font-size: 13px;\n    border-bottom: 1px solid rgba(215,215,215,0.5);\n}\n.dropdown-content a:hover {\n    color: #fb5f66;\n    opacity: 1 !important;\n}\n.dropdown .drop-sub-menu:hover .dropdown-sub-content {\n    display: block;\n}\n.dropdown:hover .dropdown-content {\n    display: block;\n}\n.custom-navbar .signUp-style a,.dashboard a{\n    border-radius: 20px;\n    background: #fb5f66 !important;\n    color: #fff!important;\n    padding: 6px 15px !important;\n    line-height: 1 !important;\n    font-size: 14px!important;\n    border: 2px solid #f8434b !important;\n    margin-top: 29px!important;\n\tmargin-left: 6px;\n\tfont-family: montserratregular;\n}\n/* .sticky .signUp-style a  {\n    margin-top: 20px!important;\n} */\n/* .sticky .login a  {\n    padding: 8px 12px 8px 12px!important;\n} */\n/* .custom-navbar.navbar-default {\n\n    border-bottom: none!important;\n   \n} */\ninput.lead-form-email::-webkit-input-placeholder {\n    color: 666!important;\n    opacity: 0.5; \n}\ninput.lead-form-email:-ms-input-placeholder {\n    color: 666!important;\n    opacity: 0.5; \n}\ninput.lead-form-email::-ms-input-placeholder {\n    color: 666!important;\n    opacity: 0.5; \n}\ninput.lead-form-email::placeholder {\n    color: 666!important;\n    opacity: 0.5; \n}\n.lead-form-email:-ms-input-placeholder { \n    color: #666;\n}\n.lead-form-email::-ms-input-placeholder { \n    color: #666;\n}\n.custom-navbar.navbar-default .navbar-nav > li > a.active, .custom-navbar.navbar-default .navbar-nav > li >a:hover {\n    color: #fb5f66;\n    background: none;\n}\n.custom-navbar.navbar-default .navbar-nav>li {\n    -webkit-transition: .5s ease-in-out; \n transition: .5s ease-in-out;\n}\n#sidebar-wrapper.active {\n    right: 280px;\n    width: 280px;\n    transition: all 0.5s ease-out 0s;\n    -webkit-transition: all 0.5s ease-out 0s;\n    -moz-transition: all 0.5s ease-out 0s;\n    -ms-transition: all 0.5s ease-out 0s;\n    -o-transition: all 0.5s ease-out 0s;\n}\n#sidebar-wrapper {\n    margin-right: -280px;\n    right: 0;\n    width: 280px;\n    background: #fff;\n    position: fixed;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    z-index: 1000;\n    transition: all 0.5s ease-in 0s;\n    -webkit-transition: all 0.5s ease-in 0s;\n    -moz-transition: all 0.5s ease-in 0s;\n    -ms-transition: all 0.5s ease-in 0s;\n    -o-transition: all 0.5s ease-in 0s;\n    top: 0px;\n}\n.sidebar-nav {\n    position: absolute;\n    width: 280px;\n    list-style: none;\n    padding: 0 20px;\n    margin-top: 40px;\n    margin-bottom: 30px;\n}\n#sidebar-wrapper .toggle {\n    border: none;\n    background: none;\n    position: absolute;\n    z-index: 9;\n    right: 15px;\n    top: -20px;\n    padding: 0;\n}\n.toggle {\n    margin: 0;\n}\n.pull-right {\n    float: right!important;\n}\n.btn-group-lg>.btn, .btn-lg {\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 6px;\n}\n.btn-default {\n    color: #333;\n    background-color: #fff;\n    border-color: #ccc;\n}\n.btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.sidebar-nav li {\n    line-height: 55px;\n    border-bottom: 1px solid #e6e9eb;\n}\n.billing-grey-bottom ul.billing-list li, .billing-grey2 ul.billing-list li, .billing-white-bottom ul.billing-list li, li, ul {\n    list-style: none;\n}\n.sidebar-nav li a {\n    color: #62696d;\n    display: block;\n    text-decoration: none;\n    padding: 0 3px;\n    font-size: 14px;\n    text-transform: uppercase;\n    font-family: montserratregular;\n}\n.sidebar-nav li a i.material-icons {\n    position: absolute;\n    right: 0;\n    top: 18px;\n    font-size: 17px !important;\n    color: #62696d;\n}\n#sidebar-wrapper .toggle i.material-icons {\n    color: #62696d;\n    font-size: 20px;\n}\n.dropdown .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #fff;\n    min-width: 203px;\n    -webkit-box-shadow: 0px 30px 40px rgba(0,0,0,0.10);\n            box-shadow: 0px 30px 40px rgba(0,0,0,0.10);\n    z-index: 1;\n    left: 10px;\n    /* top: 60px; */\n}\n.sidebar-nav li {\n    line-height: 55px;\n    border-bottom: 1px solid #e6e9eb;\n}\n.dropdown-content a:last-child {\n    border-bottom: none;\n    margin-bottom: 8px;\n}\n.sidebar-nav li a {\n    color: #62696d;\n    display: block;\n    text-decoration: none;\n    padding: 0 3px;\n    font-size: 14px;\n    text-transform: uppercase;\n    font-family: montserratregular;\n}\n.dropdown-content a {\n    color: #62686c;\n    padding: 0px 5px;\n    margin: 0px 15px;\n    text-decoration: none;\n    display: block;\n    font-size: 14px;\n    font-family: montserratlight;\n    line-height: 46px;\n    border-bottom: 1px solid rgba(215,215,215,0.5);\n}\n.dropdown .dropdown-sub-content {\n    display: none;\n    position: absolute;\n    right: -179px;\n    top: 50px;\n    background: #fff;\n    background-color: #fff;\n    /* min-width: 158px; */\n    -webkit-box-shadow: 0px 30px 40px rgba(0,0,0,0.10);\n            box-shadow: 0px 30px 40px rgba(0,0,0,0.10);\n    z-index: 1;\n    font-size: 12px;\n}\n.dropdown.open .drop-sub-menu .dropdown-sub-content {\n    display: block;\n}\n.dropdown .dropdown-sub-content a {\n    font-size: 13px;\n    border-bottom: 1px solid rgba(215,215,215,0.5);\n}\n.dropdown-content a:last-child {\n    border-bottom: none;\n    margin-bottom: 8px;\n}\n.res-nav-hide {\n    display: block!important;\n}\n.res-nav-show {\n    display: none;\n}\n.navbar-default {\n    background-color: #f8f8f8;\n    border-color: #e7e7e7;\n}\n/* .custom-navbar .signUp a {\n    border-radius: 20px;\n    background: #fb5f66 !important;\n    color: #fff!important;\n    padding: 5px 10px !important;\n    line-height: 1 !important;\n    font-size: 13px!important;\n    border: 2px solid #f8434b !important;\n    margin-top: 20px!important;\n    margin-right: 15px;\n    margin-left: 6px;\n    font-family: montserratregular;\n} */\n.custom-navbar a.link-login {\n    font-size: 14px;\n    font-family: montserratregular;\n}\n.navbar-fixed-top\n{\n    top: 0;\n    border-width: 0 0 1px;\n}\nli.dashboard a:hover {\n    background: #fdb6b9 !important;\n    color: #fff !important;\n    border: 2px solid transparent !important;\n    opacity: 1 !important;\n}\n.dash{\n    color:#fff!important;\n}\n.navbar-fixed-bottom, .navbar-fixed-top\n{\n    position: fixed;\n    right: 0;\n    left: 0;\n    z-index: 1030;\n}\n.navbar-default .navbar-toggle {\n    border-color: #ddd;\n}\n.navbar-toggle {\n    position: relative;\n    float: right;\n    padding: 9px 10px;\n    margin-top: 8px;\n    margin-right: 15px;\n    margin-bottom: 0px;\n    background-color: transparent;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n}\n.navbar-default .navbar-toggle .icon-bar {\n    background-color: #888;\n}\n.navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\n}\n.navbar-toggle .icon-bar+.icon-bar {\n    margin-top: 4px;\n}\n.navbar-default .navbar-brand {\n    color: #777;\n}\n.navbar-brand {\n    padding: 0!important;\n    margin-left: 30px!important;\n    padding-top: 21px!important;\n}\n.navbar-brand {\n    float: left;\n    height: 50px;\n    padding: 15px;\n    font-size: 18px;\n    line-height: 20px;\n}\n.navbar-brand>img {\n    display: block;\n    width: 100%;\n}\n.navbar-default .navbar-collapse, .navbar-default .navbar-form {\n    border-color: #e7e7e7;\n}\n.navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse, .pre-scrollable {\n    max-height: 340px;\n}\n.navbar-collapse {\n    padding-right: 15px;\n    padding-left: 15px;\n    overflow-x: visible;\n    -webkit-overflow-scrolling: touch;\n    border-top: 1px solid transparent;\n    -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.1);\n    box-shadow: inset 0 1px 0 rgba(255,255,255,.1);\n}\n.navbar-nav {\n    margin: 7.5px -15px;\n}\n.custom-navbar.navbar-default .navbar-nav>li {\n    margin-right: 0px;\n   \n}\n.custom-navbar.navbar-default .navbar-nav>li {\n    margin-right: 20px;\n}\n.custom-navbar.navbar-default .navbar-nav>li>a {\n    font-size: 14px;\n    color: #62696d;\n    text-transform: uppercase;\n    background: none;\n    overflow: visible;\n    /* width: 100%; */\n}\n.navbar-default .navbar-nav>li>a, .navbar-default .navbar-text {\n    color: #777;\n}\n/* .navbar-nav>li>a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 25px;\n} */\n.nav>li>a {\n    padding: 10px 15px;\n}\n.hvr-underline-from-left {\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    position: relative;\n    /* overflow: hidden; */\n}\n.hvr-underline-from-center, .hvr-underline-from-left {\n    display: inline-block;\n    vertical-align: middle;\n    transform: translateZ(0);\n    -webkit-transform: translateZ(0);\n    -webkit-box-shadow: 0 0 1px transparent;\n            box-shadow: 0 0 1px transparent;\n    backface-visibility: hidden;\n    -webkit-backface-visibility: hidden;\n}\n.custom-navbar.navbar-default .navbar-nav>li {\n    margin-right: 20px;\n}\n.custom-navbar .link-login {\n    color: #fb6c73;\n    font-family: montserratbold;\n}\nli.nav-lead-input {\n    margin-top: 22px;\n    position: relative;\n    width: 317px!important;\n    margin-right: 5px !important;\n    line-height: 22px;\n}\n.custom-navbar.navbar-default .navbar-nav>li input.lead-form-email {\n    border: 1px solid #ebebeb;\n    border-radius: 20px;\n    font-size: 14px;\n    padding: 0 15px;\n    height: 30px;\n    color: #62696d;\n    outline: none;\n}\n.nav-lead-input .lead-form-btn {\n    position: absolute !important;\n    right: 0;\n    top: 0;\n}\n.nav-lead-input a.lead-email.btn-buildcal {\n    background: #fb5f66;\n    color: #fff;\n    font-size: 14px;\n    padding: 4px 20px;\n    border: 2px solid #fb5f66;\n    -webkit-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n    line-height: normal;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 25px;\n    display: inline-block;\n    float: none;\n    font-family: montserratbold;\n    text-transform: uppercase;\n    margin-left: 3px;\n}\n.custom-navbar .link-login:hover {\n    background: 0 0;\n    color: #fb5f66 !important;\n    opacity: .5;\n}\n.btn-hover:hover, .btn-hover:focus {\n    -webkit-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n    background: #fdb6b9 !important;\n    color: #fb545b !important;\n    border-color: #fdb6b9 !important;\n}\n@media (min-width: 768px)\n{\n.navbar-fixed-bottom, .navbar-fixed-top, .navbar-static-top {\n    border-radius: 0;\n}\n\n.container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header {\n    margin-right: 0;\n    margin-left: 0;\n}\n.navbar-header {\n    float:none;\n}\n}\n@media (max-width: 768px) and (min-width: 320px)\n{\n    .navbar-nav > li > a.active.hvr-underline-from-left:before {\n        right: 0px;\n        left: 0px;\n        background: none;\n        height: 0px;\n    }\n    .hvr-underline-from-left:before {\n        position:unset!important;\n        left: 0;\n        right: 0!important;\n        bottom: 0;\n        \n    }\n    .res-nav-show {\n        display: block!important;\n    }\n    .custom-navbar.navbar-default {\n        border-bottom: 1px solid #f3f8fb;\n    }\n    .res-nav-hide{\n        display: none!important;\n    }\n    .navbar-brand {\n        margin-left: 25px!important;\n        padding-top: 10px;\n    }\n    .custom-navbar.navbar-default, .section-1 {\n        margin-bottom: 0px;\n    }\n    .custom-navbar.navbar-fixed-top {\n        position: relative;\n    }\n    .custom-navbar .signUp a,.dashboard a {\n        display: inline-block;\n        margin-top: 0px;\n    }\n    .dropdown .dropdown-content a i.material-icons {\n        line-height: 26px !important;\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg);\n    }\n.dropdown .dropdown-content {\n    min-width: 100% !important;\n    left: 0 !important;\n    background: none;\n    position: relative !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n}\n\n.dropdown .dropdown-sub-content {\n    min-width: 100% !important;\n    left: 0px !important;\n    background: none;\n    position: relative !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    top: 0px !important;\n    padding: 0px 20px !important;\n}\n.dropdown-content a {\n    font-size: 11px !important;\n    text-transform: uppercase;\n    line-height: normal !important;\n    padding: 7px 12px !important;\n}\n.navbar-nav>li {\n    /* float: left; */\n    width: 100%;\n}\n}\n@media (max-width: 990px) and (min-width: 769px)\n{\n.custom-navbar.navbar-default, .section-1 {\n    margin-bottom: 0;\n}\n.custom-navbar.navbar-fixed-top {\n    position: relative;\n}\n.navbar-brand {\n    margin-left: 15px!important;\n}\n.custom-navbar.navbar-default .navbar-nav>li {\n    margin-left: 0;\n    margin-right: 1px;\n}\n.custom-navbar.navbar-default .navbar-nav>li>a {\n    font-size: 12px;\n    color: #62696d;\n    text-transform: uppercase;\n    display: inline-block!important;\n}\n.hvr-underline-from-left:before {\n    position:unset!important;\n    left: 0;\n    right: 0!important;\n    bottom: 0;\n    \n}\n}\n@media (max-width: 1023px) and (min-width: 769px)\n{\n    .custom-navbar.navbar-default .navbar-nav>li {\n      float: left;\n      width: 100%;\n    }\n}\n@media (max-width: 380px) and (min-width: 320px)\n{\nli.nav-lead-input {\n    width: auto!important;\n    /* width: 300px!important; */\n}\n}\n@media only screen and (max-width: 380px)\n{\n.nav-lead-input a.lead-email.btn-buildcal {\n    background: #fb5f66;\n    color: #fff;\n    font-size: 14px;\n    padding: 4px 20px;\n    border: 2px solid #fb5f66;\n    -webkit-transition: .5s ease-in-out;\n    transition: .5s ease-in-out;\n    line-height: normal;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    border-radius: 25px;\n    display: inline-block;\n    float: none;\n    font-family: montserratbold;\n    text-transform: uppercase;\n    margin-left: 3px;\n}\n}\n@media (max-width: 1023px) and (min-width: 320px)\n{\n\n    /* .custom-navbar.navbar-default .navbar-nav>li {\n        margin-right: 0px;\n        float: left;\n        width:100%;\n    } */\n    .collapse {\n        display: none!important;\n    }\n    .navbar-toggle {\n        display: block!important;\n    }\n    li.signUp.signUp-style a.link-login, .dashboard a.link-login {\n        margin: 0px !important;\n        font-size: 14px !important;\n        padding: 6px 13px !important;\n        border: 2px solid #f8434b !important;\n    }\n    .custom-navbar a.link-login {\n        border-bottom: none;\n    }\n    li.signUp.signUp-style ,.dashboard{\n        margin: 0px !important;\n        line-height: normal;\n        border-bottom: none;\n    }\n    .drop-sub-menu i.material-icons {\n        -webkit-transform: none !important;\n                transform: none !important;\n        top: 37px !important;\n        color: #62696d !important;\n    }\n    \n   \n    .drop-sub-menu i {\n        opacity: 0.5;\n    }\n    .drop-sub-menu .dropdown-sub-content li {\n        list-style-type: circle;\n        font-size: 16px;\n        color: #000;\n        opacity: 1;\n    }\n    li.dropdown.open a {\n        border-bottom: none !important;\n    }\n    .drop-sub-menu .dropdown-sub-content a {\n        border-bottom: none;\n        padding: 7px 0px !important;\n        opacity: 0.6;\n    }\n    .dropdown:hover .dropdown-content, .dropdown:hover .dropdown-sub-content {\n        display: block;\n    }\n    .dropdown .dropdown-sub-content {\n        padding: 0px 20px !important;\n    }\n.dropdown .dropdown-content {\n    padding-bottom: 20px;\n    top: 0;\n    padding-left: 20px;\n}\nli.dropdown.open a {\n    border-bottom: none !important;\n}\n.dropdown-content a {\n    font-size: 13px !important;\n    text-transform: uppercase;\n    line-height: 18px!important;\n    padding: 7px 0px !important;\n    margin: 0 !important;\n    text-transform: none !important;\n    color: #666;\n    opacity: 0.8;\n    border-bottom: none !important;\n    font-family: montserratlight !important;\n}\n\n.sidebar-nav li.dropdown.open .dropdown-content {\n    display: block;\n}\n.dropdown-content li {\n    list-style-type: disc;\n    line-height: 18px;\n    font-family: montserratlight;\n    border-bottom: none;\n    font-size: 16px;\n    color: #666;\n    opacity: 1;\n}\n.navbar-nav > li > a {\n    line-height: 25px!important;\n}\n}\n@media (max-width: 1023px)\n{\n    .custom-navbar.navbar-default .navbar-nav>li>a {\n        padding: 7px 10px;\n        \n    }\n    .navbar-brand {\n        \n        padding-top: 10px!important;\n    }\n\n.navbar-default .navbar-toggle .icon-bar {\n    background-color: #fb5f66 !important;\n}\n.custom-navbar.navbar-default .container-fluid {\n    padding: 0;\n}\n.navbar-default .navbar-toggle {\n    border: none;\n}\n.navbar-default .navbar-toggle .icon-bar {\n    background-color: #fb5f66 !important;\n}\n.navbar-right {\n    float: left !important;\n    width: 100%;\n    margin: 7.5px 0px !important;\n    \n}\n\n.custom-navbar .signUp-style a ,.dashboard a {\n    background: none;\n    color: #fff!important;\n    border: none !important;\n    display: inline-block;\n}\n.custom-navbar.navbar-default .navbar-nav>li input.lead-form-email {\n    width: 100%;\n}\nli.nav-lead-input {\n    margin: 10px !important;\n}\n.dashboard a {\n    margin: 5px 0px 10px 10px!important;\n    display: inline-block !important;\n}\n.custom-navbar.navbar-default .navbar-nav>li>a {\n    font-size: 12px !important;\n    line-height: 18px!important;\n}\n.custom-navbar.navbar-default .navbar-nav>li.dashboard>a {\n   font-weight: 800;\n   font-size: 12px !important;\n   line-height: normal!important;\n}\n}\n@media (max-width: 1023px) and (min-width: 991px)\n{\n.custom-navbar.navbar-default .navbar-nav>li>a {\n    font-size: 12px;\n    color: #62696d;\n    text-transform: uppercase;\n}\n.custom-navbar.navbar-default .navbar-nav>li {\n    margin-right: 0px;\n}\n.custom-navbar .signUp-style a ,.dashboard a{\n    margin-top: 0px;\n}\n}\n@media (min-width: 1024px) and (max-width:148)\n{\n div#bs-example-navbar-collapse-1{\nheight:65px!important;\n}\n.sticky div#bs-example-navbar-collapse-1 {\n    height: 0 !important;\n}\nli.nav-lead-input {\n    margin-top: 17px;\n}\n}\n@media (min-width: 1481px)\n{\ndiv#bs-example-navbar-collapse-1 {\n    height: 76px !important;\n}\n.sticky div#bs-example-navbar-collapse-1 {\n    height: 0 !important;\n}\n}\n@media (min-width: 1024px)\n{\n   \n    .navbar-right {\n        float: right!important;\n    }\n    \n.navbar-header {\n    float: left;\n}\n.navbar-toggle {\n    display: none;\n}\n.navbar-fixed-bottom .navbar-collapse, .navbar-fixed-top .navbar-collapse, .navbar-static-top .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n}\n.navbar-collapse.collapse {\n    display: block;\n    height: auto!important;\n    padding-bottom: 0;\n    overflow: visible!important;\n}\n.navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n}\n.navbar-nav {\n    float: left;\n    margin: 0;\n}\n.navbar-nav>li {\n    float: left;\n}\n.navbar-nav>li>a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    padding-left: 12px;\n    padding-right: 12px;\n}\n.sticky .navbar-brand {\n    padding-top: 12px!important;\n}\n.navbar-nav>li {\n    float: left;\n}\n}\n@media (max-width: 1250px) and (min-width: 1024px)\n{\n\n   .sticky.custom-navbar .signUp a ,.dashboard a{\n        \n        margin-top: 14px!important;\n    }\n \n    /* .custom-navbar.navbar-default .navbar-nav>li>a {\n        font-size: 13px;\n        padding-left: 12px;\n        padding-right: 12px;\n    } */\n.container-fluid>.navbar-header {\n    margin-left: -30px;\n}\n.navbar-right {\n    margin-left: 20px;\n}\n.custom-navbar.navbar-default .navbar-nav>li {\n    margin-right: 0;\n}\n\n/* .sticky .navbar-brand {\n    padding-top: 12px!important;\n} */\n}\n@media (max-width: 1280px) and (min-width: 1024px)\n{\n    .nav-lead-input a.lead-email.btn-buildcal {\n        font-size: 12px;\n        padding: 5px 10px;\n        line-height: 16px;\n    }\n    .custom-navbar.navbar-default .navbar-nav>li input.lead-form-email {\n        font-size: 12px;\n    }\n    li.nav-lead-input {\n        width: 237px!important;\n        margin-right: 0px !important;\n    }\n    .custom-navbar.navbar-default .navbar-nav>li>a {\n        font-size: 13px;\n    }\n    .sticky li.nav-lead-input {\n        margin-top: 12px!important;\n    }\n    li.nav-lead-input {\n        margin-top: 17px!important;\n    }\n\n}\n@media (min-width: 1250px) and (max-width:1480px){\n\n   \n    .custom-navbar .signUp a ,.dashboard a{\n        \n        margin-top: 18px!important;\n    }\n    .sticky.custom-navbar .signUp a ,.sticky.custom-navbar .dashboard a {\n        margin-top: 12px!important;\n    }\n}\n@media (max-width: 2999px) and (min-width: 1480px)\n{\n.custom-navbar.navbar-default {\n    padding: 25px 0px;\n}\n.navbar-nav>li>a {\n    line-height: 45px;\n}\n.sticky .navbar-nav>li>a {\n    line-height: 25px;\n}\n/* .custom-navbar .signUp a {\n    margin-top: 22px!important;\n} */\n.sticky.custom-navbar .signUp a ,.sticky.custom-navbar .dashboard a {\n    margin-top: 12px!important;\n}\n.sticky .navbar-brand {\n    padding-top: 12px!important;\n}\n.custom-navbar .signUp a,.dashboard a {\n    margin-top: 21px!important;\n}\n}\n@media   (min-width: 1024px) and (max-width: 1480px)\n{\n    .navbar-brand {\n        \n        padding-top: 17px!important;\n    }\n}\n@media   (min-width: 1025px) and (max-width: 1480px)\n{\n    div#bs-example-navbar-collapse-1 {\n        height: 66px!important;\n    }\n    .sticky div#bs-example-navbar-collapse-1 {\n        height: 0 !important;\n    }\n    li.nav-lead-input{\n        margin-top: 18px;\n    }\n    /* .sticky a.params.hvr-underline-from-left {\n        padding: 13px 12px 13px 12px!important;\n    }\n    .sticky .login a  {\n        padding: 14px 12px 12px 12px!important;\n    }\n    \n.sticky .signUp.signUp-style {\n    margin-top: -2px;\n    \n}\n.sticky .custom-navbar.navbar-default .navbar-nav>li {\n    margin-right: 25px;\n} */\n}\n@media  (min-width: 1480px){\n/* .sticky a.params.hvr-underline-from-left {\n    padding: 8px 13px 7px 13px!important;\n}\n\n.sticky .login a  {\n    padding: 9px 13px 8px 13px!important;\n}\n\n.sticky .signUp.signUp-style {\n    margin-top: -7px;\n    \n}\n.sticky .custom-navbar.navbar-default .navbar-nav>li {\n    margin-right: 25px;\n} */\n}\n@media (max-width: 1800px) and (min-width: 1480px)\n{\n \n    .custom-navbar .signUp-style a {\n        padding: 10px 14px;\n        /* top: -5px; */\n        font-size: 16px !important;\n    }\n.custom-navbar.navbar-default {\n    padding-top: 25px;\n    padding-bottom: 25px;\n}\n.custom-navbar.navbar-default .navbar-nav>li>a, .section-1-left .btn-bottominfo label, .section-1-left .btn-bottominfo span {\n    font-size: 16px!important;\n}\n}\n@media (min-width: 1800px)\n{\n    .custom-navbar.navbar-default .navbar-nav>li>a, .section-1-left .btn-bottominfo label, .section-1-left .btn-bottominfo span {\n        font-size: 16px;\n    }\n    .custom-navbar .signUp-style a,.dashboard a {\n        padding: 10px 14px;\n        /* top: -5px; */\n        font-size: 16px !important;\n    }\n}\n.hvr-underline-from-left:before {\n    left: 5px !important;\n}\n.hvr-underline-from-center:before, .hvr-underline-from-left:before {\n    content: \"\";\n    z-index: -1;\n    background: #fb5f66 !important;\n    height: 2px !important;\n    transition-timing-function: ease-out;\n    -webkit-transition-timing-function: ease-out;\n    /* top: 58px; */\n}\n.hvr-underline-from-left:before {\n    position: absolute;\n    left: 0;\n    right: 100%;\n    bottom: -1px;\n    -webkit-transition-property: right;\n    transition-property: right;\n    -webkit-transition-duration: .3s;\n    transition-duration: .3s;\n    -webkit-transition-timing-function: ease-out;\n            transition-timing-function: ease-out;\n}\n.hvr-underline-from-center:before, .hvr-underline-from-left:before {\n    content: \"\";\n    z-index: -1;\n    background: #2098d1;\n    height: 4px;\n    transition-timing-function: ease-out;\n    -webkit-transition-timing-function: ease-out;\n}\n.custom-navbar.navbar-default .navbar-nav>li>a.active, .custom-navbar.navbar-default .navbar-nav>li>a:hover {\n    color: #fb5f66;\n    background: none;\n    outline: none;\n}\n.nav>li>a:focus, .nav>li>a:hover {\n    text-decoration: none;\n    background-color: #eee;\n}\n.hvr-underline-from-left:active:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:hover:before {\n    right: 5px !important;\n    left: 5px;\n}\n.hvr-underline-from-left:active:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:hover:before {\n    right: 5px;\n    left: 5px;\n    /* top: 58px; */\n    background: #fb5f66;\n    height: 2px;\n}\n.hvr-underline-from-left:active:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:hover:before {\n    right: 0;\n}\n.lead-form-btn:hover{\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <nav class=\"navbar custom-navbar navbar-default navbar-fixed-top header1\" >\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" id=\"toogle-menu\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n                    aria-expanded=\"false\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"params navbar-brand home\" routerLink=\"\" (click)=\"setTitle0()\">\n                    <img rel=\"noshare\" src=\"https://dzvexx2x036l1.cloudfront.net/logo.png\" alt=\"logo\" />\n                </a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav navbar-right\" id=\"navlist\" style=\"font-family: montserratregular\">\n                    <li>\n                        <a routerLink=\"why-interactive\"  (click)=\"fadeOut()\" class=\"params hvr-underline-from-left interactive\">Why Interactive Content ?</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"features\"  (click)=\"fadeOut()\"  class=\"params hvr-underline-from-left features\">Features</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"pricing\"  (click)=\"fadeOut()\" class=\"params hvr-underline-from-left pricing\">Pricing</a>\n                    </li>\n                    <li>\n                        <a routerLink=\"examples\"  (click)=\"fadeOut()\" class=\"params hvr-underline-from-left examples\">Examples</a>\n                    </li>\n\n                    <li class=\"dashboard hide \" >\n                       \n                        <a href=\"//app.outgrow.co/login\" class=\" params\" onclick=\"\">Dashboard</a>\n                    </li>\n\n                    <li class=\"login\">\n                        <a href=\"//app.outgrow.co/login\" class=\"link-login params \" >Login</a>\n                    </li>\n                    <!-- <li class=\"signUp signUp-style res-nav-hide\">\n                        <a href=\"//app.outgrow.co/signup\" class=\"link-login params\">Sign up</a>\n                    </li>\n                    <li class=\"signUp res-nav-show\">\n                        <a href=\"//app.outgrow.co/signup\" class=\"link-login params\" onclick=\"callGA('SIGNUP HEADER')\">Sign Up</a>\n                    </li>\n                     -->\n\n                     <li class=\"nav-lead-input\">\n                        <input class=\"lead-form-email\" name=\"emailId\" type=\"email\" placeholder=\"Enter your email\" #emailId>\n                        <span class=\"lead-form-btn\">\n                            <!-- <a href=\"//app.outgrow.co/signup/?email=\" class=\"lead-email btn-buildcal btn-hover\" onclick=\"callGA('CANNOT WAIT CTA'); \"> -->\n                                <a  class=\"lead-email btn-buildcal\" (click)=\"putEmailId(emailId.value)\"> \n                                Get Started\n                            </a>\n                        </span>\n                    </li>\n                     \n                </ul>\n            </div>\n        </div>\n    </nav>\n\n\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(titleService, router) {
        this.titleService = titleService;
        this.router = router;
        this.href = "";
        this.url = "";
        this.text = [];
        this.activeHeader = "";
        this.collapse = true;
        this.menu1 = document.querySelector('.interactive');
        this.menu2 = document.querySelector('.features');
        this.menu3 = document.querySelector('.pricing');
        this.menu4 = document.querySelector('.examples');
        this.active = document.querySelector('.home');
    }
    HeaderComponent.prototype.setTitle0 = function () {
        this.titleService.setTitle("Interactive Calculators and Quizzes | Outgrow");
        if (this.menu1) {
            this.menu1.classList.remove('active');
        }
        if (this.menu2) {
            this.menu2.classList.remove('active');
        }
        if (this.menu3) {
            this.menu3.classList.remove('active');
        }
        if (this.menu4) {
            this.menu4.classList.remove('active');
        }
    };
    HeaderComponent.prototype.setTitle1 = function () {
        this.titleService.setTitle("Why Interactive Content ? | Outgrow");
    };
    HeaderComponent.prototype.setTitle2 = function () {
        this.titleService.setTitle("Product Features | Outgrow");
    };
    HeaderComponent.prototype.setTitle3 = function () {
        this.titleService.setTitle("Pricing | Outgrow");
    };
    HeaderComponent.prototype.setTitle4 = function () {
        this.titleService.setTitle("Examples | Outgrow");
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var header = document.querySelector('.navbar-fixed-top');
        header.classList.add('hide');
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(window).scroll(function () {
                if (__WEBPACK_IMPORTED_MODULE_2_jquery__(this).scrollTop() > 1) {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.header1').addClass("sticky");
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_2_jquery__('.header1').removeClass("sticky");
                }
            });
            __WEBPACK_IMPORTED_MODULE_2_jquery__('.navbar-collapse ul li a').on('click', function () {
                __WEBPACK_IMPORTED_MODULE_2_jquery__('.params').removeClass('active');
                __WEBPACK_IMPORTED_MODULE_2_jquery__(this).addClass('active');
            });
        });
    };
    HeaderComponent.prototype.fadeOut = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#toogle-menu').trigger('click');
    };
    HeaderComponent.prototype.putEmailId = function (email) {
        this.emailId = email;
        window.location.href = "https://app.outgrow.co/signup/?email=" + this.emailId;
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"], __WEBPACK_IMPORTED_MODULE_3__node_modules_angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/privacy/privacy.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.p_lists{\ncolor:#62696d;\nfont-size:13px;\n}\n p {\n    color: #62696d;\n    font-size: 13px;\n    float: left;\n    display: block;\n    margin: 10px 0;\n    width: 100%;\n}\n .c1 {\n    margin-top: 76px;\n    margin-bottom: 60px;\n}\n .Privacy-heading {\n    float: left;\n    width: 100%;\n    text-align: center;\n    color: #fb5f66!important;\n    font-size: 42px;\n    line-height: 0px;\n    font-family: montserratultra_light;\n    margin-bottom: 40px;\n    margin-top: 74px;\n}\n .Privacy-subheading {\n    color: #fb6c73;\n    font-size: 24px;\n    font-family: montserratlight;\n    text-align: left;\n    width: 100%;\n    float: left;\n    display: block;\n    text-transform: uppercase;\n    margin-top: 30px;\n    margin-bottom: 10px;\n}\n p,h5,.li-style {\n    font-family: montserratlight;\n}\n h5 {\n    float: left;\n    width: 100%;\n    font-size: 14px;\n    color: #fb6c73;\n    margin-bottom: 20px;\n    margin-top: 20px;\n    line-height: 1.4;\n}\n .Privacy-subheading {\n    color: #fb6c73;\n    font-size: 24px;\n    font-family: montserratlight;\n    text-align: left;\n    width: 100%;\n    float: left;\n    display: block;\n    text-transform: uppercase;\n    margin-top: 30px;\n}\n .li-style {\n    color: #62696d;\n    font-size: 13px;\n    float: left;\n    width: 100%;\n    margin-bottom: 10px;\n    list-style: disc;\n}\n .l1 {\n    margin-bottom: 27px;\n}\n .Privacy-subheading {\n    color: #fb6c73;\n    font-size: 24px;\n    font-family: montserratlight;\n    text-align: left;\n    width: 100%;\n    float: left;\n    display: block;\n    text-transform: uppercase;\n    margin-top: 30px;\n}\n p a:hover, p a:visited {\n    text-decoration: none;\n}\n p a {\n    color: #fb5f66;\n}\n @media (min-width:320px) and (max-width:720px){\n\n   .c1{\n        margin-top: 0;\n       \n    }\n    .container{\n        padding: 0 30px;\n    }\n     .Privacy-heading{\n        display: block;\n        font-size: 30px!important;\n        margin-top: 60px!important;\n    }\n    .Privacy-subheading {\n        font-size: 18px !important;\n        line-height: 24px!important;\n        margin-bottom: 10px;\n    }\n   h5, p {\n        line-height: 1.6!important;\n    }\n}\n @media (max-width: 990px) and (min-width: 769px)\n{\n    .c1 {\n        margin-top: 0px;\n        margin-bottom: 60px;\n        padding: 0 30px;\n    }\n     .Privacy-heading, .err .section-1 {\n        margin-top: 60px;\n    }\n     .Privacy-heading, .err .section-1 {\n        display: block;\n        font-size: 30px;\n    }\n     .Privacy-subheading {\n        font-size: 18px !important;\n        line-height: 24px;\n        margin-bottom: 10px;\n    }\n   h5,  p {\n        line-height: 1.6;\n    }\n\n    .l1 {\n        margin-bottom: 15px;\n    }\n    ul{\n        margin-bottom: 0px!important;\n    }\n}\n @media (max-width: 768px) and (min-width: 320px)\n{\n .Privacy-heading, .err .section-1 {\n    display: block;\n    margin-top: 60px;\n    font-size: 30px;\n}\n.c1 {\n    padding: 0 30px;\n    margin-top: 0;\n}\n}\n @media (max-width: 1024px) and (min-width: 0px)\n{\n.Privacy-heading, .err .section-1 {\n    display: block;\n    font-size: 30px;\n}\n.Privacy-subheading {\n    font-size: 18px !important;\n    line-height: 24px;\n}\n}\n @media (max-width: 1480px) and (min-width: 990px)\n{\n    .c1 {\n        margin-top: 56px;\n      \n    }\n}"

/***/ }),

/***/ "./src/app/shared/components/privacy/privacy.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container c1\">\n\n  <div class=\"row\">\n      <div class=\"col-lg-12 Privacy-heading\">\n         Privacy Policy\n      </div>\n     \n  </div>\n \n  <div class=\"row\">\n      <div class=\"col-lg-12 Privacy-subheading\">\n          Your Outgrow Account\n      </div>\n  </div>\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p >\tIf you create or take a calculator or interactive experience on the Outgrow site, you are fully responsible for all activities that occur under the account and any other actions taken in connection with your account. You must not use your account in a misleading or unlawful manner, including in a manner intended to trade on the name or reputation of others, and Outgrow may change content that it considers inappropriate or unlawful, or otherwise likely to cause Outgrow liability. You must immediately notify Outgrow of any unauthorized uses of your content, your account or any other breaches of security. Outgrow will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions.\n           </p></div>\n           </div>\n\n           \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <h5>\n                If you create calculators or interactive experiences - i.e are a buyer of Outgrow services and use Outgrow to build calculators or interactive experiences that your customers, employees, users or other stakeholders take.\n          </h5>\n       \n      </div>\n  </div>\n\n \n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <ul>\n                    <li class=\"li-style\">\n                        Your calculator or interactive experience responses are owned by you. While Outgrow may use aggregate statistics and data to gain insight into the use of our product, we do not sell or provide the responses to anyone without your permission.\n                    </li>\n                    <li class=\"li-style l1\">\n                        Your scores, leads, and offer data are owned by you. We do not use any of this data for ourselves or provide it to third parties. It is your responsibility to use this data according to the governing law and best practices of the Children’s Online Privacy Protection Act (COPPA) and Controlling the Assault of Non-Solicited Pornography and Marketing Acto of 2003 (CAN-SPAM). Outgrow is not responsible for your misuse of this information.\n                    </li>\n                    <li class=\"li-style\">\n                        We highly recommend that you clearly state that the calculator or interactive experience is providing an estimate.\n                    </li>\n                </ul>\n          \n      </div>\n  </div>\n\n\n  \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <h5>\n            If you take calculators or interactive experiences - i.e are a user of a calculator or interactive experience that is hosted by outgrow and created by Outgrow or Outgrow’s customers.\n        </h5>\n      </div>\n  </div>\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <ul>\n              <li class=\"li-style\" >Your responses are owned by the calculator or interactive experience creator. It is up to the calculator or interactive experience creator how they use these responses. All responses are anonymous unless you have provided your user data.</li><br>\n              <li class=\"li-style\">You may be asked for your email address and/or other personally-identifying information in connection with tracking scores, capturing leads, or presenting offers. Outgrow does not use this information other than to display or provide it to the calculator or interactive experience creator.</li><br>\n\n          </ul>\n          \n      </div>\n  </div>\n\n\n\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n         <h4 class=\"Privacy-subheading\"> Your Content</h4>\n      </div>\n  </div>\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p >You own the rights to the content you post on Outgrow. We do not claim ownership over it. However, by posting content to Outgrow, you give us permission to use your content, free of charge, to do the things we need to do to provide Outgrow Services which may include storing, displaying, reproducing, and distributing your content. By publishing on Outgrow, you agree to allow others to view your content. You are free to delete your content at any time. If you delete your account or content, it may be unrecoverable.\n      <br>\n      <p>Here are some things we forbid. By using Outgrow, you promise not to do any of the following things:\n          <ul>\n              <li class=\"li-style\">post any comments, material, links, text, images, audio, or video (any such material, “Content”) containing any viruses, worms, malware, Trojan horses or other harmful or destructive content;</li>\n              <li class=\"li-style\">post Content without permission from the owner;</li>\n              <li class=\"li-style\">post Content that is pornographic, contains threats, incites violence, or violates the rights of any third party.</li>\n              <li class=\"li-style\">probe, scan, or test our systems or networks</li>\n              <li class=\"li-style\">break or circumvent any technologies we have put in place for security or authentication;</li>\n              <li class=\"li-style\" >attempt to access Outgrow Services by means other than currently available;</li>\n              <li class=\"li-style\">scrape Outgrow Services or Content;</li>\n              <li class=\"li-style\">violate the intellectual property or personal privacy rights of others, causing harm to others, or violating any criminal laws where Outgrow has a physical location</li>\n\n          </ul>\n  </div>\n  </div>  \n\n\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">FEES, PAYMENTS & CANCELLATION POLICY</h4>\n   \n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">You agree to pay for the Services you use on the Outgrow Site in accordance the pricing and payment terms presented to you for that service. Fees paid by you are non-refundable.</p>\n          <p class=\"p_lists\">For subscriptions, you will be billed in advance on a recurring cycle for the period you have selected (monthly or annually or quarterly) at the beginning of that period. Your subscription will automatically renew at the end of each period unless you cancel automatic renewal at least 48 hours before your next renewal date.</p>\n          <p class=\"p_lists\">Outgrow may change the fees charged for Services at any time, provided that, for subscription Services, the change will become effective only upon the next renewal date.</p>\n      </div>\n  </div>\n\n\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">CANCELLATION POLICY</h4>\n        \n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Your subscription will automatically renew at the end of each period unless you cancel automatic renewal at least 48 hours before your next renewal date. If you decide to cancel, no refund will be provided for fees paid or past bills and your service will remain active through the end of the existing license period.</p>\n          <p class=\"p_lists\">At the end of the license period, you will no longer be charged. If you cancel within 48 hours of your next renewal date, the next renewal will go through but that will be your last renewal and the cancellation will take effect on the following renewal as it is required that you cancel at least 48 hours prior to the renewal date. Note: The length of your license can be longer than your billing period for example an annual license, billed semi-annually would mean that a cancellation on month 4 will take effect at the end of the annual license and the second semiannual bill on month 6 will continue as well as the remaining 8 months of the subscription.</p>\n\n      </div>\n  </div>\n\n  \n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">UPGRADES</h4>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">A downgrade is when a paying customer chooses to change their plan from a more expensive to a less expensive (but still paid) plan.</p>\n          <p class=\"p_lists\">When downgrading in the middle of a billing period, your account downgrade will apply at the end of the period and to the following period but will not impact the existing billing period.</p>\n\n      </div>\n  </div>\n\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">DOWNGRADES</h4>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">An upgrade is when a paying customer decides to change their current plan to a more expensive paid plan.</p>\n          <p class=\"p_lists\">When upgrading in the middle of a billing period, you will be given a pro-rated credit (not a refund) for the current plan which will be applied to the pro-rated charges for the upgraded plan. At the end of the billing period, the upgraded plan will auto-renew.</p>\n\n      </div>\n  </div>\n\n\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">THINGS THAT WE FORBID</h4>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Here are some things we forbid. By using Outgrow, you promise not to do any of the following things; posting any comments, material, links, text, images, audio, or video (any such material, “Content”) containing any viruses, worms, malware, Trojan horses or other harmful or destructive content; posting Content without permission from the owner; posting Content that is pornographic, contains threats, incites violence, or violates the rights of any third party; probe, scan, or test our systems or networks; break or circumvent any technologies we have put in place for security or authentication; attempt to access Outgrow Services by means other than currently available; scrape Outgrow Services or Content; violating the intellectual property or personal privacy rights of others, causing harm to others, or violating any criminal laws where Outgrow has a physical location.</p>\n      </div>\n  </div>\n\n\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">RESPONSIBILITY OF VISITORS</h4>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Outgrow has not reviewed, and cannot review, all of the material posted to the Site or any third party site that the Site links to, and cannot therefore be responsible for that material’s content, use or effects. By operating the Site, Outgrow does not represent or imply that it endorses the material there posted, or that it believes such material to be accurate, useful or non-harmful. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. The Site may contain content that is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other errors. The Site may also contain material that violates the privacy or publicity rights, or infringes the intellectual property and other proprietary rights, of third parties, or the downloading, copying or use of which is subject to additional terms and conditions, stated or unstated. Outgrow disclaims any responsibility for any harm resulting from the use by visitors of the Site, or from any downloading by those visitors of content there posted.</p> \n      </div>\n  </div>\n\n\n \n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">PRIVACY</h4>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">If you’re outside the United States, you consent to the transfer, storage, and processing of your information – including but not limited to the content you posted or transferred to the site and any personal information – to and within the United States and other countries.</p> \n      </div>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">Gathering of Personally-Identifying Information</h4>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Certain visitors to Outgrow’s websites choose to interact with Outgrow in ways that require Outgrow to gather personally-identifying information. The amount and type of information that Outgrow gathers depends on the nature of the interaction. In each case, Outgrow collects such information only as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with Outgrow. Outgrow does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.</p> \n      </div>\n  </div>\n\n\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">Aggregated Statistics</h4>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Outgrow may collect statistics about the behavior of visitors to its websites. Outgrow may display this information publicly or provide it to others. However, Outgrow does not disclose personally-identifying information other than as described below.</p> \n      </div>\n  </div>\n\n\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n            <h4 class=\"Privacy-subheading\">Protection of Certain Personally-Identifying Information</h4>\n      </div>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <p class=\"p_lists\">Outgrow discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Outgrow’s behalf or to provide services available at Outgrow’s websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Outgrow’s websites, you consent to the transfer of such information to them. Outgrow will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above. Outgrow discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Outgrow believes in good faith that disclosure is reasonably necessary to protect the property or rights of Outgrow, third parties or the public at large. If you are a registered user of a Outgrow website and have supplied your email address, Outgrow may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with Outgrow and our products. We primarily use our various blogs to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Outgrow takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p> \n      </div>\n  </div>\n  <br><br>\n  <p>More details about our global privacy policy can be found <a href=\"/global-data-privacy-policy\" class=\"text-red\">here </a></p><br> <br>\n  <p>More information about our cookie policy can be found <a href=\"/cookies-privacy-policy\" class=\"text-red\">here </a></p>"

/***/ }),

/***/ "./src/app/shared/components/privacy/privacy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent(router, title) {
        title.setTitle("Privacy Policy | Outgrow");
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        var load = document.querySelector('.preloader');
        load.classList.add('hide');
        var header = document.querySelector('.navbar-fixed-top');
        header.classList.add('show');
        var footer = document.querySelector('.footer-14');
        footer.classList.add('show');
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-privacy',
            template: __webpack_require__("./src/app/shared/components/privacy/privacy.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/privacy/privacy.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]])
    ], PrivacyComponent);
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/terms/terms.component.css":
/***/ (function(module, exports) {

module.exports = "\np {\n    color: #62696d;\n    font-size: 13px;\n    float: left;\n    display: block;\n    margin: 10px 0;\n    width: 100%;\n}\n  .c1 {\n    margin-top: 55px;\n    margin-bottom: 60px;\n}\n  .heading{\n    float: left;\n    width: 100%;\n    text-align: center;\n    color: #fb5f66!important;\n    font-size: 42px;\n    line-height: 0px;\n    font-family: montserratultra_light;\n    margin-bottom: 40px;\n    margin-top: 100px;\n}\n  .tos_head  {\n    color: #fb6c73;\n    font-size: 24px;\n    font-family: montserratlight;\n    text-align: left;\n    width: 100%;\n    float: left;\n    display: block;\n    text-transform: uppercase;\n    margin-top: 30px;\n}\n  p,h5,.li-style {\n    font-family: montserratlight;\n}\n  h5 {\n    float: left;\n    width: 100%;\n    font-size: 14px;\n    color: #fb6c73;\n    margin-bottom: 20px;\n    margin-top: 20px;\n    line-height: 1.4;\n}\n  .li-style {\n    color: #62696d;\n    font-size: 13px;\n    float: left;\n    width: 100%;\n    margin-bottom: 10px;\n    list-style: disc;\n}\n  .l1 {\n    margin-bottom: 27px;\n}\n  p a:hover, p a:visited {\n    text-decoration: none;\n}\n  p a {\n    color: #fb5f66;\n}\n  @media (min-width:320px) and (max-width:720px){\n\n   .c1{\n        margin-top: 0;\n       \n    }\n    .container{\n        padding: 0 30px;\n    }\n     .heading{\n        display: block;\n        font-size: 30px!important;\n        margin-top: 60px!important;\n        line-height: 0!important;\n    }\n    .tos_head {\n        font-size: 18px !important;\n        line-height: 24px!important;\n        margin-bottom: 10px;\n    }\n   h5, p {\n        line-height: 1.6!important;\n    }\n}\n  @media (max-width: 990px) and (min-width: 769px)\n{\n    .c1 {\n        margin-top: 0px;\n        margin-bottom: 60px;\n        padding: 0 30px;\n    }\n     .heading, .err .section-1 {\n        margin-top: 60px;\n    }\n     .heading, .err .section-1 {\n        display: block;\n        font-size: 30px;\n    }\n     .tos_head {\n        font-size: 18px !important;\n        line-height: 24px;\n        margin-bottom: 10px;\n    }\n   h5,  p {\n        line-height: 1.6;\n    }\n\n    .l1 {\n        margin-bottom: 15px;\n    }\n    ul{\n        margin-bottom: 0px!important;\n    }\n}\n  @media (max-width: 768px) and (min-width: 320px)\n{\n .heading, .err .section-1 {\n    display: block;\n    margin-top: 60px;\n    font-size: 30px;\n}\n.c1 {\n    padding: 0 30px;\n    margin-top: 0;\n}\n.tos_head {\n    font-size: 18px !important;\n    line-height: 24px;\n}\n.heading{\n    margin-bottom: 16px;\n}\n}\n  @media (max-width: 1024px) and (min-width: 0px)\n{\n.heading, .err .section-1 {\n    display: block;\n    font-size: 30px;\n}\n.tos_head  {\n    font-size: 18px !important;\n    line-height: 24px;\n}\n}\n  @media (max-width: 1480px) and (min-width: 990px)\n{\n    .c1 {\n        margin-top: 30px;\n      \n    }\n}"

/***/ }),

/***/ "./src/app/shared/components/terms/terms.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container c1\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"heading\">Terms of Services</p>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\"> TERMINATION OF SERVICES</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">Outgrow has the right to limit, suspend, or stop providing the Services to you if you fail to comply with these Terms.</p>\n    </div>\n  </div>\n\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\"> COPYRIGHT INFRINGEMENT AND DMCA POLICY</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">As Outgrow asks others to respect its intellectual property rights, it respects the intellectual property rights of\n        others. Outgrow deals with copyright infringement in accordance to the Digital Millennium Copyright Act. If you believe\n        that material located on or linked to by Outgrow.co violates your copyright, you are encouraged to notify Outgrow.\n        Outgrow will respond to all such notices, including as required or appropriate by removing the infringing material\n        or disabling all links to the infringing material. Outgrow will terminate a visitor’s access to and use of the Site\n        if, under appropriate circumstances, the visitor is determined to be a repeat infringer of the copyrights or other\n        intellectual property rights of Outgrow or others. In the case of such termination, Outgrow will have no obligation\n        to provide a refund of any amounts previously paid to Outgrow.</p>\n\n      <p class=\"tos_answers\">The contact information for Outgrow’s designated agent for receipt of notices of claimed infringement is - questions@outgrow.co.</p>\n    </div>\n  </div>\n\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">INTELLECTUAL PROPERTY</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">You retain ownership of all copyrights and any other intellectual property rights in your Content. Outgrow (and/or\n        other third parties) retains ownership of intellectual property rights in all content and material other than user\n        Content.</p>\n\n      <p class=\"tos_answers\">By submitting your Content to Outgrow, you give Outgrow a non-exclusive worldwide, royalty-free, sublicensable, transferable\n        license to utilize all copyright rights now in existence or that may arise in the future with respect to your Content,\n        in any medium that now exists or may arise in the future, as well as to do anything else that is reasonably appropriate\n        to our Services and its use of your Content (including, but not limited to, use of your name in association with\n        your Content to identify you as the contributor). The license has no restriction as to the medium, dissemination\n        method, type of Service we may offer, or the type of systems or products that may be used in conjunction with your\n        Content.</p>\n      <p class=\"tos_answers\">This license shall remain in effect for so long as your Content is available on Outgrow. You are free to remove or\n        delete your Content at any time, in which case this license shall terminate after a commercially reasonable period\n        of time, except for comments, the license to which is perpetual and irrevocable. You understand and agree, however,\n        that even if you delete Content, Outgrow may retain, but not display or distribute, server copies of your Content.</p>\n      <p class=\"tos_answers\">You represent that you have all of the necessary rights to grant this license to Outgrow for all Content you submit.</p>\n      <p class=\"tos_answers\">Outgrow grants you a worldwide, non-exclusive, non-sublicensable, and non-transferable license to download, store,\n        view, display, perform, redistribute, and create derivative works of Content solely in connection with your use of,\n        and in accordance with the Terms of, Outgrow Services.</p>\n    </div>\n  </div>\n\n\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">DISCLAIMER OF WARRANTIES.</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">The Site is provided “as is”. Outgrow and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither Outgrow nor its suppliers and licensors, makes any warranty that the Site will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, the Site at your own discretion and risk.</p>\n    </div>\n  </div>\n\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">LIMITATION OF LIABILITY</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">In no event will Outgrow, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data; or (iv) for any amounts that exceed the fees paid by you to Outgrow under this agreement during the twelve (12) month period prior to the cause of action. Outgrow shall have no liability for any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law.</p>\n    </div>\n  </div>\n\n\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">GENERAL REPRESENTATION AND WARRANTY</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">You represent and warrant that (i) your use of the Site will be in strict accordance with the privacy section, with this Agreement and with all applicable laws and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported from the United States or the country in which you reside) and (ii) your use of the Site will not infringe or misappropriate the intellectual property rights of any third party.</p>\n    </div>\n  </div>\n\n\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">INDEMNIFICATION</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">You agree to indemnify and hold harmless Outgrow, its contractors, and its licensors, and their respective directors, officers, employees and agents from and against any and all claims and expenses, including attorneys’ fees, arising out of your use of the Site, including but not limited to your violation of this Agreement.</p>\n    </div>\n  </div>\n\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">THIS IS A BINDING AGREEMENT</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">By accessing or using any part of the web site, you agree to become bound by the terms and conditions of this agreement. If you do not agree to all the terms and conditions of this agreement, then you may not access the Site or use any services. If these terms and conditions are considered an offer by Outgrow, acceptance is expressly limited to these terms.</p>\n    </div>\n  </div>\n\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_head\">WE CAN CHANGE OUR SERVICES</p>\n    </div>\n  </div>\n \n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <p class=\"tos_answers\">We may change any aspect of the service we want, or even stop it, at any time without giving you notice. We can also terminate or restrict access to it at any time, in our sole discretion. Termination of your access and use of Outgrow Services shall not relieve you of any obligations arising or accruing before the termination.</p>\n    </div>\n  </div>\n\n\n  \n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p class=\"tos_head\">FEES, PAYMENTS & CANCELLATION POLICY</p>\n      </div>\n    </div>\n   \n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p class=\"tos_answers\">You agree to pay for the Services you use on the Outgrow Site in accordance the pricing and payment terms presented to you for that service. Fees paid by you are non-refundable.</p>\n        <p class=\"tos_answers\">For subscriptions, you will be billed in advance on a recurring cycle for the period you have selected (monthly or annually or quarterly) at the beginning of that period. Your subscription will automatically renew at the end of each period unless you cancel automatic renewal at least 48 hours before your next renewal date.</p>\n        <p class=\"tos_answers\">Outgrow may change the fees charged for Services at any time, provided that, for subscription Services, the change will become effective only upon the next renewal date.</p>\n\n      </div>\n    </div>\n\n    \n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p class=\"tos_head\">CANCELLATION POLICY</p>\n        </div>\n      </div>\n     \n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <p class=\"tos_answers\">Your subscription will automatically renew at the end of each period unless you cancel automatic renewal at least 48 hours before your next renewal date. If you decide to cancel, no refund will be provided for fees paid or past bills and your service will remain active through the end of the existing license period.</p>\n          <p class=\"tos_answers\">At the end of the license period, you will no longer be charged. If you cancel within 48 hours of your next renewal date, the next renewal will go through but that will be your last renewal and the cancellation will take effect on the following renewal as it is required that you cancel at least 48 hours prior to the renewal date. Note: The length of your license can be longer than your billing period for example an annual license, billed semi-annually would mean that a cancellation on month 4 will take effect at the end of the annual license and the second semiannual bill on month 6 will continue as well as the remaining 8 months of the subscription.</p>\n        </div>\n      </div>\n\n\n      \n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <p class=\"tos_head\">UPGRADES</p>\n          </div>\n        </div>\n       \n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <p class=\"tos_answers\">An upgrade is when a paying customer decides to change their current plan to a more expensive paid plan.</p>\n            <p class=\"tos_answers\">When upgrading in the middle of a billing period, you will be given a pro-rated credit (not a refund) for the current plan which will be applied to the pro-rated charges for the upgraded plan. At the end of the billing period, the upgraded plan will auto-renew.</p>\n          </div>\n        </div>\n\n\n      \n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <p class=\"tos_head\">DOWNGRADES</p>\n            </div>\n          </div>\n         \n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <p class=\"tos_answers\">A downgrade is when a paying customer chooses to change their plan from a more expensive to a less expensive (but still paid) plan.</p>\n              <p class=\"tos_answers\">When downgrading in the middle of a billing period, your account downgrade will apply at the end of the period and to the following period but will not impact the existing billing period.</p>      \n            </div>\n          </div>\n  \n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p class=\"tos_head\">MISCELLANEOUS</p>\n      </div>\n    </div>\n   \n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p class=\"tos_answers\">This Agreement constitutes the entire agreement between Outgrow and you concerning the subject matter hereof, and they may only be modified by a written amendment signed by an authorized executive of Outgrow, or by the posting by Outgrow of a revised version. Except to the extent applicable law, if any, provides otherwise, this Agreement, any access to or use of the Site will be governed by the laws of the state of Delaware, U.S.A. Except for claims for injunctive or equitable relief or claims regarding intellectual property rights (which may be brought in any competent court without the posting of a bond), any dispute arising under this Agreement shall be finally settled in accordance with the Comprehensive Arbitration Rules of the Judicial Arbitration and Mediation Service, Inc. (“JAMS”) by three arbitrators appointed in accordance with such Rules. The arbitration shall take place in Delaware, in the English language and the arbitral decision may be enforced in any court. The prevailing party in any action or proceeding to enforce this Agreement shall be entitled to costs and attorneys’ fees. If any part of this Agreement is held invalid or unenforceable, that part will be construed to reflect the parties’ original intent, and the remaining portions will remain in full force and effect. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. You may assign your rights under this Agreement to any party that consents to, and agrees to be bound by, its terms and conditions; Outgrow may assign its rights under this Agreement without condition. This Agreement will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.</p>\n      </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/components/terms/terms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsComponent = /** @class */ (function () {
    function TermsComponent(router, title) {
        title.setTitle("Terms Of Services | Outgrow");
    }
    TermsComponent.prototype.ngOnInit = function () {
        var load = document.querySelector('.preloader');
        load.classList.add('hide');
        var header = document.querySelector('.navbar-fixed-top');
        header.classList.add('show');
        var footer = document.querySelector('.footer-14');
        footer.classList.add('show');
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__("./src/app/shared/components/terms/terms.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/terms/terms.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/shared/service/loading.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = /** @class */ (function () {
    function LoadingService() {
        // isLoading(){
        this.isLoading = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](true);
    }
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/shared/services/api-request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(_http) {
        this._http = _http;
    }
    ApiRequestService.prototype.gethref = function () {
        var href = window.location.href;
        var activeHeader = href.toString().split('/')[3];
        return activeHeader;
    };
    ApiRequestService.prototype.getAllCalculators = function (data) {
        var response = this._http.post('https://api.outgrow.co/api/v1/admin/getCalculators', data);
        return response;
    };
    ApiRequestService.prototype.getCategories = function () {
        return this._http.get("https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/category?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=Category!A2:Z");
    };
    ApiRequestService.prototype.getSubCategories = function (category) {
        var categoryKey = category.replace(" ", "") + "-Key";
        var url = "https://sheets.googleapis.com/v4/spreadsheets/1V954ZsJkGJ-AUYw62oefS8orYFZKk3Lzktjmyq6dG1w/values/category?key=AIzaSyAAH-UAXp3vTaZjwJkfdjqpOKzssWSmYNY&range=" + categoryKey + "!A2:Z";
        return this._http.get(url);
    };
    ApiRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiRequestService);
    return ApiRequestService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map