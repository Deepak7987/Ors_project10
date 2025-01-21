package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.VehicleDTO;
import com.rays.form.VehicleForm;
import com.rays.service.VehicleSrviceInt;

@RestController
@RequestMapping(value = "Vehicle")
public class VehicleCtl extends BaseCtl<VehicleForm, VehicleDTO, VehicleSrviceInt> {

    @GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload Rahul");
        ORSResponse res = new ORSResponse(true);
        VehicleDTO dto = new VehicleDTO();
        List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
        res.addResult("vehiclelist", list);
        return res;
    }
    
}