import { Component, OnInit } from '@angular/core';


import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-invoice-issuance',
  templateUrl: './invoice-issuance.component.html',
  styleUrls: ['./invoice-issuance.component.scss']
})
export class InvoiceIssuanceComponent implements OnInit {

  filteredOptions: Observable<SelectListItem[]>;
  myControl = new FormControl();
  title: string ="صدور پیش فاکتور";

  cartTypes:SelectListItem[] = [ 
    {text:"آسنا دوکابین", value:"1", selected:false}
  ];
  

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | SelectListItem>(''),
        map(value => typeof value === 'string' ? value : value.text),
        map(name => name ? this._filter(name) : this.cartTypes.slice())
      );
  }

  displayFn(listItem?: SelectListItem): string | undefined {
    return listItem ? listItem.text : undefined;
  }

  private _filter(name: string): SelectListItem[] {
    const filterValue = name.toLowerCase();

    return this.cartTypes.filter(option => option.text.toLowerCase().indexOf(filterValue) === 0);
  }
}

export interface SelectListItem{
  value: string;
  text: string;
  selected: boolean;
}