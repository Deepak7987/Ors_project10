package com.rays.dto;

import java.util.Date;
import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_PAYMENT")
public class PaymentDto extends BaseDTO {

	@Column(name = "ACCOUNT_HOLDER_NAME")
	private String accountHolderName;

	@Column(name = "ACCOUNT_NO")
	private String accountNo;

	@Column(name = "BRANCH")
	private String branch;

	@Column(name = "IFC_CODE")
	private String ifcCode;

	@Column(name = "PAYMENT_TYPE")
	private String paymentType;

	@Column(name = "PAYMENT_DATE")
	private Date paymentDate;

	public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

	public String getAccountNo() {
		return accountNo;
	}

	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	public String getIfcCode() {
		return ifcCode;
	}

	public void setIfcCode(String ifcCode) {
		this.ifcCode = ifcCode;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public Date getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(Date paymentDate) {
		this.paymentDate = paymentDate;
	}

	@Override
	public String getValue() {
		// TODO Auto-generated method stub
		return accountNo;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "accountNo";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return accountNo;
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return accountHolderName;
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("accountHolderName", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("accountHolderName", accountHolderName);
		return map;
	}

}
