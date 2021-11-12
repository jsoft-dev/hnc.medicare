package com.hnc.service;

import com.hnc.model.Patients;
import com.hnc.repository.PatientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientsService {

    @Autowired
    PatientsRepository patientsRepository;

    public List<Patients> getAllPatients(){
        List<Patients> patients = new ArrayList<>();
        patientsRepository.findAll().forEach(patient -> patients.add(patient));

        return  patients;
    }
}
