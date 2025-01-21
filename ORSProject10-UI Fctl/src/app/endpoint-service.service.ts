import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EndpointServiceService {

  constructor() { }

  public SERVER_URL = "http://localhost:8084";
  public MESSAGE = this.SERVER_URL + "/Message";
  public USER = this.SERVER_URL + "/User";
  public OWNER = this.SERVER_URL + "/Owner";
  

  public ROLE = this.SERVER_URL + "/Role";
  public COLLEGE = this.SERVER_URL + "/College";
  public MARKSHEET = this.SERVER_URL + "/Marksheet";
  public STUDENT = this.SERVER_URL + "/Student";
  public SUBJECT = this.SERVER_URL+ "/Subject";
  public FACULTY = this.SERVER_URL+ "/Faculty";
  public COURSE = this.SERVER_URL + "/Course";
  public TIMETABLE = this.SERVER_URL+ "/TimeTable";
  public JASPERREPORT = this.SERVER_URL+ "/Jasper";
  public POSITION = this.SERVER_URL+ "/Position";
  public STAFFMEMBER = this.SERVER_URL+ "/Staffmember";
  public ASSET = this.SERVER_URL+ "/Asset";
  public PROPRIETOR = this.SERVER_URL+ "/Proprietor";
  public PATH = this.SERVER_URL+ "/Path";
  public EMPLOYEE = this.SERVER_URL+ "/Employee";
 
  public CUSTOMER = this.SERVER_URL+ "/Customer";
  public ITEM = this.SERVER_URL+ "/Item";
  public CART = this.SERVER_URL+ "/Cart";

}
