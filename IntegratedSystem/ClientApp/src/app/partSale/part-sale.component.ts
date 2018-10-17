import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-sale',
  template: '<app-sidenav [sideNavOptions]="options"></app-sidenav>',
  styles: []
})
export class PartSaleComponent implements OnInit {

  options = {
    appTitle: 'فروش قطعه',
    toolbarTitle: 'نمایندگی ندیم',
    menus:[
      {
        title : 'فروش لوازم یدکی',
        menuItems : [
          {
            title: 'صدور پیش فاکتور',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'اصلاح/ابطال پیش فاکتور',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'عملیات فاکتور',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'جستجو',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'درخواست فاکتور برگشتی',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'تائید فاکتور برگشتی',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'فاکتور های برگشتی تائید شده',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'وضعیت قطعات بلوکه شده',
            link : '/part-sale/invoice-issuance',
            status: true
          }
        ]
      },
      {
        title : 'عملیات',
        menuItems : [
          {
            title: 'پیش فاکتور عادی',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'پیش فاکتور سهمیه ای',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'ویرایش/ارسال درخواست',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'پیش فاکتور های صادر شده',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'حواله های صادر شده',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'وضعیت درخواست ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'جستجوی درخواست از مرکز',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'مشاهده فاکتور های برگشتی',
            link : '/part-sale/invoice-issuance',
            status: true
          }
        ]
      },
      {
        title : 'امکانات',
        menuItems : [
          {
            title: 'مشتری حقوقی',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'مشتری حقیقی',
            link : '/part-sale/invoice-issuance',
            status: true
          }
        ]
      }
    ]
  }
  
  constructor() { 
  }
  
  ngOnInit() {
    
  }

}
