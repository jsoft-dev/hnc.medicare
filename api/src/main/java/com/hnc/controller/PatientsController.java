package com.hnc.controller;

import com.hnc.model.Patients;
import com.hnc.service.PatientsService;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
public class PatientsController {

    @Autowired
    PatientsService patientsService;

    @CrossOrigin
    @RequestMapping(value = "/patients",method = RequestMethod.GET)
    private List<Patients> getAllPatients(){
        return patientsService.getAllPatients();
    }

}
