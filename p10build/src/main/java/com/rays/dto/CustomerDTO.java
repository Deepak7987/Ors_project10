package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;


@Entity
@Table(name = "ST_CUSTOMER")
public class CustomerDTO extends BaseDTO{
	
	@Column(name = "CLIENTNAME")
	private String clientname;
	
	@Column(name = "CONTACTNUMBER")
	private Long contactnumber;// preload

	@Column(name = "LOACATION")
	private String location;// preload

	@Column(name = "IMPORTANCE")
	private String importance;// preload

	public String getClientname() {
		return clientname;
	}

	public void setClientname(String clientname) {
		this.clientname = clientname;
	}

	public Long getContactnumber() {
		return contactnumber;
	}

	public void setContactnumber(Long contactnumber) {
		this.contactnumber = contactnumber;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getImportance() {
		return importance;
	}

	public void setImportance(String importance) {
		this.importance = importance;
	}

	

	
	
	

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return "clientname";
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "clientname";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return id+"";
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "clientname";
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("clientname", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("id", id);
		return map;
	}

}
