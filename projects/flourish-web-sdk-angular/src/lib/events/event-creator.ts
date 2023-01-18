import { AutoPaymentEvent } from "./auto-payment-event";
import { BackEvent } from "./back-event";
import { GenericEvent } from "./generic-event";
import { PaymentEvent } from "./payment-event";
import { RetryLoginEvent } from "./retry-login-event";
import { TriviaFinishedEvent } from "./trivia-finished-event";

interface EventData {
    data: Object
    eventName: String
}

export class EventCreator {

    static GO_TO_AUTO_PAYMENT: String = 'GoToAutoPayment';
    static GO_TO_PAYMENT: String = 'GoToPayment';
    static TRIVIA_FINISHED: String = 'TriviaFinished';
    static RETRY_LOGIN: String = 'RetryLogin';
    static GO_BACK: String = 'GoBack';

    static createObject(eventData: EventData) {

        const eventName = eventData.eventName;

        switch (eventName) {
            case EventCreator.GO_TO_AUTO_PAYMENT: {
                return new AutoPaymentEvent();
            }
            case EventCreator.GO_TO_PAYMENT: {
                return new PaymentEvent();
            }
            case EventCreator.TRIVIA_FINISHED: {
                return new TriviaFinishedEvent();
            }
            case EventCreator.RETRY_LOGIN: {
                return new RetryLoginEvent();
            }
            case EventCreator.GO_BACK: {
                return new BackEvent();
            }
            default: {
                return new GenericEvent();
            }
        }
    }


}