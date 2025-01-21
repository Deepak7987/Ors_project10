package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.PositionDTO;


public class PositionForm  extends BaseForm{
	
	
	@NotEmpty(message = "Please enter designation")
	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "name should contain only letters and spaces, and must be between 1 to 50 characters")
	private String designation;

	//@NotNull(message = "Please enter openingdate")
	private Date openingdate;// preload
	
	
	//@NotEmpty(message = "Please enter requiredexperience")
	private int requiredexperience;// preload

	

	@NotNull(message = "Please enter condition")
	private String condition;

	
	
	public String getDesignation() {
		return designation;
	}



	public void setDesignation(String designation) {
		this.designation = designation;
	}



	public Date getOpeningdate() {
		return openingdate;
	}



	public void setOpeningdate(Date openingdate) {
		this.openingdate = openingdate;
	}



	public int getRequiredexperience() {
		return requiredexperience;
	}



	public void setRequiredexperience(int requiredexperience) {
		this.requiredexperience = requiredexperience;
	}



	public String getCondition() {
		return condition;
	}



	public void setCondition(String condition) {
		this.condition = condition;
	}



	@Override
	public BaseDTO getDto() {
		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		PositionDTO dto = initDTO(new PositionDTO());
		 dto.setRequiredexperience(requiredexperience);
		/*
		 * if (requiredexperience != null && !requiredexperience.isEmpty()) {
		 * dto.setRequiredexperience(Long.valueOf(requiredexperience)); }
		 */
		dto.setCondition(condition);
		dto.setOpeningdate(openingdate);
		dto.setDesignation(designation);

		return dto;
	}

}
