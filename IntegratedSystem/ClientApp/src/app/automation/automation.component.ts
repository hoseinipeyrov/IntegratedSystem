import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automation',
  template: '<app-sidenav [sideNavOptions]="options"></app-sidenav>'
})
export class AutomationComponent implements OnInit {

  constructor() { }

  options = {
    appTitle: 'اتوماسیون و مکاتبات',
    toolbarTitle: 'سعید احمدوند',
    menus:[
      {
        title : 'اطلاعات پایه',
        menuItems : [
          {
            title: 'چارت سازمانی',
            link : '/automation/department',
            status: true
          },
          {
            title: 'اشخاص',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'اطلاعیه',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'پوشه ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'آدرس ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'گروه ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'رویداد ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'فرمت نامه ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'تعریف جانشین',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'دسترسی ها سازمانی',
            link : '/part-sale/invoice-issuance',
            status: true
          }
        ]
      },
      {
        title : 'گردش عملیات',
        menuItems : [
          {
            title: 'نامه صادره داخلی',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'کارتابل نامه ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'جستجوی نامه ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'ارسال فرم',
            link : '/part-sale/invoice-issuance',
            status: true
          }
        ]
      },
      {
        title : 'امکانات',
        menuItems : [
          {
            title: 'اطلاعیه ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'تنظیمات ایمیل',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'انتقال همه نامه ها',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'تعریف گروه فرم',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'تعریف فرم',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'اختصاص فیلد به گروه ها',
            link : '/part-sale/invoice-issuance',
            status: true
          }
        ]
      },
      {
        title : 'سیستم',
        menuItems : [
          {
            title: 'تنظیمات تنظیمات نرم افزار',
            link : '/part-sale/invoice-issuance',
            status: true
          },
          {
            title: 'تعریف کاربر',
            link : '/part-sale/invoice-issuance',
            status: true
          }
        ]
      },
    ]
  }




  ngOnInit() {
  }

}
