package com.rays.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CustomerDTO;

public class CustomerForm extends BaseForm {
	
	@NotEmpty(message = "Please enter clientname")
	//@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "name should contain only letters and spaces, and must be between 1 to 50 characters")
	private String clientname;

	@NotNull(message = "Please enter contactnumber")
	private Long contactnumber;// preload
	
	
	@NotEmpty(message = "Please enter  location")
	private String location;
	
	@NotEmpty(message = "Please enter importance")
	private String importance;// preload

	

	public String getClientname() {
		return clientname;
	}



	public void setClientname(String clientname) {
		this.clientname = clientname;
	}



	public Long getContactnumber() {
		return contactnumber;
	}



	public void setContactnumber(Long contactnumber) {
		this.contactnumber = contactnumber;
	}



	public String getLocation() {
		return location;
	}



	public void setLocation(String location) {
		this.location = location;
	}



	public String getImportance() {
		return importance;
	}



	public void setImportance(String importance) {
		this.importance = importance;
	}
	
	@Override
	public BaseDTO getDto() {
		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		CustomerDTO dto = initDTO(new CustomerDTO());
		 dto.setContactnumber(contactnumber);
		 System.out.println(contactnumber);
		/*
		 * if (requiredexperience != null && !requiredexperience.isEmpty()) {
		 * dto.setRequiredexperience(Long.valueOf(requiredexperience)); }
		 */
		dto.setClientname(clientname);
		System.out.println(clientname);
		dto.setLocation(location);
		System.out.println(location);
		dto.setImportance(importance);

		return dto;
	}
	
}
