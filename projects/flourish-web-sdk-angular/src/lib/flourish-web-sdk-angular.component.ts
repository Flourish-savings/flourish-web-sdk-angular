import { Component, Input, OnInit } from '@angular/core';
import { FlourishWebSdkAngularService } from './flourish-web-sdk-angular.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Environment } from './enums/environment.enum';
import { Language } from './enums/language.enum';
import { Endpoint } from './utils/endpoint';

@Component({
  selector: 'flourish-web-sdk-angular',
  templateUrl: './flourish-web-sdk-angular.component.html',
  providers: [ FlourishWebSdkAngularService ],
  styles: [
  ]
})
export class FlourishWebSdkAngularComponent implements OnInit {

  @Input() partnerId: String = '';
  @Input() partnerSecret: String = '';
  @Input() customerCode: String = '';
  @Input() environment: String = 'STAGING';
  @Input() language: String = 'ENGLISH';
  _endpoint: Endpoint = new Endpoint((<any>Environment)[this.environment as string], (<any>Language)[this.language as string]);
  iframeUrl: SafeResourceUrl | undefined;

  constructor(private flourishWebSdkAngularService: FlourishWebSdkAngularService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    this.flourishWebSdkAngularService.initialize(
      this.partnerId,
      this.partnerSecret,
      this.customerCode,
      (<any>Environment)[this.environment as string],
      (<any>Language)[this.language as string],
      this._endpoint
    );

    this.flourishWebSdkAngularService.authenticate()
                                      .subscribe((response) => { 
                                        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this._endpoint.frontend}?token=${response.access_token}`) 
                                      });
  }

}
