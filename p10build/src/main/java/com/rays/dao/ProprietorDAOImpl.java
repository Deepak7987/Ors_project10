package com.rays.dao;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;

import com.rays.common.BaseDAOImpl;
import com.rays.dto.ProprietorDTO;

@Repository
public class ProprietorDAOImpl extends BaseDAOImpl<ProprietorDTO> implements ProprietorDAOInt {

    @Override
    protected List<Predicate> getWhereClause(ProprietorDTO dto, CriteriaBuilder builder, Root<ProprietorDTO> qRoot) {

        List<Predicate> whereCondition = new ArrayList<>();

        if (dto.getId() != null && dto.getId() > 0) {
            whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
        }

        if (dto.getFullName() != null && !dto.getFullName().isEmpty()) {
            whereCondition.add(builder.like(qRoot.get("fullName"), dto.getFullName() + "%"));
        }

        if (dto.getBirthDate() != null) {
            whereCondition.add(builder.equal(qRoot.get("birthDate"), dto.getBirthDate()));
        }

        if (dto.getCoverageAmount() != null) {
            whereCondition.add(builder.equal(qRoot.get("coverageAmount"), dto.getCoverageAmount()));
        }

        if (dto.getAssetId() != null && !dto.getAssetId().isEmpty()) {
            whereCondition.add(builder.like(qRoot.get("assetId"), dto.getAssetId()));
        }

        return whereCondition;
    }

    @Override
    public Class<ProprietorDTO> getDTOClass() {
        return ProprietorDTO.class;
    }{

}
    
}
