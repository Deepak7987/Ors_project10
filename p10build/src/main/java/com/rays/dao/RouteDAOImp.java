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
import com.rays.dto.RouteDTO;

@Repository
public class RouteDAOImp extends BaseDAOImpl<RouteDTO> implements RouteDAOInt {

    @Override
    protected List<Predicate> getWhereClause(RouteDTO dto, CriteriaBuilder builder, Root<RouteDTO> qRoot) {
        List<Predicate> whereCondition = new ArrayList<>();

        if (!isZeroNumber(dto.getId())) {

			whereCondition.add(builder.equal(qRoot.get("id"), dto.getId()));
		}
        if (!isEmptyString(dto.getName())) {
            whereCondition.add(builder.like(qRoot.get("name"), dto.getName() + "%"));
        }

        if (!isEmptyString(dto.getVehicleId())) {
            whereCondition.add(builder.equal(qRoot.get("vehicleId"), dto.getVehicleId()));
        }

        if (dto.getStartDate() != null) {
            Date searchDate = dto.getStartDate();

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

            Predicate datePredicate = builder.between(qRoot.get("startDate"), startDate, endDate);
            whereCondition.add(datePredicate);
        }

        if (!isZeroNumber(dto.getAllowSpeed())) {
            whereCondition.add(builder.equal(qRoot.get("allowSpeed"), dto.getAllowSpeed()));
        }

        return whereCondition;
    }

    @Override
    public Class<RouteDTO> getDTOClass() {
        return RouteDTO.class;
    }
}
