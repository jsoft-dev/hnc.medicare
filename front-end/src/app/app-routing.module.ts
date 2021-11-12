import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'patients', component: PatientComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
