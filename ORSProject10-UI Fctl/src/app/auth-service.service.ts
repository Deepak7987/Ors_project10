import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpServiceService } from './http-service.service';

//Yeh interceptor ensure karta hai ki har ek HTTP request ke sath kuch extra 
//information (jaise user ka naam) headers mein bheji jaye,
// jo aapke server ko user-specific ya customized response dene mein madad kar sakti hai.

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor(private http: HttpServiceService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (localStorage.getItem('fname')) {
      req = req.clone({
        setHeaders: {
        "withCredentials" : "true",
        "name" : "Deepak",
        }
      })
    }
        console.log(req.headers.get("Authorization")+"------------------->>>")
    return next.handle(req);

  }

}