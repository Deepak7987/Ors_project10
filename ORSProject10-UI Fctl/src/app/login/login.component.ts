import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { DataValidator } from '../utility/data-validator';
import { CookieService } from 'ngx-cookie-service';
import { ServiceLocatorService } from '../service-locator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  endpoint = "http://localhost:8084/Auth";

  form = {
    error: false,
    message: '',
    loginId: '',
    password: '',
    loginUrl: ''
  };

  inputerror = {};
  message = '';

  userparams = {
    url: '',
    sessionExpiredMsg: '',
    methodType: ''
  };

  constructor(
    private httpService: HttpServiceService,
    private dataValidator: DataValidator,
    private router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private serviceLocator: ServiceLocatorService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.form.message = params['errorMessage'] || null;
      console.log("Message:", this.form.message);
    });

    if (this.httpService.form.error) {
      this.form.message = this.httpService.form.message;
      this.form.error = this.httpService.form.error;
    }

    this.serviceLocator.getPathVariable(this.route, params => {
      const userparam = params["userparams"];
      console.log('Userparam:', userparam);
      if (userparam === 'true') {
        this.form.message = 'Logout Successfully';
      }
    });
  }

  userSessionCheck() {
    this.route.paramMap.subscribe(params => {
      this.userparams = JSON.parse(this.route.snapshot.queryParamMap.get('userparams'));
      if (this.userparams) {
        this.form.message = this.userparams.sessionExpiredMsg;
        this.form.loginUrl = this.userparams.url;
      }
    });

    if (this.form.message) {
      this.form.error = true;
    }
  }

  validate() {
    let flag = true;
    flag = flag && this.dataValidator.isNotNull(this.form.loginId);
    console.log(this.form.loginId);
    flag = flag && this.dataValidator.isNotNull(this.form.password);
    console.log(this.form.password);
    return flag;
  }

  signIn() {
    this.form.error = false;
    const requestedUrl = this.httpService.userparams.url;
    console.log('SignIn:', this.form);

    this.httpService.post(this.endpoint + "/login", this.form, res => {
      console.log('Response:', res);

      this.form.message = '';
      this.inputerror = {};

      if (this.dataValidator.isNotNullObject(res.result.message)) {
        this.form.message = res.result.message;
      }

      this.form.error = !res.success;

      if (this.dataValidator.isNotNullObject(res.result.inputerror)) {
        this.inputerror = res.result.inputerror;
      }

      if (this.dataValidator.isTrue(res.success)) {
        localStorage.setItem("loginId", res.result.loginId);
        localStorage.setItem("role", res.result.role);
        localStorage.setItem("fname", res.result.fname);
        localStorage.setItem("lname", res.result.lname);
        localStorage.setItem("userid", res.result.data.id);

        if (requestedUrl) {
          this.router.navigateByUrl(requestedUrl);
        } else {
          this.router.navigateByUrl('/dashboard');
        }
      }
    });
  }
}
