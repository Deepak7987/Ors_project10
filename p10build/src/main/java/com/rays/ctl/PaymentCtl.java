package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.PaymentDto;
import com.rays.form.PaymentFrom;
import com.rays.service.PaymentServiceInt;

@RestController
@RequestMapping(value = "Payment")
public class PaymentCtl extends BaseCtl<PaymentFrom, PaymentDto, PaymentServiceInt> {
	

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Dipanshu");
		ORSResponse res = new ORSResponse(true);
		PaymentDto dto = new PaymentDto();
		List<DropdownList> list = baseService.search(dto,0,5, userContext);
		res.addResult("paymentList", list);
		return res;
	}

}
