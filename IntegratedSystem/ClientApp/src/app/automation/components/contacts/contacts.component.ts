import { map } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionList, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  
  filtered:any[];
  list = [
    {id:1, name:'سعید', selected: false},
    {id:2, name:'وحید', selected: false},
    {id:3, name:'محمد', selected: false},
    {id:4, name:'مصطفی', selected: false},
    {id:5, name:'علی', selected: false},
    {id:6, name:'مرتضی', selected: false},
    {id:7, name:'سالار', selected: false},
    {id:8, name:'یاور', selected: false}
  ];
  
  @ViewChild("contacts") contacts : MatSelectionList;

  constructor(
    public snackBar:MatSnackBar,
    public dialogRef: MatDialogRef<ContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit() {
    
    (this.dialogData.data as number[]).forEach(id=>{
      this.list.find(t=> t.id == id).selected = true;
    });

    this.filtered = this.list;
  }

  checkedItem(id:number, value:boolean){
    this.list.find(t=>t.id == id).selected = value;
  }
  
  filterList(val:string){
    val = val.toLowerCase();
    this.filtered = this.list.filter(t=> t.name.toLowerCase().indexOf(val) === 0);
  }
  
  onNoClick(){
    this.dialogRef.close();
  }

  onYesClick(){

    if (!this.contacts.options.find(t=>t.selected) && !this.list.find(t=> t.selected)){
      this.snackBar.open("هیچ آیتمی انتخاب نشده است", null, { duration: 3000, direction: 'rtl'});
      this.dialogRef.close({
        data: []
      });
      return;
    }

    var items: any[]=[];
    this.list
      .forEach(t=> {
        if (t.selected)
          items.push({
            id:t.id,
            name: t.name
          });
      })

    this.dialogRef.close({
      data: items
    });
  }

  getContacts(){
  }
}
