import { Component, Input } from '@angular/core';
import { FlourishWebSdkAngularService } from './flourish-web-sdk-angular.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Environment } from './enums/environment.enum';
import { Language } from './enums/language.enum';
import { Endpoint } from './utils/endpoint';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'flourish-web-sdk-angular',
  templateUrl: './flourish-web-sdk-angular.component.html',
  providers: [ FlourishWebSdkAngularService ],
  styles: [ ]
})
export class FlourishWebSdkAngularComponent {

  @Input() iframeUrl: SafeResourceUrl | undefined;

  constructor(private flourishWebSdkAngularService: FlourishWebSdkAngularService, private sanitizer: DomSanitizer) {}

  initialize(partnerId: String, partnerSecret: String, customerCode: String, environment: Environment, language: Language): Observable<SafeResourceUrl> {

    const _endpoint: Endpoint = new Endpoint(environment, language);
    var subject = new Subject<SafeResourceUrl>();

    this.flourishWebSdkAngularService.initialize(
      partnerId,
      partnerSecret,
      customerCode,
      environment,
      language,
      _endpoint
    );

    this.flourishWebSdkAngularService.authenticate()
                                      .subscribe((response) => {
                                        subject.next(this.sanitizer.bypassSecurityTrustResourceUrl(`${_endpoint.frontend}?token=${response.access_token}`));
                                      });

    return subject.asObservable();

  }

}
