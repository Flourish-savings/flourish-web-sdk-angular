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
import { RetryLoginEvent } from './events/retry-login-event';
import { FlourishWebSdkAngularService } from './flourish-web-sdk-angular.service';

@Component({
  selector: 'flourish-web-sdk-angular',
  templateUrl: './flourish-web-sdk-angular.component.html',
  providers: [ FlourishWebSdkAngularService ],
  styleUrls: ['./flourish-web-sdk-angular.component.scss']
})
export class FlourishWebSdkAngularComponent implements OnChanges {

  @Input() environment: Environment | undefined;
  @Input() language: Language | undefined;
  @Input() accessToken: String | null | undefined;
  @Output() onGenericEvent = new EventEmitter<GenericEvent>();
  @Output() onAutoPaymentEvent = new EventEmitter<AutoPaymentEvent>();
  @Output() onPaymentEvent = new EventEmitter<PaymentEvent>();
  @Output() onTriviaFinishedEvent = new EventEmitter<TriviaFinishedEvent>();
  @Output() onBackEvent = new EventEmitter<BackEvent>();
  @Output() onRetryLoginEvent = new EventEmitter<RetryLoginEvent>();

  iframeUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer, private flourishWebSdkAngularService: FlourishWebSdkAngularService) {}

  initialize(environment: Environment, language: Language, accessToken: String): void {
    this.flourishWebSdkAngularService.signIn(accessToken, new Endpoint(environment, language)).subscribe((response) => console.log('Flourish SDK initialization', response.message));
  }

  ngOnChanges(changes: SimpleChanges): void {

    const accessToken = changes['accessToken'].currentValue;

    if (accessToken) {
      this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${new Endpoint(this.environment, this.language).frontend}?token=${accessToken}`);
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
    else if (eventCreated instanceof RetryLoginEvent) {
      this.onRetryLoginEvent.emit(eventCreated);
    }
    else {
      this.onGenericEvent.emit(eventCreated);
    }

  }

}
