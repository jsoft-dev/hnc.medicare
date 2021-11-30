import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import {HomeComponent} from "./home/home.component";
import {BaseLayoutComponent} from "./base-layout/base-layout.component";
import {DoctorComponent} from "./doctor/doctor.component";
import {DrugComponent} from "./drug/drug.component";
import {ReportComponent} from "./report/report.component";
import {PaymentComponent} from "./payment/payment.component";

const routes: Routes = [
  {
    path: '', component: BaseLayoutComponent,
    children: [
      {path: 'patients', component: PatientComponent },
      {path: 'doctors', component: DoctorComponent },
      {path: 'drugs', component: DrugComponent },
      {path: 'reports', component: ReportComponent },
      {path: 'payments', component: PaymentComponent },
      {path: 'remote-diagnose', component: PatientComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
