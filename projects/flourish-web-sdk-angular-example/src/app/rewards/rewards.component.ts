import { Component, Input, OnInit } from "@angular/core";
import { AutoPaymentEvent, BackEvent, Environment, GenericEvent, Language, PaymentEvent, RetryLoginEvent, TriviaFinishedEvent } from "flourish-web-sdk-angular";

@Component({
    selector: 'rewards',
    templateUrl: './rewards.component.html'
})
export class RewardsComponent implements OnInit {

    @Input() environment: Environment | undefined;
    @Input() language: Language | undefined;
    accessToken: string | null | undefined;
    
    ngOnInit(): void {
        this.accessToken = localStorage.getItem('accessToken')
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

    onRetryLoginEvent(retryLoginEvent: RetryLoginEvent): void {
        console.log(`Event name: ${retryLoginEvent.name}`);
        console.log(`Event data: ${JSON.stringify(retryLoginEvent.data)}`);
    }
}