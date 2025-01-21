package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name="ST_PROPRIETOR")
public class ProprietorDTO extends BaseDTO {
	
	 @Column(name = "FULL_NAME", length = 50)
	    private String fullName;

	    @Column(name = "BIRTH_DATE")
	    private Date birthDate;

	    @Column(name = "COVERAGE_AMOUNT")
	    private Integer coverageAmount;

	    @Column(name = "ASSET_ID", length = 50)
	    private String assetId;

		public String getAssetId() {
			return assetId;
		}

		public void setAssetId(String assetId) {
			this.assetId = assetId;
		}

		public String getFullName() {
			return fullName;
		}

		public void setFullName(String fullName) {
			this.fullName = fullName;
		}

		public Date getBirthDate() {
			return birthDate;
		}

		public void setBirthDate(Date birthDate) {
			this.birthDate = birthDate;
		}

		public Integer getCoverageAmount() {
			return coverageAmount;
		}

		public void setCoverageAmount(Integer coverageAmount) {
			this.coverageAmount = coverageAmount;
		}

		@Override
	    public String getValue() {
	        return fullName;
	    }

	    @Override
	    public String getUniqueKey() {
	        return "fullName";
	    }

	    @Override
	    public String getUniqueValue() {
	        return id + "";
	    }

	    @Override
	    public String getLabel() {
	        return "Proprietor";
	    }

	    @Override
	    public LinkedHashMap<String, String> orderBY() {
	        LinkedHashMap<String, String> map = new LinkedHashMap<>();
	        map.put("fullName", "asc");
	        return map;
	    }

	    @Override
	    public LinkedHashMap<String, Object> uniqueKeys() {
	        LinkedHashMap<String, Object> map = new LinkedHashMap<>();
	        map.put("id", id);
	        return map;
	    }

}
