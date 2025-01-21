package com.rays.form;

import java.util.Date;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.PathDTO;

public class PathForm extends BaseForm{
	
	
	 @NotEmpty(message = "Please enter the route Name")
	    private String routeName;

	    @PastOrPresent(message = "initialization date must be today or in the past")
	    @NotNull(message = "Please enter initialization date")
	    private Date initializationDate;

	    @NotNull(message = "Please enter Permitted Speed")
	    @Min(value = 1, message = "Coverage amount should be more than 1")
	    @Max(value = 999999, message = "Permitted Speed should have only 6 digits")
	    private Integer permittedSpeed;

	    @NotEmpty(message = "Please select a Asset Id")
	    private String assetId;

	   

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
	    public BaseDTO getDto() {
	        PathDTO dto = initDTO(new PathDTO());
	        dto.setRouteName(routeName);
	        dto.setInitializationDate(initializationDate);
	        dto.setPermittedSpeed(permittedSpeed);
	        dto.setAssetId(assetId);
	        return dto;
	    }
	
	

}
