package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.OrderDto;
import com.rays.validation.ValidAlphabetic;
import com.rays.validation.ValidDate;
import com.rays.validation.ValidLong;

public class OrderForm extends BaseForm {

	@NotNull(message = "please enter quantity")
	@ValidLong(message = "Invalid input for price")
	private String quantity;

	@NotEmpty(message = "Please enter product")
//	@ValidAlphabetic(message = "Please type alphabets")
	private String product;

	@NotNull(message = "Please enter date")
	@ValidDate
	//@Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$", message = "Invalid date format, Please use a valid date")
	private String dob;

	@NotNull(message = "Please enter amount")
    @Pattern(regexp = "^(?:[1-9]|[1-9]\\d{1,2}|1\\d{3}|2000)$", message = "Please enter a number greater than 2000 and do not start with zero")  
	private String amount;

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

//	public OrderDto getDate(String dob) {
//		OrderDto dto = new OrderDto();
//
//		// Ensure orderDate is not null before parsing
//		if (dob != null) {
//			try {
//				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//				Date date = sdf.parse(dob);
//				dto.setDob(date);
//			} catch (ParseException e) {
//				// Handle parse exception
//				e.printStackTrace();
//			}
//		} else {
//			// Handle the case where orderDate is null
//			System.err.println("Order date is null");
//		}
//
//		return dto;
//	}

	@Override
	public BaseDTO getDto() {
		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		OrderDto dto = initDTO(new OrderDto());
		if (quantity != null && !quantity.isEmpty()) {
			dto.setQuantity(Long.valueOf(quantity));
		}
		dto.setProduct(product);
		if (dob != null && !dob.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(dob);
				dto.setDob(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}
		if (amount != null && !amount.isEmpty()) {
			dto.setAmount(Long.valueOf(amount));
		}

		return dto;
	}

}
