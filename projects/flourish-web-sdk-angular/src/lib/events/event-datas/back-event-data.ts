import { IframeMessageBackEvent } from "../iframe-messages/iframe-message-back-event";

export class BackEventData {

    route: String;

    constructor(iframeMessage: IframeMessageBackEvent) {
        this.route = iframeMessage.data.route;
    }

}
