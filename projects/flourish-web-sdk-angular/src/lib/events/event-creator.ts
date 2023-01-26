import { AutoPaymentEvent } from "./auto-payment-event";
import { BackEvent } from "./back-event";
import { IframeMessage } from "./iframe-messages/iframe-message";
import { GenericEvent } from "./generic-event";
import { PaymentEvent } from "./payment-event";
import { RetryLoginEvent } from "./retry-login-event";
import { TriviaFinishedEvent } from "./trivia-finished-event";
import { IframeMessageTriviaFinishedEvent } from "./iframe-messages/iframe-message-trivia-finished-event";
import { IframeMessageRetryLoginEvent } from "./iframe-messages/iframe-message-retry-login-event";
import { IframeMessageBackEvent } from "./iframe-messages/iframe-message-back-event";

export class EventCreator {

    static GO_TO_AUTO_PAYMENT: String = 'GoToAutoPayment';
    static GO_TO_PAYMENT: String = 'GoToPayment';
    static TRIVIA_FINISHED: String = 'TriviaFinished';
    static RETRY_LOGIN: String = 'RetryLogin';
    static GO_BACK: String = 'GoBack';

    static createObject(iframeMessage: IframeMessage) {

        const eventName = iframeMessage.eventName;

        switch (eventName) {
            case EventCreator.GO_TO_AUTO_PAYMENT: {
                return new AutoPaymentEvent(iframeMessage);
            }
            case EventCreator.GO_TO_PAYMENT: {
                return new PaymentEvent(iframeMessage);
            }
            case EventCreator.TRIVIA_FINISHED: {
                return new TriviaFinishedEvent(iframeMessage as IframeMessageTriviaFinishedEvent);
            }
            case EventCreator.RETRY_LOGIN: {
                return new RetryLoginEvent(iframeMessage as IframeMessageRetryLoginEvent);
            }
            case EventCreator.GO_BACK: {
                return new BackEvent(iframeMessage as IframeMessageBackEvent);
            }
            default: {
                return new GenericEvent(iframeMessage);
            }
        }
    }


}