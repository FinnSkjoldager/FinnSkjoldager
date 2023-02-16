import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoallComponent } from './videoall.component';

describe('VideoallComponent', () => {
  let component: VideoallComponent;
  let fixture: ComponentFixture<VideoallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
