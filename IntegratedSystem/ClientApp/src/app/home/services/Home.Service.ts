import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Option } from "src/app/_shared/_components/sidenav/sidenav.component";


@Injectable()
export class HomeService {
  constructor(private http: HttpClient) { }

  GetAgentInfo() {
    return this.http.get<Option>('api/home/index');
  }
}
