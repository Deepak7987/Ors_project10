package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.PaymentDto;

@Repository
public class PaymentDAOImpl extends BaseDAOImpl<PaymentDto> implements PaymentDAOInt {

	@Override
	protected List<Predicate> getWhereClause(PaymentDto dto, CriteriaBuilder builder, Root<PaymentDto> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isEmptyString(dto.getAccountHolderName())) {

			whereCondition.add(builder.like(qRoot.get("accountHolderName"), dto.getAccountHolderName() + "%"));
		}
		if (!isEmptyString(dto.getAccountNo())) {
			
			System.out.println("account no = " + dto.getAccountNo());

			whereCondition.add(builder.like(qRoot.get("accountNo"), dto.getAccountNo() + "%"));
		}
		if (!isZeroNumber(dto.getId())) {

			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}
		return whereCondition;
	}

	@Override
	public Class<PaymentDto> getDTOClass() {
		// TODO Auto-generated method stub
		return PaymentDto.class;
	}

}
