package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_OWNER")
public class OwnerDTO extends BaseDTO {

	@Column(name = "NAME")
	private String name;

	@Column(name = "VEHICLEID")
	private String vehicleId;// preload

	@Column(name = "DATEOFBIRTH")
	private Date dateOfBirth;// preload

	@Column(name = "INSURANCEAMOUNT")
	private Integer insuranceAmount;

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

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public Integer getInsuranceAmount() {
		return insuranceAmount;
	}

	public void setInsuranceAmount(Integer insuranceAmount) {
		this.insuranceAmount = insuranceAmount;
	}

	@Override
	public String getValue() {
		return vehicleId;
	}

	@Override
	public String getUniqueKey() {
		return "name";
	}

	@Override
	public String getUniqueValue() {
		return name;
	}

	@Override
	public String getLabel() {
		return "name";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("id", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("vehicleId", vehicleId);
		return map;
	}

}
