package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.CustomerDTO;
import com.rays.form.CustomerForm;
import com.rays.service.CustomerServiceInt;

@RestController
@RequestMapping(value = "Customer")
public class CustomerCtl extends BaseCtl<CustomerForm, CustomerDTO, CustomerServiceInt>{
	
	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("Inside preload");
		ORSResponse res = new ORSResponse(true);
		CustomerDTO dto = new CustomerDTO();
		List list = new ArrayList<>();
		list.add("High");
		list.add("Medium");
		list.add("Low");
		res.addResult("Customerlist", list);

		/*
		 * List list1 = new ArrayList<>(); list1.add("2020-01-01");
		 * list1.add("2015-03-09"); list1.add("2010-10-09");
		 * res.addResult("Customerlist2", list1);
		 */

		return res;
	}

}
