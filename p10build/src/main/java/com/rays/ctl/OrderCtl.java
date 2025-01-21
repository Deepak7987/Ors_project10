package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.OrderDto;
import com.rays.form.OrderForm;
import com.rays.service.OrderServiceInt;

@RestController
@RequestMapping(value = "order")
public class OrderCtl extends BaseCtl<OrderForm, OrderDto, OrderServiceInt> {
  
	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Dipanshu");
		ORSResponse res = new ORSResponse(true);
		OrderDto dto = new OrderDto();
		List list = new ArrayList<>();
	    list.add("open");
	    list.add("close");
	    list.add("hold");
		//List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
		res.addResult("orderlist", list);
		return res;
	}

}
