import { NgModule } from '@angular/core';
import { FlourishWebSdkAngularComponent } from './flourish-web-sdk-angular.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FlourishWebSdkAngularComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    FlourishWebSdkAngularComponent
  ]
})
export class FlourishWebSdkAngularModule { }
