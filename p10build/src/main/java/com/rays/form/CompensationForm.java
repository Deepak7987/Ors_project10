package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CompensationDTO;

public class CompensationForm extends BaseForm {
	
	@NotEmpty(message = "Please enter staffMember")
	//@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "name should contain only letters and spaces, and must be between 1 to 50 characters")
	private String staffMember;// preload

	@NotNull(message = "Please enter paymentAmount")
	private Long paymentAmount;
	
	@NotNull(message = "Please enter dateApplied")
	private Date dateApplied;
	
	@NotEmpty(message = "Please enter state")
	private String state;// preload

	public String getStaffMember() {
		return staffMember;
	}

	public void setStaffMember(String staffMember) {
		this.staffMember = staffMember;
	}

	public Long getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(Long paymentAmount) {
		this.paymentAmount = paymentAmount;
	}

	public Date getDateApplied() {
		return dateApplied;
	}

	public void setDateApplied(Date dateApplied) {
		this.dateApplied = dateApplied;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	@Override
	public BaseDTO getDto() {
		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		CompensationDTO dto = initDTO(new CompensationDTO());
		 dto.setStaffMember(staffMember);
		
		/*
		 * if (requiredexperience != null && !requiredexperience.isEmpty()) {
		 * dto.setRequiredexperience(Long.valueOf(requiredexperience)); }
		 */
		dto.setPaymentAmount(paymentAmount);
		
		dto.setDateApplied(dateApplied);
		
		dto.setState(state);

		return dto;
	}

}
