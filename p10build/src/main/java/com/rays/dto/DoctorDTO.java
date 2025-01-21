package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_DOCTOR")
public class DoctorDTO extends BaseDTO {
	
	@Column(name = "NAME",length = 50)
	private String name;
	
	@Column(name = "DOB")
	private Date dob;
	
	@Column(name = "MOBILE",length = 50)
	private String mobile;
	
	@Column(name = "EXPERTISE",length = 50)
	private String expertise;
	
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getExpertise() {
		return expertise;
	}

	public void setExpertise(String expertise) {
		this.expertise = expertise;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return expertise;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "mobile";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return mobile;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "mobile";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("name", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("mobile", mobile);
		return map;
	}

}
