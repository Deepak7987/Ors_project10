package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_VEHICLE")
public class VehicleDTO extends BaseDTO {

    @Column(name = "COLOURE", length = 100)
    private String coloure;

    @Column(name = "PURCHASE_DATE")
    private Date purchaseDate;

    @Column(name = "INSURANCE_AMOUNT")
    private Long insuranceAmount;

    @Column(name = "NUMBER", length = 50)
    private String number;

    

   
	
	public String getColoure() {
		return coloure;
	}

	public void setColoure(String coloure) {
		this.coloure = coloure;
	}

	public Date getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(Date purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public Long getInsuranceAmount() {
		return insuranceAmount;
	}

	public void setInsuranceAmount(Long insuranceAmount) {
		this.insuranceAmount = insuranceAmount;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	@Override
    public String getValue() {
        return coloure;
    }

    @Override
    public String getUniqueKey() {
        return "number";
    }

    @Override
    public String getUniqueValue() {
        return number;
    }

    @Override
    public String getLabel() {
        return "number";
    }

    @Override
    public LinkedHashMap<String, String> orderBY() {
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("coloure", "asc");
        return map;
    }

    @Override
    public LinkedHashMap<String, Object> uniqueKeys() {
        LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
        map.put("coloure", coloure);
        return map;
    }

}

