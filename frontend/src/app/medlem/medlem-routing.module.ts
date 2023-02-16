import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedlemComponent } from './medlem/medlem.component';

const routes: Routes = [
  { path: 'medlem', redirectTo: 'medlem/home', pathMatch: 'full'},
  { path: 'medlem/home', component: MedlemComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedlemRoutingModule { }
