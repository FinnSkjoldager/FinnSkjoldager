import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedlemRoutingModule } from './medlem-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MedlemComponent } from './medlem/medlem.component';
import { MedlemEditComponent } from './medlem-edit/medlem-edit.component';

@NgModule({
  declarations: [
    MedlemComponent,
    //MedlemEditComponent
  ],
  imports: [
    CommonModule,
    MedlemRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    //MatDialogModule
  ],
  exports: [
    //MatDialogModule  
  ]
})
export class MedlemModule { }
