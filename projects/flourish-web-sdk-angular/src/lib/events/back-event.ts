import { BackEventData } from "./event-datas/back-event-data";
import { IframeMessageBackEvent } from "./iframe-messages/iframe-message-back-event";

export class BackEvent {

    name: String | undefined;
    data: BackEventData | undefined;

    constructor(iframeMessage: IframeMessageBackEvent) {
        this.name = iframeMessage.eventName;
        this.data = new BackEventData(iframeMessage);
    }

}
