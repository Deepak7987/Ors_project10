package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.IssueDTO;
import com.rays.dto.JobDTO;

public class IssueForm extends BaseForm {

    @NotEmpty(message = "Please enter title")
    @Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "title contains alphabets only")    
   // @ValidAlphabetic(message = "please enter Alphabet")
    private String title;

    @NotNull(message = "Please enter open date")
    //@ValidDate(message = "Invalid date format or value")
    private String openDate;

    @NotEmpty(message = "Please enter description")
    @Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Description contains alphabets only")
    private String description;
    
    @NotEmpty(message = "Please enter assignTo")
   // @Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Description contains alphabets only")
    private String assignTo;
    
    @NotEmpty(message = "Please enter status")
    // @Pattern(regexp = "^[A-Za-z]+([ '-][A-Za-z]+)*$", message = "Description contains alphabets only")
     private String status;

  

   

	public String getTitle() {
		return title;
	}





	public void setTitle(String title) {
		this.title = title;
	}





	public String getOpenDate() {
		return openDate;
	}





	public void setOpenDate(String openDate) {
		this.openDate = openDate;
	}





	public String getDescription() {
		return description;
	}





	public void setDescription(String description) {
		this.description = description;
	}





	public String getAssignTo() {
		return assignTo;
	}





	public void setAssignTo(String assignTo) {
		this.assignTo = assignTo;
	}





	public String getStatus() {
		return status;
	}





	public void setStatus(String status) {
		this.status = status;
	}





	@Override
    public BaseDTO getDto() {
        IssueDTO dto = initDTO(new IssueDTO());
//        if (cost != null && !cost.isEmpty()) {
//            dto.setCost(Long.valueOf(cost));
//        }
        dto.setTitle(title);
        if (openDate != null && !openDate.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(openDate);
				dto.setOpenDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
			e.printStackTrace();
			}
		}
        dto.setDescription(description);
        dto.setAssignTo(assignTo);
        dto.setStatus(status);
        return dto;
    }
}
