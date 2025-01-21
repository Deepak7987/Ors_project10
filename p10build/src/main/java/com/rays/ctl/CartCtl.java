package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.CartDTO;
import com.rays.dto.CartDTO;
import com.rays.form.CartForm;
import com.rays.service.CartServiceInt;

@RestController
@RequestMapping(value = "Cart")
public class CartCtl extends BaseCtl<CartForm, CartDTO, CartServiceInt> {
	
	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("Inside preload");
		ORSResponse res = new ORSResponse(true);
		CartDTO dto = new CartDTO();
		List list = new ArrayList<>();
		list.add("Fridge");
		list.add("washing Machine");
		list.add("Laptop");
		res.addResult("Cartlist", list);

		/*
		 * List list1 = new ArrayList<>(); list1.add("2020-01-01");
		 * list1.add("2015-03-09"); list1.add("2010-10-09");
		 * res.addResult("Cartlist2", list1);
		 */

		return res;
	}

}
