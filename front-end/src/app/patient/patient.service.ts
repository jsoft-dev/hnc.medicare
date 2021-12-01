import {Patient} from "./patient";
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getPatients() {
    return this.http.get<Array<Patient>>(`${this.baseUrl}/patients`)
  }

  showPatient() {
  }

  savePatient(patient: any) {
    this.http.post(
      `${this.baseUrl}/patient`,
      patient
    ).subscribe()
  }

  updatePatient(patient: any) {
    this.http.put(
      `${this.baseUrl}/patient`,
      patient,
    ).subscribe();
  }

  deletePatient(patient: any) {
    this.http.delete(
      `${this.baseUrl}/patient/${patient.id}`,
    ).subscribe();
  }
}
