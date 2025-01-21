package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.WishListDTO;
import com.rays.form.WishListForm;
import com.rays.service.WishListServiceInt;

@RestController
@RequestMapping(value = "Wishlist")
public class WishListCtl extends BaseCtl<WishListForm, WishListDTO, WishListServiceInt>{
	
	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Dipanshu");
		ORSResponse res = new ORSResponse(true);
		WishListDTO dto = new WishListDTO();
		List<DropdownList> list = baseService.search(dto, userContext);
		res.addResult("wishlist", list);
		return res;
	}

}
