package com.hnc.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "Patients")
@Table
public class Patient {

    @Id
    @Column
    private int id;

    @Column
    private String first_name;

    @Column
    private String last_name;

    @Column
    private String date_of_birth;

    @Column
    private String address;

    @Column
    private String mobile;

    @Column
    private String special_notices;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(String date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getSpecial_notices() {
        return special_notices;
    }

    public void setSpecial_notices(String special_notices) {
        this.special_notices = special_notices;
    }
}
