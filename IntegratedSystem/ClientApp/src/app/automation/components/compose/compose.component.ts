import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { min } from 'rxjs/operators';
import { max } from 'jalali-moment';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      followUpDate: new FormControl(""),
      isSecret: new FormControl("0", Validators.required),
      message: new FormControl("", [Validators.required]),
      priority: new FormControl("0", Validators.required),
      subject: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    });
  }

  title: string = 'ارسال نامه';
  form: FormGroup;
  
  ngOnInit() {
  }

}
