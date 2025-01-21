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

@Repository
public class JobDAOImp extends BaseDAOImpl<JobDTO> implements JobDAOInt {

	@Override
	protected List<Predicate> getWhereClause(JobDTO dto, CriteriaBuilder builder, Root<JobDTO> qRoot) {
		List<Predicate> whereCondition = new ArrayList<>();

		if (dto.getId() != null && dto.getId() > 0) {

			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}

		if (dto.getExperience() != null && dto.getExperience() != 0) {
			whereCondition.add(builder.equal(qRoot.get("experience"), dto.getExperience()));
		}
		if (dto.getTitle() != null && !dto.getTitle() .isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("title"), dto.getTitle() + "%"));
		}
		if (dto.getDateOfOpening() != null) {
			Date searchDate = dto.getDateOfOpening();

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

			Predicate datePredicate = builder.between(qRoot.get("dateOfOpening"), startDate, endDate);
			whereCondition.add(datePredicate);
		}
		if (dto.getStatus() != null && !dto.getStatus() .isEmpty()) {
			whereCondition.add(builder.like(qRoot.get("status"), dto.getStatus() + "%"));
		}

		return whereCondition;
	}

	@Override
	public Class<JobDTO> getDTOClass() {
		return JobDTO.class;
	}
}
