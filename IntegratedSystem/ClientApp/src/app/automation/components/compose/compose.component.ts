import { ContactsComponent } from './../contacts/contacts.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Receivers } from 'src/app/_shared/_class/models';

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
  receiver: Receivers = {
    To : [],
    CarbonCopy:[],
    BlindCarbonCopy: [],
  };
  config:any ={
    toolbarGroups:[],
    removeButtons: "",
    format_tags: "",
    removeDialogTabs:""
  };
  
  ngOnInit() {
    this.config.toolbarGroups = [
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'editing', groups: ['find', 'selection'] },
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
      { name: 'colors' },
      '/',
      { name: 'styles' },
    ];
    
    this.config.format_tags = 'p;h1;h2;h3;pre';
  
  }

  selectReceivers(){
    let dialogRef = this.dialog.open(ContactsComponent,{
      width: '400px',
      disableClose: true,
      direction: 'rtl',
      data:{
        title: 'انتخاب گیرندگان',
        data: this.receiver,
        type: 'TO'
      }
    });

    dialogRef.afterClosed()
      .subscribe(

        result =>{
          
          if (!result) return;

          (result.data as Receivers).To.forEach(
            t => this.receiver.To.push({ id: t.id,  name : t.name })
          );

          this.insertReceiversToBox(this.receiver);
        }
      );
  }

  carbonCopyReceivers(){
    let dialogRef = this.dialog.open(ContactsComponent,{
      width: '400px',
      disableClose: true,
      direction: 'rtl',
      data:{
        title: 'انتخاب گیرندگان رونوشت',
        data: this.receiver,
        type: 'CC'
      }
    });

    dialogRef.afterClosed()
      .subscribe(

        result =>{
          
          if (!result) return;

          (result.data as Receivers).CarbonCopy.forEach(
            t => this.receiver.CarbonCopy.push({ id: t.id,  name : t.name })
          );
          
          this.insertReceiversToBox(this.receiver);
        }
      );
  }

  bilindCarbonCopyReceivers(){
    let dialogRef = this.dialog.open(ContactsComponent,{
      width: '400px',
      disableClose: true,
      direction: 'rtl',
      data:{
        title: 'انتخاب گیرندگان رونوشت مخفی',
        data: this.receiver,
        type: 'BCC'
      }
    });

    dialogRef.afterClosed()
      .subscribe(

        result =>{
          
          if (!result) return;

          (result.data as Receivers).BlindCarbonCopy.forEach(
            t => this.receiver.BlindCarbonCopy.push({ id: t.id,  name : t.name })
          );

          this.insertReceiversToBox(this.receiver);
        }
      );
  }

  insertReceiversToBox(list:Receivers){

    let items:string = "";

    items = list.To.join('، ');
    items += list.CarbonCopy.join('، ');
    items += list.BlindCarbonCopy.join('، ');

    this.form.controls.receivers.setValue(items);
  }

}