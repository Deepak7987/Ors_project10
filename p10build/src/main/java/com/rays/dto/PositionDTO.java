package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_POSITION")
public class PositionDTO extends BaseDTO {
	
	@Column(name = "DESIGNATION")
	private String designation;

	@Column(name = "OPENINGDATE")
	private Date openingdate;// preload

	@Column(name = "REQUIREDEXPERIENCE")
	private int requiredexperience;// preload

	@Column(name = "CONDITIONS")
	private String condition;

	
	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Date getOpeningdate() {
		return openingdate;
	}

	public void setOpeningdate(Date openingdate) {
		this.openingdate = openingdate;
	}

	public int getRequiredexperience() {
		return requiredexperience;
	}

	public void setRequiredexperience(int requiredexperience) {
		this.requiredexperience = requiredexperience;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	@Override
	public String getValue() {
		return condition;
	}

	@Override
	public String getUniqueKey() {
		return "designation";
	}

	@Override
	public String getUniqueValue() {
		return designation;
	}

	@Override
	public String getLabel() {
		return "condition";
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
		map.put("id", id);
		return map;
	}

}
