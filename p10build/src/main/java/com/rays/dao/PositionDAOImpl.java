package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.PositionDTO;

@Repository
public class PositionDAOImpl extends BaseDAOImpl<PositionDTO> implements PositionDAOInt {

	@Override
	protected List<Predicate> getWhereClause(PositionDTO dto, CriteriaBuilder builder, Root<PositionDTO> qRoot) {

		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getDesignation() != null && !dto.getDesignation().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("designation"), dto.getDesignation() + "%"));
		}
		
		if (isNotNull(dto.getOpeningdate())) {
			whereCondition.add(builder.equal(qRoot.get("openingdate"), dto.getOpeningdate() ));
		}

		if (dto.getCondition() != null && !dto.getCondition().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("condition"), dto.getCondition() + "%"));
		}

		if (!isZeroNumber(dto.getRequiredexperience())) {
			whereCondition.add(builder.equal(qRoot.get("requiredexperience"), dto.getRequiredexperience()));
		}

		

		return whereCondition;

		// return null;
	}

	@Override
	public Class<PositionDTO> getDTOClass() {
		return PositionDTO.class;
	}

}
