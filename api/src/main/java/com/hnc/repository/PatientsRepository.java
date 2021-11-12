package com.hnc.repository;

import com.hnc.model.Patients;
import org.springframework.data.repository.CrudRepository;

public interface PatientsRepository extends CrudRepository<Patients,Integer> {
}
