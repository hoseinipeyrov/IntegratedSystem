import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { min, filter, toArray } from 'rxjs/operators';
import { max } from 'jalali-moment';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  @ViewChild("receivers") receivers: MatSelect;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      followUpDate: new FormControl(""),
      isSecret: new FormControl("0", Validators.required),
      message: new FormControl("", [Validators.required]),
      priority: new FormControl("0", Validators.required),
      receivers: new FormControl("",[Validators.required]),
      subject: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    });
  }

  title: string = 'ارسال نامه';
  form: FormGroup;
  items: Option[]= [
    {Value:"1", Text:"سعید احمدوند",Selected :false},
    {Value:"2", Text:"علی قمر",Selected :false},
    {Value:"3", Text:"محسن",Selected :false},
    {Value:"4", Text:"وحید",Selected :false},
    {Value:"5", Text:"سعید احمدوند",Selected :false},
    {Value:"6", Text:"علی قمر",Selected :false},
    {Value:"7", Text:"محسن",Selected :false},
    {Value:"8", Text:"وحید",Selected :false},
    {Value:"9", Text:"سعید احمدوند",Selected :false},
    {Value:"10", Text:"علی قمر",Selected :false},
    {Value:"11", Text:"محسن",Selected :false},
    {Value:"12", Text:"وحید",Selected :false},
    {Value:"13", Text:"سعید احمدوند",Selected :false},
    {Value:"14", Text:"علی قمر",Selected :false},
    {Value:"15", Text:"محسن",Selected :false},
    {Value:"16", Text:"وحید",Selected :false},
    {Value:"17", Text:"سعید احمدوند",Selected :false},
    {Value:"18", Text:"علی قمر",Selected :false},
    {Value:"19", Text:"محسن",Selected :false},
    {Value:"20", Text:"وحید",Selected :false}
  ]

  filteredOptions: Option[];

  ngOnInit() {
    this.filteredOptions = this.items;
  }

  receiverFilter(value:string){
    const filterd = value.toLocaleLowerCase();
    // this.filteredOptions = this.items.filter(option => option.Text.toLocaleLowerCase().indexOf(filterd) === 0);
    
    let a = this.receivers.options.filter(t=> t.viewValue.toLocaleLowerCase().indexOf(filterd) === 0);
    
    this.receivers.options =  a;

  }

  itemClicked(value:string){
   const str = value.toLocaleLowerCase();
   
   console.log(a, str);
  }
}

interface Option{
  Text: string;
  Value: string;
  Selected:boolean;
}