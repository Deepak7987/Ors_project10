package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.ShoppingCartDTO;
import com.rays.form.ShoppingCartForm;
import com.rays.service.ShoppingCartServiceInt;

@RestController
@RequestMapping(value = "ShoppingCart")
public class ShoppingCartCtl extends BaseCtl<ShoppingCartForm,ShoppingCartDTO,ShoppingCartServiceInt>{

	@GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload");
        ORSResponse res = new ORSResponse(true);
        ShoppingCartDTO dto = new ShoppingCartDTO();
        List list = new ArrayList<>();
	    list.add("Mobile");
	    list.add("Laptop");
	    list.add("Computer");
	    list.add("Television");
        //List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
        res.addResult("shoppingcartlist", list);
        return res;
    }
	
}
