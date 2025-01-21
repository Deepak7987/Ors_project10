package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.SupplierDTO;
import com.rays.form.SupplierForm;
import com.rays.service.SupplierServiceInt;

@RestController
@RequestMapping(value = "Supplier")
public class SupplierCtl extends BaseCtl<SupplierForm, SupplierDTO, SupplierServiceInt> {

    @GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload method for SupplierCtl");
        ORSResponse res = new ORSResponse(true);
        SupplierDTO dto = new SupplierDTO();
        List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
        res.addResult("supplierList", list);
        return res;
    }

}
