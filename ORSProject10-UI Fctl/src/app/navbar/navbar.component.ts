import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { ServiceLocatorService } from '../service-locator.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginId: string;
  userid: string;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private httpService: HttpServiceService,
    private myservice: HttpClient,
    private servicelocator: ServiceLocatorService
  ) {
    console.log('DefaultLang ' + localStorage.getItem("locale"));

    const locale = localStorage.getItem("locale");
    if (locale !== null) {
      translate.setDefaultLang(locale);
    } else {
      translate.setDefaultLang("en");
    }
  }

  changeLocale(locale: string) {
    localStorage.setItem("locale", locale);
    this.translate.use(locale);
    console.log('Locale ' + locale);
  }

  public form = {
    error: false,
    message: null,
    firstName: null,
    data: { id: null, fname: null, lname: null, role: null, loginId: null },
    inputerror: {},
    searchParams: {},
    searchMessage: null,
    list: [],
  };

  ngOnInit() {}

  forward() {
    this.userid = localStorage.getItem("userid");
    console.log('UID---' + this.userid);
    this.servicelocator.forward("/user/" + this.userid);
  }

  isLogin() {
    let check = localStorage.getItem('fname');
    if (check !== "null" && check !== null) {
      this.form.data.fname = localStorage.getItem("fname");
      this.form.data.lname = localStorage.getItem("lname");
      this.form.data.loginId = localStorage.getItem("loginId");
      this.form.data.role = localStorage.getItem("role");
      return true;
    } else {
      return false;
    }
  }

  goToLink() {
    window.open('assets/doc/index.html', '_blank');
  }

  logout() {
    var _self = this;
    console.log('Logout', this.form);

    _self.httpService.get("http://localhost:8084/Auth/logout", function (res) {
      _self.servicelocator.router.navigateByUrl('/login/true');
      if (res.success) {
        localStorage.clear();
        _self.form.message = res.result.message;
      }
    });
  }
}
