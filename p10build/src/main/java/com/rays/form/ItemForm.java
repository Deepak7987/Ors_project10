package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.ItemDTO;

public class ItemForm extends BaseForm {
	
	@NotEmpty(message = "Please enter title")
	//@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "name should contain only letters and spaces, and must be between 1 to 50 characters")
	private String title;

	@NotEmpty(message = "Please enter overview")
	private String overview;
	
	@NotNull(message = "Please enter cost")
	private Long cost;
	
	
	  @NotNull(message = "Please enter purchaseDate")
	private Date purchaseDate;
	
	@NotEmpty(message = "Please enter category")
	private String category;// preload
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public Long getCost() {
		return cost;
	}

	public void setCost(Long cost) {
		this.cost = cost;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	@Override
	public BaseDTO getDto() {
		// SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		ItemDTO dto = initDTO(new ItemDTO());
		 dto.setTitle(title);
		 
		/*
		 * if (requiredexperience != null && !requiredexperience.isEmpty()) {
		 * dto.setRequiredexperience(Long.valueOf(requiredexperience)); }
		 */
		dto.setOverview(overview);
		
		dto.setCost(cost);
		
		dto.setPurchaseDate(purchaseDate);
		
		dto.setCategory(category);

		return dto;
	}


}
