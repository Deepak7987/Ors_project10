package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.DeceaseDTO;
import com.rays.form.DeceaseForm;
import com.rays.service.DeceaseServiceInt;

@RestController
@RequestMapping(value = "Decease")
public class DeceaseCtl extends BaseCtl<DeceaseForm, DeceaseDTO, DeceaseServiceInt> {

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload");
		ORSResponse res = new ORSResponse(true);
		DeceaseDTO dto = new DeceaseDTO();
		List<DropdownList> list = baseService.search(dto, userContext);
		res.addResult("decease", list);
		return res;
	}
}
