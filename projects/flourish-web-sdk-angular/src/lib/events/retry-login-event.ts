import { IframeMessageRetryLoginEvent } from "./iframe-messages/iframe-message-retry-login-event";
import { RetryLoginEventData } from "./event-datas/retry-login-event-data";

export class RetryLoginEvent {

    name: String | undefined;
    data: RetryLoginEventData | undefined;

    constructor(iframeMessage: IframeMessageRetryLoginEvent) {
        this.data = new RetryLoginEventData(iframeMessage);
    }

}