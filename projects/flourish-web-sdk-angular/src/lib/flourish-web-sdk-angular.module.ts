import { NgModule } from '@angular/core';
import { FlourishWebSdkAngularComponent } from './flourish-web-sdk-angular.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FlourishWebSdkAngularComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    FlourishWebSdkAngularComponent
  ]
})
export class FlourishWebSdkAngularModule { }
