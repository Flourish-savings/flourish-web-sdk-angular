import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FlourishWebSdkAngularService } from './flourish-web-sdk-angular.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Environment } from './enums/environment.enum';
import { Language } from './enums/language.enum';
import { Endpoint } from './utils/endpoint';
import { Observable, Subject } from 'rxjs';
import { PaymentEvent } from './events/payment-event';
import { GenericEvent } from './events/generic-event';
import { AutoPaymentEvent } from './events/auto-payment-event';
import { TriviaFinishedEvent } from './events/trivia-finished-event';
import { BackEvent } from './events/back-event';
import { EventCreator } from './events/event-creator';

@Component({
  selector: 'flourish-web-sdk-angular',
  templateUrl: './flourish-web-sdk-angular.component.html',
  providers: [ FlourishWebSdkAngularService ],
  styles: [ ]
})
export class FlourishWebSdkAngularComponent {

  @Input() iframeUrl: SafeResourceUrl | undefined;
  @Output() onGenericEvent = new EventEmitter<GenericEvent>();
  @Output() onAutoPaymentEvent = new EventEmitter<AutoPaymentEvent>();
  @Output() onPaymentEvent = new EventEmitter<PaymentEvent>();
  @Output() onTriviaFinishedEvent = new EventEmitter<TriviaFinishedEvent>();
  @Output() onBackEvent = new EventEmitter<BackEvent>();

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

  @HostListener('window:message', ['$event'])
  onMessage(event: any) {

    const eventCreated = EventCreator.createObject(event.data);

    if (eventCreated instanceof AutoPaymentEvent) {
      this.onAutoPaymentEvent.emit(eventCreated);
    }
    else if (eventCreated instanceof PaymentEvent) {
      this.onPaymentEvent.emit(eventCreated);
    }
    else if (eventCreated instanceof TriviaFinishedEvent) {
      this.onTriviaFinishedEvent.emit(eventCreated);
    }
    else if (eventCreated instanceof BackEvent) {
      this.onBackEvent.emit(eventCreated);
    }
    else {
      this.onGenericEvent.emit(eventCreated);
    }
    
  }

}
