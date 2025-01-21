package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.CompensationDAOInt;
import com.rays.dto.CompensationDTO;


@Service
@Transactional
public class CompensationServiceImpl extends BaseServiceImpl<CompensationDTO, CompensationDAOInt> implements CompensationServiceInt {

}
