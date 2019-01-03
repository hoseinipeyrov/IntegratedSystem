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
      attachment: new FormControl(""),
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
    to: [],
    carbonCopy: [],
    blindCarbonCopy: [],
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

          this.receiver = {
            to: [],
            carbonCopy: [],
            blindCarbonCopy: []
          };

          r.to.forEach(
            t => this.receiver.to.push({ id: t.id, name: t.name })
          );

          r.carbonCopy.forEach(
            t => this.receiver.carbonCopy.push({ id: t.id, name: t.name })
          );

          r.blindCarbonCopy.forEach(
            t => this.receiver.blindCarbonCopy.push({ id: t.id, name: t.name })
          );

          this.insertReceiversToBox(this.receiver);
        }
      );
  }

  insertReceiversToBox(list: IReceivers) {

    let str: string = "";

    let act1 = (x = list.to) => {
      let strTo: any[] = [];
      x.forEach(t => {
        strTo.push(t.name);
      });

      return strTo.join("، ");
    };

    let act2 = (x = list.carbonCopy) => {
      let strTo: any[] = [];
      x.forEach(t => {
        strTo.push(t.name);
      });

      return strTo.join("، ");
    }

    let act3 = (x = list.blindCarbonCopy) => {
      let strTo: any[] = [];
      x.forEach(t => {
        strTo.push(t.name);
      });

      return strTo.join("، ");
    }

    if (list.to.length > 0)
      str += `[${act1(list.to)}]`;
    
    if (list.carbonCopy.length > 0)
      str += `[${act2(list.carbonCopy)}]`;

    if (list.blindCarbonCopy.length > 0)
      str += `[${act3(list.blindCarbonCopy)}]`;

    this.form.controls.receivers.setValue(str);
  }

  onReceiverInputChange(){
    this.insertReceiversToBox(this.receiver);
  }
}
