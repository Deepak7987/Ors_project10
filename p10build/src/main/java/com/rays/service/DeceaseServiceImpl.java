package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.DeceaseDAOInt;
import com.rays.dto.DeceaseDTO;

@Service
@Transactional
public class DeceaseServiceImpl extends BaseServiceImpl<DeceaseDTO, DeceaseDAOInt> implements DeceaseServiceInt {

}
