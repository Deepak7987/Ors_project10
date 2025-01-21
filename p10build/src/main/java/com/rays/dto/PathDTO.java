package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name="ST_PATH")
public class PathDTO extends BaseDTO {
	
	 @Column(name = "ROUTE_NAME", length = 50)
	    private String routeName;

	    @Column(name = "INITIALIZATION_DATE")
	    private Date initializationDate;

	    @Column(name = "PERMITTED_SPEED")
	    private Integer permittedSpeed;

	    @Column(name = "ASSET_ID", length = 50)
	    private String assetId;

		
		@Override
	    public String getValue() {
	        return routeName;
	    }
		

	    @Override
	    public String getUniqueKey() {
	        return "routeName";
	    }

	    @Override
	    public String getUniqueValue() {
	        return id + "";
	    }

	    @Override
	    public String getLabel() {
	        return "Path";
	    }

	    @Override
	    public LinkedHashMap<String, String> orderBY() {
	        LinkedHashMap<String, String> map = new LinkedHashMap<>();
	        map.put("routeName", "asc");
	        return map;
	    }

	    public String getRouteName() {
			return routeName;
		}

		public void setRouteName(String routeName) {
			this.routeName = routeName;
		}

		public Date getInitializationDate() {
			return initializationDate;
		}

		public void setInitializationDate(Date initializationDate) {
			this.initializationDate = initializationDate;
		}

		public Integer getPermittedSpeed() {
			return permittedSpeed;
		}

		public void setPermittedSpeed(Integer permittedSpeed) {
			this.permittedSpeed = permittedSpeed;
		}

		public String getAssetId() {
			return assetId;
		}

		public void setAssetId(String assetId) {
			this.assetId = assetId;
		}

		@Override
	    public LinkedHashMap<String, Object> uniqueKeys() {
	        LinkedHashMap<String, Object> map = new LinkedHashMap<>();
	        map.put("id", id);
	        return map;
	    }

}
