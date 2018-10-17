import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  token: string;
}

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient,
    private router: Router) { }

  login(userName: string, password: string): Observable<IUser> {

    let data = { UserName: userName, Password: password };
    return this.http.post<IUser>('api/users/login', null, { params: data })
      .pipe(map(user => {

        if (user && user.token) {
          localStorage.setItem("currentUser", JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    if (localStorage.getItem("currentUser")) {
      localStorage.removeItem("currentUser");
      this.router.navigate(['users/login']);
    }
  }

  get User() {
    let user: IUser = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName
      }
    }

    return null;
  }

  changePassword(old: string, pass: string, confirm: string) {

  }

  forgetPassword(email: string) {

  }
}
