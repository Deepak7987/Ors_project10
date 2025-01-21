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
import com.rays.dto.VehicleDTO;

@Repository
public class VehicleDAOImp extends BaseDAOImpl<VehicleDTO> implements VehicleDAOInt {

	@Override
	protected List<Predicate> getWhereClause(VehicleDTO dto, CriteriaBuilder builder, Root<VehicleDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {

			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getInsuranceAmount() != null && dto.getInsuranceAmount() != 0) {
			whereCondition.add(builder.equal(qRoot.get("insuranceAmount"), dto.getInsuranceAmount()));
		}
		if (dto.getColoure() != null && !dto.getColoure() .isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("coloure"), dto.getColoure() + "%"));
		}
		if (dto.getPurchaseDate() != null) {
			Date searchDate = dto.getPurchaseDate();

			Calendar calendar = Calendar.getInstance();
			calendar.setTime(searchDate);
			calendar.set(Calendar.HOUR_OF_DAY, 0); // Start of the day
			calendar.set(Calendar.MINUTE, 0);
			calendar.set(Calendar.SECOND, 0);
			Date startDate = calendar.getTime();

			calendar.set(Calendar.HOUR_OF_DAY, 23); // End of the day
			calendar.set(Calendar.MINUTE, 59);
			calendar.set(Calendar.SECOND, 59);
			Date endDate = calendar.getTime();

			Predicate datePredicate = builder.between(qRoot.get("purchaseDate"), startDate, endDate);
			whereCondition.add(datePredicate);
		}
		if (dto.getNumber() != null && !dto.getNumber() .isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("number"), dto.getNumber() + "%"));
		}

		return whereCondition;
	}

	@Override
	public Class<VehicleDTO> getDTOClass() {
		return VehicleDTO.class;
	}
}
