package com.rays.form;

import javax.validation.constraints.NotEmpty;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.DeceaseDTO;
import com.rays.validation.ValidAlphabetic;

public class DeceaseForm extends BaseForm {

	@NotEmpty(message = "name is required")
	private String name;

	@NotEmpty(message = "description is required")
	@ValidAlphabetic(message = "Please type alphabets")
	private String description;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public BaseDTO getDto() {
		DeceaseDTO dto = initDTO(new DeceaseDTO());
		dto.setName(name);
		dto.setDescription(description);
		return dto;
	}
}
