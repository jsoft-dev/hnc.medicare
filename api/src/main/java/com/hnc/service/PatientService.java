package com.hnc.service;

import com.hnc.model.Patient;
import com.hnc.repository.PatientRepository;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.ArrayList;

@Service
public class PatientService {

    @Autowired
    PatientRepository patientRepository;

    public List<Patient> getAllPatients(){
        List<Patient> patients = new ArrayList<>();
        patientRepository.findAll().forEach(patient -> patients.add(patient));

        return  patients;
    }

    public void storePatient(Patient patient){
        patientRepository.save(patient);

    }

    public void updatePatient(Patient patient){
        patientRepository.save(patient);

    }

    public void deletePatient(Patient patient){
        patientRepository.delete(patient);
    }
}
