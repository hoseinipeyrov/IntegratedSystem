import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { IListItem } from 'src/app/automation/models/models';
import { AutomationService } from 'src/app/automation/services/automation.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  @ViewChild("contacts") contacts: MatSelectionList;

  private list: IListItem[];
  private filtered: IListItem[];


  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public dialogData: any,
    private automationService: AutomationService,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ContactsComponent>) { }

  ngOnInit() {
    this.automationService.getContactslist()
    .subscribe(
      result=>{
        result.forEach (item => {
          this.list.push({
            Value: String(item.Id),
            Text: item.Name,
            Selected: false
          })
        });
      });
  }

  checkedItem(id: string, value: boolean) {
    this.list.find(t => t.Value == id).Selected = value;
  }

  filterList(val: string) {
    val = val.toLowerCase();
    this.filtered = this.list.filter(t => t.Text.toLowerCase().indexOf(val) === 0);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close();
  }
}
