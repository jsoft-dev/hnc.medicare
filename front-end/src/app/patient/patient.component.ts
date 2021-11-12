import {Component, OnInit} from '@angular/core';
import {Patient} from "./patient";
import {PatientService} from "./patient.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Array<Patient> | undefined;

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.fetchPatients()
  }

  fetchPatients(): void {
    this.patientService.getPatients().subscribe(
      (data) => this.patients = data
    )
  }

}
