package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.PrescriptionDTO;
import com.rays.validation.ValidDate;

public class PrescriptionForm extends BaseForm {

	@NotEmpty(message = "name is required")
	// @ValidAlphabetic(message = "Please type alphabets")
	private String name;

	@NotEmpty(message = "disease is required")
	// @ValidAlphabetic(message = "Please type alphabets")
	private String decease = null;

	@NotEmpty(message = "Please enter date")
	//@ValidDate(message = "Invalid date format or value")
	@Pattern(regexp = "(19\\d{2}|20[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])", message = "Dose Not Match The Formate")
	private String date;

	@NotEmpty(message = "name is required")
	private String capacity;

	@Min(1)
	private String deceaseId;

	public String getDecease() {
		return decease;
	}

	public void setDecease(String decease) {
		this.decease = decease;
	}

	public String getDeceaseId() {
		return deceaseId;
	}

	public void setDeceaseId(String deceaseId) {
		this.deceaseId = deceaseId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}

	@Override
	public BaseDTO getDto() {
		PrescriptionDTO dto = initDTO(new PrescriptionDTO());
		dto.setName(name);
		dto.setDecease(decease);
		if (date != null && !date.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(date);
				dto.setDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}
		dto.setCapacity(capacity);
		if (deceaseId != null && !deceaseId.isEmpty()) {
			dto.setDeceaseId(Long.valueOf(deceaseId));
		}
		return dto;
	}
}
