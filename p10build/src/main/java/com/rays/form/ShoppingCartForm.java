package com.rays.form;

import java.util.Date;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.ShoppingCartDTO;

public class ShoppingCartForm extends BaseForm {

	@NotEmpty(message = "Please enter name")
	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "name should contain only letters and spaces, and must be between 1 to 50 characters")
	private String name;

	@NotEmpty(message = "Please enter product")
	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "product should contain only letters and spaces, and must be between 1 to 50 characters")
	private String product;

	//@NotNull(message = "Please enter date1")
	private Date date1;

	@NotNull(message = "Please enter quantity")
	private Integer quantity;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public Date getDate1() {
		return date1;
	}

	public void setDate1(Date date1) {
		this.date1 = date1;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	
	@Override
    public BaseDTO getDto() {
        ShoppingCartDTO dto = initDTO(new ShoppingCartDTO());
        dto.setName(name);
        dto.setProduct(product);
        dto.setDate1(date1);
        dto.setQuantity(quantity);
        return dto;
    }
}
