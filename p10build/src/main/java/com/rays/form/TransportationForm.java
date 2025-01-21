package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.JobDTO;
import com.rays.dto.TransportationDTO;
import com.rays.validation.ValidDate;

public class TransportationForm extends BaseForm {
	
    @NotNull(message = "Please enter cost")
    @Pattern(regexp = "^(?!0)\\d{1,12}$", message = "Please enter 1 to 12 numbers valid  cost ")
    private String cost;

    @NotEmpty(message = "Please enter mode")
   // @ValidAlphabetic(message = "please enter Alphabet")
    private String mode;

    @NotNull(message = "Please enter last date")
    @ValidDate
    private String date;

    @NotEmpty(message = "Please enter name")
	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "Name should contain only letters and spaces, and must be between 1 to 50 characters")
    private String description;

  
   

	





	public String getCost() {
		return cost;
	}










	public void setCost(String cost) {
		this.cost = cost;
	}










	public String getMode() {
		return mode;
	}










	public void setMode(String mode) {
		this.mode = mode;
	}










	public String getDate() {
		return date;
	}










	public void setDate(String date) {
		this.date = date;
	}










	public String getDescription() {
		return description;
	}










	public void setDescription(String description) {
		this.description = description;
	}










	@Override
    public BaseDTO getDto() {
        TransportationDTO dto = initDTO(new TransportationDTO());
        if (cost != null && !cost.isEmpty()) {
            dto.setCost(Long.valueOf(cost));
        }
        dto.setDescription(description);
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
        dto.setMode(mode);
        return dto;
    }
}
