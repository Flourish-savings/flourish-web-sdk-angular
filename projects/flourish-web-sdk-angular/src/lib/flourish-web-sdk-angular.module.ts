import { NgModule } from '@angular/core';
import { FlourishWebSdkAngularComponent } from './flourish-web-sdk-angular.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FlourishWebSdkAngularComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FlourishWebSdkAngularComponent
  ]
})
export class FlourishWebSdkAngularModule { }
