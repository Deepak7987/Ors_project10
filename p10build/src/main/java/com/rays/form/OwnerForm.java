package com.rays.form;


import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.OwnerDTO;

public class OwnerForm extends BaseForm {
	
	@NotEmpty(message = "Please enter name")
	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "name should contain only letters and spaces, and must be between 1 to 50 characters")
	private String name;

	@NotEmpty(message = "Please enter vehicleid")
	private String vehicleId;// preload

	@NotNull(message = "Please enter dateOfBirth")
	private Date dateOfBirth;// preload

	@NotNull(message = "Please enter insuranceAmount")
	private Integer insuranceAmount;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(String vehicleId) {
		this.vehicleId = vehicleId;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Integer getInsuranceAmount() {
		return insuranceAmount;
	}

	public void setInsuranceAmount(Integer insuranceAmount) {
		this.insuranceAmount = insuranceAmount;
	}
	
	@Override
    public BaseDTO getDto() {
        OwnerDTO dto = initDTO(new OwnerDTO());
        dto.setName(name);
        dto.setVehicleId(vehicleId);
        dto.setDateOfBirth(dateOfBirth);
        dto.setInsuranceAmount(insuranceAmount);
        return dto;
    }
}
