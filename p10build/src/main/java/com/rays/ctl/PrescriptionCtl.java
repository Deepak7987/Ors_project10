package com.rays.ctl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.DeceaseDTO;
import com.rays.dto.PrescriptionDTO;
import com.rays.form.PrescriptionForm;
import com.rays.service.DeceaseServiceInt;
import com.rays.service.PrescriptionServiceInt;

@RestController
@RequestMapping(value = "Prescription")
public class PrescriptionCtl extends BaseCtl<PrescriptionForm, PrescriptionDTO, PrescriptionServiceInt> {

	@Autowired
	public DeceaseServiceInt deceaseservice;

	@GetMapping("/preload")
	public ORSResponse preload() {
		System.out.println("inside preload Dipanshu");
		ORSResponse res = new ORSResponse(true);
		DeceaseDTO dto = new DeceaseDTO();
		List<DropdownList> list = deceaseservice.search(dto, userContext);
		res.addResult("decease", list);
		return res;
	}
}
