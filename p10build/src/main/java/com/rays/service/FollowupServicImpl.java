package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.FollowupDAOInt;
import com.rays.dto.FollowupDTO;

@Service
@Transactional
public class FollowupServicImpl extends BaseServiceImpl<FollowupDTO, FollowupDAOInt> implements FollowupServiceInt {

}
