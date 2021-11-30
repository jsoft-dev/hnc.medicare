import {Component, OnInit, ViewChild} from '@angular/core';
import {PatientComponent} from "../patient.component";

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  @ViewChild('myModal') formModal: any

  ngOnInit(): void {

  }

}
