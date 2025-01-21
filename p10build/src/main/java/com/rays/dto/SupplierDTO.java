package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_SUPPLIER")
public class SupplierDTO extends BaseDTO {

	@Column(name = "NAME", length = 100)
	private String name;

	@Column(name = "CATEGORY", length = 50)
	private String category;

	@Column(name = "REGISTRATION")
	private Date registrationDate;

	@Column(name = "PAYMENT_TERM")
	private Long paymentTerm;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}

	public Long getPaymentTerm() {
		return paymentTerm;
	}

	public void setPaymentTerm(Long paymentTerm) {
		this.paymentTerm = paymentTerm;
	}

	@Override
	public String getValue() {
		return category;
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
