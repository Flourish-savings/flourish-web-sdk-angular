import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Environment, Language, FlourishWebSdkAngularComponent, PaymentEvent } from 'flourish-web-sdk-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FlourishWebSdkAngularComponent]
})
export class AppComponent implements OnInit {

  iframeUrl: SafeResourceUrl | undefined;
  
  constructor(private flourishWebSdkAngularComponent: FlourishWebSdkAngularComponent) {}

  ngOnInit(): void {

    this.flourishWebSdkAngularComponent.initialize(
      "HERE_YOU_WILL_USE_YOUR_PARTNER_ID",
      "HERE_YOU_WILL_USE_YOUR_PARTNER_SECRET",
      "HERE_YOU_WILL_USE_YOUR_CUSTOMER_CODE",
      Environment.STAGING,
      Language.ENGLISH
    ).subscribe((iframeFlourish): void => { this.iframeUrl = iframeFlourish });

  }

  onPayment(paymentEvent: PaymentEvent): void {
    console.log(`Event name: ${paymentEvent.name}`);
  }

}
