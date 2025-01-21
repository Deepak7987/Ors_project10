import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ownerlist',
  templateUrl: './positionlist.component.html',
  styleUrls: ['./positionlist.component.css']
})
export class PositionlistComponent extends BaseListCtl implements OnInit {
  myKey = "";

  public form = {
    error: false,
    message: null,
    preload: [],
    data: { id: null },
    inputerror: {},
    searchParams: {},
    searchMessage: null,
    list: [],
    pageNo: 0
  };

  base64Data: any;
  retrieveResonse: any;
  message: string;
  isValidexperienceInput: boolean = true; // Property to track validity of cost input
  isValidtitleInput: boolean = true; // Property to track validity of description input

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(locator.endpoints.POSITION, locator, route);
  }
  
}
