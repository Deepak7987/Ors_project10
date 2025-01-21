package com.rays.form;

import java.util.Date;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.ProprietorDTO;

public class ProprietorForm extends BaseForm{
	
	@NotEmpty(message = "Please enter the full Name")
    private String fullName;

    @PastOrPresent(message = "birth Date must be today or in the past")
    @NotNull(message = "Please enter birth Date ")
    private Date birthDate;

    @NotNull(message = "Please enter coverage amount")
    @Min(value = 1, message = "Coverage amount should be more than 1")
    @Max(value = 999999, message = "Coverage amount should have only 6 digits")
    private Integer coverageAmount;

    @NotEmpty(message = "Please select a asset id")
    private String assetId;

    
    public String getFullName() {
		return fullName;
	}


	public void setFullName(String fullName) {
		this.fullName = fullName;
	}


	public Date getBirthDate() {
		return birthDate;
	}


	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}


	public Integer getCoverageAmount() {
		return coverageAmount;
	}


	public void setCoverageAmount(Integer coverageAmount) {
		this.coverageAmount = coverageAmount;
	}


	

	public String getAssetId() {
		return assetId;
	}


	public void setAssetId(String assetId) {
		this.assetId = assetId;
	}


	@Override
    public BaseDTO getDto() {
        ProprietorDTO dto = initDTO(new ProprietorDTO());
        dto.setFullName(fullName);;
        dto.setBirthDate(birthDate);;
        dto.setCoverageAmount(coverageAmount);
        dto.setAssetId(assetId);
        return dto;
    }

}
