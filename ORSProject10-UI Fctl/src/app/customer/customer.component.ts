import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends BaseCtl {
  errorMessageTitle: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.CUSTOMER, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.clientname);
    flag = flag && validator.isNotNullObject(form.contactnumber);
    flag = flag && validator.isNotNullObject(form.location);
    flag = flag && validator.isNotNullObject(form.importance);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.clientname = data.clientname;
    form.contactnumber = data.contactnumber;
    form.location = data.location;
    form.importance = data.importance;
  }
}