package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_WISHLIST")
public class WishListDTO extends BaseDTO {
	
	@Column(name = "PRODUCT", length =50)
	private String product;
	
	@Column(name = "DATE")
	private Date date;
	
	@Column(name = "USER_NAME", length =50)
	private String userName;
	
	@Column(name = "REMARK", length =50)
	private String remark;
	
	

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return product;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "userName";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return userName;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return userName;
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("userName", "asc");
		
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("userName", userName);
		
		return map;
	}

}
