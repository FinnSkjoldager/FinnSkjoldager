import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HvadviljegComponent } from './hvadviljeg/hvadviljeg.component';
import { BesoegComponent } from './besoeg/besoeg.component';
import { BesoegMedlemComponent } from './besoegmedlem/besoegmedlem.component';
import { BesoegMedlemEditComponent } from './besoegmedlem-edit/besoegmedlem-edit.component';
import { BesoegEditComponent } from './besoeg-edit/besoeg-edit.component';
import { DataService } from './data/dataservice';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OpslagComponent } from './opslag/opslag.component';
import { CommonModule } from '@angular/common';
import { MedlemModule } from './medlem/medlem.module';
import { HomeComponent } from './home/home.component';
import { NguCarouselModule } from '@ngu/carousel';
import { BannerComponent } from './banner/banner.component';
import { VideoComponent } from './video/video.component';
import { BesoegShowComponent } from './besoeg-show/besoeg-show.component';
import { VideoallComponent } from './videoall/videoall.component';
import { JobsearchComponent } from './jobsearch/jobsearch.component';
import { JobsearchModalComponent } from './jobsearch-modal/jobsearch-modal.component';
import { MedlemEditComponent } from './medlem/medlem-edit/medlem-edit.component';
import { MaterialComponent } from './material/material.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { TimeplanComponent } from './timeplan/timeplan.component';
import { DayPilotModule} from "@daypilot/daypilot-lite-angular";
import { TimeplanScheduleComponent } from './timeplan-schedule/timeplan-schedule.component';
import { DataServiceTimeplanSchedule } from './timeplan-schedule/timeplan-schedule.dataservice';

const materialModules = [
  MatSortModule,
  MatDialogModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatDatepickerModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  DayPilotModule,
  MatMenuModule,
];

@NgModule({
  declarations: [
    AppComponent, 
    BesoegComponent, 
    BesoegMedlemComponent,
    BesoegMedlemEditComponent,
    BesoegEditComponent, 
    OpslagComponent,
    HomeComponent,
    HvadviljegComponent,
    BannerComponent,
    VideoComponent,
    BesoegShowComponent,
    VideoallComponent,
    JobsearchComponent,
    JobsearchModalComponent,
    MedlemEditComponent,
    MaterialComponent,
    TimeplanComponent,
    TimeplanScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MedlemModule, 
    NguCarouselModule,
    materialModules,
  ],
  exports: [materialModules, MedlemModule],
  providers: [DataService, DataServiceTimeplanSchedule,
    { provide: 'Window', useFactory: () => window },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
