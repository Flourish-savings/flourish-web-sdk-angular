import { IframeMessage } from "./iframe-messages/iframe-message";

export class PaymentEvent {

    name: String | undefined;
    data: Object | undefined;

    constructor(iframeMessage: IframeMessage) {
        this.name = iframeMessage.eventName;
        this.data = iframeMessage.data;
    }

}