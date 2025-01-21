package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.InventoryDTO;
import com.rays.dto.JobDTO;
import com.rays.validation.ValidAlphabetic;
import com.rays.validation.ValidDate;
import com.rays.validation.ValidLong;

public class JobForm extends BaseForm {
	
    @NotEmpty(message = "Please enter title")
    @Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "title should contain only letters and spaces, and must be between 1 to 50 characters")
    private String title;

    @NotEmpty(message = "status is required")
   // @ValidAlphabetic(message = "please enter Alphabet")
    private String status;

    @NotNull(message = "dateOfOpening is required")
    @ValidDate
    private String dateOfOpening;

    @NotNull(message = "Please enter experience")
	@Pattern(regexp = "^([0-9]|[1-2][0-9]|3[0-5])$", message = "please enter exprience after 40 years")
    private String experience;

  
   
	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getStatus() {
		return status;
	}









	public void setStatus(String status) {
		this.status = status;
	}


	public String getDateOfOpening() {
		return dateOfOpening;
	}



	public void setDateOfOpening(String dateOfOpening) {
		this.dateOfOpening = dateOfOpening;
	}


	public String getExperience() {
		return experience;
	}



	public void setExperience(String experience) {
		this.experience = experience;
	}




	@Override
    public BaseDTO getDto() {
        JobDTO dto = initDTO(new JobDTO());
        if (experience != null && !experience.isEmpty()) {
            dto.setExperience(Long.valueOf(experience));
        }
        dto.setTitle(title);
        if (dateOfOpening != null && !dateOfOpening.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(dateOfOpening);
				dto.setDateOfOpening(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
			e.printStackTrace();
			}
		}
        dto.setStatus(status);
        return dto;
    }
}
