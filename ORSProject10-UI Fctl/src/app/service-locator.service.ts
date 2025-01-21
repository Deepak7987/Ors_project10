import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { DataValidator } from './utility/data-validator';
import { Router, ActivatedRoute } from '@angular/router';
import { EndpointServiceService } from './endpoint-service.service';
//Is example se yeh saaf hota hai ki ServiceLocatorService ka use application ke different services ko 
//easily access aur manage karne ke liye kiya gaya hai, aur UserComponent ko specific functionalities provide karne ke liye bhi.
@Injectable({
  providedIn: 'root'
})

export class ServiceLocatorService {

  
  httpService = null;
  dataValidator = null;
  router = null;
  endpoints = null;

  constructor(private hs: HttpServiceService, private dv: DataValidator, private r: Router, private ep: EndpointServiceService) {
    this.httpService = hs;
    this.dataValidator = dv;
    this.router = r;
    this.endpoints = ep;
  }
 
  /**
   * get path variable from url
   * 
   * @param route 
   * @param callback 
   */
  getPathVariable(route: ActivatedRoute, callback) {
    route.params.subscribe(params => {
      callback(params)
    });
  }

  /**
   * Forward to page 
   * 
   * @param page 
   */
  forward(page){
    this.router.navigateByUrl(page);
  }
}
