package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.PaymentDAOInt;
import com.rays.dto.PaymentDto;

@Service
@Transactional
public class PaymentServiceImpl extends BaseServiceImpl<PaymentDto, PaymentDAOInt>implements PaymentServiceInt{

}
