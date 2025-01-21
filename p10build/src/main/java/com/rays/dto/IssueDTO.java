package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_ISSUE")
public class IssueDTO extends BaseDTO {

    @Column(name = "OPEN_DATE")
    private Date openDate;

    @Column(name = "TITLE", length = 100)
    private String title;

    @Column(name = "DESCRIPTION", length = 500)
    private String description;

    @Column(name = "ASSIGN_TO", length = 50)
    private String assignTo;

    @Column(name = "STATUS", length = 20)
    private String status;

    

    
	public Date getOpenDate() {
		return openDate;
	}

	public void setOpenDate(Date openDate) {
		this.openDate = openDate;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAssignTo() {
		return assignTo;
	}

	public void setAssignTo(String assignTo) {
		this.assignTo = assignTo;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
    public String getValue() {
        return assignTo;
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
        return "Id";
    }

    @Override
    public LinkedHashMap<String, String> orderBY() {
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("assignTo", "asc");
        return map;
    }

    @Override
    public LinkedHashMap<String, Object> uniqueKeys() {
        LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
        map.put("assignTo", assignTo);
        return map;
    }

}

