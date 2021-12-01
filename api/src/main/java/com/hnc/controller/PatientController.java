package com.hnc.controller;

import com.hnc.model.Patient;
import com.hnc.service.PatientService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
public class PatientController {

    @Autowired
    PatientService patientService;

    @CrossOrigin
    @RequestMapping(value = "/patients", method = RequestMethod.GET)
    private List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @CrossOrigin
    @RequestMapping(value = "/patient", method = RequestMethod.POST)
    private void storePatient(@RequestBody Patient patientToStore) {
        patientService.storePatient(patientToStore);
    }

    @CrossOrigin
    @RequestMapping(value = "/patient", method = RequestMethod.PUT)
    private void updatePatient(@RequestBody Patient patientToUpdate) {
        patientService.updatePatient(patientToUpdate);
    }

    @CrossOrigin
    @RequestMapping(value = "/patient/{id}", method = RequestMethod.DELETE)
    private void deletePatient(Patient patientToDelete) {
        patientService.deletePatient(patientToDelete);
    }
}
