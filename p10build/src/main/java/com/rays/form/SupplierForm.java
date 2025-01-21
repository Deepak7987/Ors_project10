package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.SupplierDTO;
import com.rays.validation.ValidDate;
import com.rays.validation.ValidLong;

public class SupplierForm extends BaseForm {

	@NotEmpty(message = "Please enter name")
	// @ValidAlphabetic(message = "Please type alphabets")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Please enter alphabetic characters only")
	private String name;

	@NotEmpty(message = "Please enter category")
	// @ValidAlphabetic(message = "Please type alphabets")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Please enter alphabetic characters only")
	private String category;

	@NotNull(message = "Please enter registration")
	@ValidDate(message = "Invalid date format or value")
	private String registrationDate;

	@NotNull(message = "Please enter payment term")
	@ValidLong(message = "Invalid input for paymentTerm")
	private String paymentTerm;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getPaymentTerm() {
		return paymentTerm;
	}

	public void setPaymentTerm(String paymentTerm) {
		this.paymentTerm = paymentTerm;
	}

	@Override
	public BaseDTO getDto() {
		SupplierDTO dto = initDTO(new SupplierDTO());
		dto.setName(name);
		dto.setCategory(category);
		if (registrationDate != null && !registrationDate.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(registrationDate);
				dto.setRegistrationDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}
		if (paymentTerm != null && !paymentTerm.isEmpty()) {
			dto.setPaymentTerm(Long.valueOf(paymentTerm));
		}
		return dto;
	}
}
