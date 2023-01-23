import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FlourishWebSdkAngularModule } from 'flourish-web-sdk-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlourishWebSdkAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
