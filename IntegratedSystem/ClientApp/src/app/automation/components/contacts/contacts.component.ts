import { IReceivers } from './../../models/models';
import { map, first } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { IListItem, IContact, RecieverDialogType } from 'src/app/automation/models/models';
import { AutomationService } from 'src/app/automation/services/automation.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {

  @ViewChild("matSelection") matSelection: MatSelectionList;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogData: any,
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ContactsComponent>,
    private automationService: AutomationService) { }

  private contacts: IListItem[] = [];
  private filtered: IListItem[] = [];
  private selected: any[] = [];


  ngOnInit() {

    this.automationService.getContactslist()
      .subscribe(result => {

        this.doInit();
        
        result.forEach(t => {

          if (!this.isExsist(t)) {
            this.contacts.push({
              text: t.name,
              value: String(t.id),
              selected: this.selected.some(c => c.id == t.id)
            });
          }
          
        });

        this.filtered = this.contacts;
      });
  }

  checkedItem(id: number, value: boolean) {

    if (value) {
      this.selected.push({ id: id })
    }
    else {
      let item = this.selected.find(t => t.id === id);
      this.selected.splice(item, 1);
    }
    
  }

  filterList(val: string) {

    this.filtered = [];

    this.contacts.filter( t => t.text.toLowerCase().indexOf(val.toLowerCase()) === 0 )
      .forEach(t => {
        this.filtered.push({
          text: t.text,
          value: t.value,
          selected: this.selected.some(c => c.id == parseInt(t.value))
        });
      });

  }

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.dialogRef.close({
      data: this.updateReceiversList()
    });
  }

  doInit() {

    let old = this.dialogData.data as IReceivers;
    let type = this.dialogData.type as RecieverDialogType;

    switch (type) {
      case RecieverDialogType.To:
        old.to.forEach(t => {
          this.selected.push({ id: t.id });
        });
        break;

      case RecieverDialogType.Cc:
        old.carbonCopy.forEach(t => {
          this.selected.push({ id: t.id });
        });
        break;

      case RecieverDialogType.Bcc:
        old.blindCarbonCopy.forEach(t => {
          this.selected.push({ id: t.id });
        });
        break;
    }
  }

  updateReceiversList(): IReceivers {

    let type = this.dialogData.type as RecieverDialogType;
    let usreSelection = this.dialogData.data as IReceivers;

    switch (type) {
      case RecieverDialogType.To:
        usreSelection.to = [];
        this.selected.forEach(t => {
          usreSelection.to.push({
            id: t.id,
            name: this.contacts.find(c => parseInt(c.value) == t.id).text
          })
        });
        break;

      case RecieverDialogType.Cc:
        usreSelection.carbonCopy = [];
        this.selected.forEach(t => {
          usreSelection.carbonCopy.push({
            id: t.id,
            name: this.contacts.find(c => parseInt(c.value) == t.id).text
          })
        });
        break;

      case RecieverDialogType.Bcc:
        usreSelection.blindCarbonCopy = [];
        this.selected.forEach(t => {
          usreSelection.blindCarbonCopy.push({
            id: t.id,
            name: this.contacts.find(c => parseInt(c.value) == t.id).text
          })
        });
        break;
    }
    
    return usreSelection;
  }

  isExsist(contact: IContact): boolean{

    let type = this.dialogData.type as RecieverDialogType;
    let old = this.dialogData.data as IReceivers;

    switch (type) {
      case RecieverDialogType.To:{
        let foundA:boolean = old.carbonCopy.some(t=> t.id == contact.id);
        let foundB:boolean = old.blindCarbonCopy.some(t=> t.id == contact.id);

        return (foundA || foundB);
      }

      case RecieverDialogType.Cc:{
        let foundA:boolean = old.to.some(t=> t.id == contact.id);
        let foundB:boolean = old.blindCarbonCopy.some(t=> t.id == contact.id);

        return (foundA || foundB);
      }
      case RecieverDialogType.Bcc:{
        let foundA:boolean = old.to.some(t=> t.id == contact.id);
        let foundB:boolean = old.carbonCopy.some(t=> t.id == contact.id);

        return (foundA || foundB);
      }
    }

    throw("error");
  }
}
