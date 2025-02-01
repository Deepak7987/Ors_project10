package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table (name = "ST_CART")
public class CartDTO extends BaseDTO{
	
	@Column(name = "CUSTOMERNAME", length = 20)
	private String customerName;
	
	@Column(name = "PRODUCT")
	private String product;//preload
	
	public String getCustomerName() {
		return customerName;
	}

	
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public Long getQuantityOrdered() {
		return quantityOrdered;
	}

	public void setQuantityOrdered(Long quantityOrdered) {
		this.quantityOrdered = quantityOrdered;
	}

	public Date getTransationDate() {
		return transationDate;
	}

	public void setTransationDate(Date transationDate) {
		this.transationDate = transationDate;
	}

	@Column(name = "QUANTITYORDERED", length = 10)
	private Long quantityOrdered;
	
	@Column(name = "TRANSACTIONDATE")
	private Date transationDate;

	
	@Override
	public String getValue() {
		
		return "customerName";
	}

	@Override
	public String getUniqueKey() {
		
		return "customerName";
	}

	@Override
	public String getUniqueValue() {
		
		return id+"";
	}

	@Override
	public String getLabel() {
		
		return "customerName";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("customerName", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("id", id);
		return map;
	}
	

}
