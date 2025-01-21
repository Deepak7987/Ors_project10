package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.FollowupDTO;
import com.rays.form.FollowupForm;
import com.rays.service.FollowupServiceInt;

@RestController
@RequestMapping(value = "Followup")
public class FollowupCtl extends BaseCtl<FollowupForm, FollowupDTO, FollowupServiceInt> {

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload");
		ORSResponse res = new ORSResponse(true);
		FollowupDTO dto = new FollowupDTO();
		List<DropdownList> list = baseService.search(dto, userContext);
		res.addResult("followupOptions", list);
		return res;
	}
}
