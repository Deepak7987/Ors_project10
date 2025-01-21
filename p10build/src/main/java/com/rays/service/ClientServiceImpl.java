package com.rays.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.common.UserContext;
import com.rays.dao.ClientDAOInt;
import com.rays.dao.JobDAOInt;
import com.rays.dto.ClientDTO;
import com.rays.dto.JobDTO;

@Service
@Transactional
public class ClientServiceImpl extends BaseServiceImpl<ClientDTO, ClientDAOInt> implements ClientServiceInt {

}
