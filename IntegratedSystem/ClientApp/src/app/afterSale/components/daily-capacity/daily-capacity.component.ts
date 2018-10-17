import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { InsertEditDialogComponent } from './insert-edit-dialog/insert-edit-dialog.component';

@Component({
  selector: 'app-daily-capacity',
  templateUrl: './daily-capacity.component.html',
  styleUrls: ['./daily-capacity.component.scss']
})
export class DailyCapacityComponent implements OnInit{

  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  title: string = "ظرفیت روزانه";
  displayedColumns: string[] = ['id', 'date', 'total', 'used', 'reserved'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(InsertEditDialogComponent, {
      width: '500px',
      disableClose: true,
      direction: "rtl",
      data: {
        title: "ثبت تعئین ظرفیت"
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      //console.log(result);
    })
  }
}

export interface PeriodicElement {
  id: number;
  row: number;
  date: string;
  total: number;
  used: number;
  reserved: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, row: 1, date: '1397/07/05', total: 22, used: 10, reserved: 12 },
  { id: 1, row: 2, date: '1397/07/06', total: 17, used: 10, reserved: 12 },
  { id: 1, row: 3, date: '1397/07/07', total: 12, used: 10, reserved: 12 },
  { id: 1, row: 4, date: '1397/07/08', total: 7, used: 10, reserved: 12 },
  { id: 1, row: 5, date: '1397/07/09', total: 27, used: 10, reserved: 12 },
  { id: 1, row: 6, date: '1397/07/10', total: 2, used: 10, reserved: 12 },
  { id: 1, row: 7, date: '1397/07/11', total: 6, used: 10, reserved: 12 },
  { id: 1, row: 8, date: '1397/07/12', total: 15, used: 10, reserved: 12 },
  { id: 1, row: 9, date: '1397/07/13', total: 31, used: 10, reserved: 12 },
  { id: 1, row: 10, date: '1397/07/14', total: 19, used: 10, reserved: 12 },
];
