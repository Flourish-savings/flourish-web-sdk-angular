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
  styleUrls: ['./flourish-web-sdk-angular.component.scss']
})
export class FlourishWebSdkAngularComponent implements OnInit {

  @Input() partnerId: String = '';
  @Input() partnerSecret: String = '';
  @Input() customerCode: String = '';
  @Input() environment: Environment = Environment.STAGING;
  @Input() language: Language = Language.ENGLISH;
  _endpoint: Endpoint = new Endpoint(this.environment, this.language);
  iframeUrl: SafeResourceUrl | undefined;

  constructor(private flourishWebSdkAngularService: FlourishWebSdkAngularService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    this.flourishWebSdkAngularService.initialize(
      this.partnerId,
      this.partnerSecret,
      this.customerCode,
      this.environment,
      this.language,
      this._endpoint
    );

    this.flourishWebSdkAngularService.authenticate()
                                      .subscribe((response) => { 
                                        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this._endpoint.frontend}?token=${response.access_token}`) 
                                      });
  }

}
