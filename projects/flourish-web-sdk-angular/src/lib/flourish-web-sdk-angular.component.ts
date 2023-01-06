import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'flourish-web-sdk-angular',
  template: `
    <iframe 
      [src]="trustedUrl"
      width="100%" 
      height="100%">
    </iframe>
  `,
  styles: [
  ]
})
export class FlourishWebSdkAngularComponent {

  url: string;
  trustedUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.url = "https://flourish-app-stg.flourishfi.com/?token=eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOjUsInVzZXJfaWQiOjI0OTcsImV4cCI6MTY3MzEyMTc3NH0.6k6acMk3ZvEuZkeKnIQFzYqX7QtYjrxeiCAF8G8RBG0";
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
