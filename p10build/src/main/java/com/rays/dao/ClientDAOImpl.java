package com.rays.dao;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.ClientDTO;

@Repository
public class ClientDAOImpl extends BaseDAOImpl<ClientDTO> implements ClientDAOInt {

	@Override
	protected List<Predicate> getWhereClause(ClientDTO dto, CriteriaBuilder builder, Root<ClientDTO> qRoot) {

		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getName() != null && !dto.getName().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("name"), dto.getName() + "%"));
		}

		if (dto.getAddress() != null && !dto.getAddress().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("address"), dto.getAddress() + "%"));
		}

		if (dto.getPhone() != null && dto.getPhone() != 0) {
			whereCondition.add(builder.equal(qRoot.get("phone"), dto.getPhone()));
		}

		if (dto.getPriority() != null && !dto.getPriority().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("priority"), dto.getPriority() + "%"));
		}

		return whereCondition;

		// return null;
	}

	@Override
	public Class<ClientDTO> getDTOClass() {
		return ClientDTO.class;
	}

}
