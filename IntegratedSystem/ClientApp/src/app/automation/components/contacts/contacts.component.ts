import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Receivers } from 'src/app/_shared/_class/models';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  filtered: any[];
  list = [
    { id: 1, name: 'سعید', selected: false },
    { id: 2, name: 'وحید', selected: false },
    { id: 3, name: 'محمد', selected: false },
    { id: 4, name: 'مصطفی', selected: false },
    { id: 5, name: 'علی', selected: false },
    { id: 6, name: 'مرتضی', selected: false },
    { id: 7, name: 'سالار', selected: false },
    { id: 8, name: 'یاور', selected: false }
  ];

  @ViewChild("contacts") contacts: MatSelectionList;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit() {

    let receivers: Receivers = this.dialogData.data;
    let type: string = this.dialogData.type;
    let temp: any[] = [];

    if (!receivers)
      receivers = {
        To:[],
        CarbonCopy:[],
        BlindCarbonCopy:[]
      };

    switch (type) {

      case 'TO': {

        this.list.forEach(
          item => {

            if (receivers.CarbonCopy) {
              let toCc = receivers.CarbonCopy.find(t => t.id !== item.id);
              if (toCc) temp.push({ id: toCc.id, name: toCc.name, selected: false });
            }

            if (receivers.BlindCarbonCopy) {
              let toBcc = receivers.BlindCarbonCopy.find(t => t.id !== item.id);
              if (toBcc) temp.push({ id: toBcc.id, name: toBcc.name, selected: false });
            }
          }
        );

        if (temp && temp.length > 0) this.list = temp;

        if (receivers.To) {
          receivers.To.forEach(c => {
            this.list.find(t => t.id == c.id).selected = true;
          });
        }

        break;
      }

      case 'CC': {

        this.list.forEach(
          item => {

            if (receivers.To) {
              let to = receivers.To.find(t => t.id !== item.id);
              if (to) temp.push({ id: to.id, name: to.name, selected: false });
            }

            if (receivers.BlindCarbonCopy) {
              let toBcc = receivers.BlindCarbonCopy.find(t => t.id !== item.id);
              if (toBcc) temp.push({ id: toBcc.id, name: toBcc.name, selected: false });
            }

          }
        );


        if (temp && temp.length > 0) this.list = temp;

        if (receivers.CarbonCopy) {
          receivers.CarbonCopy.forEach(c => {
            this.list.find(t => t.id == c.id).selected = true;
          });
        }

        break;
      }

      case 'BCC': {

        this.list.forEach(
          item => {

            if (receivers.To) {
              let to = receivers.To.find(t => t.id !== item.id);
              if (to) temp.push({ id: to.id, name: to.name, selected: false });
            }

            if (receivers.CarbonCopy) {
              let toCc = receivers.CarbonCopy.find(t => t.id !== item.id);
              if (toCc) temp.push({ id: toCc.id, name: toCc.name, selected: false });
            }
          }
        );

        if (temp && temp.length > 0) this.list = temp;

        if (receivers.BlindCarbonCopy) {
          receivers.BlindCarbonCopy.forEach(c => {
            this.list.find(t => t.id == c.id).selected = true;
          });
        }

        break;
      }

    }

    this.filtered = this.list;
  }

  checkedItem(id: number, value: boolean) {
    this.list.find(t => t.id == id).selected = value;
  }

  filterList(val: string) {
    val = val.toLowerCase();
    this.filtered = this.list.filter(t => t.name.toLowerCase().indexOf(val) === 0);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {

    if (!this.contacts.options.find(t => t.selected) && !this.list.find(t => t.selected)) {
      this.snackBar.open("هیچ آیتمی انتخاب نشده است", null, { duration: 3000, direction: 'rtl' });
      this.dialogRef.close({
        data: []
      });
      return;
    }

    var items: Receivers = {
      To: [],
      BlindCarbonCopy: [],
      CarbonCopy: []
    };

    this.list
      .forEach(t => {

        if (t.selected) {

          let type: string = this.dialogData.type;
          switch (type) {
            case 'TO':
              items.To.push({ id: t.id, name: t.name });
              break;

            case 'CC':
              items.CarbonCopy.push({ id: t.id, name: t.name });
              break;

            case 'BCC':
              items.BlindCarbonCopy.push({ id: t.id, name: t.name });
              break;
          }
        }
      })

    this.dialogRef.close({
      data: items
    });
  }


}
