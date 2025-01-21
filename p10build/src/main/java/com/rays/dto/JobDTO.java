	package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_JOB")
public class JobDTO extends BaseDTO {

    @Column(name = "TITLE")
    private String title;

    @Column(name = "DATE_OF_OPENING")
    private Date dateOfOpening;

    @Column(name = "EXPERIENCE")
    private Long experience;

    @Column(name = "STATUS", length = 50)
    private String status;   

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getDateOfOpening() {
		return dateOfOpening;
	}

	public void setDateOfOpening(Date dateOfOpening) {
		this.dateOfOpening = dateOfOpening;
	}

	public Long getExperience() {
		return experience;
	}

	public void setExperience(Long experience) {
		this.experience = experience;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
    public String getValue() {
        return status;
    }

    @Override
    public String getUniqueKey() {
        return "title";
    }

    @Override
    public String getUniqueValue() {
        return title;
    }

    @Override
    public String getLabel() {
        return "title";
    }

    @Override
    public LinkedHashMap<String, String> orderBY() {
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("status", "asc");
        return map;
    }

    @Override
    public LinkedHashMap<String, Object> uniqueKeys() {
        LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
        map.put("status", status);
        return map;
    }

}

