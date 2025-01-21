package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

//id,name,address,phone,priority(high,middle,low)
@Entity
@Table(name = "ST_CLIENT")
public class ClientDTO extends BaseDTO {

	@Column(name = "NAME")
    private String name;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "PHONE")
    private Long phone;

    @Column(name = "PRIORITY", length = 50)
    private String priority;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	@Override
    public String getValue() {
        return priority;
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
        map.put("priority", priority);
        return map;
    }

	
}
