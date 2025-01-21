package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.CompensationDTO;
import com.rays.dto.CustomerDTO;


@Repository
public class CompensationDAOImpl extends BaseDAOImpl<CompensationDTO> implements CompensationDAOInt {
	
	@Override
	protected List<Predicate> getWhereClause(CompensationDTO dto, CriteriaBuilder builder, Root<CompensationDTO> qRoot) {

		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getStaffMember() != null && !dto.getStaffMember().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("staffMember"), dto.getStaffMember() + "%"));
		}
		
		if (isNotNull(dto.getDateApplied())) {
			whereCondition.add(builder.equal(qRoot.get("dateApplied"), dto.getDateApplied() ));
		}
		if (dto.getState() != null && !dto.getState().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("state"), dto.getState() + "%"));
		}

		if (!isZeroNumber(dto.getPaymentAmount())) {
			whereCondition.add(builder.equal(qRoot.get("paymentAmount"), dto.getPaymentAmount()));
		}

		

		return whereCondition;

		// return null;
	}

	@Override
	public Class<CompensationDTO> getDTOClass() {
		return CompensationDTO.class;
	}

}
