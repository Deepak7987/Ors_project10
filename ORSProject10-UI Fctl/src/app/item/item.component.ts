import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent extends BaseCtl {
  errorMessageTitle: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.ITEM, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.title);
    flag = flag && validator.isNotNullObject(form.overview);
    flag = flag && validator.isNotNullObject(form.cost);
    flag = flag && validator.isNotNullObject(form.purchaseDate);
    flag = flag && validator.isNotNullObject(form.category);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.title = data.title;
    form.overview = data.overview;
    form.cost = data.cost;
    form.purchaseDate = data.purchaseDate;
    form.category = data.category;
  }
}