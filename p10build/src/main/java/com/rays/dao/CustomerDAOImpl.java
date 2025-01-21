package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.CustomerDTO;

@Repository
public class CustomerDAOImpl extends BaseDAOImpl<CustomerDTO> implements CustomerDAOInt {

	@Override
	protected List<Predicate> getWhereClause(CustomerDTO dto, CriteriaBuilder builder, Root<CustomerDTO> qRoot) {

		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getClientname() != null && !dto.getClientname().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("clientname"), dto.getClientname() + "%"));
		}
		
		if (dto.getImportance() != null && !dto.getImportance().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("importance"), dto.getImportance() + "%"));
		}

		if (dto.getLocation() != null && !dto.getLocation().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("location"), dto.getLocation() + "%"));
		}

		if (!isZeroNumber(dto.getContactnumber())) {
			whereCondition.add(builder.equal(qRoot.get("contactnumber"), dto.getContactnumber()));
		}

		

		return whereCondition;

		// return null;
	}

	@Override
	public Class<CustomerDTO> getDTOClass() {
		return CustomerDTO.class;
	}


}
