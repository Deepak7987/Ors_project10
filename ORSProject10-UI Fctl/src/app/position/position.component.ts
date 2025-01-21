import { Component, OnInit } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent extends BaseCtl {
  errorMessageTitle: string = '';

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.POSITION, locator, route);
  }


  validateForm(form) {
    let flag = true;
    let validator = this.serviceLocator.dataValidator;
    flag = flag && validator.isNotNullObject(form.designation);
    flag = flag && validator.isNotNullObject(form.openingdate);
    flag = flag && validator.isNotNullObject(form.condition);
    flag = flag && validator.isNotNullObject(form.requiredexperience);

    return flag;
  }

  populateForm(form: any, data: any) {
    form.id = data.id;
    form.designation = data.designation;
    
    // Parse the date string and convert to Date object
    const openingdate = new Date(data.openingdate);
    
    // Check if the parsed date is valid
    // if (!isNaN(openingdate.getTime())) {
    //   // Convert dateOfBirth to yyyy-MM-dd string format
    //   form.openingdate = this.formatDate(openingdate);
    // } else {
    //   form.openingdate = null; // Handle invalid date gracefully, or set to an appropriate default
    // }
    form.openingdate = data.openingdate;
    form.condition = data.condition;
    form.requiredexperience = data.requiredexperience;
  }
  parseDate(dateString: string): Date {
    if (dateString) {
      return new Date(dateString);
    }
    return null;
  }
  // Helper function to format Date to yyyy-MM-dd string
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because getMonth() returns zero-based
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }

}
