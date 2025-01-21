package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.ItemDTO;
import com.rays.dto.ItemDTO;
import com.rays.form.ItemForm;
import com.rays.form.ItemForm;
import com.rays.service.ItemServiceInt;
import com.rays.service.ItemServiceInt;

@RestController
@RequestMapping(value = "Item")
public class ItemCtl extends BaseCtl<ItemForm, ItemDTO, ItemServiceInt>{
	
	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("Inside preload");
		ORSResponse res = new ORSResponse(true);
		ItemDTO dto = new ItemDTO();
		List list = new ArrayList<>();
		list.add("Fridge");
		list.add("washing Machine");
		list.add("Laptop");
		res.addResult("Itemlist", list);

		/*
		 * List list1 = new ArrayList<>(); list1.add("2020-01-01");
		 * list1.add("2015-03-09"); list1.add("2010-10-09");
		 * res.addResult("Itemlist2", list1);
		 */

		return res;
	}


}
