package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.DeceaseDTO;

@Repository
public class DeceaseDAOImpl extends BaseDAOImpl<DeceaseDTO> implements DeceaseDAOInt {

	@Override
	protected List<Predicate> getWhereClause(DeceaseDTO dto, CriteriaBuilder builder, Root<DeceaseDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<>();

		if (!isEmptyString(dto.getName())) {
			whereCondition.add(builder.like(qRoot.get("name"), dto.getName() + "%"));
		}

		if (!isEmptyString(dto.getDescription())) {
			whereCondition.add(builder.like(qRoot.get("description"), dto.getDescription() + "%"));
		}

		if (!isZeroNumber(dto.getId())) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		return whereCondition;
	}

	@Override
	public Class<DeceaseDTO> getDTOClass() {
		return DeceaseDTO.class;
	}
}
