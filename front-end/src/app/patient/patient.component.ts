import {Patient} from "./patient";
import {ModalManager} from "ngb-modal";
import {PatientService} from "./patient.service";
import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientFormComponent} from "./patient-form/patient-form.component";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent implements OnInit {

  @ViewChild(PatientFormComponent) patientForm: any

  private modalRef: any;
  myModal: any
  patients: any;
  selectedPatient = new Patient();

  constructor(private patientService: PatientService, protected modalService: ModalManager) {
  }

  ngOnInit(): void {
    this.fetchPatients()
  }

  fetchPatients(): void {
    this.patientService.getPatients().subscribe(
      (data: any) => this.patients = data
    )
  }

  savePatient() {}
  deletePatient() {}

  handlePatientEvent(event: any) {
    if (event.action === 'selectPatient') {
      this.selectedPatient = event.patient

      return
    }

    if (event.action === 'editPatient') {
      this.selectedPatient = event.patient
      this.openModal()
    }

    if (event.action === 'deletePatient') {
      this.selectedPatient = event.patient
      this.patientService.deletePatient(this.selectedPatient)
    }
  }

  addPatient(): void {
    this.selectedPatient = new Patient();
    this.openModal()
  }

  openModal() {
    this.modalRef = this.modalService.open(this.patientForm?.formModal, {
      size: "lg",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: true,
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
