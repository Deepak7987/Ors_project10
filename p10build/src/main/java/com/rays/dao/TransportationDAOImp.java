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
import com.rays.dto.JobDTO;
import com.rays.dto.TransportationDTO;

@Repository
public class TransportationDAOImp extends BaseDAOImpl<TransportationDTO> implements TransportationDAOInt {

	@Override
	protected List<Predicate> getWhereClause(TransportationDTO dto, CriteriaBuilder builder, Root<TransportationDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {

			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getCost() != null && dto.getCost() != 0) {
			whereCondition.add(builder.equal(qRoot.get("cost"), dto.getCost()));
		}
		if (dto.getDescription() != null && !dto.getDescription() .isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("description"), dto.getDescription() + "%"));
		}
		if (dto.getDate() != null) {
			Date searchDate = dto.getDate();

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

			Predicate datePredicate = builder.between(qRoot.get("date"), startDate, endDate);
			whereCondition.add(datePredicate);
		}
		if (dto.getMode() != null && !dto.getMode() .isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("mode"), dto.getMode() + "%"));
		}

		return whereCondition;
	}

	@Override
	public Class<TransportationDTO> getDTOClass() {
		return TransportationDTO.class;
	}
}
