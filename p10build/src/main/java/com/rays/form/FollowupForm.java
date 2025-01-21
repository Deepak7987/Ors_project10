package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.FollowupDTO;
import com.rays.validation.ValidAlphabetic;
import com.rays.validation.ValidDate;

public class FollowupForm extends BaseForm {

    @NotEmpty(message = "Patient name is required")
    private String patient;

    @NotEmpty(message = "Doctor name is required")
    @ValidAlphabetic(message = "Please type alphabets")
    private String doctor;

    @NotNull(message = "Please enter visit date")
    @ValidDate(message = "Invalid date format or value")
    private String visitDate;

    @NotNull(message = "Fees is required")
    private Double fees;

    public String getPatient() {
        return patient;
    }

    public void setPatient(String patient) {
        this.patient = patient;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public String getVisitDate() {
        return visitDate;
    }

    public void setVisitDate(String visitDate) {
        this.visitDate = visitDate;
    }

    public Double getFees() {
        return fees;
    }

    public void setFees(Double fees) {
        this.fees = fees;
    }

    @Override
    public BaseDTO getDto() {
        FollowupDTO dto = initDTO(new FollowupDTO());
        dto.setPatient(patient);
        dto.setDoctor(doctor);
        if (visitDate != null && !visitDate.isEmpty()) {
            try {
                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                Date parsedDate = dateFormat.parse(visitDate);
                dto.setVisitDate(parsedDate);
            } catch (ParseException e) {
                // Handle parse exception if needed
                e.printStackTrace();
            }
        }
        dto.setFees(fees);
        return dto;
    }
}
