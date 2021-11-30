import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PatientComponent} from './patient/patient.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {DoctorComponent} from './doctor/doctor.component';
import {DrugComponent} from './drug/drug.component';
import {ReportComponent} from './report/report.component';
import {PaymentComponent} from './payment/payment.component';
import {HttpClientModule} from "@angular/common/http";
import {PatientTableComponent} from "./patient/patient-table/patient-table.component";
import {EditButtonComponent} from "./components/edit-button/edit-button.component";
import {AddButtonComponent} from "./components/add-button/add-button.component";
import {BaseLayoutComponent} from './base-layout/base-layout.component';
import {FormsModule} from "@angular/forms";
import {ModalModule} from "ngb-modal";
import { PatientFormComponent } from './patient/patient-form/patient-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    SidebarComponent,
    HomeComponent,
    AddButtonComponent,
    EditButtonComponent,
    DoctorComponent,
    DrugComponent,
    ReportComponent,
    PaymentComponent,
    PatientTableComponent,
    BaseLayoutComponent,
    PatientFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
