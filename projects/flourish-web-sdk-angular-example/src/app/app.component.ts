import { Component, OnInit } from '@angular/core';
import { Environment, Language, AutoPaymentEvent, PaymentEvent, TriviaFinishedEvent, BackEvent, GenericEvent } from 'flourish-web-sdk-angular';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  environment: Environment = Environment.STAGING;
  language: Language = Language.ENGLISH;
  accessToken: String | undefined;
  
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getFlourishAccessToken().subscribe((response) => this.accessToken = response.flourishAccessToken);
  }

  

  onGenericEvent(genericEvent: GenericEvent): void {
    console.log(`Event name: ${genericEvent.name}`);
    console.log(`Event data: ${JSON.stringify(genericEvent.data)}`);
  }

  onAutoPaymentEvent(autoPaymentEvent: AutoPaymentEvent): void {
    console.log(`Event name: ${autoPaymentEvent.name}`);
  }

  onPaymentEvent(paymentEvent: PaymentEvent): void {
    console.log(`Event name: ${paymentEvent.name}`);
  }

  onTriviaFinishedEvent(triviaFinishedEvent: TriviaFinishedEvent): void {
    console.log(`Event name: ${triviaFinishedEvent.name}`);
    console.log(`Event data: ${JSON.stringify(triviaFinishedEvent.data)}`);
  }

  onBackEvent(backEvent: BackEvent): void {
    console.log(`Event name: ${backEvent.name}`);
    console.log(`Event data: ${JSON.stringify(backEvent.data)}`);
  }

}
