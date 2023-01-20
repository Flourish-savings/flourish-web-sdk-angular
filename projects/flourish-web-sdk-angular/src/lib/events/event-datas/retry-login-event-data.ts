import { IframeMessageRetryLoginEvent } from "../iframe-messages/iframe-message-retry-login-event";

export class RetryLoginEventData {

    code: String;

    constructor(iframeMessage: IframeMessageRetryLoginEvent) {
        this.code = iframeMessage.data.code;
    }

}
