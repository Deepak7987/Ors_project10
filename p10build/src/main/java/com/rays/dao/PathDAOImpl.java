package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.PathDTO;

@Repository
public class PathDAOImpl  extends BaseDAOImpl<PathDTO> implements PathDAOInt {
	
	 @Override
	    protected List<Predicate> getWhereClause(PathDTO dto, CriteriaBuilder builder, Root<PathDTO> qRoot) {

	        List<Predicate> whereCondition = new ArrayList<>();

	        if (dto.getId() != null && dto.getId() > 0) {
	            whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
	        }

	        if (dto.getRouteName() != null && !dto.getRouteName().isEmpty()) {
	            whereCondition.add(builder.like(qRoot.get("routeName"), dto.getRouteName() + "%"));
	        }

	        if (dto.getInitializationDate() != null) {
	            whereCondition.add(builder.equal(qRoot.get("initializationDate"), dto.getInitializationDate()));
	        }

	        if (dto.getPermittedSpeed() != null) {
	            whereCondition.add(builder.equal(qRoot.get("permittedSpeed"), dto.getPermittedSpeed()));
	        }

	        if (dto.getAssetId() != null && !dto.getAssetId().isEmpty()) {
	            whereCondition.add(builder.like(qRoot.get("assetId"), dto.getAssetId()));
	        }

	        return whereCondition;
	    }

	    @Override
	    public Class<PathDTO> getDTOClass() {
	        return PathDTO.class;
	    }{

	}

}
