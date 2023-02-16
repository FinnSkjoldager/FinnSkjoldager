import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { interval, Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { slider } from '../slide-animation';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [slider],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent {
  path = 'assets/';
  images = [
    this.path+'ABB-IRB2400.jpg', 
    this.path+'comp9.jpg', 
    this.path+'Dandoors.jpg', 
    this.path+'html.jpg', 
    this.path+'geosty.jpg', 
  ];
  imagePos = 0;
  carouselBanner: NguCarouselConfig = {
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
    touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
    vertical: {
      enabled: false,
      height: 250
    },
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  tempData: any[];

  public carouselTileItems$: Observable<number[]>;

  constructor() {
    this.tempData = [];
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(30),
      map(() => {
        this.imagePos++;
        if (this.imagePos == this.images.length)this.imagePos=0;
        console.log("map");
        const data = (this.tempData = [
          ...this.tempData,
          //this.images[Math.floor(Math.random() * this.images.length)]
          this.images[this.imagePos]
        ]);
        //console.log("imagePos "+this.imagePos);
        return data;
      })
    );
  }

  /* It will be triggered on every slide*/
  onmoveFn(data: any) {
    //console.log(data);
  }

  trackCarousel(_, item) {
    //console.log("trackCarousel");
    return item;
  }
}
