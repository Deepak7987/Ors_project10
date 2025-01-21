package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ATM_DETAILS")
public class AtmDTO extends BaseDTO {

    @Column(name = "LOCATION", length = 100)
    private String location;

    @Column(name = "INSTALLATION_DATE")
    private Date installationDate;

    @Column(name = "CASH_AVAILABLE")
    private boolean cashAvailable;

    @Column(name = "REMARKS", length = 50)
    private String remarks;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getInstallationDate() {
        return installationDate;
    }

    public void setInstallationDate(Date installationDate) {
        this.installationDate = installationDate;
    }

    public boolean isCashAvailable() {
        return cashAvailable;
    }

    public void setCashAvailable(boolean cashAvailable) {
        this.cashAvailable = cashAvailable;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    @Override
    public String getValue() {
        return location;
    }

    @Override
    public String getUniqueKey() {
        return "location";
    }

    @Override
    public String getUniqueValue() {
        return location;
    }

    @Override
    public String getLabel() {
        return "ATM Location";
    }

    @Override
    public LinkedHashMap<String, String> orderBY() {
        LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
        map.put("location", "asc");
        return map;
    }

    @Override
    public LinkedHashMap<String, Object> uniqueKeys() {
        LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
        map.put("location", location);
        return map;
    }

}
