package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.CustomerDTO;
import com.rays.dto.ItemDTO;

@Repository
public class ItemDAOImpl extends BaseDAOImpl<ItemDTO> implements ItemDAOInt {
	
	
	@Override
	protected List<Predicate> getWhereClause(ItemDTO dto, CriteriaBuilder builder, Root<ItemDTO> qRoot) {

		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {
			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getTitle() != null && !dto.getTitle().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("title"), dto.getTitle() + "%"));
		}
		
		
		  if (dto.getPurchaseDate() != null) {
	            whereCondition.add(builder.equal(qRoot.get("purchaseDate"), dto.getPurchaseDate()));
	        }
		if (dto.getCategory() != null && !dto.getCategory().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("category"), dto.getCategory() + "%"));
		}

		if (dto.getOverview() != null && !dto.getOverview().isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("overview"), dto.getOverview() + "%"));
		}

		if (!isZeroNumber(dto.getCost())) {
			whereCondition.add(builder.equal(qRoot.get("cost"), dto.getCost()));
		}

		

		return whereCondition;

		// return null;
	}

	@Override
	public Class<ItemDTO> getDTOClass() {
		return ItemDTO.class;
	}


}
