package com.rays.form;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.InventoryDTO;
import com.rays.validation.ValidAlphabetic;
import com.rays.validation.ValidDate;
import com.rays.validation.ValidLong;

public class InventoryForm extends BaseForm {

    @NotNull(message = "Please enter quantity")
    @Pattern(regexp = "^[1-9][0-9]{0,49}$", message = "please enter valid quantity 1 to 50 numbers")  
    private String quantity;

    @NotEmpty(message = "Please enter product")
   // @ValidAlphabetic(message = "please enter Alphabet")
    private String product;

    @NotNull(message = "Please enter last updated date")
    //@ValidDate(message = "Invalid date format or value")
    private String lastUpdatedDate;

    @NotEmpty(message = "Please enter supplier name")
    @Pattern(regexp = "^[a-zA-Z\\s]{1,50}$", message = "Name should contain only letters and spaces, and must be between 1 to 50 characters")   
    private String supplierName;

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getLastUpdatedDate() {
        return lastUpdatedDate;
    }

    public void setLastUpdatedDate(String lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
    }

    public String getSupplierName() {
        return supplierName;
    }

    public void setSupplierName(String supplierName) {
        this.supplierName = supplierName;
    }

    @Override
    public BaseDTO getDto() {
        InventoryDTO dto = initDTO(new InventoryDTO());
        if (quantity != null && !quantity.isEmpty()) {
            dto.setQuantity(Long.valueOf(quantity));
        }
        dto.setProduct(product);
        if (lastUpdatedDate != null && !lastUpdatedDate.isEmpty()) {
			try {
				SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
				Date parsedDate = dateFormat.parse(lastUpdatedDate);
				dto.setLastUpdatedDate(parsedDate);
			} catch (ParseException e) {
				// Handle parse exception if needed
			e.printStackTrace();
			}
		}
        dto.setSupplierName(supplierName);
        return dto;
    }
}
