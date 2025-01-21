package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.IssueDAOInt;
import com.rays.dto.IssueDTO;

@Service
@Transactional
public class IssueServiceImp extends BaseServiceImpl<IssueDTO, IssueDAOInt> implements IssueServiceInt {

}
