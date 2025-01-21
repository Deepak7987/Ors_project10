import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-asset',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.css']
})
export class PathComponent extends BaseCtl {
  errorMessageTitle: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.PATH, locator, route);
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
    form.routeName = data.routeName;
    form.initializationDate = data.initializationDate;
    form.permittedSpeed = data.permittedSpeed;
    form.assetId = data.assetId;
  }
}