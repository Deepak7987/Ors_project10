package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.ShoppingCartDTO;

@Repository
public class ShoppingCartDAOImpl extends BaseDAOImpl<ShoppingCartDTO> implements ShoppingCartDAOInt {

	@Override
	protected List<Predicate> getWhereClause(ShoppingCartDTO dto, CriteriaBuilder builder, Root<ShoppingCartDTO> qRoot) {

		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getName() != null && !dto.getName().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("name"), dto.getName() + "%"));
		}

		if (dto.getProduct() != null && !dto.getProduct().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("product"), dto.getProduct() + "%"));
		}

		if (!isZeroNumber(dto.getQuantity())) {
			whereCondition.add(builder.equal(qRoot.get("quantity"), dto.getQuantity()));
		}

		if (isNotNull(dto.getDate1())) {
			whereCondition.add(builder.equal(qRoot.get("date1"), dto.getDate1() ));
		}

		return whereCondition;

		// return null;
	}

	@Override
	public Class<ShoppingCartDTO> getDTOClass() {
		return ShoppingCartDTO.class;
	}

}
