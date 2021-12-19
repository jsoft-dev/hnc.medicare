import {PatientService} from "../patient.service";
import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  @Input() selectedPatient: any
  form: any

  @Output() patientFormEvent = new EventEmitter();

  constructor(protected patientService: PatientService) {
  }

  ngOnInit(): void {
    this.form = this.selectedPatient
  }

  handleSave() {
    if (!this.selectedPatient?.id) {
      this.patientFormEvent.emit({})
    }

    this.patientService.updatePatient(this.selectedPatient)

    this.patientFormEvent.emit({action: 'savePatient'})
  }
}
