import {Component, OnInit} from '@angular/core';
import {DoctorService} from "./doctor.service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(public doctorService: DoctorService) {
  }

  doctors = []
  selectedDoctor = {}

  ngOnInit(): void {
  }

  fetchDoctors() {
    this.doctors = this.doctorService.getDoctors()
  }

  saveDoctor() {
  }

  updateDoctor() {
  }

}
