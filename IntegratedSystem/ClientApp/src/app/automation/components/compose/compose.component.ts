import { ContactsComponent } from './../contacts/contacts.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { IReceivers, RecieverDialogType } from 'src/app/automation/models/models';
import { EditorConfig } from 'src/app/automation/models/functions';

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
      receivers: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    });

    this.form.controls.priority.setValue(0);
    this.form.controls.isSecret.setValue(0);
  }

  title: string = 'ارسال نامه';
  form: FormGroup;
  editorConfig: any;
  receiver: IReceivers = {
    To: [],
    CarbonCopy: [],
    BlindCarbonCopy: [],
  };


  ngOnInit() {
    this.editorConfig = EditorConfig();
  }

  selectReceivers() {
    this.openDialog(RecieverDialogType.To, this.receiver, "انتخاب گیرندگان");
  }

  carbonCopyReceivers() {
    this.openDialog(RecieverDialogType.Cc, this.receiver, "انتخاب گیرندگان رونوشت");
  }

  bilindCarbonCopyReceivers() {
    this.openDialog(RecieverDialogType.Bcc, this.receiver, "انتخاب گیرندگان رونوشت پنهان");
  }

  openDialog(type: RecieverDialogType, data: IReceivers, title: string) {
    let dialogRef = this.dialog.open(ContactsComponent, {
      width: '400px',
      disableClose: true,
      direction: 'rtl',
      data: {
        title: title,
        data: data,
        type: type
      }
    });

    dialogRef.afterClosed()
      .subscribe(

        result => {

          if (!result) return;



          let r = result.data as IReceivers;

          r.To.forEach(
            t => this.receiver.To.push({ id: t.id, name: t.name })
          );

          r.CarbonCopy.forEach(
            t => this.receiver.CarbonCopy.push({ id: t.id, name: t.name })
          );

          r.BlindCarbonCopy.forEach(
            t => this.receiver.BlindCarbonCopy.push({ id: t.id, name: t.name })
          );

          this.insertReceiversToBox(this.receiver);
        }
      );
  }

  insertReceiversToBox(list: IReceivers) {

    
  }

}
