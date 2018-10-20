import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Option } from 'src/app/_shared/_components/sidenav/sidenav.component';

@Injectable()
export class AutomationService {

  constructor(private http: HttpClient) { }

  getMenus(): Observable<Option>{
    return this.http.get<Option>('api/automation/getMenus');
  }
}
