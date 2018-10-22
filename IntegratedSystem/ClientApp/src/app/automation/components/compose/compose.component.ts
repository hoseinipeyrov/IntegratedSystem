import { ContactsComponent } from './../contacts/contacts.component';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { min, filter, toArray } from 'rxjs/operators';
import { max } from 'jalali-moment';
import { MatSelect, MatInput, MatDialogRef, MatDialog } from '@angular/material';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
})
export class ComposeComponent implements OnInit {

  constructor(private dialog: MatDialog, fb: FormBuilder) {
    this.form = fb.group({
      followUpDate: new FormControl(""),
      isSecret: new FormControl("", Validators.required),
      message: new FormControl("", [Validators.required]),
      priority: new FormControl("", Validators.required),
      receivers: new FormControl("",[Validators.required]),
      subject: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    });

    this.form.controls.priority.setValue(0);
    this.form.controls.isSecret.setValue(0);
  }

  title: string = 'ارسال نامه';
  form: FormGroup;
  receiver: number[] = [];

  ngOnInit() {
  }

  openContact(){
    let dialogRef = this.dialog.open(ContactsComponent,{
      width: '400px',
      disableClose: true,
      direction: 'rtl',
      data:{
        title: 'انتخاب گیرندگان',
        data: this.receiver,
      }
    });

    dialogRef.afterClosed()
      .subscribe(

        result =>{
          
          if (!result) return;

          let name:string[]=[];
          let id: number[]=[];

          (result.data as any[]).forEach(
            t=> {
              name.push(t.name);
              id.push(t.id);
            }
          );

          this.receiver = id;
          this.form.controls.receivers.setValue(name.join("، "));
          
        }
      );
  }
}