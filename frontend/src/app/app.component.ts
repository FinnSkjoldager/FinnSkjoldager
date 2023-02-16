import { Component, ViewChild, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, Event, NavigationEnd } from '@angular/router';
import { UtilitiesService } from './data/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//  templateUrl: './testmenu.html',
  styleUrls: ['./app.component.css'],
  //styleUrls: [],
})
export class AppComponent implements OnInit {
  title = 'app';
  textTop = '';
  fullScreen: boolean = false;
  menuArr: MenuItem[] = [];
  currentRoute: string;
  baseUrl = this.utilitiesService.getApiUrl();
  //pdfFile = "http://localhost:4200/assets/Finn_Skjoldager_CV_IT6.pdf";
  pdfFile = this.baseUrl + '/assets/Finn_Skjoldager_CV_IT6.pdf';
  @ViewChild(MatSidenav)sidenav!: MatSidenav;
  sharDate = 'Deler';
  elem;
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    this.currentRoute = ""+window.pageYOffset;
    //console.log("onWindowScroll() "+window.pageYOffset.toFixed(0));
    if (window.pageYOffset > 0) {
      //console.log("onWindowScroll() > 500");    
      let element = document.getElementById('navbar');
      element.classList.add('sticky');
    } else {
      //console.log("onWindowScroll() < 500");    
     let element = document.getElementById('navbar');
       element.classList.remove('sticky'); 
    }
 }
  @HostListener('document:fullscreenchange', ['$event'])
  fullScreenChange() {
    console.log('Recieved');
    this.fullScreen = !this.fullScreen;
  }
  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private utilitiesService: UtilitiesService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.elem = document.documentElement;
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
       // this.currentRoute = event.url;
        console.log(event);
      }
    });
    this.createMenuArr();
  }
  ngOnInit(): void {
  }

  addSubMenu(menu, name, routerLink, maticon, target) {
    let item = new MenuItem();
    item.name = name;
    item.routerLink = routerLink;
    item.maticon = maticon;
    item.target = target;
    if (menu){ 
      menu.subMenu.push(item);
    }else{
      this.menuArr.push(item);
      item.subMenu = [];
    }
    return item;
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
    let submenu = this.addSubMenu(null,'Integrationer', null,  'integration_instructions', false);
    this.addSubMenu(submenu,'Opslag', '/opslag',  'business', false);
    this.addSubMenu(submenu,'Jobsearch', '/jobsearch', 'message', false);
    this.addSubMenu(submenu,'Elforbrug', '/opslag/voreselforbrug', 'message', true);
    
    submenu = this.addSubMenu(null,'Aftaler', null,  'event', false);
    this.addSubMenu(submenu,'Kalender', '/timeplan',  'calendar_month', false);
    this.addSubMenu(submenu,'Lokaler', '/schedule', 'event_available', false);

    this.addMenu('Besøg', '/besoeg', 'work', false);
    this.addMenu('Medlem', '/medlem/home', 'people', false);
    /*
    this.addMenu('Opslag', '/opslag', 'business', false);
    this.addMenu('Jobsearch', '/jobsearch', 'message', false);
    this.addMenu('Elforbrug', '/opslag/voreselforbrug', 'message', true);
    */
    //this.addMenu('Login', '/login', 'lock');
  }
  sidenavtoggle(sidenav){
    sidenav.toggle();
  }
  public doAlert(value: string): void {
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
  goFullScreen(fullScreen: boolean) {
    if (fullScreen) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
    }
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
class MenuItem {
  name = null;
  routerLink = null;
  maticon = null;
  target = null;
  subMenu : MenuItem[] = null;
}
