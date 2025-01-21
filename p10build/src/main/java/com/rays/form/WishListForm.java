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
import com.rays.dto.WishListDTO;
import com.rays.validation.ValidDate;
import com.rays.validation.ValidLong;

public class WishListForm extends BaseForm {

//	@NotEmpty(message = "please enter product")
//	private String product;
//
//	@NotNull(message = "please enter date")
//	private Date date;
//
//	@NotEmpty(message = "please enter userName")
//	private String userName;
//
//	@NotEmpty(message = "please enter remark")
//	private String remark;
//
//	public String getProduct() {
//		return product;
//	}
	
	@NotEmpty(message = "Please enter username")
	// @ValidAlphabetic(message = "Please type alphabets")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Please enter alphabetic characters only")
	private String userName;
	
	@NotEmpty(message = "Please enter remark")
	// @ValidAlphabetic(message = "Please type alphabets")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Please enter alphabetic characters only")
	private String remark;

	@NotNull(message = "Please enter date")
	@ValidDate(message = "Invalid date format or value")
	private String date;
	
	@NotEmpty(message = "Please enter product")
	// @ValidAlphabetic(message = "Please type alphabets")
	@Pattern(regexp = "^[a-zA-Z]*$", message = "Please enter alphabetic characters only")
	private String product;
	
	
	
	public String getUserName() {
		return userName;
	}



	public void setUserName(String userName) {
		this.userName = userName;
	}



	public String getRemark() {
		return remark;
	}



	public void setRemark(String remark) {
		this.remark = remark;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public String getProduct() {
		return product;
	}



	public void setProduct(String product) {
		this.product = product;
	}

	@Override
    public BaseDTO getDto() {
        WishListDTO dto = initDTO(new WishListDTO());
       dto.setUserName(userName);
        dto.setRemark(remark);
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
        dto.setProduct(product);
        return dto;
    }
}
