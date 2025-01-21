package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.CustomerDAOInt;
import com.rays.dao.PositionDAOInt;
import com.rays.dto.CustomerDTO;
import com.rays.dto.PositionDTO;

@Service
@Transactional
public class CustomerServiceImpl extends BaseServiceImpl<CustomerDTO, CustomerDAOInt> implements CustomerServiceInt {

}
