package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.CompensationDTO;
import com.rays.dto.PositionDTO;
import com.rays.form.CompensationForm;
import com.rays.service.CompensationServiceInt;


@RestController
@RequestMapping(value = "Compensation")
public class CompensationCtl extends BaseCtl<CompensationForm, CompensationDTO, CompensationServiceInt> {
	
	
	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("Inside preload");
		ORSResponse res = new ORSResponse(true);
		CompensationDTO dto = new CompensationDTO();
		List list = new ArrayList<>();
		list.add("Shubham");
		list.add("deepak");
		list.add("gopal");
		res.addResult("Compensationlist", list);

		List list1 = new ArrayList<>();
		list1.add("Active");
		list1.add("Inactive");
		
		res.addResult("Compensationlist2", list1);

		return res;
	}

}
