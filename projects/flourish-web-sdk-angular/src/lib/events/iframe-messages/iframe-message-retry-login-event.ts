import { RetryLoginEventData } from "../event-datas/retry-login-event-data";
import { IframeMessage } from "./iframe-message";

export interface IframeMessageRetryLoginEvent extends IframeMessage {
    eventName: String
    data: RetryLoginEventData;
}
