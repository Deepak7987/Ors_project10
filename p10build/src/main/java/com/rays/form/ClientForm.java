package com.rays.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.ClientDTO;
import com.rays.validation.ValidPhone;
import com.rays.validation.ValidPriority;

public class ClientForm extends BaseForm {

	@NotEmpty(message = "Please enter name")
	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "name should contain only letters and spaces, and must be between 1 to 50 characters")
	private String name;

	@NotEmpty(message = "Please enter address")
	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "address should contain only letters and spaces, and must be between 1 to 50 characters")
	private String address;

	@NotNull(message = "please enter phone")
	@ValidPhone
	private Long phone;

	@NotEmpty(message = "Please enter priority")
	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "priority should contain only letters and spaces, and must be between 1 to 50 characters")
	@ValidPriority
	private String priority;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	@Override
    public BaseDTO getDto() {
        ClientDTO dto = initDTO(new ClientDTO());
        dto.setName(name);
        dto.setAddress(address);
        dto.setPhone(phone);
        dto.setPriority(priority);
        return dto;
    }
	
}
