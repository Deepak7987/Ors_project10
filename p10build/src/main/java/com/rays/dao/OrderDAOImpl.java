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
import com.rays.dto.OrderDto;

@Repository
public class OrderDAOImpl extends BaseDAOImpl<OrderDto>implements OrderDAOInt{

	@Override
	protected List<Predicate> getWhereClause(OrderDto dto, CriteriaBuilder builder, Root<OrderDto> qRoot) {
		List<Predicate> whereCondition = new ArrayList<Predicate>();

		if (!isZeroNumber(dto.getQuantity())) {

			whereCondition.add(builder.equal(qRoot.get("quantity"), dto.getQuantity()));
		}
		if (!isZeroNumber(dto.getAmount())) {

			whereCondition.add(builder.equal(qRoot.get("amount"), dto.getAmount()));
		}
		if (isNotNull(dto.getDob())) {
			// Assuming "dateOfPurchase" field is of type java.util.Date or java.sql.Date
			Date searchDate = dto.getDob();

			// Define start and end dates for the search day
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

			// Create predicate for date range
			Predicate datePredicate = builder.between(qRoot.get("dob"), startDate, endDate);
			whereCondition.add(datePredicate);
		}
		if (!isEmptyString(dto.getProduct())) {

			whereCondition.add(builder.like(qRoot.get("product"), dto.getProduct()+ "%"));
		}
		if (!isZeroNumber(dto.getId())) {

			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}
		return whereCondition;
	}

	@Override
	public Class<OrderDto> getDTOClass() {
		return OrderDto.class;
	}

}
