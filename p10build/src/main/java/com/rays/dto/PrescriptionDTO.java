package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_PRESCRIPTIONN")
public class PrescriptionDTO extends BaseDTO {

	@Column(name = "NAME", length = 50)
	private String name;

	@Column(name = "DECEASE", length = 50)
	private String decease = null;

	@Column(name = "DATE")
	private Date date;

	@Column(name = "CAPACITY")
	private String capacity;

	@Column(name = "DECEASE_ID")
	private Long deceaseId;

	// Getters and setters

	public String getName() {
		return name;
	}

	public String getDecease() {
		return decease;
	}

	public void setDecease(String decease) {
		this.decease = decease;
	}

	public Long getDeceaseId() {
		return deceaseId;
	}

	public void setDeceaseId(Long deceaseId) {
		this.deceaseId = deceaseId;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getCapacity() {
		return capacity;
	}

	public void setCapacity(String capacity) {
		this.capacity = capacity;
	}

	@Override
	public String getValue() {
		return decease;
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
		return "Name";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<>();
		map.put("name", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<>();
		map.put("name", name);
		return map;
	}
}
