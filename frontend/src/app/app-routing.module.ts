import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BesoegComponent } from './besoeg/besoeg.component';
import { BesoegMedlemComponent } from './besoegmedlem/besoegmedlem.component';
import { BesoegMedlemEditComponent } from './besoegmedlem-edit/besoegmedlem-edit.component';
import { BesoegEditComponent } from './besoeg-edit/besoeg-edit.component';
import { OpslagComponent } from './opslag/opslag.component';
import { MedlemComponent } from './medlem/medlem/medlem.component';
import { HvadviljegComponent } from './hvadviljeg/hvadviljeg.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { VideoComponent } from './video/video.component';
import { VideoallComponent } from './videoall/videoall.component';
import { BesoegShowComponent } from './besoeg-show/besoeg-show.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { MaterialComponent } from './material/material.component';
import { TimeplanComponent } from './timeplan/timeplan.component';
import { TimeplanScheduleComponent } from './timeplan-schedule/timeplan-schedule.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'hvadviljeg', component: HvadviljegComponent },
  { path: 'video', component: VideoComponent },
  { path: 'videoall', component: VideoallComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'besoeg', component: BesoegComponent },
  { path: 'besoeg-medlem/:id', component: BesoegMedlemComponent },
  { path: 'besoeg-medlem-edit/:besoegId/:medlemId/:besoegText', component: BesoegMedlemEditComponent },
  { path: 'besoeg-edit/:id', component: BesoegEditComponent },
  { path: 'besoeg-show/:id', component: BesoegShowComponent },
  { path: 'opslag', component: OpslagComponent},
  { path: 'medlem/home', component: MedlemComponent },
  { path: 'jobsearch', component: JobsearchComponent},
  { path: 'material', component: MaterialComponent},
  { path: 'timeplan', component: TimeplanComponent},
  { path: 'schedule', component: TimeplanScheduleComponent},
  //{ path: '**', component: BesoegComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  /*
  constructor(private router: Router) {
    router.events.subscribe((event) => {
      console.log(event);
    });
  }
  */
 }