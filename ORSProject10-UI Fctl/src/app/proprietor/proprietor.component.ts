import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-asset',
  templateUrl: './proprietor.component.html',
  styleUrls: ['./proprietor.component.css']
})
export class ProprietorComponent extends BaseCtl {
  errorMessageTitle: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.PROPRIETOR, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.registrationNumber);
    flag = flag && validator.isNotNullObject(form.acquisitionDate);
    flag = flag && validator.isNotNullObject(form.coverageAmount);
    flag = flag && validator.isNotNullObject(form.paintColor);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.fullName = data.fullName;
    form.birthDate = data.birthDate;
    form.coverageAmount = data.coverageAmount;
    form.assetId = data.assetId;
  }
}