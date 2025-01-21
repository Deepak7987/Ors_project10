package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.VehicleDTO;
import com.rays.validation.ValidDate;

public class VehicleForm extends BaseForm {
	
	 @NotEmpty(message = "Please enter number")
    @Pattern(regexp = "^[a-zA-Z1-9]{1,10}$", message = "Please enter a 10 digit valid number")
    private String number;

    @NotEmpty(message = "coloure is required")
   // @ValidAlphabetic(message = "please enter Alphabet")
    private String coloure;

    @NotNull(message = "purchaseDate is required")
    @ValidDate
    private String purchaseDate;

    @NotNull(message = "Please enter InsuranceAmount")
	@Pattern(regexp = "\\b(?:[1-9]\\d{0,5}|[1-9]?[0-9]{1,5}|500000)\\b", message = "please enter InsuranceAmount 1-20 digits")
    private String insuranceAmount;

  
   



	public String getNumber() {
		return number;
	}






	public void setNumber(String number) {
		this.number = number;
	}






	public String getColoure() {
		return coloure;
	}






	public void setColoure(String coloure) {
		this.coloure = coloure;
	}






	






	public String getPurchaseDate() {
		return purchaseDate;
	}






	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}






	public String getInsuranceAmount() {
		return insuranceAmount;
	}






	public void setInsuranceAmount(String insuranceAmount) {
		this.insuranceAmount = insuranceAmount;
	}






	@Override
    public BaseDTO getDto() {
        VehicleDTO dto = initDTO(new VehicleDTO());
        if (insuranceAmount != null && !insuranceAmount.isEmpty()) {
            dto.setInsuranceAmount(Long.valueOf(insuranceAmount));
        }
        dto.setColoure(coloure);
        if (purchaseDate != null && !purchaseDate.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(purchaseDate);
				dto.setPurchaseDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
			e.printStackTrace();
			}
		}
        dto.setNumber(number);
        return dto;
    }
}
