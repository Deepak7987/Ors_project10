package com.rays.ctl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.ORSResponse;
import com.rays.dto.ClientDTO;
import com.rays.dto.ClientDTO;
import com.rays.form.ClientForm;
import com.rays.service.ClientServiceInt;

@RestController
@RequestMapping(value = "Client")
public class ClientCtl extends BaseCtl<ClientForm,ClientDTO,ClientServiceInt>{

	@GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload");
        ORSResponse res = new ORSResponse(true);
        ClientDTO dto = new ClientDTO();
        List list = new ArrayList<>();
	    list.add("Open");
	    list.add("Close");
	    list.add("Hold");
        //List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
        res.addResult("clientlist", list);
        return res;
    }
	
}
