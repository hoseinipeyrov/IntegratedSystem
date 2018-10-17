import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './_modules/menu.module';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from './_class/MaterialPersianDateAdapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { JwtInterceptor } from './_helpers/JwtInterceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MenuModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  entryComponents: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {

    return {
      ngModule: SharedModule,
      providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' },
        { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      ]
    }
  }
}
