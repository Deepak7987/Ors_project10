package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.CartDTO;

public class CartForm extends BaseForm{
	
	@NotEmpty(message = "Please enter customerName")
	//@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "name should contain only letters and spaces, and must be between 1 to 50 characters")
	private String customerName;

	@NotEmpty(message = "Please enter product")
	private String product;
	
	@NotNull(message = "Please enter quantityOrdered")
	private Long quantityOrdered;
	
	
	  @NotNull(message = "Please enter transationDate")
	private Date transationDate;


	public String getCustomerName() {
		return customerName;
	}


	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}


	public String getProduct() {
		return product;
	}


	public void setProduct(String product) {
		this.product = product;
	}


	public Long getQuantityOrdered() {
		return quantityOrdered;
	}


	public void setQuantityOrdered(Long quantityOrdered) {
		this.quantityOrdered = quantityOrdered;
	}


	public Date getTransationDate() {
		return transationDate;
	}


	public void setTransationDate(Date transationDate) {
		this.transationDate = transationDate;
	}
	
	@Override
	public BaseDTO getDto() {
		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		CartDTO dto = initDTO(new CartDTO());
		 dto.setCustomerName(customerName);
		 
		/*
		 * if (requiredexperience != null && !requiredexperience.isEmpty()) {
		 * dto.setRequiredexperience(Long.valueOf(requiredexperience)); }
		 */
		dto.setProduct(product);
		
		dto.setQuantityOrdered(quantityOrdered);
		
		dto.setTransationDate(transationDate);
		
	

		return dto;
	}
	
	

}
