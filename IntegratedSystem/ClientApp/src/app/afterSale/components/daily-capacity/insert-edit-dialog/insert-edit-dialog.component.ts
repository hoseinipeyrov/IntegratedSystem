import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-insert-edit-dialog',
  templateUrl: './insert-edit-dialog.component.html',
  styleUrls: ['./insert-edit-dialog.component.scss']
})
export class InsertEditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<InsertEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) { }

  displayedColumns: string[] = ['title', 'count'];
  dataSource = new MatTableDataSource<Capacity>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onYesClick()
  {
    this.dialogRef.close({
      from: '',
      to: '',
      data: this.getRows()
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }

  getRows(){
    let list: any[] = [];
    this.dataSource.data.forEach((item)=>{
      list.push({id: item.id, count:item.count, title: item.title});
    });

    return list;
  }
}




export interface DialogData {title: string;}

export interface Capacity {
  id: number;
  title: string;
  count: number;
}

const ELEMENT_DATA: Capacity[] = [
  { id: 1,  count: 22, title: "مشتریان" },
  { id: 2,  count: 17, title: "امداد در محل" },
  { id: 3,  count: 12, title: "اورژانسی" },
  { id: 4,  count: 7, title: "اینترنتی" },
  { id: 5,  count: 27, title: "برگشتی" },
  { id: 6,  count: 2, title: "پرسنلی" },
  { id: 7,  count: 6, title: "تلفنی" },
  { id: 8,  count: 15, title: "عادی" },
  { id: 9,  count: 31, title: "سرویس سریع" },
  { id: 10,  count: 19, title: "سرویس در محل" },
];
