package com.rays.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rays.common.BaseServiceImpl;
import com.rays.dao.PathDAOInt;
import com.rays.dto.PathDTO;

@Service
@Transactional
public class PathServiceImpl  extends BaseServiceImpl<PathDTO, PathDAOInt> implements PathServiceInt {

}
