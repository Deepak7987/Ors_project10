package com.rays.dto;


import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_ROUTE")
public class RouteDTO extends BaseDTO {

	@Column(name = "NAME", length = 100)
	private String name;

	@Column(name = "VEHICLE_ID")
	private String vehicleId;

	@Column(name = "START_DATE")
	private Date startDate;

	@Column(name = "ALLOW_SPEED")
	private Long allowSpeed;

	
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

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Long getAllowSpeed() {
		return allowSpeed;
	}

	public void setAllowSpeed(Long allowSpeed) {
		this.allowSpeed = allowSpeed;
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

	// Optional: Implement ordering logic if needed
	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<>();
		map.put("name", "asc");
		return map;
	}

	// Optional: Implement unique keys logic if needed
	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<>();
		map.put("name", name);
		return map;
	}
}

