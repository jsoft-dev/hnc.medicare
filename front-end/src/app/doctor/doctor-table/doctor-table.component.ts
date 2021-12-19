import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-doctor-table',
  templateUrl: './doctor-table.component.html',
  styleUrls: ['./doctor-table.component.css']
})
export class DoctorTableComponent implements OnInit {

  @Input() doctors

  doctorEventEmitter: EventEmitter<any> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  selectDoctor(doctor) {
    this.doctorEventEmitter.emit({
      doctor,
      action: 'select-doctor'
    })
  }

}
