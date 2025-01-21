package com.rays.form;

import java.util.Date;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.rays.common.BaseDTO;
import com.rays.common.BaseForm;
import com.rays.dto.PaymentDto;

public class PaymentFrom extends BaseForm {

	@NotEmpty(message = "please enter accountHolderName")
	private String accountHolderName;

	@NotEmpty(message = "please enter accountNo")
	private String accountNo;

	@NotEmpty(message = "please enter branch")
	private String branch;

	@NotEmpty(message = "please enter ifcCode")
	private String ifcCode;

	@NotEmpty(message = "please enter paymentType")
	private String paymentType;

	@NotNull(message = "please enter paymentDate")
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
	public BaseDTO getDto() {
		PaymentDto dto = initDTO(new PaymentDto());
		dto.setAccountHolderName(accountHolderName);
		dto.setAccountNo(accountNo);
		dto.setBranch(branch);
		dto.setIfcCode(ifcCode);
		dto.setPaymentType(paymentType);
		dto.setPaymentDate(paymentDate);
		return dto;
	}

}
