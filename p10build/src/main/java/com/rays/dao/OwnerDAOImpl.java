package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.OwnerDTO;

@Repository
public class OwnerDAOImpl extends BaseDAOImpl<OwnerDTO> implements OwnerDAOInt {

	@Override
	protected List<Predicate> getWhereClause(OwnerDTO dto, CriteriaBuilder builder, Root<OwnerDTO> qRoot) {

		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getName() != null && !dto.getName().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("name"), dto.getName() + "%"));
		}

		if (dto.getVehicleId() != null && !dto.getVehicleId().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("vehicleId"), dto.getVehicleId() + "%"));
		}

		if (!isZeroNumber(dto.getInsuranceAmount())) {
			whereCondition.add(builder.equal(qRoot.get("insuranceAmount"), dto.getInsuranceAmount()));
		}

		if (isNotNull(dto.getDateOfBirth())) {
			whereCondition.add(builder.equal(qRoot.get("dateOfBirth"), dto.getDateOfBirth() ));
		}

		return whereCondition;

		// return null;
	}

	@Override
	public Class<OwnerDTO> getDTOClass() {
		return OwnerDTO.class;
	}

}
