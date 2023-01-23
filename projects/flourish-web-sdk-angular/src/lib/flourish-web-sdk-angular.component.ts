import { Component, EventEmitter, HostListener, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Environment } from './enums/environment.enum';
import { Language } from './enums/language.enum';
import { Endpoint } from './utils/endpoint';
import { PaymentEvent } from './events/payment-event';
import { GenericEvent } from './events/generic-event';
import { AutoPaymentEvent } from './events/auto-payment-event';
import { TriviaFinishedEvent } from './events/trivia-finished-event';
import { BackEvent } from './events/back-event';
import { EventCreator } from './events/event-creator';

@Component({
  selector: 'flourish-web-sdk-angular',
  templateUrl: './flourish-web-sdk-angular.component.html',
  providers: [ ],
  styles: [ ]
})
export class FlourishWebSdkAngularComponent implements OnChanges {

  @Input() environment: Environment = Environment.STAGING;
  @Input() language: Language = Language.ENGLISH;
  @Input() accessToken: String | undefined;
  @Output() onGenericEvent = new EventEmitter<GenericEvent>();
  @Output() onAutoPaymentEvent = new EventEmitter<AutoPaymentEvent>();
  @Output() onPaymentEvent = new EventEmitter<PaymentEvent>();
  @Output() onTriviaFinishedEvent = new EventEmitter<TriviaFinishedEvent>();
  @Output() onBackEvent = new EventEmitter<BackEvent>();
  iframeUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {

    const accessToken = changes['accessToken'].currentValue;

    if (accessToken) {
      const _endpoint: Endpoint = new Endpoint(this.environment, this.language);
      this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${_endpoint.frontend}?token=${accessToken}`);
    }

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
