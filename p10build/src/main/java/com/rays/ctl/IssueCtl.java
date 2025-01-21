package com.rays.ctl;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rays.common.BaseCtl;
import com.rays.common.DropdownList;
import com.rays.common.ORSResponse;
import com.rays.dto.IssueDTO;
import com.rays.form.IssueForm;
import com.rays.service.IssueServiceInt;

@RestController
@RequestMapping(value = "Issue")
public class IssueCtl extends BaseCtl<IssueForm, IssueDTO, IssueServiceInt> {

	
    @GetMapping("/preload")
    public ORSResponse preload() {
        System.out.println("Inside preload rahul");
        ORSResponse res = new ORSResponse(true);
        IssueDTO dto = new IssueDTO();
        List<DropdownList> list = baseService.search(dto, 0, 5, userContext);
        res.addResult("issuelist", list);
        return res;
    }
    
}
