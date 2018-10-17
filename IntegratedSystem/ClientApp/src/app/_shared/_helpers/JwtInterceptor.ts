import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { AuthenticationService } from "../_services/authentication.service";
import { Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request)
      .pipe(catchError(err => {
        if (err.status === 401) {
          this.authService.logout();
        }
        return throwError(err);
      }));
  }
}
