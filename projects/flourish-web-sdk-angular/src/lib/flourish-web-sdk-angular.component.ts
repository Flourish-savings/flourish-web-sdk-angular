import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Endpoint } from './utils/endpoint'

@Component({
  selector: 'flourish-web-sdk-angular',
  template: `
    <iframe 
      [src]="iframeUrl"
      width="100%" 
      height="100%">
    </iframe>
  `,
  styles: [
  ]
})
export class FlourishWebSdkAngularComponent {

  partnerId: String;
  partnerSecret: String;
  environment: Environment;
  language: Language;
  _endpoint: Endpoint;
  iframeUrl: SafeResourceUrl;

  constructor(partnerId: String, partnerSecret: String, environment: Environment, language: Language, private sanitizer: DomSanitizer) {
    this.partnerId = partnerId;
    this.partnerSecret = partnerSecret;
    this.environment = environment;
    this.language = language;
    this._endpoint = new Endpoint(environment, language);
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this._endpoint.frontend);
  }

}
