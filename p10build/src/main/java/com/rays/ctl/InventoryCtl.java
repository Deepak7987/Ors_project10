package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.InventoryDTO;
import com.rays.form.InventoryForm;
import com.rays.service.InventoryServiceInt;

@RestController
@RequestMapping(value = "Inventory")
public class InventoryCtl extends BaseCtl<InventoryForm, InventoryDTO, InventoryServiceInt> {

    @GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload Rahul");
        ORSResponse res = new ORSResponse(true);
        InventoryDTO dto = new InventoryDTO();
        List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
        res.addResult("inventoryList", list);
        return res;
    }
    
}
