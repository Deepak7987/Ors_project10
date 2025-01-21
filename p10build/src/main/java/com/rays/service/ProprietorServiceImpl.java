package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.ProprietorDAOInt;
import com.rays.dto.ProprietorDTO;


@Service
@Transactional
public class ProprietorServiceImpl extends BaseServiceImpl<ProprietorDTO, ProprietorDAOInt> implements ProprietorServiceInt {

}
