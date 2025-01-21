package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.JobDTO;
import com.rays.dto.TransportationDTO;
import com.rays.form.TransportationForm;
import com.rays.service.TransportationServiceInt;

@RestController
@RequestMapping(value = "Transportation")
public class TransportationCtl extends BaseCtl<TransportationForm, TransportationDTO, TransportationServiceInt> {

    @GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload rahul");
        ORSResponse res = new ORSResponse(true);
        TransportationDTO dto = new TransportationDTO();
        List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
        res.addResult("transportationlist", list);
        return res;
    }
    
}