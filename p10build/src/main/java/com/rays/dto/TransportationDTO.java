package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_TRANSPORTATION")
public class TransportationDTO extends BaseDTO {

    @Column(name = "DESCRIPTION", length = 100)
    private String description;

    @Column(name = "DATE")
    private Date date;

    @Column(name = "COST")
    private Long cost;

    @Column(name = "MODE", length = 50)
    private String mode;

    

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Long getCost() {
		return cost;
	}

	public void setCost(Long cost) {
		this.cost = cost;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	@Override
    public String getValue() {
        return mode;
    }

    @Override
    public String getUniqueKey() {
        return "description";
    }

    @Override
    public String getUniqueValue() {
        return cost + "";
    }

    @Override
    public String getLabel() {
        return "cost";
    }

    @Override
    public LinkedHashMap<String, String> orderBY() {
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("description", "asc");
        return map;
    }

    @Override
    public LinkedHashMap<String, Object> uniqueKeys() {
        LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
        map.put("description", description);
        return map;
    }

}

