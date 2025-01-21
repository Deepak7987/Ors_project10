package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;


@Entity
@Table(name = "ST_COMPENSATION")
public class CompensationDTO extends BaseDTO{
	
	
	
	@Column(name = "STAFFMEMBER")
	private String staffMember;//preload
	
	@Column(name = "PAYMENTAMOUNT")
	private Long paymentAmount;

	@Column(name = "DATEAPPLIED")
	private Date dateApplied;

	@Column(name = "STATE")
	private String state;// preload
	
	public String getStaffMember() {
		return staffMember;
	}

	public void setStaffMember(String staffMember) {
		this.staffMember = staffMember;
	}

	public Long getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(Long paymentAmount) {
		this.paymentAmount = paymentAmount;
	}

	public Date getDateApplied() {
		return dateApplied;
	}

	public void setDateApplied(Date dateApplied) {
		this.dateApplied = dateApplied;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	


	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return "staffMember";
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "staffMember";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return id+"";
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "staffMember";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("staffMember", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("id", id);
		return map;
	}

}
