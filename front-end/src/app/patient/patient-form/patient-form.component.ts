import {Patient} from "../patient";
import {PatientService} from "../patient.service";
import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  @ViewChild('patientFormModal') formModal: any
  @Input() selectedPatient: any

  constructor(protected patientService: PatientService) {
  }

  ngOnInit(): void {
  }

  handleSave() {
    if (!this.selectedPatient?.id) {
      this.patientService.savePatient(this.selectedPatient)

      return
    }

    this.patientService.updatePatient(this.selectedPatient)
  }
}
