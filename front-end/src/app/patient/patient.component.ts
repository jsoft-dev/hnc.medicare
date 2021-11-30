import {Component, OnInit, ViewChild} from '@angular/core';
import {Patient} from "./patient";
import {PatientService} from "./patient.service";
import {ModalManager} from "ngb-modal";
import {PatientFormComponent} from "./patient-form/patient-form.component";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {

  private modalRef: any;
  myModal: any
  @ViewChild(PatientFormComponent) patientForm: PatientFormComponent | undefined
  patients: Array<Patient> | undefined;
  selectedPatient: Patient | undefined;

  constructor(private patientService: PatientService, protected modalService: ModalManager) {
  }

  ngOnInit(): void {
    this.fetchPatients()
  }

  fetchPatients(): void {
    this.patientService.getPatients().subscribe(
      (data) => this.patients = data
    )
  }

  openPatientForm(): void {
    this.modalRef = this.modalService.open(this.patientForm?.formModal, {
      size: "lg",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    })
  }

  closeModal() {
    this.modalService.close(this.modalRef);
    //or this.modalRef.close();
  }

}
