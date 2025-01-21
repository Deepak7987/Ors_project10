package com.rays.form;



import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.RouteDTO;
import com.rays.dto.SupplierDTO;
import com.rays.validation.ValidDate;
import com.rays.validation.ValidLong;

public class RouteForm extends BaseForm {

	@Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "Name should contain only letters and spaces, and must be between 1 to 50 characters")
	@NotEmpty(message = "Name is required")
	private String name;

	@NotNull(message = "Please enter start date")
	@ValidDate(message = "Invalid date format or value")
	private String startDate;

	@Pattern(regexp = "^(?!0$)([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|250)$", message = "Please enter a number between 1 and 250")
	@NotEmpty(message = "AllowSpeed is required")
	private String allowSpeed;
 
	@Pattern(regexp = "^[a-zA-Z0-9_-]{1,20}$", message = " Vehicle ID must be alphanumeric with optional '-' or '_' and length between 1 to 20 characters")
	@NotEmpty(message = "Vehicle ID is required")
	private String vehicleId;

	
	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	



	public String getVehicleId() {
		return vehicleId;
	}



	public void setVehicleId(String vehicleId) {
		this.vehicleId = vehicleId;
	}



	public String getStartDate() {
		return startDate;
	}



	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}



	public String getAllowSpeed() {
		return allowSpeed;
	}



	public void setAllowSpeed(String allowSpeed) {
		this.allowSpeed = allowSpeed;
	}



	@Override
	public BaseDTO getDto() {
		RouteDTO dto = initDTO(new RouteDTO());
		dto.setName(name);
		if (startDate != null && !startDate.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(startDate);
				dto.setStartDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
				e.printStackTrace();
			}
		}
		if (allowSpeed != null && !allowSpeed.isEmpty()) {
			dto.setAllowSpeed(Long.valueOf(allowSpeed));
		}
		dto.setVehicleId(vehicleId);
		
	
		return dto;
	}
}
