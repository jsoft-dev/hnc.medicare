import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Patient} from "./patient";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getPatients() {
    return this.http.get<Array<Patient>>(`${this.baseUrl}` + 'patients')
  }

  showPatient() {
  }

  savePatient() {
  }

  updatePatient() {
  }

  deletePatient() {
  }
}
