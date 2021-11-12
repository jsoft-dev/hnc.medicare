import { Component, OnInit } from '@angular/core';
import {PatientComponent} from "../patient.component";
import {Patient} from "../patient";

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent extends PatientComponent implements OnInit {
}
