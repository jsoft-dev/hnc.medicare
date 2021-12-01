import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient} from "../patient";

@Component({
  selector: 'app-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.css']
})
export class PatientTableComponent implements OnInit {

  @Input() patients: Array<Patient> | undefined
  @Output() patientEvent: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  selectPatient(patient: Patient) {
    this.patientEvent.emit({patient: patient, action: 'selectPatient'});
  }

  editPatient(patient: any) {
    this.patientEvent.emit({patient: patient, action: 'editPatient'});
  }

  deletePatient(patient: any) {
    this.patientEvent.emit({patient: patient, action: 'deletePatient'});
  }
}
