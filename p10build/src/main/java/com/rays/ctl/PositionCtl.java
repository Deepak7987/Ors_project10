package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.PositionDTO;
import com.rays.form.PositionForm;
import com.rays.service.PositionServiceInt;

@RestController
@RequestMapping(value = "Position")
public class PositionCtl extends BaseCtl<PositionForm, PositionDTO, PositionServiceInt> {

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("Inside preload");
		ORSResponse res = new ORSResponse(true);
		PositionDTO dto = new PositionDTO();
		List list = new ArrayList<>();
		list.add("1HGCM82633A123456");
		list.add("2T1BR32E04C123456");
		list.add("3FADP4BJ3DM123456");
		res.addResult("Positionlist", list);

		List list1 = new ArrayList<>();
		list1.add("2020-01-01");
		list1.add("2015-03-09");
		list1.add("2010-10-09");
		res.addResult("Positionlist2", list1);

		return res;
	}

}
