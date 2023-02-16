import { Component, OnInit , AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    this.btnPause.nativeElement.style.background = "rgb(35, 35, 156)"
    this.openFullscreen();
  }
  @ViewChild("myVideo") myVideo: ElementRef;
  @ViewChild("btnPause") btnPause: ElementRef;
  onPause() {
    console.log(this.myVideo);
    console.log(this.btnPause);
    let video = this.myVideo.nativeElement;
    if (video.paused) {
      this.openFullscreen();
      video.play();
      this.btnPause.nativeElement.style.background = "rgb(35, 35, 156)"
      this.btnPause.nativeElement.innerHTML = "Pause";
    } else {
      video.pause();
      this.btnPause.nativeElement.style.background = "green"
      this.btnPause.nativeElement.innerHTML = "Play";
    }
  }
  openFullscreen() {
    let video = this.myVideo.nativeElement;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
    video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
    video.msRequestFullscreen();
    }
  }
}
