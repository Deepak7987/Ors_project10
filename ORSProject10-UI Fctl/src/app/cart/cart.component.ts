import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends BaseCtl {
  errorMessageTitle: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.CART, locator, route);
  }

  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.customerName);
    flag = flag && validator.isNotNullObject(form.product);
    flag = flag && validator.isNotNullObject(form.quantityOrdered);
    flag = flag && validator.isNotNullObject(form.transationDate);

    return flag;
  }

  populateForm(form, data) {
    form.id = data.id;
    form.customerName = data.customerName;
    form.product = data.product;
    form.quantityOrdered = data.quantityOrdered;
    form.transationDate = data.transationDate;
  }
}