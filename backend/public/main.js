"use strict";
(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _besoeg_besoeg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./besoeg/besoeg.component */ 8756);
/* harmony import */ var _besoegmedlem_besoegmedlem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./besoegmedlem/besoegmedlem.component */ 3829);
/* harmony import */ var _besoegmedlem_edit_besoegmedlem_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./besoegmedlem-edit/besoegmedlem-edit.component */ 1730);
/* harmony import */ var _besoeg_edit_besoeg_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./besoeg-edit/besoeg-edit.component */ 9539);
/* harmony import */ var _opslag_opslag_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opslag/opslag.component */ 7790);
/* harmony import */ var _medlem_medlem_medlem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medlem/medlem/medlem.component */ 1692);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _home1_home1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home1/home1.component */ 9198);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./banner/banner.component */ 7068);
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video/video.component */ 7720);
/* harmony import */ var _videoall_videoall_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./videoall/videoall.component */ 6138);
/* harmony import */ var _besoeg_show_besoeg_show_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./besoeg-show/besoeg-show.component */ 5636);
/* harmony import */ var _jobsearch_jobsearch_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jobsearch/jobsearch.component */ 209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
















const routes = [
    { path: '', redirectTo: '/home1', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent },
    { path: 'home1', component: _home1_home1_component__WEBPACK_IMPORTED_MODULE_7__.Home1Component },
    { path: 'video', component: _video_video_component__WEBPACK_IMPORTED_MODULE_9__.VideoComponent },
    { path: 'videoall', component: _videoall_videoall_component__WEBPACK_IMPORTED_MODULE_10__.VideoallComponent },
    { path: 'banner', component: _banner_banner_component__WEBPACK_IMPORTED_MODULE_8__.BannerComponent },
    { path: 'besoeg', component: _besoeg_besoeg_component__WEBPACK_IMPORTED_MODULE_0__.BesoegComponent },
    { path: 'besoeg-medlem/:id', component: _besoegmedlem_besoegmedlem_component__WEBPACK_IMPORTED_MODULE_1__.BesoegMedlemComponent },
    { path: 'besoeg-medlem-edit/:besoegId/:medlemId/:besoegText', component: _besoegmedlem_edit_besoegmedlem_edit_component__WEBPACK_IMPORTED_MODULE_2__.BesoegMedlemEditComponent },
    { path: 'besoeg-edit/:id', component: _besoeg_edit_besoeg_edit_component__WEBPACK_IMPORTED_MODULE_3__.BesoegEditComponent },
    { path: 'besoeg-show/:id', component: _besoeg_show_besoeg_show_component__WEBPACK_IMPORTED_MODULE_11__.BesoegShowComponent },
    { path: 'opslag', component: _opslag_opslag_component__WEBPACK_IMPORTED_MODULE_4__.OpslagComponent },
    { path: 'medlem/home', component: _medlem_medlem_medlem_component__WEBPACK_IMPORTED_MODULE_5__.MedlemComponent },
    { path: 'jobsearch', component: _jobsearch_jobsearch_component__WEBPACK_IMPORTED_MODULE_12__.JobsearchComponent },
    { path: '**', component: _besoeg_besoeg_component__WEBPACK_IMPORTED_MODULE_0__.BesoegComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _data_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/utilities.service */ 8463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);

















function AppComponent_div_14_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 44)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", item_r12.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.maticon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
} }
function AppComponent_div_14_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 45)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r12.routerLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.maticon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
} }
function AppComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_14_a_1_Template, 4, 3, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_14_a_2_Template, 4, 3, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r12.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r12.target);
} }
function AppComponent_mat_icon_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Exit Full Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Full Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_32_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 49)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", item_r17.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r17.maticon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r17.name, " ");
} }
function AppComponent_div_32_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 50)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", item_r17.routerLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r17.maticon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r17.name, " ");
} }
function AppComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_32_a_1_Template, 4, 3, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_32_a_2_Template, 4, 3, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !item_r17.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r17.target);
} }
function AppComponent_mat_icon_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Exit Full Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Full Screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 53)(4, "a", 54)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Tilbage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r11.textTop, " ");
} }
class AppComponent {
    constructor(observer, router, utilitiesService, document) {
        this.observer = observer;
        this.router = router;
        this.utilitiesService = utilitiesService;
        this.document = document;
        this.title = 'app';
        this.textTop = '';
        this.fullScreen = false;
        this.menuArr = [];
        this.baseUrl = this.utilitiesService.getApiUrl();
        //pdfFile = "http://localhost:4200/assets/Finn_Skjoldager_CV_IT6.pdf";
        this.pdfFile = this.baseUrl + '/assets/Finn_Skjoldager_CV_IT6.pdf';
        this.sharDate = 'Deler';
        this.elem = document.documentElement;
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                this.currentRoute = event.url;
                console.log(event);
            }
        });
        this.createMenuArr();
    }
    fullScreenChange() {
        console.log('Recieved');
        this.fullScreen = !this.fullScreen;
    }
    addMenu(name, routerLink, maticon, target) {
        let item = new MenuItem();
        item.name = name;
        item.routerLink = routerLink;
        item.maticon = maticon;
        item.target = target;
        this.menuArr.push(item);
    }
    createMenuArr() {
        this.addMenu('CV', this.pdfFile, 'person', true);
        this.addMenu('Besøg', '/besoeg', 'work', false);
        this.addMenu('Opslag', '/opslag', 'business', false);
        this.addMenu('Medlem', '/medlem/home', 'people', false);
        //this.addMenu('Elforbrug', this.baseUrl+'/opslag/voreselforbrug', 'message',true);
        this.addMenu('Elforbrug', '/opslag/voreselforbrug', 'message', false);
        this.addMenu('Jobsearch', '/jobsearch', 'message', false);
        //this.addMenu('Login', '/login', 'lock');
    }
    doAlert(value) {
        // alert(value);
    }
    ngAfterViewInit() {
        /*
        this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
        */
    }
    goFullScreen(fullScreen) {
        if (fullScreen) {
            this.openFullscreen();
        }
        else {
            this.closeFullscreen();
        }
    }
    openFullscreen() {
        if (this.elem.requestFullscreen) {
            this.elem.requestFullscreen();
        }
        else if (this.elem.mozRequestFullScreen) {
            /* Firefox */
            this.elem.mozRequestFullScreen();
        }
        else if (this.elem.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.elem.webkitRequestFullscreen();
        }
        else if (this.elem.msRequestFullscreen) {
            /* IE/Edge */
            this.elem.msRequestFullscreen();
        }
    }
    /* Close fullscreen */
    closeFullscreen() {
        if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
        }
        else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
        }
        else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
        }
        else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fullscreenchange", function AppComponent_fullscreenchange_HostBindingHandler($event) { return ctx.fullScreenChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("webkitfullscreenchange", function AppComponent_webkitfullscreenchange_HostBindingHandler($event) { return ctx.fullScreenChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("mozfullscreenchange", function AppComponent_mozfullscreenchange_HostBindingHandler($event) { return ctx.fullScreenChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"])("MSFullscreenChange", function AppComponent_MSFullscreenChange_HostBindingHandler($event) { return ctx.fullScreenChange($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, decls: 81, vars: 11, consts: [["color", "primary1", 1, "app-toolbar", 2, "background-color", "rgb(237, 234, 222)"], [2, "padding-left", "6px"], ["src", "assets/logo.png", "width", "40px", 2, "margin-left", "0px", "margin-right", "5px"], ["routerLink", "/", "id", "headername"], ["src", "assets/Lavarel.png", "width", "84px", 2, "margin-left", "1px"], ["src", "assets/angular.png", "width", "84px", 2, "margin-left", "1px"], [1, "flexExpand"], ["fxShow", "true", "fxHide.lt-md", "true", "center", ""], ["routerLink", "/home", "mat-button", ""], ["src", "assets/succes1.png", "width", "35px"], ["style", "display: inline-block;", 4, "ngFor", "ngForOf"], [3, "click"], [4, "ngIf"], ["class", "icon_space", 4, "ngIf"], ["mat-icon-button", "", "fxShow", "true", "fxHide.gt-sm", "", 3, "click"], [2, "padding-bottom", "0px", "color", "rgb(35, 35, 156)", "transform", "scale(1.4)"], ["fxFlexFill", "", 2, "background-color", "white"], ["fxHide.gt-sm", "true", 3, "click"], ["sidenav", ""], ["routerLink", "/home", "mat-list-item", ""], [4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "click"], ["fxFlexFill", ""], ["style", "margin:10px", 4, "ngIf"], ["id", "outer"], [1, "inner"], ["id", "homeImg"], ["src", "assets/Home1.png", "width", "50px"], [1, "textFooter", 2, "font-size", "15pt"], ["id", "info"], ["src", "assets/phone.png", "width", "30px"], ["target", "_blank", "href", "tel:30324276"], [1, "space10"], ["src", "assets/mail3.png", "width", "30px"], ["target", "_blank", "href", "mailto:finn.skjold@gmail.com"], ["src", "assets/www.png", "width", "30px"], ["target", "_blank", "href", "http://finnskjold.dk"], ["src", "assets/LinkedIn_icon.svg.png", "width", "30px", 2, "margin-left", "8px"], ["target", "_blank", "href", "https://www.linkedin.com/in/finn-skjoldager-821b138/"], ["src", "assets/facebook.png", "width", "40px"], ["target", "_blank", "href", "https://www.facebook.com/finn.skjoldager"], [2, "display", "inline-block"], ["mat-button", "", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "mat-button", "", 3, "href", 4, "ngIf"], ["mat-button", "", 3, "routerLink"], ["target", "_blank", "mat-button", "", 3, "href"], [1, "icon_space"], ["mat-list-item", "", 3, "routerLink", 4, "ngIf"], ["target", "_blank", "mat-list-item", "", 3, "href", 4, "ngIf"], ["mat-list-item", "", 3, "routerLink"], ["target", "_blank", "mat-list-item", "", 3, "href"], [2, "margin", "10px"], [1, "textTop"], [2, "float", "right"], ["routerLink", "..", "mat-button", "", 1, "textTop"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 0)(2, "mat-toolbar-row", 1)(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Finn Skjoldager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4)(8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Hvad vil jeg ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_div_14_Template, 3, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener() { return ctx.goFullScreen(!ctx.fullScreen); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppComponent_mat_icon_16_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_mat_icon_17_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_span_18_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_span_19_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r5.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-sidenav-container", 16)(26, "mat-sidenav", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_mat_sidenav_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r5.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-nav-list")(29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Hvad vil jeg ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, AppComponent_div_32_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_33_listener() { return ctx.goFullScreen(!ctx.fullScreen); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, AppComponent_mat_icon_34_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, AppComponent_mat_icon_35_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, AppComponent_span_36_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, AppComponent_span_37_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_38_listener() { return ctx.doAlert("ok"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Luk ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-sidenav-content", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, AppComponent_div_43_Template, 8, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 24)(46, "div", 25)(47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Finn Skjoldager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Visbjerg Hegn 226");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " 8320 M\u00E5rslet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "3032 4276");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 32)(62, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "finn.skjold@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 32)(67, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "finnskjold.dk");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "div", 32)(77, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fullScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.textTop != "");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarRow, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatAnchor, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.FlexFillDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__.DefaultShowHideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: [".example-icon[_ngcontent-%COMP%] {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n#headername[_ngcontent-%COMP%]{\r\n  color:rgb(35, 35, 156);\r\n  font-family: 'RedHat';\r\n  font-size: 14pt;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n}\r\n\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 1 100%;\r\n  }\r\n\r\n.mat-sidenav-content1[_ngcontent-%COMP%] {\r\n    background: #71FA4C;\r\n    height: 100%;\r\n}\r\n\r\nmat-toolbar-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .inner[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], mat-nav-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color:rgb(35, 35, 156);\r\n  font-family: 'RedHat';\r\n  font-size: 12pt;\r\n}\r\n\r\n.app-toolbar[_ngcontent-%COMP%] {\r\n  position: sticky;\r\n  position: -webkit-sticky; \r\n  top: 0; \r\n  z-index: 1000; \r\n  \r\n}\r\n\r\n.flexExpand[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.divVert[_ngcontent-%COMP%]{\r\n  float: left;\r\n  clear: none;\r\n}\r\n\r\n#outer[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: rgb(237, 234, 222); \r\n  padding-top:20px; \r\n  padding-bottom:20px;\r\n}\r\n\r\n.inner[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  display: inline-block;\r\n  margin-left:20px;\r\n}\r\n\r\n#homeImg[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  margin-right: 15px;\r\n}\r\n\r\n.textFooter[_ngcontent-%COMP%], .textFooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  padding: 0px;\r\n  margin-top: 10px;\r\n  text-align: left;\r\n  color:rgb(35, 35, 156);\r\n  font-family: 'RedHat';\r\n  font-size: 12pt;\r\n}\r\n\r\n#info[_ngcontent-%COMP%]{\r\n  margin-left: 5px;\r\n  margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCOztBQUVGO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCLEVBQUUseUJBQXlCO0VBQ25ELE1BQU0sRUFBRSx5Q0FBeUM7RUFDakQsYUFBYSxFQUFFLCtEQUErRDtFQUM5RSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWljb24ge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4jaGVhZGVybmFtZXtcclxuICBjb2xvcjpyZ2IoMzUsIDM1LCAxNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnUmVkSGF0JztcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gIH1cclxuICBcclxuLm1hdC1zaWRlbmF2LWNvbnRlbnQxIHtcclxuICAgIGJhY2tncm91bmQ6ICM3MUZBNEM7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxubWF0LXRvb2xiYXItcm93IGEsIC5pbm5lciBhLCBtYXQtbmF2LWxpc3QgYXtcclxuICBjb2xvcjpyZ2IoMzUsIDM1LCAxNTYpO1xyXG4gIGZvbnQtZmFtaWx5OiAnUmVkSGF0JztcclxuICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuLmFwcC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTsgLyogRm9yIG1hY09TL2lPUyBTYWZhcmkgKi9cclxuICB0b3A6IDA7IC8qIFNldHMgdGhlIHN0aWNreSB0b29sYmFyIHRvIGJlIG9uIHRvcCAqL1xyXG4gIHotaW5kZXg6IDEwMDA7IC8qIEVuc3VyZSB0aGF0IHlvdXIgYXBwJ3MgY29udGVudCBkb2Vzbid0IG92ZXJsYXAgdGhlIHRvb2xiYXIgKi9cclxuICAvKiBvcGFjaXR5OiAwLjc7ICovXHJcbn1cclxuLmZsZXhFeHBhbmQge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbi5kaXZWZXJ0e1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiBub25lO1xyXG59XHJcbiNvdXRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzNCwgMjIyKTsgXHJcbiAgcGFkZGluZy10b3A6MjBweDsgXHJcbiAgcGFkZGluZy1ib3R0b206MjBweDtcclxufVxyXG4uaW5uZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuI2hvbWVJbWd7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi50ZXh0Rm9vdGVyLC50ZXh0Rm9vdGVyIGF7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6cmdiKDM1LCAzNSwgMTU2KTtcclxuICBmb250LWZhbWlseTogJ1JlZEhhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG59XHJcbiNpbmZve1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufSJdfQ== */"] });
class MenuItem {
    constructor() {
        this.name = null;
        this.routerLink = null;
        this.maticon = null;
        this.target = null;
    }
}


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _besoeg_besoeg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./besoeg/besoeg.component */ 8756);
/* harmony import */ var _besoegmedlem_besoegmedlem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./besoegmedlem/besoegmedlem.component */ 3829);
/* harmony import */ var _besoegmedlem_edit_besoegmedlem_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./besoegmedlem-edit/besoegmedlem-edit.component */ 1730);
/* harmony import */ var _besoeg_edit_besoeg_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./besoeg-edit/besoeg-edit.component */ 9539);
/* harmony import */ var _data_dataservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/dataservice */ 4734);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _opslag_opslag_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./opslag/opslag.component */ 7790);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _medlem_medlem_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./medlem/medlem.module */ 6792);
/* harmony import */ var _home1_home1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home1/home1.component */ 9198);
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngu/carousel */ 8804);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./banner/banner.component */ 7068);
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video/video.component */ 7720);
/* harmony import */ var _besoeg_show_besoeg_show_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./besoeg-show/besoeg-show.component */ 5636);
/* harmony import */ var _videoall_videoall_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./videoall/videoall.component */ 6138);
/* harmony import */ var _jobsearch_jobsearch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./jobsearch/jobsearch.component */ 209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);






















//import { EditorModule } from '@tinymce/tinymce-angular';


//import { MatMomentDateModule } from '@angular/material-moment-adapter';









const materialModules = [
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
    //MatMomentDateModule,
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [_data_dataservice__WEBPACK_IMPORTED_MODULE_7__.DataService, { provide: 'Window', useFactory: () => window }], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.FlexLayoutModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
        _medlem_medlem_module__WEBPACK_IMPORTED_MODULE_9__.MedlemModule,
        materialModules,
        _ngu_carousel__WEBPACK_IMPORTED_MODULE_32__.NguCarouselModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _medlem_medlem_module__WEBPACK_IMPORTED_MODULE_9__.MedlemModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _besoeg_besoeg_component__WEBPACK_IMPORTED_MODULE_3__.BesoegComponent,
        _besoegmedlem_besoegmedlem_component__WEBPACK_IMPORTED_MODULE_4__.BesoegMedlemComponent,
        _besoegmedlem_edit_besoegmedlem_edit_component__WEBPACK_IMPORTED_MODULE_5__.BesoegMedlemEditComponent,
        _besoeg_edit_besoeg_edit_component__WEBPACK_IMPORTED_MODULE_6__.BesoegEditComponent,
        _opslag_opslag_component__WEBPACK_IMPORTED_MODULE_8__.OpslagComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _home1_home1_component__WEBPACK_IMPORTED_MODULE_10__.Home1Component,
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__.BannerComponent,
        _video_video_component__WEBPACK_IMPORTED_MODULE_12__.VideoComponent,
        _besoeg_show_besoeg_show_component__WEBPACK_IMPORTED_MODULE_13__.BesoegShowComponent,
        _videoall_videoall_component__WEBPACK_IMPORTED_MODULE_14__.VideoallComponent,
        _jobsearch_jobsearch_component__WEBPACK_IMPORTED_MODULE_15__.JobsearchComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__.MatListModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__.MatSidenavModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_27__.FlexLayoutModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatNativeDateModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_31__.CommonModule,
        _medlem_medlem_module__WEBPACK_IMPORTED_MODULE_9__.MedlemModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _ngu_carousel__WEBPACK_IMPORTED_MODULE_32__.NguCarouselModule], exports: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule, _medlem_medlem_module__WEBPACK_IMPORTED_MODULE_9__.MedlemModule] }); })();


/***/ }),

/***/ 7068:
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _slide_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../slide-animation */ 4690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngu/carousel */ 8804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);






function BannerComponent_ngu_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngu-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ani_r3 = ctx.animate;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@slider", ani_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", "url(" + item_r1 + ")");
} }
class BannerComponent {
    constructor() {
        this.path = 'assets/';
        this.images = [
            this.path + 'ABB-IRB2400.jpg',
            this.path + 'comp9.jpg',
            this.path + 'Dandoors.jpg',
            this.path + 'html.jpg',
            this.path + 'geosty.jpg',
        ];
        this.imagePos = 0;
        this.carouselBanner = {
            grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
            slide: 1,
            speed: 400,
            interval: {
                timing: 3000,
                initialDelay: 1000
            },
            point: {
                visible: true
            },
            load: 2,
            custom: 'banner',
            loop: true,
            touch: true,
            vertical: {
                enabled: false,
                height: 250
            },
            easing: 'cubic-bezier(0, 0, 0.2, 1)'
        };
        this.tempData = [];
        this.carouselTileItems$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.startWith)(-1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(30), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
            this.imagePos++;
            if (this.imagePos == this.images.length)
                this.imagePos = 0;
            console.log("map");
            const data = (this.tempData = [
                ...this.tempData,
                //this.images[Math.floor(Math.random() * this.images.length)]
                this.images[this.imagePos]
            ]);
            //console.log("imagePos "+this.imagePos);
            return data;
        }));
    }
    /* It will be triggered on every slide*/
    onmoveFn(data) {
        //console.log(data);
    }
    trackCarousel(_, item) {
        //console.log("trackCarousel");
        return item;
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 8, vars: 5, consts: [[1, "container"], [3, "inputs", "dataSource", "trackBy", "onMove"], ["NguCarouselPrev", "", 1, "leftRs"], [4, "nguCarouselDef"], ["NguCarouselNext", "", 1, "rightRs"], [1, "bannerStyle"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "ngu-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onMove", function BannerComponent_Template_ngu_carousel_onMove_1_listener($event) { return ctx.onmoveFn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, BannerComponent_ngu_item_5_Template, 2, 3, "ngu-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputs", ctx.carouselBanner)("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 3, ctx.carouselTileItems$))("trackBy", ctx.trackCarousel);
    } }, dependencies: [_ngu_carousel__WEBPACK_IMPORTED_MODULE_6__.NguCarousel, _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__.NguItemComponent, _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__.NguCarouselNextDirective, _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__.NguCarouselPrevDirective, _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__.NguCarouselDefDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".container[_ngcontent-%COMP%] {\n  width: 800px;\n  \n}\n\n.bannerStyle[_ngcontent-%COMP%] {\n  min-height: 500px;\n}\n\n\n\n@media screen and (max-width: 959px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n\n\n@media screen and (max-width: 599px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .bannerStyle[_ngcontent-%COMP%] {\n    background-repeat: no-repeat;\n    height: 187px;\n    background-size: 100% auto;\n  }\n}\n\n.leftRs[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  left: 0;\n  z-index: 1;\n}\n\n.rightRs[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  width: 50px;\n  height: 50px;\n  box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\n  border-radius: 999px;\n  right: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQTs7OztHQUFBO0FBS0Y7O0FBQ0M7RUFDSSxpQkFBQTtBQUVMOztBQUFBLHlCQUFBOztBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBR0Y7QUFDRjs7QUFEQSx3QkFBQTs7QUFDQTtFQUNFO0lBQ0UsV0FBQTtFQUdGO0VBQUE7SUFFRSw0QkFBQTtJQUVBLGFBQUE7SUFFQSwwQkFBQTtFQURGO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBREYiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICB3aWR0aDogODAwcHg7XHJcbiAgLypcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBtYXJnaW4tbGVmdDogMzUwcHg7XHJcbiAgKi9cclxuIH1cclxuIC5iYW5uZXJTdHlsZXtcclxuICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxufVxyXG4vKiBtZWRpdW0gc2l6ZSB2aWV3cG9ydCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLyogc21hbGwgc2l6ZSB2aWV3cG9ydCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vcGFkZGluZzo1MHB4O1xyXG4gIH1cclxuICAuYmFubmVyU3R5bGV7XHJcbiAgICAvLzgwMHg1MDBweFxyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgLy8gbWluLWhlaWdodDogMTg3cHg7XHJcbiAgICBoZWlnaHQ6IDE4N3B4O1xyXG4gICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICB9XHJcbiAgfVxyXG4ubGVmdFJzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5yaWdodFJzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiJdfQ== */"], data: { animation: [_slide_animation__WEBPACK_IMPORTED_MODULE_0__.slider] }, changeDetection: 0 });


/***/ }),

/***/ 9539:
/*!******************************************************!*\
  !*** ./src/app/besoeg-edit/besoeg-edit.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesoegEditComponent": () => (/* binding */ BesoegEditComponent),
/* harmony export */   "MY_DATE_FORMATS": () => (/* binding */ MY_DATE_FORMATS)
/* harmony export */ });
/* harmony import */ var _data_dataservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dataservice */ 4734);
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/model */ 2884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 3365);



//import { ModalService, IModalContent } from '../../core/modal/modal.service';
//import { GrowlerService, GrowlerMessageType } from '../../core/growler/growler.service';











const _c0 = ["besoegForm"];
function BesoegEditComponent_div_93_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Slet besoeg ?\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BesoegEditComponent_div_93_div_1_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.delete($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Ja");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BesoegEditComponent_div_93_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.deleteMessageEnabled = false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Nej ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function BesoegEditComponent_div_93_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BesoegEditComponent_div_93_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.deleteMessageEnabled = true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Slet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BesoegEditComponent_div_93_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49)(1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BesoegEditComponent_div_93_div_3_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.cancel($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Afbryd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r0.pristine || !_r0.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r19.operationText, " ");
} }
function BesoegEditComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BesoegEditComponent_div_93_div_1_Template, 7, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BesoegEditComponent_div_93_button_2_Template, 2, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BesoegEditComponent_div_93_div_3_Template, 6, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.besoeg.id && ctx_r15.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r15.besoeg.id && !ctx_r15.deleteMessageEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r15.deleteMessageEnabled);
} }
function BesoegEditComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r16.errorMessage, " ");
} }
//import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
//import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'YYYY-MM-DD',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    },
};
class BesoegEditComponent {
    constructor(router, route, dataService
    //private growler: GrowlerService,
    //private modalService: ModalService,
    ) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.besoeg = _data_model__WEBPACK_IMPORTED_MODULE_1__.IBesoeg.initBesoeg();
        this.errorMessage = "";
        this.deleteMessageEnabled = false;
        this.operationText = "Indsæt";
        this.besoegForm = {};
        this.onCancel = () => {
            // this.location.back();
        };
    }
    ngOnInit() {
        // Subscribe to params so if it changes we pick it up. Don't technically need that here
        // since param won't be changing while component is alive.
        // Could use this.route.parent.snapshot.params["id"] to simplify it.
        /*
        console.log("PARAM1 "+this.route.snapshot.paramMap.get("id"));
        this.route.paramMap.subscribe(params => {
          console.log("PARAM2 "+params.get('id'));
        });
        */
        const id = parseInt(this.route.snapshot.paramMap.get("id"));
        console.log("EDIT " + id);
        if (id > 0) {
            this.operationText = "Opdater";
            this.getBesoeg(id);
        }
        if (id == -1) {
            this.besoeg = this.dataService.aktBesoeg;
        }
        /*
        this.dataService
          .getStates()
          .subscribe((states: IState[]) => (this.states = states));
    */
    }
    getBesoeg(id) {
        if (this.dataService.muckTest) {
            this.besoeg = this.dataService.getBesoegMockTest(id);
            console.log("BESØG " + this.besoeg);
        }
        else {
            this.dataService.getBesoeg(id).subscribe((besoeg) => {
                this.besoeg = besoeg;
            });
        }
    }
    submit() {
        console.log("submit besoeg.id " + this.besoeg.id);
        if (this.besoeg.id == 0) {
            this.dataService.insertBesoeg(this.besoeg).subscribe((insertedBesoeg) => {
                if (insertedBesoeg) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    this.besoegForm.form.markAsPristine();
                    this.router.navigate(["/besoeg"]);
                }
                else {
                    const msg = "Kan ikke gemme besøg !";
                    //this.growler.growl(msg, GrowlerMessageType.Danger);
                    this.errorMessage = msg;
                }
            }, (err) => console.log(err));
        }
        else {
            this.dataService.updateBesoeg(this.besoeg).subscribe((status) => {
                if (status) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    /*
                    this.customerForm.form.markAsPristine();
                    this.growler.growl(
                      'Operation performed successfully.',
                      GrowlerMessageType.Success
                    );
                    */
                    this.router.navigate(['/besoeg']);
                }
                else {
                    const msg = "Unable to update customer";
                    // this.growler.growl(msg, GrowlerMessageType.Danger);
                    // this.errorMessage = msg;
                }
            }, (err) => console.log(err));
        }
    }
    delete(event) {
        event.preventDefault();
        this.dataService.deleteBesoeg(this.besoeg.id).subscribe((status) => {
            if (status) {
                console.log("READY ROUTE");
                this.router.navigate(['/besoeg']);
            }
            else {
                this.errorMessage = 'Ikke muligt at slette besøg !';
            }
        }, (err) => console.log("ERROR = " + err));
    }
    cancel(event) {
        event.preventDefault();
        // Route guard will take care of showing modal dialog service if data is dirty
        this.router.navigate(["/besoeg"]);
    }
}
BesoegEditComponent.ɵfac = function BesoegEditComponent_Factory(t) { return new (t || BesoegEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_dataservice__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
BesoegEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BesoegEditComponent, selectors: [["cm-besoeg-edit"]], viewQuery: function BesoegEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.besoegForm = _t.first);
    } }, decls: 95, vars: 22, consts: [[1, "container"], [2, "margin-bottom", "10px"], [1, "textTop"], [2, "float", "right"], ["onclick", "history.back()", "mat-button", "", 1, "textTop"], ["novalidate", "", 1, "besoeg-form", "center", 3, "ngSubmit"], ["besoegForm", "ngForm"], [1, "form-group"], ["type", "hidden", "id", "Id", "name", "Id", 3, "value"], ["title", "Nr", "type", "text", "name", "Nr", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Nr", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["title", "Postnummer", "type", "text", "name", "nr", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Postnummer", "ngModel"], ["id", "container"], [1, "div_float"], ["matInput", "", "title", "Besogsdato", "type", "text", "name", "Besogsdato", "required", "", "readonly", "", 1, "form-control", 3, "matDatepicker", "ngModel", "ngModelChange"], ["Besogsdato", "ngModel"], ["matSuffix", "", 3, "for"], ["picker", ""], ["title", "Firmanavn", "type", "text", "name", "Firmanavn", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Firmanavn", "ngModel"], ["title", "GPSpunkt", "type", "text", "name", "GPSpunkt", 1, "form-control", 3, "ngModel", "ngModelChange"], ["GPSpunkt", "ngModel"], ["title", "Adresse", "type", "text", "name", "Adresse", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Adresse", "ngModel"], ["title", "Hjemmeside", "type", "text", "name", "Hjemmeside", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Hjemmeside", "ngModel"], ["title", "Kontaktperson", "type", "text", "name", "Kontaktperson", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Kontaktperson", "ngModel"], ["title", "MailAdresse", "type", "text", "name", "MailAdresse", 1, "form-control", 3, "ngModel", "ngModelChange"], ["MailAdresse", "ngModel"], ["title", "TelefonNr", "type", "text", "name", "TelefonNr", 1, "form-control", 3, "ngModel", "ngModelChange"], ["TelefonNr", "ngModel"], ["title", "Uopfordretansog", "type", "checkbox", "name", "Uopfordretansog", 1, "form-control", "checkbox", 3, "ngModel", "ngModelChange"], ["Uopfordretansog", "ngModel"], ["title", "Ledigtjob", "type", "checkbox", "name", "Ledigtjob", 1, "form-control", "checkbox", 3, "ngModel", "ngModelChange"], ["Ledigtjob", "ngModel"], ["title", "Kommentarer", "type", "text", "name", "Kommentarer", "rows", "10", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Kommentarer", "ngModel"], ["id", "buttonbar", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "buttonbar"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["class", "pull-right", 4, "ngIf"], [1, "alert", "alert-warning"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-default", 3, "click"], [1, "pull-right"], [1, "btn", "btn-default", "button11", 3, "click"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "alert", "alert-danger"]], template: function BesoegEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Ret bes\u00F8g ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "a", 4)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tilbage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BesoegEditComponent_Template_form_ngSubmit_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Nr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_15_listener($event) { return ctx.besoeg.nr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Nr kr\u00E6ves! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Postnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_22_listener($event) { return ctx.besoeg.postnummer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Postnummer kr\u00E6ves! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 7)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Bes\u00F8gsdato");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 14)(30, "div", 15)(31, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_31_listener($event) { return ctx.besoeg.besogsdato = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "mat-datepicker-toggle", 18)(35, "mat-datepicker", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Besogsdato kr\u00E6ves ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "br")(40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 7)(42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Firmanavn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_44_listener($event) { return ctx.besoeg.firmanavn = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Firmanavn kr\u00E6ves ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 7)(49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "GPSpunkt");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_51_listener($event) { return ctx.besoeg.gpspunkt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 7)(54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_56_listener($event) { return ctx.besoeg.adresse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 7)(59, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Hjemmeside");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "input", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_61_listener($event) { return ctx.besoeg.hjemmeside = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 7)(64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Kontaktperson");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_66_listener($event) { return ctx.besoeg.kontaktperson = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 7)(69, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "MailAdresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_71_listener($event) { return ctx.besoeg.mailadresse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 7)(74, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "TelefonNr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_76_listener($event) { return ctx.besoeg.telefonnr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 7)(79, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "Uopfordretansog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_81_listener($event) { return ctx.besoeg.uopfordretansog = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 7)(84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Ledigtjob");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "input", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_input_ngModelChange_86_listener($event) { return ctx.besoeg.ledigtjob = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 7)(89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Kommentarer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "textarea", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegEditComponent_Template_textarea_ngModelChange_91_listener($event) { return ctx.besoeg.kommentarer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, BesoegEditComponent_div_93_Template, 4, 3, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, BesoegEditComponent_div_94_Template, 2, 1, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](32);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](36);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.besoeg.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.nr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r1.pristine || _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.postnummer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r2.pristine || _r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r4)("ngModel", ctx.besoeg.besogsdato);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r3.pristine || _r3.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.firmanavn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", _r5.pristine || _r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.gpspunkt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.adresse);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.hjemmeside);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.kontaktperson);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.mailadresse);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.telefonnr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.uopfordretansog);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.ledigtjob);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.besoeg.kommentarer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.besoeg);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__.MatDatepickerToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput], styles: [".container[_ngcontent-%COMP%]{\r\n  width: 600px;\r\n}\r\n.besoeg-form[_ngcontent-%COMP%]{\r\n  margin: 0px;\r\n  padding: 10px;\r\n  border-radius:15px;\r\n  font-size: 0.9em;\r\n  font-family: sans-serif;\r\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n  border: 1px solid black;\r\n}\r\n.besoeg-form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .besoeg-form[_ngcontent-%COMP%]   input[type='number'][_ngcontent-%COMP%], .besoeg-form[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .besoeg-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    width:300px;\r\n}\r\n.besoeg-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #a94442;\r\n}\r\n.besoeg-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #42A948;\r\n}\r\n.checkbox[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin: 0;\r\n  border:none;\r\n  border-radius: 10%;\r\n}\r\n#buttonbar[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n}\r\n.div_float[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\n\r\n@media screen and (max-width: 959px) {\r\n  .container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc29lZy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLHVCQUF1QjtBQUN6QjtBQUNBOzs7O0lBSUksV0FBVztBQUNmO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0EseUJBQXlCO0FBQ3pCO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoiYmVzb2VnLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbi5iZXNvZWctZm9ybXtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLmJlc29lZy1mb3JtIGlucHV0W3R5cGU9J3RleHQnXSwgXHJcbi5iZXNvZWctZm9ybSBpbnB1dFt0eXBlPSdudW1iZXInXSxcclxuLmJlc29lZy1mb3JtIGlucHV0W3R5cGU9J2VtYWlsJ10sXHJcbi5iZXNvZWctZm9ybSBzZWxlY3Qge1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbn1cclxuXHJcbi5iZXNvZWctZm9ybSAubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xyXG59XHJcblxyXG4uYmVzb2VnLWZvcm0gLm5nLXZhbGlkIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XHJcbn1cclxuLmNoZWNrYm94e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbn1cclxuI2J1dHRvbmJhcntcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmRpdl9mbG9hdHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4vKiBtZWRpdW0gc2l6ZSB2aWV3cG9ydCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuLyogc21hbGwgc2l6ZSB2aWV3cG9ydCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5636:
/*!******************************************************!*\
  !*** ./src/app/besoeg-show/besoeg-show.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesoegShowComponent": () => (/* binding */ BesoegShowComponent)
/* harmony export */ });
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/model */ 2884);
/* harmony import */ var _data_dataservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/dataservice */ 4734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);








class BesoegShowComponent {
    constructor(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.besoeg = _data_model__WEBPACK_IMPORTED_MODULE_0__.IBesoeg.initBesoeg();
        this.besoegText = "besoegText";
    }
    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get("id"));
        console.log("SHOW " + id);
        if (id !== 0) {
            this.getBesoeg(id);
        }
    }
    getBesoeg(id) {
        if (this.dataService.muckTest) {
            //this.besoeg = this.dataService.getBesoegMockTest(id);
            console.log("BESØG " + this.besoeg);
        }
        else {
            this.dataService.getBesoeg(id).subscribe((besoeg) => {
                this.besoeg = besoeg;
            });
        }
    }
}
BesoegShowComponent.ɵfac = function BesoegShowComponent_Factory(t) { return new (t || BesoegShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_dataservice__WEBPACK_IMPORTED_MODULE_1__.DataService)); };
BesoegShowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BesoegShowComponent, selectors: [["app-besoeg-show"]], decls: 78, vars: 16, consts: [[1, "container"], [1, "cv"], [2, "margin", "10px"], [1, "textTop"], [2, "float", "right"], ["onclick", "history.back()", "mat-button", "", 1, "textTop"], [1, "textBesoeg"], [1, "solid"]], template: function BesoegShowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Vis bes\u00F8g ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "a", 5)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Tilbage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Bes\u00F8g hos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Nr:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Besogsdato:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Postnummer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Firmanavn:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "GPSpunkt:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Adresse:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Hjemmeside:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Kontaktperson:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "MailAdresse:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "TelefonNr:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Uopfordretansog:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Ledigtjob:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Kommentarer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("\u00A0\u00A0", ctx.besoeg.firmanavn, ",\u00A0\u00A0", ctx.besoeg.adresse, ",\u00A0\u00A0", ctx.besoeg.postnummer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.nr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.besogsdato);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.postnummer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.firmanavn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.gpspunkt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.adresse);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.hjemmeside);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.kontaktperson);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.mailadresse);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.telefonnr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.uopfordretansog);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.ledigtjob);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.besoeg.kommentarer);
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor], styles: [".cv[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    padding: 10px;\r\n    width: 600px;\r\n    border-radius:15px;\r\n    font-size: 0.9em;\r\n    font-family: sans-serif;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n    border: 1px solid black;\r\n  }\r\n  hr.solid[_ngcontent-%COMP%] {\r\n    border-top: 2px solid black;\r\n  }\r\n  h4[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  @media screen and (max-width: 959px) {\r\n  .cv[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n}\r\n  \r\n  @media screen and (max-width: 599px) {\r\n  .cv[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc29lZy1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHdDQUF3QztJQUN4Qyx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBLHlCQUF5QjtFQUMzQjtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7RUFDQSx3QkFBd0I7RUFDeEI7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6ImJlc29lZy1zaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3Z7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG4gIGhyLnNvbGlkIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC8qIG1lZGl1bSBzaXplIHZpZXdwb3J0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgLmN2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi8qIHNtYWxsIHNpemUgdmlld3BvcnQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAuY3Z7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8756:
/*!********************************************!*\
  !*** ./src/app/besoeg/besoeg.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesoegComponent": () => (/* binding */ BesoegComponent)
/* harmony export */ });
/* harmony import */ var _data_dataservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dataservice */ 4734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);







const _c0 = function (a1) { return ["/besoeg-show", a1]; };
const _c1 = function (a1) { return ["/besoeg-edit", a1]; };
const _c2 = function (a1) { return ["/besoeg-medlem", a1]; };
function BesoegComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 22)(2, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Vis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Ret");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Medlem");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const besoeg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, besoeg_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c1, besoeg_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c2, besoeg_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.nr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.besogsdato);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.postnummer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.firmanavn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.gpspunkt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.adresse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.hjemmeside);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.kontaktperson);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.mailadresse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.telefonnr);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.uopfordretansog);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.ledigtjob);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](besoeg_r1.kommentarer);
} }
class BesoegComponent {
    constructor(dataservice) {
        this.dataservice = dataservice;
        this.besoegArr = [];
    }
    ngOnInit() {
        this.getBesoeg();
    }
    getBesoeg() {
        if (this.dataservice.muckTest) {
            this.besoegArr = this.dataservice.getAllBesoegMuckTest();
        }
        else {
            this.dataservice.getAllBesoeg()
                .subscribe((besoegArr) => {
                console.log('Response received');
                console.log(besoegArr);
                this.besoegArr = besoegArr;
            });
        }
    }
    sort(prop) {
        //this.customers = this.sorterService.sort(this.customers, prop);
    }
}
BesoegComponent.ɵfac = function BesoegComponent_Factory(t) { return new (t || BesoegComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_dataservice__WEBPACK_IMPORTED_MODULE_0__.DataService)); };
BesoegComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BesoegComponent, selectors: [["app-besoeg"]], inputs: { besoegArr: "besoegArr" }, decls: 46, vars: 1, consts: [[1, "container"], [2, "margin", "10px"], [1, "textTop"], [2, "float", "right"], ["onclick", "history.back()", "mat-button", "", 1, "textTop"], ["routerLink", "/besoeg-edit/0", "id", "opret", 1, "btn", "btn-success"], [1, "styled-table", "center"], ["cmSortBy", "Bes\u00F8gsnr", 3, "sorted"], ["cmSortBy", "Besogsdato", 3, "sorted"], ["cmSortBy", "Postnummer", 3, "sorted"], ["cmSortBy", "Firmanavn", 3, "sorted"], ["cmSortBy", "GPSpunkt", 3, "sorted"], ["cmSortBy", "Adresse", 3, "sorted"], ["cmSortBy", "Hjemmeside", 3, "sorted"], ["cmSortBy", "Kontaktperson", 3, "sorted"], ["cmSortBy", "Mail adresse", 3, "sorted"], ["cmSortBy", "Telefon nr.", 3, "sorted"], ["cmSortBy", "uopfordretansog", 3, "sorted"], ["cmSortBy", "ledigtjob", 3, "sorted"], ["cmSortBy", "Kommentarer", 3, "sorted"], [3, "click"], [4, "ngFor", "ngForOf"], ["id", "td_button"], [1, "btn", "btn-success", 3, "routerLink"]], template: function BesoegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Bes\u00F8g ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "a", 4)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tilbage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div")(10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Opret");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 6)(13, "thead")(14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_16_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Bes\u00F8gsnr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_18_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Bes\u00F8gsdato");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_20_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Postnummer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_22_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Firmanavn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_24_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "GPS punkt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_26_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_28_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Hjemmeside");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_30_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Kontaktperson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_32_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Mail adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_34_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Telefon nr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_36_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00D8nsker firma uopfordret ans\u00F8gning ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_38_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Muligt ledigt job indenfor 3 mdr ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sorted", function BesoegComponent_Template_th_sorted_40_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Kommentarer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BesoegComponent_Template_th_click_42_listener() { return ctx.sort("orderTotal"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Antal bes\u00F8g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, BesoegComponent_tr_45_Template, 35, 22, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.besoegArr);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], styles: [".container[_ngcontent-%COMP%]{\r\n    width:100%;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc29lZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYmVzb2VnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG4uY2VudGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1730:
/*!******************************************************************!*\
  !*** ./src/app/besoegmedlem-edit/besoegmedlem-edit.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesoegMedlemEditComponent": () => (/* binding */ BesoegMedlemEditComponent)
/* harmony export */ });
/* harmony import */ var _data_dataservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dataservice */ 4734);
/* harmony import */ var _medlem_medlem_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../medlem/medlem.service */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);












const _c0 = ["besoegForm"];
function BesoegMedlemEditComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const medlem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngValue", medlem_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", medlem_r3.fornavn, "\u00A0\u00A0", medlem_r3.efternavn, " ");
} }
function BesoegMedlemEditComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.errorMessage, " ");
} }
class BesoegMedlemEditComponent {
    constructor(route, router, dataService, medlemService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.medlemService = medlemService;
        this.errorMessage = "";
        this.deleteMessageEnabled = false;
        this.besoegForm = {};
    }
    ngOnInit() {
        console.log("BESOEGMEDLEM-EDIT");
        const id = parseInt(this.route.snapshot.paramMap.get("besoegId"));
        this.besoegText = this.route.snapshot.paramMap.get("besoegText");
        console.log("besoegId " + id);
        this.getMedlemAll();
        this.operationText = "Tilføj";
        if (id > 0) {
            //this.operationText = "Opdater";
            this.getBesoeg(id);
        }
        if (id == -1) {
        }
    }
    getBesoeg(id) {
        if (this.dataService.muckTest) {
            this.besoeg = this.dataService.getBesoegMockTest(id);
            console.log("BESØG " + this.besoeg);
        }
        else {
            this.dataService.getBesoeg(id).subscribe((besoeg) => {
                this.besoeg = besoeg;
            });
        }
    }
    getMedlemAll() {
        this.medlemService.getAll().subscribe((data) => {
            console.log(data);
            this.medlemmer = data;
        });
    }
    submit() {
        //console.log("submit besoeg.id "+this.besoeg.Id);
        console.log("medlemActive " + this.medlemActive);
        //this.router.navigate(['/besoeg-medlem/'+this.besoeg.Id]);
        //if (this.besoeg.Id == 0) {
        if (true) {
            this.dataService.insertBesoegMedlem(this.besoeg.id, this.medlemActive.id).subscribe((insertedMedlem) => {
                if (insertedMedlem) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    //this.besoegForm.form.markAsPristine();
                    this.router.navigate(['/besoeg-medlem/' + this.besoeg.id]);
                }
                else {
                    const msg = "Kan ikke gemme besøg !";
                    //this.growler.growl(msg, GrowlerMessageType.Danger);
                    this.errorMessage = msg;
                }
            }, (err) => console.log(err));
        }
        else {}
    }
    cancel(event) {
        event.preventDefault();
        // Route guard will take care of showing modal dialog service if data is dirty
        this.router.navigate(['/besoeg-medlem/' + this.besoeg.id]);
    }
}
BesoegMedlemEditComponent.ɵfac = function BesoegMedlemEditComponent_Factory(t) { return new (t || BesoegMedlemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_dataservice__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_medlem_medlem_service__WEBPACK_IMPORTED_MODULE_1__.MedlemService)); };
BesoegMedlemEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BesoegMedlemEditComponent, selectors: [["cm-besoegmedlem-edit"]], viewQuery: function BesoegMedlemEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.besoegForm = _t.first);
    } }, decls: 23, vars: 6, consts: [[1, "container"], [2, "margin", "10px"], [1, "textTop"], [2, "float", "right"], ["onclick", "history.back()", "mat-button", "", 1, "textTop"], [1, "textBesoeg"], ["novalidate", "", 1, "besoeg-form", "center", 3, "ngSubmit"], ["besoegForm", "ngForm"], [1, "form-group"], ["name", "medlemfield", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "buttonbar"], [1, "pull-right"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "alert alert-danger", 4, "ngIf"], [3, "ngValue"], [1, "alert", "alert-danger"]], template: function BesoegMedlemEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tilf\u00F8j medlem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "a", 4)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tilbage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Bes\u00F8g hos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BesoegMedlemEditComponent_Template_form_ngSubmit_13_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8)(16, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BesoegMedlemEditComponent_Template_select_ngModelChange_16_listener($event) { return ctx.medlemActive = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, BesoegMedlemEditComponent_option_17_Template, 2, 3, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, BesoegMedlemEditComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0\u00A0", ctx.besoegText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.medlemActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.medlemmer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r0.pristine || !_r0.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.operationText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], styles: [".container[_ngcontent-%COMP%]{\r\n  width: 380px;\r\n}\r\n.besoeg-form[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n    padding: 10px;\r\n    height: 120px;\r\n    font-size: 0.9em;\r\n  font-family: sans-serif;\r\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n  border: 1px solid black;\r\n  border-radius: 15px;\r\n}\r\n.besoeg-form[_ngcontent-%COMP%]   input[type='text'][_ngcontent-%COMP%], .besoeg-form[_ngcontent-%COMP%]   input[type='number'][_ngcontent-%COMP%], .besoeg-form[_ngcontent-%COMP%]   input[type='email'][_ngcontent-%COMP%], .besoeg-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n    width:300px;\r\n}\r\n.besoeg-form[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #a94442;\r\n}\r\n.besoeg-form[_ngcontent-%COMP%]   .ng-valid[_ngcontent-%COMP%] {\r\n  border-left: 5px solid #42A948;\r\n}\r\n#checkbox1[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  width: 1em;\r\n  height: 1em;\r\n  margin: 0;\r\n  border:none;\r\n  border-radius: 10%;\r\n}\r\n.button1[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n}\r\n#buttonbar[_ngcontent-%COMP%]{\r\n  height: 40px;\r\n}\r\n.div_float[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n  margin-left:5px;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc29lZ21lZGxlbS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQix1QkFBdUI7RUFDdkIsd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTs7OztJQUlJLFdBQVc7QUFDZjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImJlc29lZ21lZGxlbS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gIHdpZHRoOiAzODBweDtcclxufVxyXG4uYmVzb2VnLWZvcm17XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5iZXNvZWctZm9ybSBpbnB1dFt0eXBlPSd0ZXh0J10sIFxyXG4uYmVzb2VnLWZvcm0gaW5wdXRbdHlwZT0nbnVtYmVyJ10sXHJcbi5iZXNvZWctZm9ybSBpbnB1dFt0eXBlPSdlbWFpbCddLFxyXG4uYmVzb2VnLWZvcm0gc2VsZWN0IHtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG59XHJcblxyXG4uYmVzb2VnLWZvcm0gLm5nLWludmFsaWQge1xyXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcclxufVxyXG5cclxuLmJlc29lZy1mb3JtIC5uZy12YWxpZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xyXG59XHJcbiNjaGVja2JveDF7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAxZW07XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG4uYnV0dG9uMXtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuI2J1dHRvbmJhcntcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmRpdl9mbG9hdHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5oM3tcclxuICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuLmNlbnRlcntcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3829:
/*!********************************************************!*\
  !*** ./src/app/besoegmedlem/besoegmedlem.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BesoegMedlemComponent": () => (/* binding */ BesoegMedlemComponent)
/* harmony export */ });
/* harmony import */ var _data_dataservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dataservice */ 4734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);








function BesoegMedlemComponent_div_0_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td")(10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BesoegMedlemComponent_div_0_tr_30_Template_button_click_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const medlem_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.delete($event, medlem_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Fjern");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const medlem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](medlem_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](medlem_r2.fornavn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](medlem_r2.efternavn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](medlem_r2.telefonnr);
} }
const _c0 = function (a1, a3) { return ["/besoeg-medlem-edit", a1, 0, a3]; };
function BesoegMedlemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Medlemmer bes\u00F8g ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "a", 4)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Tilbage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div")(9, "div", 5)(10, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Tilf\u00F8j medlem");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Bes\u00F8g hos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "table", 8)(18, "thead")(19, "tr")(20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Fornavn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Efternavn");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Telefonnr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, BesoegMedlemComponent_div_0_tr_30_Template, 12, 4, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx_r0.besoeg.id, ctx_r0.besoeg.firmanavn));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("\u00A0\u00A0", ctx_r0.besoeg.firmanavn, ",\u00A0\u00A0", ctx_r0.besoeg.adresse, ",\u00A0\u00A0", ctx_r0.besoeg.postnummer, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.medlemmer);
} }
class BesoegMedlemComponent {
    constructor(dataservice, route, router) {
        this.dataservice = dataservice;
        this.route = route;
        this.router = router;
        this.medlemmer = [];
    }
    ngOnInit() {
        const id = parseInt(this.route.snapshot.paramMap.get("id"));
        this.getBesoegMedlem(id);
        this.getBesoeg(id);
    }
    getBesoegMedlem(id) {
        this.dataservice.getBesoegMedlem(id).subscribe((data) => {
            console.log(data);
            this.medlemmer = data;
        });
    }
    getBesoeg(id) {
        this.dataservice.getBesoeg(id).subscribe((data) => {
            console.log(data);
            this.besoeg = data;
        });
    }
    delete(event, medlemid) {
        event.preventDefault();
        this.dataservice.deleteBesoegMedlem(this.besoeg.id, medlemid).subscribe((status) => {
            if (true) {
                console.log("READY ROUTE");
                let url = '/besoeg-medlem/' + this.besoeg.id;
                this.router.navigate(['/besoeg']).then(() => {
                    this.router.navigate([url]);
                });
                //this.router.navigate(['/besoeg-medlem/'+this.besoeg.id]);
                /*
                this.router.onSameUrlNavigation = 'reload';
                this.router.navigate(['/besoeg-medlem/'+this.besoeg.Id]);
                this.router.onSameUrlNavigation = 'ignore';
                */
            }
            else {}
        }, (err) => console.log("ERROR = " + err));
    }
}
BesoegMedlemComponent.ɵfac = function BesoegMedlemComponent_Factory(t) { return new (t || BesoegMedlemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_dataservice__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
BesoegMedlemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BesoegMedlemComponent, selectors: [["app-medlem"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], [1, "textTop"], [2, "float", "right"], ["onclick", "history.back()", "mat-button", "", 1, "textTop"], [2, "float", "left", "margin", "10px"], ["type", "button", 1, "btn", "btn-success", 3, "routerLink"], [1, "textBesoeg", 2, "float", "center"], [1, "styled-table"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function BesoegMedlemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BesoegMedlemComponent_div_0_Template, 31, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.besoeg);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: [".container[_ngcontent-%COMP%] {\r\n    width: 500px;\r\n}\r\n\r\n@media screen and (max-width: 959px) {\r\n  .styled-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 4px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .styled-table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 4px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlc29lZ21lZGxlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBLHlCQUF5QjtBQUN6QjtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7QUFDQSx3QkFBd0I7QUFDeEI7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImJlc29lZ21lZGxlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbn1cclxuLyogbWVkaXVtIHNpemUgdmlld3BvcnQgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAuc3R5bGVkLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxufVxyXG4vKiBzbWFsbCBzaXplIHZpZXdwb3J0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgLnN0eWxlZC10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4734:
/*!*************************************!*\
  !*** ./src/app/data/dataservice.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ 2884);
/* harmony import */ var _utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.service */ 8463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);








class DataService {
    constructor(http, utilitiesService) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.baseUrl = this.utilitiesService.getApiUrl();
        //baseUrl = 'http://ff.karlsminde1.dk';
        this.customersMuckTest = [];
        this.muckTest = false;
        this.aktBesoeg = new _model__WEBPACK_IMPORTED_MODULE_0__.IBesoeg(0, "firma");
        console.log("baseUrl " + this.baseUrl);
        this.baseUrl += "/api";
        if (this.muckTest) {
            let arr = [new _model__WEBPACK_IMPORTED_MODULE_0__.IBesoeg(1, "Nissens"), new _model__WEBPACK_IMPORTED_MODULE_0__.IBesoeg(2, "JYSK"), new _model__WEBPACK_IMPORTED_MODULE_0__.IBesoeg(3, "IBM")];
            for (let i = 4; i < 8; i++) {
                arr.push(new _model__WEBPACK_IMPORTED_MODULE_0__.IBesoeg(i, "OK"));
            }
            this.customersMuckTest = arr;
        }
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error || 'Node.js server error');
    }
    getAllBesoegMuckTest() {
        return this.customersMuckTest;
    }
    getAllBesoeg() {
        console.log("GetAll " + this.baseUrl + "/besoeg/getall");
        return this.http.get(this.baseUrl + "/besoeg/getall")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(besoegArr => {
            console.log(besoegArr);
            return besoegArr;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    getBesoegMockTest(id) {
        return this.customersMuckTest[id];
    }
    getBesoeg(id) {
        return this.http.get(this.baseUrl + "/besoeg/findid/" + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(besoeg => {
            console.log(besoeg);
            return besoeg;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    getBesoegMedlem(id) {
        return this.http.get(this.baseUrl + "/besoeg/findmedlemid/" + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(medlem => {
            console.log(medlem);
            return medlem;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    insertBesoeg(besoeg) {
        // besoeg.Uopfordretansog=1;
        //besoeg.Ledigtjob="";
        //checkbox true or nothing
        //console.log("str "+besoeg.Uopfordretansog);
        //console.log("int "+besoeg.Ledigtjob);
        console.log(JSON.stringify(besoeg));
        return this.http.post(this.baseUrl + "/besoeg/new", besoeg)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    updateBesoeg(besoeg) {
        console.log("UPDATE id=" + besoeg.id);
        console.log("BESOEG " + JSON.stringify(besoeg));
        console.log("JSON SLUT");
        return this.http.put(this.baseUrl + "/besoeg/update", besoeg)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
            console.log("UPDATE FRONTEND SLUT");
            return res.status;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    deleteBesoeg(id) {
        return this.http.delete(this.baseUrl + "/besoeg/delete/" + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.status), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    insertBesoegMedlem(besoegid, medlemid) {
        //console.log("ID: "+besoegid;
        //console.log("MEDLEM: "+JSON.stringify(medlem));
        return this.http.post(this.baseUrl + "/besoeg/medlem/new/" + besoegid + "/" + medlemid, null)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    deleteBesoegMedlem(besoegid, medlemid) {
        let url = this.baseUrl + "/besoeg/medlem/delete/" + besoegid + "/" + medlemid;
        console.log("DELETE URL " + url);
        return this.http.delete(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.status), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac });


/***/ }),

/***/ 2884:
/*!*******************************!*\
  !*** ./src/app/data/model.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IApiResponse": () => (/* binding */ IApiResponse),
/* harmony export */   "IBesoeg": () => (/* binding */ IBesoeg)
/* harmony export */ });
class IBesoeg {
    constructor(id, firmanavn) {
        this.id = 0;
        this.nr = 0;
        this.besogsdato = "";
        this.postnummer = 0;
        this.firmanavn = "";
        this.gpspunkt = "";
        this.adresse = "";
        this.hjemmeside = "";
        this.kontaktperson = "";
        this.mailadresse = "";
        this.telefonnr = "";
        this.uopfordretansog = 0;
        this.ledigtjob = "";
        this.kommentarer = "";
        this.id = id;
        this.nr = id;
        this.firmanavn = firmanavn;
    }
    static initBesoeg() {
        let besoeg = new IBesoeg(null, "FINN");
        besoeg.id = 0;
        besoeg.nr = 0;
        besoeg.besogsdato = "1";
        besoeg.postnummer = 0;
        besoeg.firmanavn = "Finn tester";
        besoeg.gpspunkt = "1";
        besoeg.adresse = "1";
        besoeg.hjemmeside = "1";
        besoeg.kontaktperson = "1";
        besoeg.mailadresse = "1";
        besoeg.telefonnr = "1";
        besoeg.uopfordretansog = 0;
        besoeg.ledigtjob = "1";
        besoeg.kommentarer = "1";
        return besoeg;
    }
}
class IApiResponse {
}


/***/ }),

/***/ 8463:
/*!*******************************************!*\
  !*** ./src/app/data/utilities.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilitiesService": () => (/* binding */ UtilitiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class UtilitiesService {
    constructor(window) {
        this.window = window;
    }
    getApiUrl() {
        const port = this.getPort();
        //return `${this.window.location.protocol}//${this.window.location.hostname}${port}`;
        return `${this.window.location.protocol}//${this.window.location.hostname}`;
    }
    getPort() {
        const port = this.window.location.port;
        if (port) {
            // for running with Azure Functions local emulator
            if (port === '4200') {
                // Local run with 'npm run' also started in api folder for Azure Functions
                return ':7071'; // for debugging Azure Functions locally
            }
            // Running with local node (which serves Angular and the API)
            return ':' + this.window.location.port;
        }
        else {
            // for running locally with Docker/Kubernetes
            if (this.window.location.hostname === 'localhost') {
                return ':8080';
            }
        }
        return '';
    }
}
UtilitiesService.ɵfac = function UtilitiesService_Factory(t) { return new (t || UtilitiesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]('Window')); };
UtilitiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilitiesService, factory: UtilitiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9198:
/*!******************************************!*\
  !*** ./src/app/home1/home1.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Home1Component": () => (/* binding */ Home1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../banner/banner.component */ 7068);





class Home1Component {
    constructor() {
        this.item = '';
    }
    ngOnInit() {
    }
}
Home1Component.ɵfac = function Home1Component_Factory(t) { return new (t || Home1Component)(); };
Home1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Home1Component, selectors: [["app-home1"]], decls: 34, vars: 0, consts: [[1, "con", "noscroll"], ["fxLayout", "row wrap", "fxLayoutAlign", "center none"], [1, "textBox", 2, "font-size", "25pt"], [1, "center"], [1, "textBlue"], [1, "hvadviljeg"], ["routerLink", "/home", "mat-button", ""], ["src", "assets/succes2.png", "width", "15%"], ["routerLink", "/besoeg", "mat-button", ""], ["src", "assets/bag.png", "width", "15%"], ["routerLink", "/video", "mat-button", ""], ["src", "assets/Movies-icon.png", "width", "15%"], [1, "colorBox"], ["src", "assets/Forside.png", "width", "100%"], [1, "textBox", 2, "font-size1", "pt"], [1, "colorBox", 2, "border", "solid 4px rgb(35, 35, 156)"], ["src", "assets/ProgramWeb.jpg", "width", "100%"], [1, "textBox"], ["src", "assets/Coding.jpg", "width", "100%"], [1, "noscroll"]], template: function Home1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Jeg koder det,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "i har behov for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Hvad vil jeg ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Virksomhedsbes\u00F8g");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Video MARTIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "div", 3)(21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Jeg bygger gerne p\u00E5 noget eksisterende");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " eller starter fra grunden og bruger mine styrker. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17)(27, "div", 3)(28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Kontakt mig og jeg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " st\u00E5r klar til jeres n\u00E6ste opgave. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "app-banner", 19);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent], styles: [".con[_ngcontent-%COMP%]{\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.noscroll1[_ngcontent-%COMP%]{\r\n  \r\n  -ms-overflow-style: none; \r\n  scrollbar-width: none; \r\n  overflow-y: scroll; \r\n}\r\n.noscroll1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none; \r\n}\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) { order: 1; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) { order: 2; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) { order: 4; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) { order: 3; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) { order: 5; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) { order: 6; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7) { order: 8; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(8) { order: 7; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(9) { order: 9; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(10) { order: 10; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(11) { order: 12; }\r\n.con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(12) { order: 11; }\r\n.colorBox[_ngcontent-%COMP%]{\r\n    width:500px;\r\n    \r\n    position: relative;\r\n    border-radius: 10px;\r\n}\r\n.colorBox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  object-fit: cover;\r\n  border-radius: 10px;\r\n}\r\n.textBox[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    height: 500px;\r\n    padding: 40px;\r\n    position: relative;\r\n    font-family: 'RedHat';\r\n    font-size: 18pt;\r\n    font-weight: bolder;\r\n}\r\n.center[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n@media screen and (max-width: 959px) {\r\n  .con[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    background-color:white;\r\n  }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) { order: 1; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) { order: 2; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) { order: 3; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) { order: 4; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) { order: 5; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) { order: 6; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7) { order: 7; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(8) { order: 8; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(9) { order: 9; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(10) { order: 10; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(11) { order: 11; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(12) { order: 12; }\r\n  .textBox[_ngcontent-%COMP%], .colorBox[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n}\r\n.hvadviljeg[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n  .con[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    background-color:white;\r\n  }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(1) { order: 1; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) { order: 2; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) { order: 3; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(4) { order: 4; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(5) { order: 5; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(6) { order: 6; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(7) { order: 7; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(8) { order: 8; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(9) { order: 9; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(10) { order: 10; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(11) { order: 11; }\r\n  .con[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(12) { order: 12; }\r\n  .textBox[_ngcontent-%COMP%], .colorBox[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n  .cardList[_ngcontent-%COMP%] {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: flex-start;\r\n    }\r\n    .cardList[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\r\n      margin-right: unset;\r\n      margin-bottom: 32px;\r\n    }\r\n    .hvadviljeg[_ngcontent-%COMP%]{\r\n      display: block;\r\n    }\r\n  }\r\nhr.rounded[_ngcontent-%COMP%] {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border-top: 4px solid white;\r\n  }\r\n.textBlue[_ngcontent-%COMP%]{\r\n    color:rgb(35, 35, 156);\r\n  }\r\na[_ngcontent-%COMP%]{\r\n    height: 45px;\r\n    width: 200px;\r\n    padding: 4px;\r\n    color:rgb(35, 35, 156);\r\n    background-color: rgb(237, 234, 222); \r\n    font-family: 'RedHat';\r\n    font-size: 12pt;\r\n  }\r\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    float: left;\r\n    margin-top: 4px;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLHVDQUF1QztFQUN2Qyx3QkFBd0IsRUFBRSxnQ0FBZ0M7RUFDMUQscUJBQXFCLEVBQUUsZ0JBQWdCO0VBQ3ZDLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYSxFQUFFLGtDQUFrQztBQUNuRDtBQUNBLHFCQUFxQixRQUFRLEVBQUU7QUFDL0IscUJBQXFCLFFBQVEsRUFBRTtBQUMvQixxQkFBcUIsUUFBUSxFQUFFO0FBQy9CLHFCQUFxQixRQUFRLEVBQUU7QUFDL0IscUJBQXFCLFFBQVEsRUFBRTtBQUMvQixxQkFBcUIsUUFBUSxFQUFFO0FBQy9CLHFCQUFxQixRQUFRLEVBQUU7QUFDL0IscUJBQXFCLFFBQVEsRUFBRTtBQUMvQixxQkFBcUIsUUFBUSxFQUFFO0FBQy9CLHNCQUFzQixTQUFTLEVBQUU7QUFDakMsc0JBQXNCLFNBQVMsRUFBRTtBQUNqQyxzQkFBc0IsU0FBUyxFQUFFO0FBQ2pDO0lBQ0ksV0FBVztJQUNYOztLQUVDO0lBQ0Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsNENBQTRDO0FBQ2hEO0FBQ0EseUJBQXlCO0FBQ3pCO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtFQUN4QjtFQUNBLHFCQUFxQixRQUFRLEVBQUU7RUFDL0IscUJBQXFCLFFBQVEsRUFBRTtFQUMvQixxQkFBcUIsUUFBUSxFQUFFO0VBQy9CLHFCQUFxQixRQUFRLEVBQUU7RUFDL0IscUJBQXFCLFFBQVEsRUFBRTtFQUMvQixxQkFBcUIsUUFBUSxFQUFFO0VBQy9CLHFCQUFxQixRQUFRLEVBQUU7RUFDL0IscUJBQXFCLFFBQVEsRUFBRTtFQUMvQixxQkFBcUIsUUFBUSxFQUFFO0VBQy9CLHNCQUFzQixTQUFTLEVBQUU7RUFDakMsc0JBQXNCLFNBQVMsRUFBRTtFQUNqQyxzQkFBc0IsU0FBUyxFQUFFO0VBQ2pDO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBLHdCQUF3QjtBQUN4QjtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixzQkFBc0I7RUFDeEI7RUFDQSxxQkFBcUIsUUFBUSxFQUFFO0VBQy9CLHFCQUFxQixRQUFRLEVBQUU7RUFDL0IscUJBQXFCLFFBQVEsRUFBRTtFQUMvQixxQkFBcUIsUUFBUSxFQUFFO0VBQy9CLHFCQUFxQixRQUFRLEVBQUU7RUFDL0IscUJBQXFCLFFBQVEsRUFBRTtFQUMvQixxQkFBcUIsUUFBUSxFQUFFO0VBQy9CLHFCQUFxQixRQUFRLEVBQUU7RUFDL0IscUJBQXFCLFFBQVEsRUFBRTtFQUMvQixzQkFBc0IsU0FBUyxFQUFFO0VBQ2pDLHNCQUFzQixTQUFTLEVBQUU7RUFDakMsc0JBQXNCLFNBQVMsRUFBRTtFQUNqQztJQUNFLFdBQVc7RUFDYjtFQUNBO01BQ0ksYUFBYTtNQUNiLHNCQUFzQjtNQUN0QiwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQixtQkFBbUI7SUFDckI7SUFDQTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtBQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7RUFDN0I7QUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZjs7S0FFQztFQUNIIiwiZmlsZSI6ImhvbWUxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29ue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4ubm9zY3JvbGwxe1xyXG4gIC8qIGhpZGUgc2Nyb2xsYmFyIGJ1dCBhbGxvdyBzY3JvbGxpbmcgKi9cclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIGZvciBJbnRlcm5ldCBFeHBsb3JlciwgRWRnZSAqL1xyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogZm9yIEZpcmVmb3ggKi9cclxuICBvdmVyZmxvdy15OiBzY3JvbGw7IFxyXG59XHJcbi5ub3Njcm9sbDE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lOyAvKiBmb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcbi5jb24gOm50aC1jaGlsZCgxKSB7IG9yZGVyOiAxOyB9XHJcbi5jb24gOm50aC1jaGlsZCgyKSB7IG9yZGVyOiAyOyB9XHJcbi5jb24gOm50aC1jaGlsZCgzKSB7IG9yZGVyOiA0OyB9XHJcbi5jb24gOm50aC1jaGlsZCg0KSB7IG9yZGVyOiAzOyB9XHJcbi5jb24gOm50aC1jaGlsZCg1KSB7IG9yZGVyOiA1OyB9XHJcbi5jb24gOm50aC1jaGlsZCg2KSB7IG9yZGVyOiA2OyB9XHJcbi5jb24gOm50aC1jaGlsZCg3KSB7IG9yZGVyOiA4OyB9XHJcbi5jb24gOm50aC1jaGlsZCg4KSB7IG9yZGVyOiA3OyB9XHJcbi5jb24gOm50aC1jaGlsZCg5KSB7IG9yZGVyOiA5OyB9XHJcbi5jb24gOm50aC1jaGlsZCgxMCkgeyBvcmRlcjogMTA7IH1cclxuLmNvbiA6bnRoLWNoaWxkKDExKSB7IG9yZGVyOiAxMjsgfVxyXG4uY29uIDpudGgtY2hpbGQoMTIpIHsgb3JkZXI6IDExOyB9XHJcbi5jb2xvckJveHtcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgLypcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgICovXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5jb2xvckJveCBpbWd7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4udGV4dEJveHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSZWRIYXQnO1xyXG4gICAgZm9udC1zaXplOiAxOHB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uY2VudGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG4vKiBtZWRpdW0gc2l6ZSB2aWV3cG9ydCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIC5jb257XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIH1cclxuICAuY29uIDpudGgtY2hpbGQoMSkgeyBvcmRlcjogMTsgfVxyXG4gIC5jb24gOm50aC1jaGlsZCgyKSB7IG9yZGVyOiAyOyB9XHJcbiAgLmNvbiA6bnRoLWNoaWxkKDMpIHsgb3JkZXI6IDM7IH1cclxuICAuY29uIDpudGgtY2hpbGQoNCkgeyBvcmRlcjogNDsgfVxyXG4gIC5jb24gOm50aC1jaGlsZCg1KSB7IG9yZGVyOiA1OyB9XHJcbiAgLmNvbiA6bnRoLWNoaWxkKDYpIHsgb3JkZXI6IDY7IH1cclxuICAuY29uIDpudGgtY2hpbGQoNykgeyBvcmRlcjogNzsgfVxyXG4gIC5jb24gOm50aC1jaGlsZCg4KSB7IG9yZGVyOiA4OyB9XHJcbiAgLmNvbiA6bnRoLWNoaWxkKDkpIHsgb3JkZXI6IDk7IH1cclxuICAuY29uIDpudGgtY2hpbGQoMTApIHsgb3JkZXI6IDEwOyB9XHJcbiAgLmNvbiA6bnRoLWNoaWxkKDExKSB7IG9yZGVyOiAxMTsgfVxyXG4gIC5jb24gOm50aC1jaGlsZCgxMikgeyBvcmRlcjogMTI7IH1cclxuICAudGV4dEJveCwgLmNvbG9yQm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbi5odmFkdmlsamVne1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLyogc21hbGwgc2l6ZSB2aWV3cG9ydCAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gIC5jb257XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIH1cclxuICAuY29uIDpudGgtY2hpbGQoMSkgeyBvcmRlcjogMTsgfVxyXG4gIC5jb24gOm50aC1jaGlsZCgyKSB7IG9yZGVyOiAyOyB9XHJcbiAgLmNvbiA6bnRoLWNoaWxkKDMpIHsgb3JkZXI6IDM7IH1cclxuICAuY29uIDpudGgtY2hpbGQoNCkgeyBvcmRlcjogNDsgfVxyXG4gIC5jb24gOm50aC1jaGlsZCg1KSB7IG9yZGVyOiA1OyB9XHJcbiAgLmNvbiA6bnRoLWNoaWxkKDYpIHsgb3JkZXI6IDY7IH1cclxuICAuY29uIDpudGgtY2hpbGQoNykgeyBvcmRlcjogNzsgfVxyXG4gIC5jb24gOm50aC1jaGlsZCg4KSB7IG9yZGVyOiA4OyB9XHJcbiAgLmNvbiA6bnRoLWNoaWxkKDkpIHsgb3JkZXI6IDk7IH1cclxuICAuY29uIDpudGgtY2hpbGQoMTApIHsgb3JkZXI6IDEwOyB9XHJcbiAgLmNvbiA6bnRoLWNoaWxkKDExKSB7IG9yZGVyOiAxMTsgfVxyXG4gIC5jb24gOm50aC1jaGlsZCgxMikgeyBvcmRlcjogMTI7IH1cclxuICAudGV4dEJveCwgLmNvbG9yQm94e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXJkTGlzdCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICAgIC5jYXJkTGlzdCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB9XHJcbiAgICAuaHZhZHZpbGplZ3tcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhyLnJvdW5kZWQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gIC50ZXh0Qmx1ZXtcclxuICAgIGNvbG9yOnJnYigzNSwgMzUsIDE1Nik7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBjb2xvcjpyZ2IoMzUsIDM1LCAxNTYpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNywgMjM0LCAyMjIpOyBcclxuICAgIGZvbnQtZmFtaWx5OiAnUmVkSGF0JztcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICB9XHJcbiAgYSBpbWd7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIC8qXHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZWQ7XHJcbiAgICAqL1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);





class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 100, vars: 0, consts: [[1, "con"], [1, "textTop"], ["onclick", "history.back()", "mat-button", "", 1, "textTop", "arrow"], ["fxLayout", "row wrap", "fxLayoutGap", "30px grid1", "fxLayoutAlign", "center none"], [1, "textbox"], ["src", "assets/succes2.jpg", "width", "40px"], [1, "text1"], ["src", "assets/succes1.png", "width", "40px"], ["src", "assets/code1.png", "width", "40px"], ["src", "assets/succes3.jpg", "width", "40px"], ["routerLink", "/jobsearch", "mat-button", ""], ["src", "assets/it-system.jpg", "width", "40px"], ["routerLink", "/besoeg", "mat-button", ""], ["src", "assets/integration2.png", "width", "40px"], ["routerLink", "/opslag#cvr", "mat-button", ""], ["src", "assets/teknologi12.png", "width", "40px"], [1, "text11"], ["src", "assets/working.png", "width", "40px"], ["routerLink", "/videoall", "mat-button", ""], ["src", "assets/Movies-icon.png", "width", "15%"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full stack Angular, Laravel/PHP og Java udvikler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "a", 2)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tilbage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3)(10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Jeg er Full Stack Udvikler og kan skabe f\u00E6rdige systemer hos jer. Jeg behersker mange programmerings- sprog og kan tilpasse mig jeres behov. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I kan bruge mig til at l\u00F8se en presserende opgave eller give mig en opgave i ikke har haft tid til at l\u00F8se. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Jeg hedder Finn Skjoldager og er IT-specialist med mange \u00E5rs erfaring. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Jeg har bl.a. arbejdet 11 \u00E5r hos IBM i Skejby hvor jeg udviklede systemer i Java. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Jeg s\u00F8ger arbejde indenfor frontend udvikling hvor Angular bruges. Backend kan f.eks. v\u00E6re Laravel/PHP eller Java EE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Sprog anvendt i denne site: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul")(29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Laravel/PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "DoctrineORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Symfony/PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Der k\u00F8res et batch job (cronjob) p\u00E5 hosten simply.com Det s\u00F8ger efter jobs p\u00E5 jobindex.dk og jobfinder hvorefter de l\u00E6gger i en databasen s\u00E5 nye jobs er enkle at finde.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Jobseach (cronjob)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Dette system kan bruges n\u00E5r man bes\u00F8ger virksomheder. Det er enkelt at nedskrive notater fra bes\u00F8get p\u00E5 mobilen lige efter bes\u00F8get. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Virksomhedsbes\u00F8g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Der er en medlemsliste over de personer der udf\u00F8rer bes\u00F8gene. De kan tilf\u00F8jes det enkelte bes\u00F8g. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Systemet har integrationer til: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ul")(59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "cvrapi.dk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "dataforsyningen.dk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "118.dk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Der kan udf\u00F8res et opslag i cvrapi.dk som kan bruges til at oprette et bes\u00F8g. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Opslag i cvr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Der er bl.a. anvendt teknologierne: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul")(74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "CRUD database operationer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Scrape af data fra 118.dk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Microservices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Der er anvendt services: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul")(83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "one.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "MySQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Heroku.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Jeg arbejder stadig p\u00E5 systement og derfor er der funktioner som endnu ikke er f\u00E6rdiggjort.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br")(94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Personlige videoer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Videoer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".con[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n    margin-left: 100px;\r\n    margin-right: 100px;\r\n    background-color: white;\r\n    padding: 0px;\r\n    margin: 5px;  \r\n}\r\n.textTop[_ngcontent-%COMP%]{\r\n    padding: 0px;\r\n    margin: 0px;\r\n}\r\n.arrow[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\r\n\r\n@media screen and (max-width: 599px) {\r\n    .arrow[_ngcontent-%COMP%]{\r\n        float: none;\r\n    }\r\n}\r\n.textbox[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    height: 320px;    \r\n    padding: 10px;\r\n    margin: 10px;\r\n    border-radius:15px;\r\n    font-size: 12pt;\r\n    font-family: sans-serif;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n    --border: 1px solid black;\r\n\r\n}\r\n.text1[_ngcontent-%COMP%]{\r\n    padding:10px;\r\n}\r\n.child-1[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 200px;\r\n}\r\n.space56[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n    margin: 15 px;\r\n}\r\n.text1[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    height: 45px;\r\n    width: 150px;\r\n    padding: 5px;\r\n    margin:0px;\r\n    color:rgb(35, 35, 156);\r\n    background-color: rgb(237, 234, 222); \r\n    font-family: 'RedHat';\r\n    font-size: 10pt;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQSx3QkFBd0I7QUFDeEI7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsd0NBQXdDO0lBQ3hDLHlCQUF5QjtBQUM3Qjs7Ozs7Ozs7Ozs7Ozs7Q0FjQztBQUNEO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7ICBcclxufVxyXG4udGV4dFRvcHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5hcnJvd3tcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4vKiBzbWFsbCBzaXplIHZpZXdwb3J0ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICAuYXJyb3d7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuLnRleHRib3h7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMyMHB4OyAgICBcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4vKlxyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMwMHB4OyAgICBcclxuXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuKi9cclxufVxyXG4udGV4dDF7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuLmNoaWxkLTF7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi5zcGFjZTU2e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMTUgcHg7XHJcbn1cclxuLnRleHQxIGF7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgY29sb3I6cmdiKDM1LCAzNSwgMTU2KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDIzNCwgMjIyKTsgXHJcbiAgICBmb250LWZhbWlseTogJ1JlZEhhdCc7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 209:
/*!**************************************************!*\
  !*** ./src/app/jobsearch/jobsearch.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsearchComponent": () => (/* binding */ JobsearchComponent)
/* harmony export */ });
/* harmony import */ var _data_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/utilities.service */ 8463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);











function JobsearchComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.outText);
} }
function JobsearchComponent_tr_47_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const job_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", job_r4.desc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function JobsearchComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, JobsearchComponent_tr_47_div_8_Template, 1, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const job_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r4.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r4.portal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", job_r4.title, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.ShowDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r4.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r4.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](job_r4.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.substr(job_r4.create));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.substr(job_r4.update));
} }
class JobsearchComponent {
    constructor(http, utilitiesService, router) {
        this.http = http;
        this.utilitiesService = utilitiesService;
        this.router = router;
        this.apiServer = this.utilitiesService.getApiUrl();
        this.jobsearch = [];
        this.outTextOn = false;
        this.outText = 'outText';
        this.querytype = '0';
        this.ShowDesc = false;
    }
    ngOnInit() {
        this.getAll();
    }
    onSelected(value) {
        //this.outText = value;
        this.querytype = value;
        this.getAll();
    }
    onShowDesc(value) {
        // this.outText += 'onHideDesc '+value;
        this.ShowDesc = value;
        this.getAll();
    }
    getAll() {
        let url = '/api/cronjob/show/' + this.querytype;
        console.log('service getAll() start ' + this.apiServer + url);
        const req = this.http.get(this.apiServer + url);
        req.subscribe((response) => {
            this.outText += 'sub';
            this.jobsearch = response;
        });
        //this.outText += 'end';
    }
    substr(str) {
        //return str.substring(0, 10);
        return str;
    }
}
JobsearchComponent.ɵfac = function JobsearchComponent_Factory(t) { return new (t || JobsearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_data_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
JobsearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobsearchComponent, selectors: [["app-jobsearch"]], decls: 48, vars: 2, consts: [[1, "container"], [2, "margin", "10px"], [1, "textTop"], [2, "float", "right"], ["onclick", "history.back()", "mat-button", "", 1, "textTop"], [2, "font-size", "10pt", "margin-left", "10px", 3, "change"], ["querytype", ""], ["default", "", "value", "0"], ["value", "Angular"], ["value", "Laravel"], ["value", "Java"], ["type", "checkbox", "id", "idShowDesc", 2, "margin-left", "20px", "width", "15px", "height", "15px", 3, "change"], ["TagShowDesc", ""], ["for", "idShoweDesc", 2, "font-size", "10pt", "margin-left", "10px"], [4, "ngIf"], [1, "styled-table", "center"], [2, "width", "100px"], [4, "ngFor", "ngForOf"], [1, "textbox", 3, "innerHTML"], ["class", "textbox", 3, "innerHTML", 4, "ngIf"]], template: function JobsearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Batch Jobsearch with CronJob ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "a", 4)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tilbage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function JobsearchComponent_Template_select_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSelected(_r0.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nyeste annoncer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Job Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Job Laravel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Job Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function JobsearchComponent_Template_input_change_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onShowDesc(_r1.checked)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Vis beskrivelse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, JobsearchComponent_div_24_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "table", 15)(26, "thead")(27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Url");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Created_at");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Updated_at");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, JobsearchComponent_tr_47_Template, 19, 9, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.outTextOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.jobsearch);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"]], styles: [".styled-table[_ngcontent-%COMP%] {\r\n    min-width: 100%;\r\n}\r\n.1styled-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .1styled-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    max-width:50px;\r\n    width:auto;\r\n    min-width:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYnNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBOztJQUVJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsY0FBYztBQUNsQiIsImZpbGUiOiJqb2JzZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHlsZWQtdGFibGUge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcbi4xc3R5bGVkLXRhYmxlIHRoLFxyXG4uMXN0eWxlZC10YWJsZSB0ZCB7XHJcbiAgICBtYXgtd2lkdGg6NTBweDtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBtaW4td2lkdGg6MTBweDtcclxufSJdfQ== */"] });
class Jobsearch {
}


/***/ }),

/***/ 1995:
/*!*************************************************!*\
  !*** ./src/app/medlem/medlem-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedlemRoutingModule": () => (/* binding */ MedlemRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _medlem_medlem_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medlem/medlem.component */ 1692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: 'medlem', redirectTo: 'medlem/home', pathMatch: 'full' },
    { path: 'medlem/home', component: _medlem_medlem_component__WEBPACK_IMPORTED_MODULE_0__.MedlemComponent },
];
class MedlemRoutingModule {
}
MedlemRoutingModule.ɵfac = function MedlemRoutingModule_Factory(t) { return new (t || MedlemRoutingModule)(); };
MedlemRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MedlemRoutingModule });
MedlemRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MedlemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6792:
/*!*****************************************!*\
  !*** ./src/app/medlem/medlem.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedlemModule": () => (/* binding */ MedlemModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _medlem_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medlem-routing.module */ 1995);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _medlem_medlem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medlem/medlem.component */ 1692);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







class MedlemModule {
}
MedlemModule.ɵfac = function MedlemModule_Factory(t) { return new (t || MedlemModule)(); };
MedlemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MedlemModule });
MedlemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _medlem_routing_module__WEBPACK_IMPORTED_MODULE_0__.MedlemRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MedlemModule, { declarations: [_medlem_medlem_component__WEBPACK_IMPORTED_MODULE_1__.MedlemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _medlem_routing_module__WEBPACK_IMPORTED_MODULE_0__.MedlemRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule] }); })();


/***/ }),

/***/ 3587:
/*!******************************************!*\
  !*** ./src/app/medlem/medlem.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedlemService": () => (/* binding */ MedlemService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _data_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/utilities.service */ 8463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);







class MedlemService {
    constructor(httpClient, utilitiesService) {
        this.httpClient = httpClient;
        this.utilitiesService = utilitiesService;
        this.apiServer = this.utilitiesService.getApiUrl() + "/api/medlem";
        //private apiServer = "https://aa.karlsminde1.dk/api/medlem";
        //private apiServer = "http://localhost/api/medlem";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error || 'Node.js server error');
    }
    getAll() {
        console.log("service getAll() start " + this.apiServer + '/getmedlemmer');
        return this.httpClient.get(this.apiServer + '/getmedlemmer')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(medlem => {
            console.log("service getAll() end " + JSON.stringify(medlem[0]));
            return medlem;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.handleError));
    }
    create(Medlem) {
        return this.httpClient.post(this.apiServer + '/Medlems/', JSON.stringify(Medlem), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    getById(id) {
        return this.httpClient.get(this.apiServer + '/Medlems/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    update(id, Medlem) {
        return this.httpClient.put(this.apiServer + '/Medlems/' + id, JSON.stringify(Medlem), this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    delete(id) {
        return this.httpClient.delete(this.apiServer + '/Medlems/' + id, this.httpOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(errorMessage);
    }
}
MedlemService.ɵfac = function MedlemService_Factory(t) { return new (t || MedlemService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_data_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService)); };
MedlemService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: MedlemService, factory: MedlemService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1692:
/*!***************************************************!*\
  !*** ./src/app/medlem/medlem/medlem.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedlemComponent": () => (/* binding */ MedlemComponent)
/* harmony export */ });
/* harmony import */ var _medlem_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../medlem.service */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);





function MedlemComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const medlem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](medlem_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](medlem_r1.fornavn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](medlem_r1.efternavn);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](medlem_r1.telefonnr);
} }
class MedlemComponent {
    constructor(medlemService) {
        this.medlemService = medlemService;
        this.medlemmer = [];
    }
    ngOnInit() {
        this.medlemService.getAll().subscribe((data) => {
            //console.log("comp.ts retur ok "+data);
            this.medlemmer = data;
        });
    }
}
MedlemComponent.ɵfac = function MedlemComponent_Factory(t) { return new (t || MedlemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_medlem_service__WEBPACK_IMPORTED_MODULE_0__.MedlemService)); };
MedlemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MedlemComponent, selectors: [["app-medlem"]], decls: 23, vars: 1, consts: [[1, "container"], [2, "margin", "10px"], [1, "textTop"], [2, "float", "right"], ["onclick", "history.back()", "mat-button", "", 1, "textTop"], [1, "styled-table", "center"], [4, "ngFor", "ngForOf"]], template: function MedlemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Medlem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "a", 4)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tilbage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 5)(10, "thead")(11, "tr")(12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Fornavn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Efternavn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Telefonnr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MedlemComponent_tr_22_Template, 10, 4, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.medlemmer);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: [".center[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGxlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJtZWRsZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufSJdfQ== */"] });


/***/ }),

/***/ 7790:
/*!********************************************!*\
  !*** ./src/app/opslag/opslag.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpslagComponent": () => (/* binding */ OpslagComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _data_dataservice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/dataservice */ 4734);
/* harmony import */ var _data_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/utilities.service */ 8463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);

















const _c0 = ["inputCVR"];
const _c1 = ["input118"];
function OpslagComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const adr_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", adr_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](adr_r3);
} }
class OpslagComponent {
    constructor(dataservice, http, router, utilitiesService) {
        this.dataservice = dataservice;
        this.http = http;
        this.router = router;
        this.utilitiesService = utilitiesService;
        this.res = '';
        this.resadresse = '';
        this.resScrap118 = '';
        this.baseUrl = '';
        this.apiUrl = '';
    }
    ngOnInit() {
        this.baseUrl = this.utilitiesService.getApiUrl();
        console.log('baseUrl ' + this.baseUrl);
        this.apiUrl = this.baseUrl + '/api';
        // this.setTestOutput();
    }
    //https://api.dataforsyningen.dk/adresser?postnr=8320&vejnavn=Bakkevej
    //https://api.dataforsyningen.dk/vejnavne/autocomplete?q=vibor
    //https://api.dataforsyningen.dk/adresser?q=Lilledal 1
    //"adressebetegnelse": "Visbjerg Hegn 226, 8320 Mårslet",
    setNew(event) {
        this.router.navigate(['/besoeg-edit/-1']);
    }
    handleError(error) {
        console.log('FINN server error:', error);
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => errMessage);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error || 'Node.js server error');
    }
    setValue(value) {
        if (value == null)
            return '';
        else
            return value;
    }
    setOutput(json) {
        let st = '';
        st += json['name'] + '\n';
        st += 'CVR: ' + json['vat'] + '\n';
        st += json['address'] + '\n';
        st += json['zipcode'] + ' ';
        st += json['city'] + '\n';
        st += json['phone'] + '\n';
        st += json['email'] + '\n';
        st += json['industrydesc'] + '\n';
        st += 'Ansatte: ' + json['employees'] + '\n';
        this.dataservice.aktBesoeg.firmanavn = this.setValue(json['name']);
        this.dataservice.aktBesoeg.adresse = this.setValue(json['address']);
        this.dataservice.aktBesoeg.adresse += ', ' + this.setValue(json['zipcode']);
        this.dataservice.aktBesoeg.adresse += ' ' + this.setValue(json['city']);
        this.dataservice.aktBesoeg.postnummer = this.setValue(json['zipcode']);
        this.dataservice.aktBesoeg.telefonnr = this.setValue(json['phone']);
        this.dataservice.aktBesoeg.mailadresse = this.setValue(json['email']);
        return st;
        let l = json['productionunits'].length;
        st += l;
        for (let i = 1; i < l; i++) {
            st += '   Pnr: ' + json['productionunits'][i]['pno'] + '\n';
            st += '   Ansatte: ' + json['productionunits'][i]['employees'] + '\n';
        }
        return st;
    }
    setTestOutput() {
        let st = '';
        //this.oppoSuits.forEach(x => st+=x+"\n");
        //this.resadresse = st;
        this.http.get('./assets/nissens.json').subscribe((data) => {
            console.log('DATA ' + data);
            this.res = this.setOutput(data);
        });
    }
    getOpslagCVR(event, keyType) {
        //console.log("CHANGE "+keyType+" "+event.target.value+"\n");
        //this.res += "CHANGE "+keyType+" "+event.target.value+"\n";
        //event.preventDefault()
        //return;
        //let search = event.target.value;
        let search = this.inputCVR.nativeElement.value;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders()
            .set('content-type', 'application/text')
            .set('Agent', 'FinnGram')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
            .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        let url = this.apiUrl + '/opslag/getcvr/' + search;
        this.http
            .get(url, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((json) => {
            //console.log(json);
            return json;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError))
            .subscribe((data) => {
            //console.log("DATA "+data["message"]);
            if (data['message'] == undefined) {
                this.res = this.setOutput(data);
            }
            else {
                this.res =
                    'Du har udført 50 søgninger idag som er det maximale.\nI morgen kan du igen udføre 50 søgninger.';
            }
        });
    }
    getOpslagAdresse(event) {
        //event.preventDefault()
        let search = event.target.value;
        search += '* ';
        console.log('ADR ' + search);
        this.adressArr = [];
        let url = '';
        url = 'https://api.dataforsyningen.dk/vejnavne/autocomplete?q=' + search;
        url = this.apiUrl + '/opslag/getadresse/' + search;
        this.http
            .get(url)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((json) => {
            //console.log(json);
            return json;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError))
            .subscribe((data) => {
            //console.log("DATA "+data);
            let st = '';
            let i = 0;
            data.forEach((x) => {
                let s = '';
                //s = x["vejnavn"]["navn"];
                s = x['adressebetegnelse'];
                this.adressArr.push(s);
                i += 1;
                //console.log(s);
                st += s + '\n';
            });
            //this.resadresse = st;
            this.resadresse = 'Antal adresser fundet: ' + i;
        });
    }
    getScrap118(event) {
        //event.preventDefault();
        //let search = event.target.value;
        let search = this.input118.nativeElement.value;
        console.log('ADR ' + search);
        let url = this.apiUrl + '/opslag/getscrap118/' + search;
        console.log('URL ' + url);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders()
            .set('content-type', 'application/text')
            .set('Agent', 'FinnGram')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
            .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        this.http
            .get(url, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((res) => {
            console.log(res);
            return res;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError))
            .subscribe((data) => {
            this.resScrap118 = data['respone'];
            if (this.resScrap118 == '')
                this.resScrap118 = 'intet resultat';
            console.log('DATA ' + this.resScrap118);
        });
    }
    onCheckboxChange(event) {
        let v = event.target.value;
        this.resadresse = v;
        /*
        if (event.target.checked) {
          website.push(new FormControl(e.target.value));
        } else {
           const index = website.controls.findIndex(x => x.value === e.target.value);
           website.removeAt(index);
        }
        */
    }
}
OpslagComponent.ɵfac = function OpslagComponent_Factory(t) { return new (t || OpslagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_dataservice__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_data_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService)); };
OpslagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OpslagComponent, selectors: [["app-opslag"]], viewQuery: function OpslagComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputCVR = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.input118 = _t.first);
    } }, inputs: { shareData: "shareData" }, decls: 62, vars: 6, consts: [[1, "container"], [2, "margin", "10px"], [1, "textTop"], [2, "float", "right"], ["onclick", "history.back()", "mat-button", "", 1, "textTop"], ["fxLayout", "row wrap", "fxLayoutGap", "30px grid", "fxLayoutAlign", "flex-start"], ["id", "cvr", 1, "card1"], [1, "og"], ["id", "fopslagscvr", 1, "opslag-form", 3, "keydown.enter"], ["id", "opslagCVR", "type", "text", 1, "form-control"], ["inputCVR", ""], ["readonly", "readonly", "rows", "8", "cols", "80", "id", "res", 1, "form-control", 3, "value"], ["id", "opret", 1, "btn", "btn-success", 3, "click"], ["form", "fopslagscvr", 1, "btn", "btn-success", 3, "click"], [1, "card1"], ["id", "scrap118", 1, "opslag-form", 3, "keydown.enter"], ["id", "opslagadresse", "type", "text", 1, "form-control"], ["input118", ""], ["form", "scrap118", 1, "btn", "btn-success", 3, "click"], ["target", "_blank", "mat-button", "", 3, "href"], [1, "opslag-form", 3, "keydown.enter"], ["id", "opslagadresse", "type", "text", 1, "form-control", 3, "keydown"], ["id", "opslagselect", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["readonly", "readonly", "rows", "7", "cols", "80", "id", "res", 1, "form-control", 3, "value"], [3, "value"]], template: function OpslagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Opslag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "a", 4)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tilbage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Opslag CVR");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "og Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function OpslagComponent_Template_form_keydown_enter_15_listener($event) { return ctx.getOpslagCVR($event, "ENTER"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Indtast formanavn eller CVR/Pnr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 9, 10)(20, "br")(21, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OpslagComponent_Template_button_click_22_listener($event) { return ctx.setNew($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Opret");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OpslagComponent_Template_button_click_24_listener($event) { return ctx.getOpslagCVR($event, "ENTER"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "S\u00F8g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14)(27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Opslag 118.dk telefon nr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "og Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function OpslagComponent_Template_form_keydown_enter_31_listener($event) { return ctx.getScrap118($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Indtast navn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 16, 17)(36, "br")(37, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OpslagComponent_Template_button_click_38_listener($event) { return ctx.getScrap118($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "S\u00F8g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14)(41, "a", 19)(42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Vores el forbrug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 19)(46, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "business");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " El Spot Prices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 14)(50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Opslag adresse");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "tast og vent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function OpslagComponent_Template_form_keydown_enter_54_listener($event) { return ctx.getOpslagAdresse($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Indtast vejnavn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function OpslagComponent_Template_input_keydown_57_listener($event) { return ctx.getOpslagAdresse($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function OpslagComponent_Template_select_change_59_listener($event) { return ctx.onCheckboxChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, OpslagComponent_option_60_Template, 2, 2, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.res);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.resScrap118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.baseUrl + "/opslag/voreselforbrug", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.baseUrl + "/opslag/elspotprices", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.adressArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.resadresse);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatAnchor, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm], styles: [".container1[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n  width: 90%;\r\n}\r\n.card1[_ngcontent-%COMP%]{\r\n  width: 350px;\r\n  height: 450px;   \r\n  padding: 10px;\r\n  margin: 10px;\r\n  border-radius:15px;\r\n  font-size: 12pt;\r\n  font-family: sans-serif;\r\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n  --border: 1px solid black;\r\n}\r\n.opslag-form[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n  padding: 10px;\r\n  \r\n  font-size: 0.9em;\r\n  font-family: sans-serif;\r\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);\r\n  border: 1px solid black;\r\n  border-radius: 15px;\r\n}\r\nh4[_ngcontent-%COMP%]{\r\n  margin: 10px;\r\n  padding: 10px;\r\n}\r\n.og[_ngcontent-%COMP%]{\r\n  font-size:14px;\r\n  color:green;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wc2xhZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHdDQUF3QztFQUN4Qyx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2I7OztDQUdEO0VBQ0MsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYiIsImZpbGUiOiJvcHNsYWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIxe1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB3aWR0aDogOTAlO1xyXG59XHJcbi5jYXJkMXtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiA0NTBweDsgICBcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB0O1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4ub3BzbGFnLWZvcm17XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgLypcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuKi9cclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5oNHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ub2d7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgY29sb3I6Z3JlZW47XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4690:
/*!************************************!*\
  !*** ./src/app/slide-animation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXPANSION_PANEL_ANIMATION_TIMING": () => (/* binding */ EXPANSION_PANEL_ANIMATION_TIMING),
/* harmony export */   "slider": () => (/* binding */ slider)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 1631);

/** Time and timing curve for expansion panel animations. */
const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/** Animations used by the Material expansion panel. */
const slider = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('slider', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d({{distance}}px,0,0)' }), {
        params: { distance: '0' }
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'translate3d({{distance}}px,0,0)' }), {
        params: { distance: '0' }
    }),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('200ms ease-in'))
]);


/***/ }),

/***/ 7720:
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoComponent": () => (/* binding */ VideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


const _c0 = ["myVideo"];
const _c1 = ["btnPause"];
class VideoComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.btnPause.nativeElement.style.background = "rgb(35, 35, 156)";
        this.openFullscreen();
    }
    onPause() {
        console.log(this.myVideo);
        console.log(this.btnPause);
        let video = this.myVideo.nativeElement;
        if (video.paused) {
            this.openFullscreen();
            video.play();
            this.btnPause.nativeElement.style.background = "rgb(35, 35, 156)";
            this.btnPause.nativeElement.innerHTML = "Pause";
        }
        else {
            video.pause();
            this.btnPause.nativeElement.style.background = "green";
            this.btnPause.nativeElement.innerHTML = "Play";
        }
    }
    openFullscreen() {
        let video = this.myVideo.nativeElement;
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
        else if (video.webkitRequestFullscreen) { /* Safari */
            video.webkitRequestFullscreen();
        }
        else if (video.msRequestFullscreen) { /* IE11 */
            video.msRequestFullscreen();
        }
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["app-video"]], viewQuery: function VideoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.btnPause = _t.first);
    } }, decls: 12, vars: 0, consts: [["autoplay", "", "muted", "", "loop1", "", "id", "myVideo"], ["myVideo", ""], ["src", "assets/Martin5.MP4", "type", "video/mp4"], [1, "content"], ["id", "btnPause", 1, "btn1", "btn-default2", 3, "click"], ["btnPause", ""]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your browser does not support HTML5 video.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "CNC styrede maskiner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jeg har gennem \u00E5rene udf\u00F8rt mange forskellige programmeringsopgaver.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoComponent_Template_button_click_9_listener() { return ctx.onPause(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: ["*b[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body1[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-family: Arial;\r\n    font-size: 17px;\r\n  }\r\n  \r\n  *c[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    height: 100vh;\r\n    text-align: center;\r\n    justify-content: center;\r\n  }\r\n  \r\n  .app-toolbar[_ngcontent-%COMP%] {\r\n    display: hidden;\r\n  }\r\n  \r\n  #myVideo0[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 100%; \r\n    min-height: 100%;\r\n  }\r\n  \r\n  #myVideo[_ngcontent-%COMP%]{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    object-fit: cover;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    color: #f1f1f1;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n  \r\n  #btnPause[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    font-size: 18px;\r\n    \r\n  }\r\n  \r\n  #myBtn[_ngcontent-%COMP%]:hover {\r\n    background: #ddd;\r\n    color: black;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsU0FBUztJQUNULGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0VBQ3pCOztFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87RUFDVDs7RUFDQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZjs7Ozs7O0tBTUM7RUFDSDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2QiLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qYiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5MSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgfVxyXG4gICpjIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmFwcC10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGhpZGRlbjtcclxuICB9XHJcbiAgI215VmlkZW8wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlOyBcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICNteVZpZGVve1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICNidG5QYXVzZSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvKlxyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICovXHJcbiAgfVxyXG4gIFxyXG4gICNteUJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 6138:
/*!************************************************!*\
  !*** ./src/app/videoall/videoall.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VideoallComponent": () => (/* binding */ VideoallComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




class VideoallComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoallComponent.ɵfac = function VideoallComponent_Factory(t) { return new (t || VideoallComponent)(); };
VideoallComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoallComponent, selectors: [["app-videoall"]], decls: 25, vars: 0, consts: [[2, "margin", "10px"], [1, "textTop"], [2, "float", "right"], ["routerLink", "..", "mat-button", "", 1, "textTop"], [1, "outher"], [1, "inner"], ["controls", "", "autoplay", "", "width", "720", "height", "480"], ["src", "assets/Guys & Dolls.mp4", "type", "video/mp4"], ["controls", "", "autoplay1", "", "width", "720", "height", "480"], ["src", "assets/India 1986.mp4", "type", "video/mp4"], ["src", "assets/Pyren\u00E6erne julen 2012.mp4", "type", "video/mp4"], ["width", "500", "height", "375", "controls", ""], ["src", "assets/FINNPOWR.mp4", "type", "video/mp4"]], template: function VideoallComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Video ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "a", 3)(5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tilbage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "div", 5)(10, "video", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "source", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5)(14, "video", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "source", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5)(18, "video", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "source", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5)(22, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "source", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Your browser does not support the video tag. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".outher[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    margin-bottom: 20px;\r\n}\r\n.inner[_ngcontent-%COMP%]{\r\n    align-self: center;\r\n    justify-self: center;\r\n    align-self: center\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvYWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCO0FBQ0oiLCJmaWxlIjoidmlkZW9hbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRoZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uaW5uZXJ7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlclxyXG59Il19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map