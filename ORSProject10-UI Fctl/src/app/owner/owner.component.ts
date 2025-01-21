import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent extends BaseCtl {
  errorMessageTitle: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.OWNER, locator, route);
  }


  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.name);
    flag = flag && validator.isNotNullObject(form.dateOfBirth);
    flag = flag && validator.isNotNullObject(form.vehicleId);
    flag = flag && validator.isNotNullObject(form.insuranceAmount);

    return flag;
  }

  populateForm(form: any, data: any) {
    form.id = data.id;
    form.name = data.name;
    
    // Parse the date string and convert to Date object
    const dateOfBirth = new Date(data.dateOfBirth);
    
    // Check if the parsed date is valid
    if (!isNaN(dateOfBirth.getTime())) {
      // Convert dateOfBirth to yyyy-MM-dd string format
      form.dateOfBirth = this.formatDate(dateOfBirth);
    } else {
      form.dateOfBirth = null; // Handle invalid date gracefully, or set to an appropriate default
    }
    
    form.vehicleId = data.vehicleId;
    form.insuranceAmount = data.insuranceAmount;
  }
  
  // Helper function to format Date to yyyy-MM-dd string
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }
  
  

}
